import React, {useEffect, useState} from 'react';
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
import {Asset, setActiveWallet} from '../Services/Redux/walletSlice';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const SelectTokenPopup = (props: any) => {
  const {navigation, open, close, onSelect, assets, type} = props;
  const dispatch = useDispatch();
  const [alltoken, setAlltoken] = useState<Asset[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let tokenarr = [];
    if (type == 1) {
      tokenarr = assets.filter(
        (it: Asset) =>
          it.symbol.toUpperCase() == 'INR' || it.symbol.toUpperCase() == 'INRX',
      );
    } else {
      tokenarr = assets;
    }
    if (input && input?.length > 0) {
      const tokens = tokenarr.filter(
        (it: Asset) =>
          it.symbol.toLowerCase().indexOf(input?.toLowerCase()) > -1,
      );
      setAlltoken(tokens);
    } else {
      setAlltoken(tokenarr);
    }
  }, [input, assets, type]);

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
        <View>
          <Text style={Styles.headtitle}>Search Token</Text>
          <TextInput
            placeholder="Enter Token Name"
            placeholderTextColor={'#000'}
            style={Styles.input}
            value={input}
            onChangeText={val => setInput(val)}
          />
        </View>

        <View style={Styles.dataWrapper}>
          <ScrollView>
            {alltoken.map((item: Asset, i: number) => {
              return (
                <TouchableOpacity
                  style={Styles.iconContainer}
                  onPress={() => {
                    onSelect(i);
                    close();
                  }}
                  key={i + 'converlisttoken'}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: item.icon}} style={Styles.flatIcon} />
                    <Text
                      style={[
                        Styles.iconTitle,
                        {
                          fontSize: hp(1.6),
                          fontWeight: '700',
                          paddingHorizontal: wp(2.5),
                        },
                      ]}>
                      {item.symbol}
                    </Text>
                  </View>
                  <Text style={Styles.iconTitle}>{item?.available?.toFixed(2)}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
    height: hp(35),
    overflow: 'scroll',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.06)',
    marginVertical: hp(1),
    paddingHorizontal: wp(2.5),
    borderRadius: 10,
    paddingVertical: hp(1.5),
  },
  icon: {
    color: Colors.Black,
  },
  flatIcon: {
    width: 30,
    height: 30,
  },
  iconTitle: {
    fontSize: hp(1.4),
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    // paddingHorizontal: wp(9),
    // paddingVertical: hp(2),
  },
  input: {
    color: '#000',
    fontSize: hp(1.6),
    borderRadius: 10,
    backgroundColor: Colors.White,
    height: hp(5),
    paddingHorizontal: hp(2),
    width: wp(55),
    alignSelf: 'center',
    marginVertical: 10,
  },
  headtitle: {
    color: '#000',
    fontSize: hp(1.7),
    paddingHorizontal: wp(9),
    paddingTop: hp(1.5),
  },
});
export default SelectTokenPopup;
