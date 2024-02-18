
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
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
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
  mainDataContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  mainHeadContent: {
    width: widthScreen,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    height: hp(20)
  },
  inrTitle: {
    fontSize: 24,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  amountInr: {
    fontSize: 24,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
  },
  aboutWrapper: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: Colors.LightGreen,
    // marginBottom: hp(2),
    alignSelf: "center",
    // marginTop: hp(3),
  },
  aboutLogo: {
    width: 44.97,
    height: 25.76,
    tintColor: Colors.Black
  },
  walletWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  currencyText: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
  },
  solutionText: {
    fontSize: 16,
    color: "rgba(88, 174, 143, 0.5)",
    fontFamily: "Inter-Medium",
  },
  amountWrapper: {
    width: 130,
    height: hp(4.5),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(1),
    borderRadius: 10,
    backgroundColor: "rgba(88, 174, 143, 0.25)",
  },
  amountIcon: {
    color: "rgba(88, 174, 143, 0.5)",
  },

  sendIcon: {
    width: 60,
    height: 60
  },
  sendText: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(1.5),
    textAlign: "center"
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  bottomWrapper: {
    width: widthScreen,
    alignSelf: "center",
    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: hp(-4)
  },
  scrollContainer: {
    marginBottom: hp("16%"),
    marginTop: hp(2),
  },
  listMain: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(202, 244, 207, 0.3)"
  },
  listContainer: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  listDescription: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    marginTop: 5
  },
  seperateWrap: {
    marginLeft: hp(1)
  },
  completeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 50,
    height: 50
  },

});
export default styles;