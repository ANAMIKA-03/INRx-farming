
import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import Metrics from '../Styles/Metrices';

// import BottomTabView from './BottomNavigation';

import Home from '../Screens/MainScreens/Home';
import Menu from '../Screens/MainScreens/Menu';
import Stats from '../Screens/MainScreens/Stats';
import History from '../Screens/MainScreens/History';
import Notification from '../Screens/MainScreens/Notification';
import HistoryDetail from '../Screens/MainScreens/HistoryDetail';
import Wallet from '../Screens/MainScreens/Wallet';
import Received from '../Screens/MainScreens/Received';
import Send from '../Screens/MainScreens/Send';
import ConvertCurrency from '../Screens/MainScreens/ConvertCurrency';
import Profile from '../Screens/MainScreens/Profile';
import FarmingRewards from '../Screens/MainScreens/FarmingRewards';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

type RootStackParamList = {
  Home: undefined,
  Menu: undefined,
  Stats: undefined,
  History: undefined,
  Notification: undefined,
  HistoryDetail: undefined,
  Wallet: undefined,
  Received: undefined,
  Send: undefined,
  ConvertCurrency: undefined,
  Profile: undefined,
  FarmingRewards: undefined,
};



enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();


export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'extend',
              }),
            },
          }),
          presentation: "modal"
        }}>
        <RootStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <RootStack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
        <RootStack.Screen name='Stats' component={Stats} options={{ headerShown: false }} />
        <RootStack.Screen name='History' component={History} options={{ headerShown: false }} />

        <RootStack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
        <RootStack.Screen name='HistoryDetail' component={HistoryDetail} options={{ headerShown: false }} />
        <RootStack.Screen name='Wallet' component={Wallet} options={{ headerShown: false }} />
        <RootStack.Screen name='Received' component={Received} options={{ headerShown: false }} />
        <RootStack.Screen name='Send' component={Send} options={{ headerShown: false }} />
        <RootStack.Screen name='ConvertCurrency' component={ConvertCurrency} options={{ headerShown: false }} />
        <RootStack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <RootStack.Screen name='FarmingRewards' component={FarmingRewards} options={{ headerShown: false }} />

        {/*  FarmingRewards */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

