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
    width: 37,
    height: 37,
  },
  mainDataContainer: {
    flex: 0.83,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  mainHeadContent: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceContainer: {
    width: hp(23),
    height: hp(33.7),
    borderRadius: 27,
    backgroundColor: Colors.Green,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  balanceWrapper: {
    flex: 1
  },
  balanceHeader: {
    width: "70%",
    alignSelf: "center",
    flex: 0.4,
    justifyContent: "center"
  },
  balanceBottom: {
    width: "70%",
    alignSelf: "center",
    flex: 0.6,
    justifyContent: "center"
  },
  balanceTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(1.6),
    color: "rgba(0, 0, 0, 0.7)"
  },
  balanceCount: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(3.6),
    color: Colors.Black,
    marginTop: hp(1)
  },

  rightBalanceWrap: {
    width: hp(20),
    height: hp(33.7),
  },
  rightBalanceHeader: {
    width: "70%",
    alignSelf: "center",
    flex: 0.5,
    justifyContent: 'flex-start'
  },
  iconsContainer: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3)
  },
  rightBalanceBottom: {
    width: "70%",
    alignSelf: "center",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: hp(4.5),
    height: hp(4.5)
  },

  dateContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(2),
    marginLeft: hp(5),
    height: 60,
  },
  intrestFlat: {
    backgroundColor: Colors.White,
    width: 113,
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: hp(2),
    borderWidth: 1,
    borderColor: Colors.Black,
    borderStyle: "dashed",
  },
  TextFlatView: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.Preto,
  },
  tabWrapContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: "transparent",
    marginTop: hp(2),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)"
  },
  tabsWrap: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabButton: {
    width: '50%',
    height: hp(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  monthText: {
    fontFamily: 'Inter-bold',
    fontSize: hp(1.2),
  },
  graphContainer: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3)
  },
  graphIcon: {
    width: 85,
    height: 85
  },
  graphDataWrap: {
    width: '50%',
    marginRight: hp(3)
  },
  graphInnerData: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  graphTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)"
  },
  graphLine: {
    width: '100%',
    height: hp(0.2),
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
  todayTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(1.6),
    color: "rgba(0, 0, 0, 0.5)"
  },
  visitorTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(2.4),
    marginTop: hp(1),
    color: "rgba(0, 0, 0, 0.7)"
  },
  visitTitle: {
    color: "rgba(0, 0, 0, 0.5)"
  }
});
export default styles;