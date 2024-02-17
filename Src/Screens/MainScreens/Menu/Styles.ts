import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: 792.42,
    marginTop: hp("-10%"),
    alignSelf: "center"
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.LightGreen
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
  },
  backIcon: {
    width: 37,
    height: 37,
    borderRadius: 37
  },
  menuTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-Bold",
    // marginTop: hp(1),
    textAlign: "center"
  },
  assetsWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabContainer: {
    width: 55,
    height: 30,
    backgroundColor: "rgba(88, 174, 143, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: hp(1.8),
  },
  inrTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
  },
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(1.5),
    marginRight: 10
  },
  currencyIcon: {
    width: 30.76,
    height: 17.62,
  },
  mainDataContainer: {
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menuInnerData: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  mainFlat: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    // marginTop: hp(1),
    // marginBottom: hp(4),
  },
  viewFlat: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: widthScreen / 3.3,
    // alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center"
  },
  flatIcon: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  iconTitle: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(1.5)
  }
});
export default styles;