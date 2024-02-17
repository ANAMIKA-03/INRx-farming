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
    flex: 1,
    backgroundColor: Colors.LightGreen
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: "center",
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    marginBottom: hp(3),
    marginTop: hp(3),
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    justifyContent: "center"
  },
  userIcon: {
    width: 37,
    height: 37,
    borderRadius: 37
  },
  scrollContainer: {
    marginBottom: hp("10%"),
  },
  aboutWrapper: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: Colors.LightGreen,
    // marginBottom: hp(2),
    alignSelf: "center"
  },
  aboutLogo: {
    width: 44.97,
    height: 25.76,
    tintColor: Colors.Black
  },

  versionTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    textAlign: "center"
  },

  dataContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    marginBottom: hp(2)
  },
  inrTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-Bold",
    textAlign: "center"
  },
  depositText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
  },
  solutionText: {
    fontSize: 16,
    color: Colors.Parrot,
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(1)
  },
  mainFlat: {
    width: widthScreen / 1.17,
    alignSelf: 'center',
    marginTop: hp(1),
    // marginBottom: hp("16%"),
  },
  viewFlat: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: widthScreen / 2.7,
    // alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.LightParot,
    backgroundColor: Colors.LightParot,
    height: hp(17),
    marginLeft: hp(1),
    marginRight: hp(1)
  },
  flatIcon: {
    width: 34,
    alignSelf: "center",
    height: 44.3,
  },
  iconTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(1.5),
    textAlign: "center"
  },
  productDes: {
    fontSize: 9,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(0.3),
    textAlign: "center"
  }

});
export default styles;