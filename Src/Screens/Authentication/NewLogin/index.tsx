import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';
import {useDeepLink} from '../../../hooks/DeepLink';
import {createUser, getUserDetails} from '../../../Services/Apis/apis';
import {useDispatch} from 'react-redux';
import {setAuthInfo, setSession} from '../../../Services/Redux/authSlice';

export type Props = {
  navigation: any;
};

const NewLogin = (props: any) => {
  const {navigation} = props;
  const {deeplink, setDeepLink}: any = useDeepLink();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const openTrustIdApp = () => {
    const TrustIdScheme =
      'trustid://?ref=inrx_app_login/business_name="INRX Business Inc"';
    try {
      return Linking.openURL(TrustIdScheme); // Open in default browser if Chrome is not installed
    } catch (e) {
      console.log(e, 'Error in open TrustId app');
    }
  };

  const goToSignUp = () => {
    navigation.navigate('Home');
  };

  function decodeDeeplinkData(deeplink: String) {
    const urlString = deeplink;

    // Extract the JSON string from the URL
    const jsonStartIndex = urlString.indexOf('data=') + 'data='.length;
    const jsonEndIndex = urlString.length;
    const jsonString = decodeURIComponent(
      urlString.substring(jsonStartIndex, jsonEndIndex),
    );

    // Parse the JSON string
    try {
      const jsonObject = JSON.parse(jsonString);
      if (jsonObject?.status && jsonObject?.data) {
        getUserDetails(jsonObject?.data)
          .then(async (resp: any) => {
            // console.log(resp, 'resp',jsonObject);

            if (resp?.status) {
              const userobj = {
                user: {
                  mobileNumber: resp?.data?.mobile,
                  userId: resp?.data?.userId,
                  name: resp?.data?.name ? resp?.data?.name : 'N/A',
                  dob: resp?.data?.dob ? resp?.data?.dob : 'N/A',
                },
                login: true,
              };
              let result = await saveData({
                ...userobj.user,
                tokenId: resp?.data?.tokenId,
              });
              if (result) {
                dispatch(
                  setSession(resp?.data?.tokenId ? resp?.data?.tokenId : ''),
                );
                dispatch(setAuthInfo(userobj));
              } else {
                Alert.alert('Register failed!');
              }
              setDeepLink({});
              setLoading(false);

              // goToSignUp();
            } else {
              setLoading(false);
            }
          })
          .catch((er: any) => {
            setLoading(false);
            console.log(er, 'er');
          });
      } else {
        setLoading(false);
        Alert.alert('Something went wrong!');
      }
    } catch (error: any) {
      setLoading(false);
      console.error('Error parsing JSON:', error.message);
    }
  }

  async function saveData(data: any) {
    try {
      const params = {
        mobile: data?.mobileNumber,
        userId: data?.userId,
        name: data?.name ? data?.name : 'N/A',
        dob: data?.dob ? data?.dob : 'N/A',
        tokenId: data?.tokenId,
      };
      // console.log(params, ' params data');
      const res = await createUser(params);

      Alert.alert(res.message);
      if (res?.status == 200) {
        return true;
      } else {
        return false;
      }
    } catch (e: any) {
      console.log(e, 'Error in saveData try:catch::NewLoginScreen');
    }
  }

  useEffect(() => {
    // console.log(deeplink, 'deeplink in login with trustid screen');
    if (deeplink) {
      if (typeof deeplink !== 'object') {
        // Your input string
        setTimeout(() => {
          setLoading(true);
          decodeDeeplinkData(deeplink);
        }, 1000);
      }
    }
  }, [deeplink]);

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.White} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraHeight={130}
        extraScrollHeight={130}
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.backgroundWrapper}>
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
                    // openTrustIdApp();
                    if (!loading) openTrustIdApp();
                  }}
                  style={Styles.sendButton}>
                  {loading ? <ActivityIndicator /> : null}
                  <Text style={Styles.sendTitle}>
                    {loading ? `Authenticating` : `Trust Id Access`}
                  </Text>
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
