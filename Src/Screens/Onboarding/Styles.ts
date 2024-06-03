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
    width: widthScreen / 1.2,
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
    width: 100,
    alignSelf: "center",
    height: 100,
  },
  centerPicTwo: {
    width: 168,
    alignSelf: "center",
    height: 151.11,
  },
  centerPicThree: {
    width: 146,
    alignSelf: "center",
    height: 146,
  },

});
export default styles;