
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
  mainDataContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
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
    marginBottom: hp("10%"),
    marginTop: hp(1),
  },

  listContainer: {
    marginTop: hp(4),
    width: widthScreen / 1.14,
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