import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';

import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Inicio from "../Screens/MainScreens/Inicio";
import Busca from "../Screens/MainScreens/Busca";
import Perfil from "../Screens/MainScreens/Perfil";
import Cashback from "../Screens/MainScreens/Cashback";
import Menu from "../Screens/MainScreens/Menu";

import WaitingServices from '../Screens/MainScreens/WaitingServices';
import InQueueServices from '../Screens/MainScreens/InQueueServices';

const widthScreen = Dimensions.get('window').width;


type BottomStackParamList = {
  InicioTab: undefined,
  BuscaTab: undefined,
  PerfilTab: undefined,
  CashbackTab: undefined,
  MenuTab: undefined,
};
type InicioStackParamList = {
  Inicio: undefined,
  WaitingServices: undefined,
  InQueueServices: undefined,
};
type BuscaStackParamList = {
  Busca: undefined,
};
type PerfilStackParamList = {
  Perfil: undefined,
};
type CashbackStackParamList = {
  Cashback: undefined,
};
type MenuStackParamList = {
  Menu: undefined,
};



const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const InicioStack = createStackNavigator<InicioStackParamList>();
const BuscaStack = createStackNavigator<BuscaStackParamList>();
const PerfilStack = createStackNavigator<PerfilStackParamList>();
const CashbackStack = createStackNavigator<CashbackStackParamList>();
const MenuStack = createStackNavigator<MenuStackParamList>();




export const InicioStacks = () => {
  return (
    <InicioStack.Navigator initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
      }}>
      <InicioStack.Screen name="Inicio" component={Inicio} />
      <InicioStack.Screen name="WaitingServices" component={WaitingServices} />
      <InicioStack.Screen name="InQueueServices" component={InQueueServices} />

    </InicioStack.Navigator>
  );
}

export const BuscaStacks = () => {
  return (
    <BuscaStack.Navigator initialRouteName="Busca"
      screenOptions={{
        headerShown: false,
      }}>
      <BuscaStack.Screen name="Busca" component={Busca} />



    </BuscaStack.Navigator>
  );
}

const PerfilStacks = () => {
  return (
    <PerfilStack.Navigator initialRouteName="Perfil"
      screenOptions={{
        headerShown: false,
      }}>
      <PerfilStack.Screen name="Perfil" component={Perfil} />

    </PerfilStack.Navigator>
  )
}

const CashbackStacks = () => {
  return (
    <CashbackStack.Navigator initialRouteName="Cashback"
      screenOptions={{
        headerShown: false,
      }}>
      <CashbackStack.Screen name="Cashback" component={Cashback} />

    </CashbackStack.Navigator>
  )
}

const MenuStacks = () => {
  return (
    <MenuStack.Navigator initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
      }}>
      <MenuStack.Screen name="Menu" component={Menu} />

    </MenuStack.Navigator>
  )
}





export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          let name;
          if (route.name === 'InicioTab') {
            image = Images.inicio;
            name = "Início"
          }
          else if (route.name === 'BuscaTab') {
            image = Images.busca;
            name = "Busca"
          }
          else if (route.name === 'PerfilTab') {
            image = Images.perfil;
            name = "Perfil"
          }

          else if (route.name === 'CashbackTab') {
            image = Images.cashback;
            name = "Cashback"
          }
          else if (route.name === 'MenuTab') {
            image = Images.menu;
            name = "Menu"
          }

          return (
            <>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={image} style={{
                  marginTop: hp(1.5),
                  width: route.name === 'MenuTab' ? 26 : route.name === 'BuscaTab' ? 24 : route.name === 'PerfilTab' ? 23 : 27,
                  height: route.name === 'MenuTab' ? 19 : route.name === 'BuscaTab' ? 25 : 27,
                }} />
                <Text
                  style={{
                    marginTop: hp(1),
                    fontSize: 12,
                    color: Colors.White,
                    fontFamily: "Poppins-Medium",
                  }}>{name}</Text>
                {
                  focused ?
                    <View style={{ width: 28, height: hp(0.2), backgroundColor: Colors.White, marginTop: hp(1) }} />
                    :
                    <View style={{ width: 28, height: hp(0.2), backgroundColor: "transparent", marginTop: hp(1) }} />
                }
              </View>
            </>
          );
        },
        tabBarStyle: {
          height: hp(15),
          backgroundColor: "transparent",
          // borderTopLeftRadius: 32,
          // borderTopRightRadius: 32,
          position: 'absolute',
          // overflow: 'hidden',
          borderColor: "transparent",
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <Image source={Images.barTab} style={{
            width: widthScreen,
            alignSelf: 'center',
            height: hp(15),
          }} />
        ),
      })}>

      <Tab.Screen name="InicioTab" component={InicioStacks} />
      <Tab.Screen name="BuscaTab" component={BuscaStacks} />
      <Tab.Screen name="PerfilTab" component={PerfilStacks} />

      <Tab.Screen name="CashbackTab" component={CashbackStacks} />
      <Tab.Screen name="MenuTab" component={MenuStacks} />




    </Tab.Navigator>
  );
}

export default BottomTabView;