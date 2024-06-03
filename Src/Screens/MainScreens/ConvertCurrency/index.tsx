import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import SelectTokenPopup from '../../../Components/SelectTokenPopup';
import {Asset} from '../../../Services/Redux/walletSlice';
import {convertToken, getTokenPriceInINR} from '../../../Services/Apis/apis';
import {CONVERTTOKENPARAMS} from '../../../utils/constants';
import Colors from '../../../Styles/Colors';
import {updateWalletAndAssets} from '../../../utils/actionHandlers';

export type Props = {
  navigation: any;
};

const ConvertCurrency = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {user, tokenId} = useSelector((state: RootState) => state.auth);
  const {assets} = useSelector((state: RootState) => state.wallet);
  const [openSelectToken, setOpenSelectToken] = useState(false);
  const [payToken, setPayToken] = useState<Asset>();
  const [getToken, setGetToken] = useState<Asset>();
  const [payAmount, setPayAmount] = useState('0');
  const [getAmount, setGetAmount] = useState('0');
  const [tokentype, setTokentype] = useState(0);
  const [tokenprice, setTokenPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const closeSocial = () => {
    setOpenSelectToken(false);
  };

  const onSelectPayToken = (tokenIndex: number) => {
    const token = assets[tokenIndex];

    if (token?.symbol?.toLowerCase() == getToken?.symbol?.toLowerCase()) {
      setGetToken(payToken);
    }
    setPayToken(token);
  };

  const onSelectGetToken = (tokenIndex: number) => {
    const token = assets[tokenIndex];
    if (token.symbol?.toLowerCase() == payToken?.symbol?.toLowerCase()) {
      setPayToken(getToken);
    }
    setGetToken(token);
  };

  async function calulateToken(token: String) {
    try {
      const coin = token?.toUpperCase();
      const price = await getTokenPriceInINR(coin);
      if (price && price?.data) {
        if (price?.data[coin]?.quote && price?.data[coin]?.quote['INR']) {
          const prc =
            price?.data[coin]?.quote && price?.data[coin]?.quote['INR'].price;
          setTokenPrice(prc);
        } else {
          setTokenPrice(0);
        }
      } else {
        setTokenPrice(0);
      }
    } catch (e) {
      console.log(e, 'Error in calulateToken()::ConvertCurreny.tsx screen');
      setTokenPrice(0);
    }
  }

  function payamounttype(val: any) {
    if (val && Number(val) > 0) {
      const getamt = Number(val) * Number(tokenprice);
      const famt =
        getamt.toString().indexOf('.') > -1 ? getamt.toFixed(2) : getamt;
      setGetAmount(famt?.toString());
    } else {
      setGetAmount('');
    }
    setPayAmount(val);
  }

  function getamounttype(val: any) {
    if (val && Number(val) > 0) {
      const getamt = Number(val) / Number(tokenprice);
      const famt =
        getamt.toString().indexOf('.') > -1 ? getamt.toFixed(3) : getamt;
      setPayAmount(famt?.toString());
    } else {
      setPayAmount('');
    }
    setGetAmount(val);
  }

  function swap() {
    try {
      if (!loading) {
        setLoading(true);
        if (
          payToken &&
          getToken &&
          user?.mobileNumber &&
          Number(payAmount) > 0 &&
          Number(getAmount)
        ) {
          const obj: CONVERTTOKENPARAMS = {
            mobile: user.mobileNumber,
            token: tokenId,
            sendToken: payToken?.symbol,
            recieveToken: getToken?.symbol,
            sendAmount: Number(payAmount),
            recieveAmount: Number(getAmount),
          };
          console.log(obj, 'swap data');
          convertToken(obj)
            .then(res => {
              if (res.status == 200) {
                console.log(res, 'Succcess:: swap');
                updateWalletAndAssets(user.mobileNumber, dispatch);
                setPayAmount('');
                setGetAmount('');
              } else {
                console.log(res, 'Failed:: swap');
              }
              Alert.alert(res.message);
              setLoading(false);
            })
            .catch(e => {
              console.log(e, 'Error in swap():: in ConverCurrency.tsx');
              setLoading(false);
            });
        }
      } else {
        Alert.alert('Please wait for previous response..');
      }
    } catch (e) {
      console.log(e, 'Error in catch in swap():: in ConverCurrency.tsx');
      setLoading(false);
    }
  }

  useEffect(() => {
    const inrtoken = assets.find(it => it.symbol == 'INR');
    const inrxtoken = assets.find(it => it.symbol == 'INRx');
    setPayToken(inrtoken);
    setGetToken(inrxtoken);
  }, []);

  useEffect(() => {
    if (payToken && getToken) {
      const paytoken = assets.find(it => it.symbol == payToken?.symbol);
      const gettoken = assets.find(it => it.symbol == getToken?.symbol);
      setPayToken(paytoken);
      setGetToken(gettoken);
    }
  }, [assets]);

  useEffect(() => {
    if (
      payToken?.symbol?.toLowerCase() != 'inr' &&
      payToken?.symbol?.toLowerCase() != 'inrx'
    ) {
      if (payToken?.symbol) {
        calulateToken(payToken?.symbol);
      }
    } else {
      setTokenPrice(1);
    }
  }, [payToken]);

  useEffect(() => {
    const amt = Number(payAmount) * tokenprice;
    const famt = amt.toString().indexOf('.') > -1 ? amt.toFixed(2) : amt;
    setGetAmount(famt.toString());
  }, [tokenprice]);

  useEffect(() => {
    if (payToken && getToken) {
      const isAllowed = ['INR', 'INRX'].some(
        it => it == getToken?.symbol?.toUpperCase(),
      );
      // console.log(isAllowed, getToken?.symbol, payToken?.symbol)
      if (!isAllowed) {
        let tt = getToken;
        setGetToken(payToken);
        setPayToken(tt);
      }
    }
  }, [payToken, getToken]);

  // function hp(arg0: number): import("react-native").DimensionValue | undefined {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>
        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity style={Styles.leftWrapper}>
              <Image source={Images.user} style={Styles.userIcon} />
              <Text style={Styles.userTitle}>
                {user.name ? user.name : `David`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={Images.back} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>
            {/* YOU PAY */}
            <Text style={Styles.listhead}>
              Balance : {payToken?.available?.toFixed(2)}
              {` `}
              {payToken?.symbol}
            </Text>
            <View style={Styles.listContainer}>
              <View style={Styles.listInner}>
                <View>
                  <Text style={Styles.listDescription}>{'YOU PAY'}</Text>
                  {/* <Text style={Styles.listTitle}>{'2500'}</Text> */}
                  <TextInput
                    style={Styles.input}
                    value={payAmount}
                    onChangeText={val => payamounttype(val)}
                    keyboardType="decimal-pad"
                  />
                </View>
                <TouchableOpacity
                  style={Styles.listIconWrap}
                  onPress={() => {
                    setOpenSelectToken(true);
                    setTokentype(0);
                  }}>
                  <View style={Styles.leftWrap}>
                    <View style={Styles.iconWrap}>
                      <Image
                        source={Images.inrLogo}
                        style={Styles.currencyIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={Styles.currencyTitle}>{payToken?.symbol}</Text>
                  </View>
                  <Image source={Images.arrowDown} style={Styles.arrowIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* YOU GET */}
            <View style={Styles.getRow}>
              <Text style={Styles.listhead}>
                Balance : {getToken?.available?.toFixed(2)}
                {` `}
                {getToken?.symbol}
              </Text>
              <View style={Styles.getContainer}>
                <View style={Styles.listInner}>
                  <View>
                    <Text style={Styles.listDescription}>{'YOU GET'}</Text>
                    <TextInput
                      style={Styles.input}
                      value={getAmount}
                      onChangeText={val => getamounttype(val)}
                      keyboardType="decimal-pad"
                    />
                  </View>
                  <TouchableOpacity
                    style={Styles.listIconWrap}
                    onPress={() => {
                      setOpenSelectToken(true);
                      setTokentype(1);
                    }}>
                    <View style={Styles.leftWrap}>
                      <View style={Styles.iconWrap}>
                        <Image
                          source={
                            getToken?.symbol == 'INRx'
                              ? Images.inrxLogo
                              : {uri: getToken?.icon}
                          }
                          style={Styles.currencyIcon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={Styles.currencyTitle}>
                        {getToken?.symbol}
                      </Text>
                    </View>
                    <Image source={Images.arrowDown} style={Styles.arrowIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Text style={Styles.currencyRate}>
              1 {payToken?.symbol} = {tokenprice.toFixed(2)}
              {` `}
              {getToken?.symbol}
            </Text>

            <TouchableOpacity style={Styles.sendButton} onPress={() => swap()}>
              <ActivityIndicator
                color={loading ? '#000' : Colors.Green}
                size={22}
              />
              <Text style={Styles.sendTitle}>{`Convert`}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {openSelectToken == true ? (
        <SelectTokenPopup
          open={openSelectToken}
          close={closeSocial}
          assets={assets}
          type={tokentype}
          onSelect={(index: number) => {
            if (tokentype == 0) {
              onSelectPayToken(index);
            } else {
              onSelectGetToken(index);
            }
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ConvertCurrency;
