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
    flex: 0.15,
    justifyContent: "flex-start",
    alignItems: "center",

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
    marginTop: hp(1),
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
    marginTop: hp(5),
    width: widthScreen / 1.2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listTitle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Inter-Medium",
    marginLeft: hp(2)
  },
  listWrapper: {
    flexDirection: "row",
    alignItems: "center"
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
  rightIcon: {
    color: "rgba(0, 0, 0, 0.7)",
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
});
export default styles;