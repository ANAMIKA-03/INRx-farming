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
    marginBottom: hp(2)
  },
  balanceHeader: {
    width: "40%",
    marginTop: hp(2)
  },
  todayTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(1.6),
    color: "rgba(0, 0, 0, 0.5)"
  },
  visitorTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(2.6),
    marginTop: hp(1),
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: 'bold'

  },
  visitTitle: {
    color: "rgba(0, 0, 0, 0.5)"
  },
  tabWrapContainer: {
    width: '45%',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: "transparent",
    // marginTop: hp(2),
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
    marginTop: hp(2)
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
  dateContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(2),
    marginLeft: hp(5),
    height: 60,
    marginBottom: hp(2)

  },
  intrestFlat: {
    backgroundColor: Colors.LightGreen,
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

  calenderContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(3),
    marginLeft: hp(3),
    height: 60,
  },
  calenderWrapFlat: {
    backgroundColor: Colors.LightGreen,
    width: 113,
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: hp(2),
    borderWidth: 1,
    borderColor: Colors.Black,
    borderStyle: "solid",
  },
  calenderText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.Black,
  },
  container: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    height: 141,
    marginTop: hp(3),
    marginBottom: hp(1)
  },
  labelContainer: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(1.5)
  },
  timeTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
  },

});
export default styles;