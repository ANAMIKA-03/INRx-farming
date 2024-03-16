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
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerWrapper: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
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
    fontSize: 20,
    color: Colors.Black,
    fontFamily: 'Inter-Bold',
  },
  empty: {
    width: hp(4),
  },
  mainDataContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeadContent: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp(4),
  },
  inrTitle: {
    fontSize: 32,
    color: Colors.Black,
    fontFamily: 'Inter-Medium',
    marginLeft: hp(1),
  },
  walletWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
    justifyContent: 'center',
  },
  currencyIcon: {
    width: 21,
    height: 32,
  },
  solutionText: {
    fontSize: 16,
    color: Colors.Parrot,
    fontFamily: 'Inter-Medium',
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    justifyContent: 'center',
  },
  amountIcon: {
    width: 7,
    height: 11,
    tintColor: Colors.Parrot,
  },

  sendIcon: {
    width: 65,
    height: 65,
  },
  qrText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Inter-SemiBold',
    marginTop: hp(1.5),
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  bottomWrapper: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp(-4),
  },

  headerWrap: {
    flex: 0.7,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  downBottomWrap: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    marginTop: hp(4),
  },
  line: {
    marginTop: hp(1),
    width: hp(12),
    height: hp(0.4),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  primary: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  wrapper: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    backgroundColor: Colors.Grey,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Grey,
    marginTop: hp(0.8),
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: hp(2),
  },
  amountInputWrapper: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: Colors.Grey,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Grey,
  },
  inputWrapper: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(0.8),
  },
  dropDownWrapper: {
    width: '35%',
    alignSelf: 'center',
    backgroundColor: Colors.Grey,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Grey,
  },
  dropdowncard: {
    position: 'absolute',
    backgroundColor: Colors.Grey,
    top: '70%',
    left: '68%',
    width: '30%',
    padding: 10,
    borderRadius: 6,
    zIndex:100
  },
  dropdownlabel: {
    color: '#000',
    paddingVertical: 5,
    marginVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  completeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp(1),
  },
  listIcon: {
    width: hp(2.5),
    height: hp(2.5),
  },
  listTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.Black,
    marginLeft: hp(1),
  },
  dotIcon: {
    color: Colors.Black,
    marginRight: hp(1),
  },
  sendButton: {
    width: widthScreen / 1.14,
    alignSelf: 'center',
    backgroundColor: Colors.Green,
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row"
  },
  sendTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.Black,
  },
});
export default styles;
