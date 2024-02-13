import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  FlatList
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';
import BottomBar from "../../../Navigation/BottomBar";

export type Props = {
  navigation: any;
};

const Home = (props: any) => {
  const { navigation } = props;

  const [tab, setTab] = useState(1)

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

  return (
    <ImageBackground source={Images.background} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'dark-content'} />
        <View style={Styles.mainContainer}>

          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}
                style={Styles.leftWrapper}>
                <Image source={Images.user} style={Styles.userIcon} />
                <Text style={Styles.userTitle}>{`David`}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate("Notification") }}>
                <Image source={Images.notification} style={Styles.notifyIcon} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Main Content */}

          <View style={Styles.mainDataContainer}>

            <View style={Styles.mainHeadContent}>
              {/* Balance Content */}
              <View style={Styles.balanceContainer}>
                <View style={Styles.balanceWrapper}>
                  <View style={Styles.balanceHeader}>
                    <Text style={Styles.balanceTitle}>{`Balance`}</Text>
                    <Text style={Styles.balanceCount}>{`14,545`}</Text>
                  </View>
                  <View style={Styles.balanceBottom}>
                    <Text style={Styles.balanceTitle}>{`Daily Growth`}</Text>
                    <Text style={Styles.balanceCount}>{`%4.6`}</Text>

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
                </View>
              </View>
              {/* Balance Content Ends */}

              <View style={Styles.rightBalanceWrap}>
                <View style={Styles.balanceWrapper}>
                  {/* Icons Data */}
                  <View style={Styles.rightBalanceHeader}>
                    <View style={Styles.iconsContainer}>
                      <TouchableOpacity onPress={() => { navigation.navigate("FarmingRewards") }}>
                        <Image source={Images.tag} style={Styles.iconStyle} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={Images.statsCircle} style={Styles.iconStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.iconsContainer}>
                      <TouchableOpacity onPress={() => { navigation.navigate("ConvertCurrency") }}>
                        <Image source={Images.curreny} style={Styles.iconStyle} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { navigation.navigate("Wallet") }}>
                        <Image source={Images.wallet} style={Styles.iconStyle} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Icons Data End */}
                  <View style={Styles.rightBalanceBottom}>
                    <Text style={Styles.todayTitle}>{`Today`}</Text>
                    <Text style={Styles.visitorTitle}>
                      <Text style={Styles.visitorTitle}>{`4,65`}</Text>
                      <Text style={Styles.visitTitle}>{`k`}</Text>
                    </Text>
                  </View>

                </View>
              </View>

            </View>
            {/* Center Graph Data */}

            <View style={Styles.graphContainer}>

              <Image source={Images.graphCircle} style={Styles.graphIcon} />

              <View style={Styles.graphDataWrap}>
                <View style={Styles.graphInnerData}>
                  <Text style={Styles.graphTitle}>{`earned`}</Text>
                  <Text style={Styles.graphTitle}>{`%52.3`}</Text>
                </View>
                <View style={Styles.graphLine} />
                <View style={Styles.graphInnerData}>
                  <Text style={Styles.graphTitle}>{`spent`}</Text>
                  <Text style={Styles.graphTitle}>{`%47.7`}</Text>
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
                  <View key={index} style={Styles.intrestFlat}>
                    <Text style={Styles.TextFlatView}>{item.name}</Text>
                  </View>
                )}
              />
            </View>

          </View>


        </View>
        <BottomBar profileTab={false} page={1} navigation={navigation} />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Home;
