import React, { useEffect, useState } from 'react';
import { View, Image, Text, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Services/Redux/store';
import { setAppInit } from '../../Services/Redux/authSlice';
import Colors from '../../Styles/Colors';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

const DURATION = 1000;
const DELAY = 500;

const text = ['I', 'N', 'R', 'x'];

export type Props = {
  navigation: any;
};

const Splash = (props: any) => {
  const { navigation } = props;
  const { login, user, tokenId, initapplication } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [isShown, setShown] = useState(false);

  const translations = text.map(() => useSharedValue(0));

  const show = () => {
    setShown(!isShown);
    if (!isShown) {
      text.forEach((_, index) => {
        translations[index].value = withDelay(index * DELAY, withTiming(1, { duration: DURATION }));
      });
    } else {
      text.forEach((_, index) => {
        translations[index].value = withDelay(index * DELAY, withTiming(0, { duration: DURATION }));
      });
    }
  };

  const setAppInitState = () => dispatch(setAppInit(true));

  function navigateToScreen() {
    if (initapplication) {
      if (login && tokenId && user.mobileNumber) {
        navigation.replace('Home');
      } else {
        setAppInitState();
        navigation.replace('Login');
      }
    } else {
      setAppInitState();
      navigation.replace('Onboarding');
    }
  }

  useEffect(() => {
    show();
    const timer = setTimeout(() => {
      navigateToScreen();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    show();
    hideNavigationBar(); 
    changeNavigationBarColor(Colors.DarkGreen, true);
  
    const timer = setTimeout(() => {
      navigateToScreen();
    }, 4000);
  
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SafeAreaView style={Styles.backgroundWrapper}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <StatusBar barStyle={'dark-content'}backgroundColor={Colors.DarkGreen}  />
      <View style={Styles.mainContainer}>
        <Image source={Images.logo} style={Styles.logoIcon} />

        <View style={Styles.text}>
          {text.map((char, index) => (
            <Animated.Text
              key={index}
              style={[
                Styles.logoText,
                useAnimatedStyle(() => ({
                  opacity: translations[index].value,
                  transform: [{ translateY: translations[index].value * 20 }],
                })),
              ]}
            >
              {char}
            </Animated.Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
