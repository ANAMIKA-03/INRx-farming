import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import { useFocusEffect } from '@react-navigation/native';


const widthScreen = Dimensions.get('window').width;


const BottomBar = (props: any) => {
  const { profileTab, page } = props
  const [currentValue, setCurrentValue] = useState()


  useFocusEffect(
    React.useCallback(() => {
      // setTab(1)
      setCurrentValue(page)
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])
  );

  const updateValue = (value: any) => {
    if (value == 1) {
      setCurrentValue(value)
      props.navigation.navigate('History')
    }
    else if (value == 2) {
      setCurrentValue(value)
      props.navigation.navigate('Home')
    }
    else {
      setCurrentValue(value)
      props.navigation.navigate('Stats')
    }
  }

  return (
    profileTab == true ?
      <View style={Styles.innerWrapper}>
        <ImageBackground source={Images.bottomLeft} style={Styles.backgroundWrapper}>
          <TouchableOpacity onPress={() => updateValue(1)}>
            <Image source={Images.transaction} style={Styles.transactionIcon} />
          </TouchableOpacity>
        </ImageBackground>

        <TouchableOpacity onPress={() => updateValue(2)}>
          <Image source={Images.menu} style={Styles.menuIcon} />
        </TouchableOpacity>

        <ImageBackground source={Images.bottomRight} style={Styles.backgroundWrapperRight}>
          <TouchableOpacity onPress={() => updateValue(3)}>
            <Image source={Images.stats} style={Styles.barIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      :
      <View style={Styles.innerWrapper}>
        <ImageBackground source={Images.bottomLeft} style={Styles.backgroundWrapper}>
          <TouchableOpacity onPress={() => updateValue(1)}>
            <Image source={Images.transaction} style={Styles.transactionIcon} />
          </TouchableOpacity>
        </ImageBackground>

        <TouchableOpacity onPress={() => updateValue(2)}>
          <Image source={Images.menuBlack} style={Styles.menuIcon} />
        </TouchableOpacity>

        <ImageBackground source={Images.bottomRight} style={Styles.backgroundWrapperRight}>
          <TouchableOpacity onPress={() => updateValue(3)}>
            <Image source={Images.stats} style={Styles.barIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
  )
}

const Styles = StyleSheet.create({

  mainContainer: {
    marginBottom: hp(-1.5)
  },
  backgroundWrapper: {
    width: hp(17.4),
    alignSelf: "center",
    height: hp(5),
    justifyContent: 'center',
    alignItems: "flex-start"
  },
  backgroundWrapperRight: {
    width: hp(17.4),
    alignSelf: "center",
    height: hp(5),
    justifyContent: 'center',
    alignItems: "flex-end"
  },
  innerWrapper: {
    position: 'absolute',
    width: widthScreen / 1.2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: hp(3),
    // left: hp(2.5),
  },
  transactionIcon: {
    width: hp(4),
    height: hp(4),
    marginLeft: hp(1)
  },
  barIcon: {
    width: hp(4),
    height: hp(4),
    marginRight: hp(1)
  },
  menuIcon: {
    width: hp(6.5),
    height: hp(6.5),
  }
})
export default BottomBar;