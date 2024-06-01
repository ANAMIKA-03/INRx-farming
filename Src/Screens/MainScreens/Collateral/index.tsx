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

const lineData = [{ value: 85 }, { value: 50 }, { value: 60 }, { value: 40 }, { value: 80 }, { value: 60 }, { value: 54 }, { value: 85 }];

const Collateral = (props: any) => {
  const { navigation } = props;

 
  const [activeLabel, setActiveLabel] = useState('1h');

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


  const handlePress = (label: React.SetStateAction<string>) => {
    setActiveLabel(label);
  };

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
              curved
              isAnimated
              animationDuration={1200}
              startFillColor="#11A249"
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
              verticalLinesColor="rgba(17, 162, 73, 0.28)"
              xAxisColor="transparent"
              color="#11A249"
            />
          </View>
          {/* <View style={Styles.labelContainer}>
            <Text style={Styles.timeTitle}>{`1h`}</Text>
            <Text style={Styles.timeTitle1}>{`1w`}</Text>
            <Text style={Styles.timeTitle2}>{`1m`}</Text>
            <Text style={Styles.timeTitle3}>{`1y`}</Text>
          </View> */}
           <View style={Styles.labelContainer}>
        {['1h', '1w', '1m', '1y'].map((label, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(label)}>
            <Text style={activeLabel === label ? Styles.activeTimeTitle : Styles.timeTitle}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
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
