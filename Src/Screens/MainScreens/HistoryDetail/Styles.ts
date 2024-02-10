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
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: "center",
    justifyContent: "flex-end",
    height: 127,
    backgroundColor: Colors.LightGreen,
    marginBottom: hp(2)
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: "center",
    marginBottom: hp(2)
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
    marginBottom: hp("10%"),
    marginTop: hp(1)
  },
  dataContainer: {
    marginTop: hp(4),
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
    color: Colors.Parrot,
    fontFamily: "Inter-SemiBold",
    marginLeft: hp(1)
  },
  listContainer: {
    marginTop: hp(4),
    width: widthScreen / 1.14,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Inter-SemiBold",
  },
  listDescription: {
    fontSize: 12,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    width: hp(26),
    textAlign: 'right',
    marginTop: 2
  },

  dotIcon: {
    color: Colors.Parrot
  }
});
export default styles;