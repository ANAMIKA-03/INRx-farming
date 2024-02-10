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
    marginTop: hp(4)
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
  listLeftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  listIconWrap: {
    width: hp(6.6),
    height: hp(6.6),
    backgroundColor: Colors.MediumGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  listIcon: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  seperateWrap: {
    marginLeft: hp(2),
  },
  listTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  listDescription: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
    marginTop: 5
  },
  mailIcon: {
    width: 40,
    height: 40,
    borderRadius: 40
  }
});
export default styles;