import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import {Asset} from '../../../Services/Redux/walletSlice';
import {getTokenPriceInINR, stakeINRXToken} from '../../../Services/Apis/apis';
import {STAKETOKEN} from '../../../utils/constants';
import { stakeHistory, updateWalletAndAssets } from '../../../utils/actionHandlers';
const PLAN: any = {
  INR: {
    duration: 24 * 30 * 24 * 60 * 60,
    apy: 70,
  },
  USDT: {
    duration: 12 * 30 * 24 * 60 * 60,
    apy: 60,
  },
  USDC: {
    duration: 12 * 30 * 24 * 60 * 60,
    apy: 55,
  },
};

const StakeForm = (props: any) => {
  const {symbol, icon} = props.route.params;
  const {navigation} = props;
  const dispatch = useDispatch();
  const {user, tokenId} = useSelector((state: RootState) => state.auth);
  const {assets} = useSelector((state: RootState) => state.wallet);
  const [stakeToken, setstakeToken] = useState<Asset>();
  const [getToken, setGetToken] = useState<Asset>();
  const [stakeAmount, setstakeAmount] = useState('');
  const [inrxAmount, setinrxAmount] = useState('');
  const [tokenprice, setTokenPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  async function calulateToken(token: String) {
    try {
      if (token != 'INR') {
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
      } else {
        setTokenPrice(1);
      }
    } catch (e) {
      console.log(e, 'Error in calulateToken()::ConvertCurreny.tsx screen');
      setTokenPrice(0);
    }
  }

  function stakeamounttype(val: any) {
    if (val && Number(val) > 0) {
      const getamt = Number(val) * Number(tokenprice);
      const famt =
        getamt.toString().indexOf('.') > -1 ? getamt.toFixed(2) : getamt;
      setinrxAmount(famt?.toString());
    } else {
      setinrxAmount('');
    }
    setstakeAmount(val);
  }

  function inrxamounttype(val: any) {
    if (val && Number(val) > 0) {
      const getamt = Number(val) / Number(tokenprice);
      const famt =
        getamt.toString().indexOf('.') > -1 ? getamt.toFixed(3) : getamt;
      setstakeAmount(famt?.toString());
    } else {
      setstakeAmount('');
    }
    setinrxAmount(val);
  }

  function stake() {
    const data: STAKETOKEN = {
      mobile: user.mobileNumber,
      symbol: symbol,
      amount: stakeAmount,
      tokenId:tokenId
    };
    setLoading(true);
    stakeINRXToken(data)
      .then(res => {
        if (res.status == 200) {
          setstakeAmount('');
          setinrxAmount('');
          updateWalletAndAssets(user.mobileNumber, dispatch);
          setTimeout(() => {
            stakeHistory(user, dispatch, tokenId,()=>{});            
          }, 1500);
        }
        setLoading(false);
        Alert.alert(res?.message);
      })
      .catch(e => {
        console.log(e, 'Error in stake():StakeFarm.tsx');
      });
  }

  useEffect(() => {
    const staketoken = assets.find(it => it.symbol == symbol.toUpperCase());
    const gettoken = assets.find(it => it.symbol == 'INRx');
    setstakeToken(staketoken);
    setGetToken(gettoken);
  }, [assets]);

  useEffect(() => {
    if(stakeAmount && tokenprice){
    const amt = Number(stakeAmount) * tokenprice;
    const famt = amt.toString().indexOf('.') > -1 ? amt.toFixed(2) : amt;
    setinrxAmount(famt.toString());
    }
  }, [tokenprice]);

  useEffect(() => {
    calulateToken(symbol);
  }, [symbol]);

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
              <Image source={Images.chevronRight} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>
            {/* YOU PAY */}
            <Text style={Styles.listhead}>
              Balance : {stakeToken?.available?.toFixed(2)}
              {` `}
              {stakeToken?.symbol}
            </Text>
            <View style={Styles.listContainer}>
              <View style={Styles.listInner}>
                <View>
                  <Text style={Styles.listDescription}>
                    {symbol + ' Amount'}
                  </Text>
                  <TextInput
                    style={Styles.input}
                    value={stakeAmount}
                    onChangeText={val => stakeamounttype(val)}
                    keyboardType="decimal-pad"
                    placeholder="0"
                  />
                </View>
                {/* <TouchableOpacity style={Styles.listIconWrap}> */}
                <View style={Styles.leftWrap}>
                  <View style={Styles.iconWrap}>
                    <Image
                      source={{uri: stakeToken?.icon}}
                      style={Styles.currencyIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={Styles.currencyTitle}>{stakeToken?.symbol}</Text>
                </View>
                {/* </TouchableOpacity> */}
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
                    <Text style={Styles.listDescription}>{`Stake Amount`}</Text>
                    <TextInput
                      style={Styles.input}
                      value={inrxAmount}
                      placeholder="0"                      
                      onChangeText={val => inrxamounttype(val)}
                      keyboardType="decimal-pad"
                    />
                  </View>
                  {/* <TouchableOpacity
                    style={Styles.listIconWrap}
                    > */}
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
                    <Text style={Styles.currencyTitle}>{getToken?.symbol}</Text>
                  </View>
                  {/* </TouchableOpacity> */}
                </View>
              </View>
            </View>

            <Text style={Styles.currencyRate}>
              Price : 1 {stakeToken?.symbol} = {tokenprice.toFixed(2)}
              {` `}
              {getToken?.symbol}
            </Text>
            <Text style={Styles.currencyRate}>
              APY (%) : {PLAN[symbol.toUpperCase()].apy}
            </Text>

            <TouchableOpacity style={Styles.sendButton} onPress={() => stake()}>
              <ActivityIndicator
                color={loading ? '#000' : Colors.Green}
                size={22}
              />
              <Text style={Styles.sendTitle}>{`Stake INRx`}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StakeForm;
