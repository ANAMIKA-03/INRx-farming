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

const Received = (props: any) => {
  const { navigation } = props;

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
            <Text style={Styles.userTitle}>{`Received`}</Text>
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

        <View style={Styles.mainDataContainer}>

          <View style={Styles.bottomWrapper}>

          <View style={Styles.line}/>

            <Text style={Styles.qrText}>{`QR code`}</Text>
            <Image source={Images.qr} style={Styles.qrIcon} />

            <Text style={Styles.hashTitle}>{`1hjh22jjh56584jhhgb`}</Text>

            <View style={Styles.bottomButton}>
              <TouchableOpacity>
                <Image source={Images.copyIcon} style={Styles.sendIcon} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={Images.shareIcon} style={Styles.sendIcon} />
              </TouchableOpacity>
            </View>

          </View>
        </View>


      </View>
    </SafeAreaView>
  );
}

export default Received;
