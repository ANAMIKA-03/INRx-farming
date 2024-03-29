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
    marginBottom: hp(2),
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verifiedWrapper: {
    width: 112,
    height: hp(4.5),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(1),
    borderRadius: 10,
    backgroundColor: Colors.Grey,
  },
  backIcon: {
    width: 37,
    height: 37,
    borderRadius: 37
  },
  centerData: {
    alignItems: "center",
    justifyContent: "center"
  },
  userIcon: {
    width: 71,
    height: 71,
    borderRadius: 71
  },
  userTitle: {
    fontSize: 24,
    color: Colors.Black,
    fontFamily: "Inter-Bold",
    marginTop: hp(1)
  },
  empty: {
    width: hp(3)
  },

  userId: {
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(1)
  },
  tickIcon: {
    // color: Colors.Parrot,
  },

  verifyText: {
    fontSize: hp(1.6),
    // color: Colors.Parrot,
    fontFamily: "Inter-Medium",
  },
  scrollContainer: {
    marginBottom: hp("12%"),
    marginTop: hp(1)
  },
  listContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.14,
    alignSelf: "center",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(217, 217, 217, 0.5)",
  },
  listInner: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: '85%',
    alignSelf: "center",
  },
  seperateWrap: {
    width: '80%',
  },
  listTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  requiredText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
    marginTop: hp(2)
  },
  pointsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2)
  },
  dotIcon: {
    color: Colors.Black,
  },
  completeText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(2),
  },
  sendButton: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.MediumParot,
    height: hp(4.5),
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2)
  },
  sendTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: Colors.Black,
  },
  line: {
    marginTop: hp(4),
    width: widthScreen / 1.14,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    height: hp(0.1),
    marginBottom: hp(2)
  },
  accountTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    marginBottom: hp(1)
  },
  profileListContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileListTitle: {
    fontSize: 13,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
  },
  profileDescription: {
    fontSize: 13,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  supportContainer: {
    marginTop: hp(5),
    width: widthScreen / 1.14,
    alignSelf: "center",
    backgroundColor: Colors.MediumParot,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.MediumParot,
  },
  supportInner: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: '85%',
    alignSelf: "center",
  },
  supportTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: Colors.Black,
    lineHeight: 18
  },
  contactSupport: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: Colors.DarkYellow,
  }
});
export default styles;