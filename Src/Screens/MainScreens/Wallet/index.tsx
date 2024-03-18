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
  FlatList,
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';
import {RootState} from '../../../Services/Redux/store';
import {useSelector} from 'react-redux';
import {Asset} from '../../../Services/Redux/walletSlice';

export type Props = {
  navigation: any;
};

const Wallet = (props: any) => {
  const {navigation} = props;
  const {wallets, activeWallet, assets} = useSelector(
    (state: RootState) => state.wallet,
  );
  const {user} = useSelector((state: RootState) => state.auth);
  const wallet = wallets[activeWallet ? activeWallet : 0];
  const [coins, setCoins] = useState<Asset[]>([]);

  const WALLET_DATA = [
    {
      icon: Images.inrxLogo,
      title: `INRx`,
      description: `Inrx`,
      amount: `₹4,120.54`,
      amountRate: `0024.54inrx`,
    },
    {
      icon: Images.inrLogo,
      title: `INR`,
      description: `Inr`,
      amount: `₹64,520.54`,
      amountRate: `4524.54inr`,
    },
    {
      icon: Images.usdtLogo,
      title: `USDT`,
      description: `Usdt`,
      amount: `₹55,520.54`,
      amountRate: `4625.84usdt`,
    },
    {
      icon: Images.usdcLogo,
      title: `USDC`,
      description: `Usdc`,
      amount: `₹4,520.54`,
      amountRate: `45.84usdc`,
    },
  ];  

  useEffect(() => {
    if (assets?.length > 0) {
      setCoins(assets);
    }
  }, [assets]);

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>
        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity style={Styles.leftWrapper}>
              <Image source={Images.user} style={Styles.userIcon} />
              <Text style={Styles.userTitle}>{`${user.name}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={Images.chevronUp} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}

        <View style={Styles.mainDataContainer}>
          <View style={Styles.walletWrapper}>
            <Image source={Images.currencyLogo} style={Styles.currencyIcon} />
            <Text style={Styles.inrTitle}>
              {wallet?.totalinr ? wallet?.totalinr : `0.000`}
            </Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Text style={Styles.solutionText}>{`+`}</Text>
            <Image source={Images.currencyLogo} style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`0000.00`}</Text>
          </View>

          <View style={Styles.mainHeadContent}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Send');
              }}>
              <Image source={Images.send} style={Styles.sendIcon} />
              <Text style={Styles.sendText}>{`Send`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Received');
              }}>
              <Image source={Images.receive} style={Styles.sendIcon} />
              <Text style={Styles.sendText}>{`Receive`}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.buy} style={Styles.sendIcon} />
              <Text style={Styles.sendText}>{`Buy`}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Data */}
        <View style={Styles.bottomContainer}>
          <View style={Styles.bottomWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContainer}>
                {coins?.map((item, keyID) => {
                  return (
                    <View
                      key={keyID + 'wallet_assets'}
                      style={Styles.listContainer}>
                      <View style={Styles.completeWrap}>
                        <Image
                          source={
                            item?.symbol == 'INRx'
                              ? Images.inrxLogo
                              : {uri: item?.icon}
                          }
                          style={Styles.listIcon}
                          resizeMode="contain"
                        />
                        <View style={Styles.seperateWrap}>
                          <Text style={Styles.listTitle}>{item?.symbol}</Text>
                          <Text style={Styles.listDescription}>
                            {item?.symbol}
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Text style={Styles.listTitle}>{`₹${'000.00'}`}</Text>
                        <Text style={Styles.listDescription}>
                          {item?.available > 0 ? item?.available : '000.00'}{' '}
                          {` ${item?.symbol}`}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
