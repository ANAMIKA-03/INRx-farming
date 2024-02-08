
import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import Metrics from '../Styles/Metrices';

import BottomTabView from './BottomNavigation';

import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import TermsCondition from '../Screens/Authentication/TermsCondition';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

type RootStackParamList = {
  Login: undefined,
  Register: undefined,
  TermsCondition: undefined,
  BottomTabView: undefined,
  // Success: undefined,
  // DrawerStack: undefined,
  // EditProfile: undefined,
  // RequestListDetail: undefined,
  // SubmitRequest: undefined,
  // SignedContract: undefined,
  // RequestDetail: undefined,
  // ProfileViewer: undefined,
  // Rate: undefined,
  // ComplaintSubmit: undefined,
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
      <RootStack.Navigator initialRouteName="Login"
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
        <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <RootStack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <RootStack.Screen name='TermsCondition' component={TermsCondition} options={{ headerShown: false }} />
       
        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />
        {/* <RootStack.Screen name='Success' component={Success} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SignUpSecond' component={SignUpSecond} options={{ headerShown: false }} /> */}

        {/* <RootStack.Screen name='DrawerStack' component={DrawerStack} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='RequestListDetail' component={RequestListDetail} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SubmitRequest' component={SubmitRequest} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SignedContract' component={SignedContract} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='RequestDetail' component={RequestDetail} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ProfileViewer' component={ProfileViewer} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='Rate' component={Rate} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ComplaintSubmit' component={ComplaintSubmit} options={{ headerShown: false }} /> */}


        {/*   */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

