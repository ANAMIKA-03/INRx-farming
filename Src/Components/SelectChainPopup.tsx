import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../Styles/Colors';
import Images from '../Styles/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setActiveWallet} from '../Services/Redux/walletSlice';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const SelectChainPopup = (props: any) => {
  const {navigation, open, close} = props;
  const dispatch = useDispatch();

  function changeChain(type: any) {
    dispatch(setActiveWallet(type));
    close();
  }

  return (
    <Modal
      animationInTiming={300}
      animationOutTiming={200}
      animationIn="slideInUp"
      animationOut="slideInUp"
      backdropOpacity={0.5}
      avoidKeyboard={true}
      isVisible={open}
      onBackdropPress={() => {
        close();
      }}
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={Styles.modalContainer}>
        <View style={Styles.dataWrapper}>
          <TouchableOpacity
            style={Styles.iconContainer}
            onPress={() => changeChain(0)}>
            <Image source={Images.ethereum} style={Styles.flatIcon} />
            <Text style={Styles.iconTitle}>{`Ethereum`}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.iconContainer}
            onPress={() => changeChain(1)}>
            <Image source={Images.tronicon} style={Styles.flatIcon} />
            <Text style={Styles.iconTitle}>{`Tronscan`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  modalContainer: {
    width: widthScreen / 1.4,
    alignSelf: 'center',
    backgroundColor: Colors.LightGreen,
    borderRadius: 10,
  },
  dataWrapper: {
    marginBottom: hp(2),
    marginTop: hp(2),
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '75%',
    alignSelf: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.06)',
    marginVertical: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: 10,
  },
  icon: {
    color: Colors.Black,
  },
  flatIcon: {
    width: 30,
    height: 30,
  },
  iconTitle: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Inter-Medium',
    // marginTop: hp(1),
    textAlign: 'center',
    paddingHorizontal: wp(9),
    paddingVertical: hp(2),
  },
});
export default SelectChainPopup;
