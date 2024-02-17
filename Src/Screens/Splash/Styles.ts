import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: Colors.DarkGreen
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    flexDirection: 'row',
    marginTop: hp(3),
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 42,
    fontFamily: "Inter-ExtraBold",
    color: Colors.White,
  },
  logoIcon: {
    width: 208.08,
    height: 119.2
  }

});
export default styles;