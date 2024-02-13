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
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: hp(3),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2)
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    marginLeft: hp(1)
  },
  notifyIcon: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    marginBottom: hp("6%"),
  },
  listContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: "center",
    backgroundColor: Colors.LightGreen,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Black
  },
  listInner: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: '90%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(4),
  },
  line: {
    marginTop: hp(1),
    width: hp(12),
    height: hp(0.4),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  primary: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    width: widthScreen / 1.18,
    alignSelf: "center",
    marginBottom: hp(3)
  },
  leftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  stakeLeftWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1)
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  inrxIcon: {
    width: 24.38,
    height: 13.97,
  },
  currencyTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    marginLeft: hp(1)
  },
  tabContainer: {
    width: 70,
    height: 30,
    backgroundColor: "rgba(88, 174, 143, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: hp(1.5)
  },
  inrTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
  },
  profileListContainer: {
    marginTop: hp(1),
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileListTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
  },
  profileDescription: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
  },

  getContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.14,
    alignSelf: "center",
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  listLeftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  listIconWrap: {
    width: hp(10),
    height: hp(5),
    backgroundColor: Colors.Green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  listDescription: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
  },
  currencyIcon: {
    width: 11,
    height: 16,
  },
  seperateWrap: {
    marginLeft: hp(2),
  },
  listTitle: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    // marginTop: 5
  },
  stakeTitle: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  rewardIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  claimContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    justifyContent: "center"
  },
  dotIcon: {
    color: Colors.DarkParrot
  },
  claimAmount: {
    fontSize: 16,
    color: Colors.DarkParrot,
    fontFamily: "Inter-Regular",
    marginLeft: hp(1)
  },
  claimText: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(1)
  },
  giftWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: hp(2)
  },
  giftIcon: {
    width: 9.09,
    height: 10.68
  },
  giftText: {
    fontSize: 8,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
    marginLeft: hp(0.5)
  }
});
export default styles;