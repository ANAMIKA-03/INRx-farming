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
    width: widthScreen,
    alignSelf: "center",
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    // marginBottom: hp(3),
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
  scrollContainer: {
    marginBottom: hp("6%"),
    marginTop: hp(2),
  },
  aboutWrapper: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: Colors.LightGreen,
    // marginBottom: hp(2),
    alignSelf: "center"
  },
  aboutLogo: {
    width: 44.97,
    height: 25.76,
    tintColor: Colors.Black
  },

  versionTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginTop: hp(1),
  },

  dataContainer: {
    // marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    marginBottom: hp(2)
  },
  inrTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-Bold",
    textAlign: "center"
  },
  depositText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-SemiBold",
  },
  solutionText: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(1)
  },
  solutionsText: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(1)
  },

  iconTitle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    marginBottom: hp(1.5),
  },
  productDes: {
    fontSize: 9,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Medium",
    marginTop: hp(0.3),
    textAlign: "center"
  },
  amountWrapper: {
    width: 90,
    height: hp(4.5),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(1),
    borderRadius: 10,
    backgroundColor: "rgba(88, 174, 143, 0.25)",
    alignSelf: "center"
  },
  amountIcon: {
    color: "rgba(88, 174, 143, 0.5)",
  },

  bagContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    marginBottom: hp(2)
  },
  collateralLogo: {
    width: 48,
    height: 48,
  },

  mainContainerMike: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  innerMike: {
    backgroundColor: "#F0FCF1",
    width: '12%',
    alignItems: "center",
    height: hp("32%"),
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: hp(4),
  },
  innerHeadLeft: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  innerHeadRight: {
    width: '100%',
  },
  outerMike: {
    width: '78%',
  },
  rightOuterMain: {
    width: '100%',
  },
  rightMainWrapper: {
    width: '100%',
    backgroundColor: "#F0FCF1",
    borderRadius: 10,
    height: hp(6.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(2)
  },
  rightLeftInner: {
    width: '30%',
    backgroundColor: Colors.Parrot,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: hp(6.5),
    alignItems: "center",
    justifyContent: "center"
  },
  rightInner: {
    width: '70%',
    backgroundColor: "#F0FCF1",
    borderRadius: 10,
    height: hp(6.5),
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  percentTitle: {
    fontSize: 16,
    color: Colors.White,
    fontFamily: "Inter-SemiBold",
  },
  inrxAmountText: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-Regular",
  },
  cryptoIcon: {
    width: 31,
    height: 31
  },
  bottomRightWrapper: {
    width: '100%',
    backgroundColor: "#F0FCF1",
    borderRadius: 10,
    height: hp(6.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

});
export default styles;