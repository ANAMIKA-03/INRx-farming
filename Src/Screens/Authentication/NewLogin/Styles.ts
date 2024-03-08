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
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1,
  },
  backgroundWrapper: {
    flex: 1,
  },
  mainHeadContainer: {
    justifyContent: "flex-start",
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  iconsrow:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width:wp(100),
  },
  logoIcon: {
    width: 85.79,
    height: 52.27,
    alignSelf: "center",
    marginBottom: hp(2),
    tintColor: Colors.Black,
  },
  appIcon: {
    width: 85.79,
    height: 65.27,
    alignSelf: "center",
    marginBottom: hp(2),
  },
  arrowIcon: {
    width: 42,
    height: 42,
    alignSelf: "center",
    marginBottom: hp(2),
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
    marginBottom: hp(2.5)
  },
  loginHead: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    textAlign: 'center',
    fontWeight:"700",
    color: "rgba(0, 0, 0, 1)",
    marginBottom: hp(2),
    paddingHorizontal:hp(8),
  },
  bottomHeadContainer: {
    width: widthScreen,
    flex: 0.7,
    justifyContent: "space-evenly",
    alignItems: 'center',        
  },  
  buttonWrapper: {
    marginTop: hp(5)
  }, 
  dontHaveText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: Colors.Grey,
    marginRight: 2
  },
  sendButton: {
    width: widthScreen / 1.5,
    alignSelf: "center",
    borderWidth:2,
    borderColor: Colors.DarkGreen,    
    height: hp(6.5),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.DarkGreen,
  }
});
export default styles;