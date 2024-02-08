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

export type Props = {
  navigation: any;
};

const Home = (props: any) => {
  const { navigation } = props;

  return (
    <ImageBackground source={Images.background} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainContainer}>

          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
            </View>
          </View>
          {/* Main Content */}

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Home;
