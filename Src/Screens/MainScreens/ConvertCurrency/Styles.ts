import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 37,
    height: 37,
    borderRadius: 37,
  },
  userTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: 'Inter-Medium',
    marginLeft: hp(1),
  },
  notifyIcon: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    marginBottom: hp('6%'),
    marginTop: hp(4),
  },
  listContainer: {
    marginTop: hp(1.2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.White,
  },
  listhead: {
    width: widthScreen / 1.24,
    alignSelf: 'center',
    fontSize: hp(1.6),
    color: '#000',
  },
  getContainer: {
    marginTop: hp(1.2),
    width: widthScreen / 1.14,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.White,
  },
  getRow: {
    marginTop: hp(5),
  },
  listInner: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listLeftWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIconWrap: {
    width: hp(15),
    height: hp(5.5),
    backgroundColor: Colors.Green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyIcon: {
    width: 25,
    height: 25,
  },
  seperateWrap: {
    marginLeft: hp(2),
  },
  listTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: 'Inter-SemiBold',
    marginTop: 5,
  },
  listDescription: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Inter-SemiBold',
  },
  inrxIcon: {
    width: 23,
    height: 13,
  },
  currencyTitle: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: 'Inter-Bold',
    marginLeft: hp(1),
  },
  arrowIcon: {
    width: 18,
    height: 15,
    marginRight: hp(1),
  },
  leftWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp(1),
  },
  currencyRate: {
    marginTop: hp(2),
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  sendButton: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    backgroundColor: Colors.Green,
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection:"row"
  },
  sendTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.Black,
  },
  input: {
    color: '#000',
    fontSize: 15,
    backgroundColor: Colors.White,
    height: hp(5),
    width: wp(45),
    paddingHorizontal: hp(2),
  },
});
export default styles;
