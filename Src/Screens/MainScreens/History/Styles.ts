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
    marginTop: hp(2),
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
    marginTop: hp(2)
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
    width: hp(3)
  },
  flexNotification: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  innerActiveTab: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  innerInActiveTab: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
  },
  line: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(0.12),
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    marginTop: hp(2),
  },
  scrollContainer: {
    marginBottom: hp("10%"),
    marginTop: hp(1)
  },
  dataContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
  },
  tabContainer: {
    width: 55,
    height: 30,
    backgroundColor: Colors.MediumGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  inrTitle: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  depositText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
  },
  solutionText: {
    fontSize: 12,
    color: Colors.DarkYellow,
    fontFamily: "Inter-SemiBold",
    marginLeft: 3
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
    color: "rgba(0, 0, 0, 0.75)",
    fontFamily: "Inter-SemiBold",
  },
  listDescription: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: 5
  },
  priceTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    textAlign: "right"
  },
  completeWrap: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  completeText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
    marginLeft: 5,
    textAlign: "right"
  },
  dotIcon: {
    color: Colors.Parrot
  }
});
export default styles;