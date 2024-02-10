import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import BottomBar from "../../../Navigation/BottomBar";


export type Props = {
  navigation: any;
};

const Stats = (props: any) => {
  const { navigation } = props;

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
            <TouchableOpacity>
              <Image source={Images.notification} style={Styles.notifyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}


      </View>
      <BottomBar profileTab={false} page={1} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Stats;
