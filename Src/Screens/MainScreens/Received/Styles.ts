
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
    backgroundColor: Colors.LightGreen,
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    width: 37,
    height: 37,
    borderRadius: 37
  },
  userTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-Bold",
  },
  empty: {
    width: hp(4)
  },
  mainDataContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  dropDownWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: 'Inter-SemiBold',
  },
  dotIcon: {
    color: Colors.Black,
    paddingHorizontal:wp(1.3)
  },
  mainHeadContent: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: hp(4),
  },
  inrTitle: {
    fontSize: 32,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    marginLeft: hp(1)
  },
  walletWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    justifyContent: "center"
  },
  currencyIcon: {
    width: 21,
    height: 32,
  },
  solutionText: {
    fontSize: 16,
    color: Colors.Parrot,
    fontFamily: "Inter-Medium",
  },
  amountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1),
    justifyContent: "center"
  },
  amountIcon: {
    width: 7,
    height: 11,
    tintColor: Colors.Parrot
  },

  sendIcon: {
    width: 65,
    height: 65
  },
  qrText: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Inter-SemiBold",
    marginTop: hp(1.5),
    textAlign: "center"
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  bottomWrapper: {
    width: widthScreen,
    alignSelf: "center",
    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: hp(-4)
  },

  hashTitle: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    marginTop: hp(0.5),
    textAlign: "center",
    width:wp(70)
  },

  qrIcon: {
    marginTop: hp(2),
    width: hp(30),
    height: hp(30),
    alignSelf: "center"
  },
  bottomButton: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(6),
  },
  line: {
    marginTop: hp(1),
    width: hp(12),
    height: hp(0.4),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }

});
export default styles;