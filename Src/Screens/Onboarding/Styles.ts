import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.LightParot
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.8,
    width: widthScreen / 1.1,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: "Inter-Medium",
    color: Colors.Black,
    textAlign: "center"
  },
  mainInnerWrap: {
    marginTop: hp("8%"),
    justifyContent: "center",
    alignItems: "center",
  },
  centerPicOne: {
    width: 236,
    alignSelf: "center",
    height: 179.77,
  },
  centerPicTwo: {
   alignSelf: "center",
    width: hp(20),
    height: hp(20),
    resizeMode: 'contain',
  },
  centerPicThree: {
    width: 146,
    alignSelf: "center",
    height: 146,
  },

});
export default styles;