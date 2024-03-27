import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
  Keyboard,
  ScrollView,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import {Asset, Wallet} from '../../../Services/Redux/walletSlice';
import {
  balanceUpdate,
  transferTokenAction,
  updateWalletAndAssets,
} from '../../../utils/actionHandlers';
import {TRANSFERTOKEN} from '../../../utils/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type Props = {
  navigation: any;
};

const Send = (props: any) => {
  const {navigation} = props;
  const {wallets, assets} = useSelector((state: RootState) => state.wallet);
  const {user, tokenId} = useSelector((state: RootState) => state.auth);
  const [recieverAddress, setRecieverAddress] = useState('');
  const [walletAmount, setWalletAmount] = useState('');
  const [chain, setChain] = useState('Ethereum');
  const [walletdata, setwalletdata] = useState<Wallet>();
  const [transferToken, setTransfertoken] = useState('INRx');
  const [currencyDropdown, setcurrencyDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeasset, setActiveAsset] = useState<Asset>();
  const dispatch = useDispatch();
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);

  useEffect(() => {
    const wallet = wallets.find(it => it.blockchain == chain);
    if (wallet) {
      setwalletdata(wallet);
    }
  }, [chain, wallets]);

  function handleTokenchange(token: string) {
    setTransfertoken(token);
    setcurrencyDropdown(!currencyDropdown);
  }

  function send() {
    if (!loading) {
      const data: TRANSFERTOKEN = {
        mobile: user.mobileNumber,
        amount: Number(walletAmount),
        reciever: recieverAddress,
        blockchain: chain,
        coin: transferToken,
        tokenId: tokenId,
        userId: user.userId,
      };
      setLoading(true);
      // console.log(data, ' all txnsdata');
      transferTokenAction(data, (response: any) => {
        setLoading(false);
        if (response) {
          Alert.alert(response.message);
          if (response.status == 200) {
            // balanceUpdate(user.mobileNumber, () => {
            updateWalletAndAssets(user.mobileNumber, dispatch);
            // });
          }
        }
      });
    }
  }

  useEffect(() => {
    const asst = assets.find(it => it.symbol == transferToken);
    if (asst) {
      setActiveAsset(asst);
    }
  }, [assets, transferToken]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardIsShown(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardIsShown(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>
        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={Images.back} style={Styles.userIcon} />
            </TouchableOpacity>
            <Text style={Styles.userTitle}>{`Send`}</Text>
            <View style={Styles.empty} />
          </View>

          <View style={Styles.walletWrapper}>
            <Image source={Images.currencyLogo} style={Styles.currencyIcon} />
            <Text style={Styles.inrTitle}>{`14,545.44`}</Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Text style={Styles.solutionText}>{`+`}</Text>
            <Image source={Images.currencyLogo} style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`5243.54`}</Text>
          </View>
        </View>
        {/* Main Content */}
        <ScrollView
          contentContainerStyle={{flexGrow: keyboardIsShown ? 0 : 1}}
          keyboardShouldPersistTaps="handled"
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={Styles.mainDataContainer}>
            <View style={Styles.bottomWrapper}>
              <View style={Styles.headerWrap}>
                <View style={Styles.inputContainer}>
                  <Text style={Styles.primary}>{'Select Chain'}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      paddingTop: 12,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        key={'ethereum'}
                        style={{
                          borderWidth: 1,
                          borderColor: '#000',
                          borderRadius: 12,
                          padding: 8,
                          margin: 4,
                          backgroundColor:
                            chain == 'Ethereum' ? '#000' : '#fff',
                          height: 20,
                          width: 20,
                        }}
                        onPress={() => setChain('Ethereum')}></TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000',
                        }}>{`Ethereum`}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        key={'ethereum'}
                        style={{
                          borderWidth: 1,
                          borderColor: '#000',
                          borderRadius: 12,
                          padding: 8,
                          margin: 4,
                          backgroundColor: chain == 'Tron' ? '#000' : '#fff',
                          height: 20,
                          width: 20,
                        }}
                        onPress={() => setChain('Tron')}></TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000',
                        }}>{`Tron Scan`}</Text>
                    </View>
                  </View>
                </View>

                <View style={Styles.inputContainer}>
                  <Text style={Styles.primary}>{'Wallet Address'}</Text>
                  <View style={Styles.wrapper}>
                    <TextInput
                      style={Styles.textInput}
                      value={
                        walletdata?.address
                          ? walletdata?.address?.slice(0, 10) +
                            '...' +
                            walletdata?.address?.slice(27)
                          : '0x0000000..0x00000'
                      }
                      placeholder="1hjh22jjh56584jhhgb"
                      placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                      // onChangeText={value => {
                      //   setWalletAddress(value);
                      // }}
                      editable={false}
                    />
                  </View>
                </View>

                <View style={Styles.inputContainer}>
                  <Text style={Styles.primary}>{'Reciever Address'}</Text>
                  <View style={Styles.wrapper}>
                    <TextInput
                      style={Styles.textInput}
                      value={recieverAddress}
                      placeholder="0xzxmc53nvdk3dfj8f7fhfui9d44"
                      placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                      onChangeText={value => {
                        setRecieverAddress(value);
                      }}
                    />
                  </View>
                </View>

                <View style={Styles.inputContainer}>
                  <Text style={Styles.primary}>{'Transfer Amount'}</Text>
                  <View style={Styles.inputWrapper}>
                    <View style={Styles.amountInputWrapper}>
                      <TextInput
                        style={Styles.textInput}
                        value={walletAmount}
                        placeholder="0.085"
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        onChangeText={value => {
                          setWalletAmount(value);
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      style={Styles.dropDownWrapper}
                      onPress={() => setcurrencyDropdown(!currencyDropdown)}>
                      <View style={Styles.completeWrap}>
                        <Image
                          source={
                            transferToken == 'INRx'
                              ? Images.convertInrx
                              : {uri: activeasset?.icon}
                          }
                          style={Styles.listIcon}
                        />
                        <Text style={Styles.listTitle}>{transferToken}</Text>
                      </View>
                      <Ionic
                        name={'chevron-down'}
                        size={14}
                        style={Styles.dotIcon}
                      />
                    </TouchableOpacity>
                    {currencyDropdown ? (
                      <View style={Styles.dropdowncard}>
                        <TouchableOpacity
                          style={[
                            {
                              backgroundColor:
                                transferToken == 'INRx' ? 'white' : Colors.Grey,
                            },
                            Styles.dropdownlabel,
                          ]}
                          onPress={() => handleTokenchange('INRx')}>
                          <Text style={{color: '#000'}}>INRx</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            {
                              backgroundColor:
                                transferToken == 'INR' ? 'white' : Colors.Grey,
                            },
                            Styles.dropdownlabel,
                          ]}
                          onPress={() => handleTokenchange('INR')}>
                          <Text style={{color: '#000'}}>INR</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      false
                    )}
                  </View>
                  <Text style={{color: '#000'}}>
                    {' '}
                    Balance : {Number(activeasset?.available)>0?Number(activeasset?.available).toFixed(3):0}
                    {` `}
                    {activeasset?.symbol}
                  </Text>
                </View>
              </View>

              <View style={Styles.downBottomWrap}>
                <TouchableOpacity
                  style={Styles.sendButton}
                  onPress={() => send()}>
                  {loading ? (
                    <ActivityIndicator color={'#000'} size={19} />
                  ) : null}
                  <Text style={Styles.sendTitle}>{`Send`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Send;
