import React from 'react';
import {Dimensions} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';
import Metrics from '../Styles/Metrices';

import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import Login from '../Screens/Authentication/Login';

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
import About from '../Screens/MainScreens/About';
import Settings from '../Screens/MainScreens/Settings';
import Audit from '../Screens/MainScreens/Audit';
import Collateral from '../Screens/MainScreens/Collateral';
import Supply from '../Screens/MainScreens/Supply';
import NewLogin from '../Screens/Authentication/NewLogin';
import {useSelector} from 'react-redux';
import {RootState} from '../Services/Redux/store';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
  Menu: undefined;
  Stats: undefined;
  History: undefined;
  Notification: undefined;
  HistoryDetail: undefined;
  Wallet: undefined;
  Received: undefined;
  Send: undefined;
  ConvertCurrency: undefined;
  Profile: undefined;
  FarmingRewards: undefined;
  About: undefined;
  Settings: undefined;
  Audit: undefined;
  Collateral: undefined;
  Supply: undefined;
};

enableScreens();

const RootStack = createStackNavigator<RootStackParamList>();

export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  const {login} = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={login ? 'Home' : 'Splash'}
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => ({
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
          presentation: 'modal',
        }}>
        {!login ? (
          <>
            <RootStack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Login"
              component={NewLogin}
              options={{headerShown: false}}
            />
          </>
        ) : null}

        <RootStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Stats"
          component={Stats}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="HistoryDetail"
          component={HistoryDetail}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Received"
          component={Received}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Send"
          component={Send}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="ConvertCurrency"
          component={ConvertCurrency}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="FarmingRewards"
          component={FarmingRewards}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Audit"
          component={Audit}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Collateral"
          component={Collateral}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Supply"
          component={Supply}
          options={{headerShown: false}}
        />

        {/*  Supply  */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
