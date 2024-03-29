import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Services/Redux/store';
import {setAppInit} from '../../Services/Redux/authSlice';

const DURATION = 1000;
const DELAY = 500;

const text = ['I', 'N', 'R', 'x'];

export type Props = {
  navigation: any;
};

const Splash = (props: any) => {
  const {navigation} = props;
  const {login, user, tokenId, initapplication} = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch();
  const [isShown, setShown] = useState(false);

  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);
  const opacity4 = useSharedValue(0);

  // prettier-ignore
  const show = () => {
    if (isShown) {
      opacity4.value = withDelay(0 * DELAY, withTiming(0, { duration: DURATION }));
      opacity3.value = withDelay(1 * DELAY, withTiming(0, { duration: DURATION }));
      opacity2.value = withDelay(2 * DELAY, withTiming(0, { duration: DURATION }));
      opacity1.value = withDelay(3 * DELAY, withTiming(0, { duration: DURATION }));
    } else {
      opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));
      opacity2.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));
      opacity3.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));
      opacity4.value = withDelay(3 * DELAY, withTiming(0, { duration: DURATION }));
    }

    setShown(!isShown);
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
      // navigation.navigate('Onboarding');
      navigateToScreen();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>
        <Image source={Images.logo} style={Styles.logoIcon} />

        <View style={Styles.text}>
          <Animated.Text style={{...Styles.logoText, opacity: opacity1}}>
            {text[0]}
          </Animated.Text>
          <Animated.Text style={{...Styles.logoText, opacity: opacity2}}>
            {text[1]}
          </Animated.Text>
          <Animated.Text style={{...Styles.logoText, opacity: opacity3}}>
            {text[2]}
          </Animated.Text>
          <Animated.Text style={{...Styles.logoText, opacity: opacity3}}>
            {text[3]}
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
