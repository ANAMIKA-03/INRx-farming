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
    width: widthScreen / 1.14,
    alignSelf: "center",
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3)
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
  scrollContainer: {
    marginBottom: hp("10%"),
    marginTop: hp(3),
  },
  dataContainer: {
    marginTop: hp(4),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    marginBottom: hp(5)
  },
  aboutWrapper: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.LightGreen,
    marginBottom: hp(2),
    alignSelf: "center"
  },
  aboutLogo: {
    width: 44.97,
    height: 25.76,
    tintColor: Colors.Black
  },

  versionTitle: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
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
  listContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.LightGreen,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.Black
  },
  listTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  listTitlee: {
    fontSize: 14.6,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  listWrapper: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  listLeft: {
    width: "60%",
  },

  docIcon: {
    width: 16.82,
    height: 21.13
  },
  likeIcon: {
    width: 18,
    height: 17.31
  },
  shareIcon: {
    width: 18,
    height: 19
  },
  updateIcon: {
    width: 18,
    height: 24
  },
  descriptionText: {
    fontSize: 13,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
  },

  bottomWrapper: {
    width: widthScreen,
    alignSelf: "center",
    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: hp(-4),
    flex: 0.85
  },
  mainToogke: {
    marginTop: 16,
    width: 63,
    height: 29,
    borderRadius: 100,
  },
  circle: {
    width: 27,
    height: 27,
    borderRadius: 27,
  }
});
export default styles;