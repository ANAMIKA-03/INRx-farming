import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const Login = (props: any) => {
  const { navigation } = props;

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    navigation.navigate("Home")
  }

  const goToSignUp = () => {
    navigation.navigate("Register")
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.backgroundWrapper}>

            <View style={Styles.mainHeadContainer}>
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image source={Images.back} style={Styles.backIcon} />
              </TouchableOpacity>
            </View>

            <View style={Styles.bottomHeadContainer}>

              <Image source={Images.logo} style={Styles.logoIcon} />
              <Text style={Styles.welcomeText}>{`Sign In`}</Text>
              <Text style={Styles.loginHead}>{`login into existing account`}</Text>

              {/* Email */}
              <View style={Styles.inputHeader}>
                <Text style={Styles.inputHeaderText}>{`Email or Username`}</Text>
              </View>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={email}
                  placeholder={""}
                  autoCapitalize="none"
                  placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
                  onChangeText={(value) => {
                    setEmail(value)
                  }}
                />
              </View>

              {/* Password */}
              <View style={Styles.inputHeader}>
                <Text style={Styles.inputHeaderText}>{`Password`}</Text>
              </View>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={password}
                  placeholder={""}
                  placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={(value) => {
                    setPassword(value)
                  }}
                />
              </View>

              <View style={Styles.buttonWrapper}>
                <TouchableOpacity onPress={() => { onSubmit() }}
                  style={Styles.sendButton}>
                  <Text style={Styles.sendTitle}>{`Sign In`}</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={Styles.signUpWrapper}>
                  <Text style={Styles.dontHaveText}>{`Don’t have an account?`}</Text>
                  <TouchableOpacity onPress={goToSignUp}>
                    <Text style={Styles.signUpText}>{`Sign-Up!`}</Text>
                  </TouchableOpacity>
                </View> */}


            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
}

export default Login;
