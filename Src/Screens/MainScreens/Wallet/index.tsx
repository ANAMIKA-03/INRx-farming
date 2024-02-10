import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  FlatList
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const Wallet = (props: any) => {
  const { navigation } = props;


  const WALLET_DATA = [
    {
      icon: Images.inrxLogo,
      title: `INRx`,
      description: `Inrx`,
      amount: `₹4,120.54`,
      amountRate: `0024.54inrx`
    },
    {
      icon: Images.inrLogo,
      title: `INR`,
      description: `Inr`,
      amount: `₹64,520.54`,
      amountRate: `4524.54inr`
    },
    {
      icon: Images.usdtLogo,
      title: `USDT`,
      description: `Usdt`,
      amount: `₹55,520.54`,
      amountRate: `4625.84usdt`
    },
    {
      icon: Images.usdcLogo,
      title: `USDC`,
      description: `Usdc`,
      amount: `₹4,520.54`,
      amountRate: `45.84usdc`
    }
  ]

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity style={Styles.leftWrapper}>
              <Image source={Images.user} style={Styles.userIcon} />
              <Text style={Styles.userTitle}>{`David`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image source={Images.chevronUp} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}

        <View style={Styles.mainDataContainer}>

          <View style={Styles.walletWrapper}>
            <Image source={Images.currencyLogo} style={Styles.currencyIcon} />
            <Text style={Styles.inrTitle}>{`14,545.44`}</Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Text style={Styles.solutionText}>{`+`}</Text>
            <Image source={Images.currencyLogo} style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`5243.54`}</Text>
          </View>

          <View style={Styles.mainHeadContent}>
            <TouchableOpacity>
              <Image source={Images.send} style={Styles.sendIcon} />
              <Text style={Styles.sendText}>{`Send`}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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


                {
                  WALLET_DATA?.map((item, keyID) => {
                    return (
                      <View key={keyID} style={Styles.listContainer}>
                        <View style={Styles.completeWrap}>
                          <Image source={item?.icon} style={Styles.listIcon} />
                          <View style={Styles.seperateWrap}>
                            <Text style={Styles.listTitle}>{item?.title}</Text>
                            <Text style={Styles.listDescription}>{item?.description}</Text>
                          </View>
                        </View>

                        <View>
                          <Text style={Styles.listTitle}>{item?.amount}</Text>
                          <Text style={Styles.listDescription}>{item?.amountRate}</Text>
                        </View>
                      </View>
                    )
                  })
                }

              </View>
            </ScrollView>

          </View>
        </View>


      </View>
    </SafeAreaView>
  );
}

export default Wallet;
