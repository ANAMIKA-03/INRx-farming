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
import Ionic from 'react-native-vector-icons/Ionicons';
import { LineChart } from "react-native-gifted-charts"

export type Props = {
  navigation: any;
};

const lineData = [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }];

const Collateral = (props: any) => {
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
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image source={Images.back} style={Styles.userIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}

        <View style={Styles.mainDataContainer}>

          <View style={Styles.aboutWrapper}>
            <Image source={Images.logo} style={Styles.aboutLogo} />
          </View>
          <View style={Styles.walletWrapper}>
            <Text style={Styles.inrTitle}>
              <Text style={Styles.currencyText}>{`₹`}</Text>
              <Text style={Styles.inrTitle}>{`10,000.`}</Text>
              <Text style={Styles.amountInr}>{`00`}</Text>
            </Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Ionic
              name={"triangle"}
              size={30}
              style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`+2.5%(24H)`}</Text>
          </View>

          {/* Graph */}
          <View style={Styles.mainHeadContent}>
            <LineChart
              areaChart
              hideDataPoints
              isAnimated
              animationDuration={1200}
              startFillColor="#0BA5A4"
              startOpacity={1}
              endOpacity={0.3}
              initialSpacing={0}
              height={150}
              data={lineData}
              spacing={50}
              thickness={5}
              hideRules
              hideYAxisText
              yAxisColor="transparent"
              showVerticalLines={false}
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="#0BA5A4"
              color="#0BA5A4"
            />
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
                      <View key={keyID} style={Styles.listMain}>
                        <View style={Styles.listContainer}>
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

export default Collateral;
