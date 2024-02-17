import React, { useState } from 'react';
import {
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
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const Supply = (props: any) => {
  const { navigation } = props;

  const DATA = [
    {
      id: '1',
      icon: Images.document,
      name: "White Paper",
    },
    {
      id: '2',
      icon: Images.document,
      name: "Roc",
    },
    {
      id: '3',
      icon: Images.document,
      name: "Smart Contract Audit",
    },
    {
      id: '4',
      icon: Images.document,
      name: "GstIN",
    },
    {
      id: '5',
      icon: Images.document,
      name: "Pan",
    },

    {
      id: '6',
      icon: Images.document,
      name: "Minting Report",
    },
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.dataContainer}>
              <View style={Styles.aboutWrapper}>
                <Image source={Images.logo} style={Styles.aboutLogo} />
              </View>
              <View style={Styles.amountWrapper}>
                <Text style={Styles.solutionText}>{`Supply`}</Text>
              </View>
              <Text style={Styles.versionTitle}>{`47,528,00`}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContainer}>
              </View>
            </ScrollView>

            <View style={Styles.bagContainer}>
              <View style={Styles.aboutWrapper}>
                <Image source={Images.collateralPic} style={Styles.collateralLogo} />
              </View>
              <View style={Styles.amountWrapper}>
                <Text style={Styles.solutionText}>{`Collateral`}</Text>
              </View>
              <Text style={Styles.versionTitle}>{`10,000,00 INR`}</Text>
            </View>


          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

export default Supply;
