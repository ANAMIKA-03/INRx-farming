import React, {useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const NewLogin = (props: any) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  const goToSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.White}/>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraHeight={130}
        extraScrollHeight={130}
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.backgroundWrapper}>
            <View style={Styles.mainHeadContainer}>
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={Images.back} style={Styles.backIcon} />
              </TouchableOpacity> */}
            </View>

            <View style={Styles.bottomHeadContainer}>
              <View>
                <Text style={Styles.welcomeText}>{`Log In`}</Text>
                <Text
                  style={
                    Styles.loginHead
                  }>{`Fastest, Secure Login & Kyc/Aml Authorization with Trust Id`}</Text>
              </View>

              <View style={Styles.iconsrow}>
                <Image source={Images.logo} style={Styles.logoIcon} />
                <Image
                  source={Images.swap_thin}
                  style={[Styles.arrowIcon, {tintColor: Colors.Black}]}
                  resizeMode="contain"
                />
                <Image
                  source={Images.trustid_app}
                  style={Styles.appIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={Styles.buttonWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    onSubmit();
                  }}
                  style={Styles.sendButton}>
                  <Text style={Styles.sendTitle}>{`Trust Id Access`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewLogin;
