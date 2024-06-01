import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import BottomBar from "../../../Navigation/BottomBar";
import { CandlestickChart } from 'react-native-wagmi-charts';
import stockData from './stockData.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Services/Redux/store';

export type Props = {
  navigation: any;
};

const widthScreen = Dimensions.get('window').width;


const Stats = (props: any) => {
  const { navigation } = props;
  const [tab, setTab] = useState(1)
  const { user } = useSelector((state:RootState)=>state.auth);
  const DATA = [
    {
      name: "24hours"
    },
    {
      name: "Weekly"
    },
    {
      name: "Monthly"
    },
    {
      name: "Yearly"
    }
  ]

  const MONTH_DATA = [
    {
      name: "Now - Dec"
    },
    {
      name: "Dec - Jan"
    },
    {
      name: "Jan - Feb"
    },
    {
      name: "Feb - Mar"
    },
    {
      name: "Mar - Apr"
    },
    {
      name: "Apr - May"
    },
  ]

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}
              style={Styles.leftWrapper}>
              <Image source={Images.user} style={Styles.userIcon} />
              <Text style={Styles.userTitle}>{user.name?user.name:`David`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Notification") }}>
              <Image source={Images.notification} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}

        <View style={Styles.mainDataContainer}>
          <View style={Styles.mainHeadContent}>

            {/* Left Data */}
            <View style={Styles.balanceHeader}>
              <Text style={Styles.todayTitle}>{`12 oct recevied`}</Text>
              <Text style={Styles.visitorTitle}>
                <Text style={Styles.visitorTitle}>{`14,545`}</Text>
                <Text style={Styles.visitTitle}>{`k`}</Text>
              </Text>
            </View>
            {/* Tabs */}
            <View style={Styles.tabWrapContainer}>
              <View style={Styles.tabsWrap}>
                <TouchableOpacity onPress={() => { setTab(1) }}
                  style={[Styles.tabButton, {
                    backgroundColor: tab == 1 ? Colors.TabColor : "transparent"
                  }]}>
                  <Text style={[Styles.monthText, { color: tab == 1 ? Colors.White : Colors.Preto }]}>{'Daily'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTab(2) }}
                  style={[Styles.tabButton, {
                    backgroundColor: tab == 2 ? Colors.TabColor : "transparent"
                  }]}>
                  <Text style={[Styles.monthText, { color: tab == 2 ? Colors.White : Colors.Preto }]}>{'Weekly'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* BarChart */}
          <View style={Styles.container}>
            <CandlestickChart.Provider data={stockData}>
              <CandlestickChart width={widthScreen / 1.14} height={141}>
                <CandlestickChart.Candles />
              </CandlestickChart>
            </CandlestickChart.Provider>
          </View>
          <View style={Styles.labelContainer}>
            <Text style={Styles.timeTitle}>{`12am`}</Text>
            <Text style={Styles.timeTitle}>{`2pm`}</Text>
            <Text style={Styles.timeTitle}>{`4pm`}</Text>
            <Text style={Styles.timeTitle}>{`6pm`}</Text>
          </View>

          {/* Calender Month */}
          <View style={Styles.calenderContainer}>
            <FlatList
              data={MONTH_DATA}
              keyExtractor={(item: any, index: any) => index.toString()}
              // style={Styles.mainFlat}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }: any) => (
                <TouchableOpacity key={index} style={Styles.calenderWrapFlat}>
                  <Text style={Styles.calenderText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Center Graph Data */}
          <View style={Styles.graphContainer}>
            <Image source={Images.graphCircle} style={Styles.graphIcon} />
            <View style={Styles.graphDataWrap}>
              <View style={Styles.graphInnerData}>
                <Text style={Styles.graphTitle}>{`income`}</Text>
                <Text style={Styles.graphTitle}>{`%64.6`}</Text>
              </View>
              <View style={Styles.graphLine} />
              <View style={Styles.graphInnerData}>
                <Text style={Styles.graphTitle}>{`spent`}</Text>
                <Text style={Styles.graphTitle}>{`%35.4`}</Text>
              </View>
            </View>
          </View>

          {/* Tabs Filter */}
          <View style={Styles.dateContainer}>
            <FlatList
              data={DATA}
              keyExtractor={(item: any, index: any) => index.toString()}
              // style={Styles.mainFlat}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }: any) => (
                <TouchableOpacity key={index} style={Styles.intrestFlat}>
                  <Text style={Styles.TextFlatView}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

        </View>


      </View>
      <BottomBar profileTab={true} page={1} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Stats;
