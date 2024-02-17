import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    // flex: 1
    flexGrow: 1,
    backgroundColor: Colors.LightParot
  },
  mainContainer: {
    flex: 1,
  },
  backgroundWrapper: {
    flex: 1,
  },
  mainHeadContainer: {
    flex: 0.2,
    justifyContent: "flex-start",
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  logoIcon: {
    width: 73.79,
    height: 42.27,
    alignSelf: "center",
    marginBottom: hp(2),
    tintColor: Colors.Black
  },
  backIcon: {
    width: 37,
    height: 37,
    borderRadius: 37,
    marginTop: hp(3)
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
    textAlign: 'center',
    color: Colors.Black,
    marginBottom: hp(0.5)
  },
  loginHead: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    textAlign: 'center',
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: hp(2)
  },
  bottomHeadContainer: {
    width: widthScreen,
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  inputHeader: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
    width: widthScreen / 1.3,
    alignSelf: 'center',
  },
  inputHeaderText: {
    fontFamily: "Inter-Medium",
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.75)",
  },
  wrapper: {
    width: widthScreen / 1.3,
    alignSelf: 'center',
    backgroundColor: Colors.LightParot,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.75)",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontFamily: "Inter-Medium",
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.25)",
    marginLeft: hp(2),
  },
  userEmailAndroid: {
    flex: 1,
    fontFamily: "Inter-Medium",
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.25)",
    marginLeft: hp(2),
    includeFontPadding: false,
  },
  buttonWrapper: {
    marginTop: hp(5)
  },
  signUpWrapper: {
    marginTop: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dontHaveText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: Colors.Grey,
    marginRight: 2
  },
  signUpText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: Colors.Grey,
    marginLeft: 2
  },
  sendButton: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    backgroundColor: Colors.Parrot,
    height: hp(6),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.White,
  }

});
export default styles;