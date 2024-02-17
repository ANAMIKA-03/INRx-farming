import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Ionic from 'react-native-vector-icons/Ionicons';


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const FollowPopup = (props: any) => {
  const { navigation, open, close } = props

  return (
    <Modal animationInTiming={300}
      animationOutTiming={200}
      animationIn="slideInUp"
      animationOut="slideInUp"
      backdropOpacity={0.5}
      avoidKeyboard={true}
      isVisible={open}
      onBackdropPress={() => { close() }}
      style={{ flex: 1, justifyContent: "center" }}>
      <View style={Styles.modalContainer}>
        <View style={Styles.dataWrapper}>

          <TouchableOpacity style={Styles.iconContainer}>
            <Ionic
              name={"logo-facebook"}
              size={30}
              style={Styles.icon} />
            <Text style={Styles.iconTitle}>{`Facebook`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.iconContainer}>
            <Image source={Images.telegram} style={Styles.flatIcon} />
            <Text style={Styles.iconTitle}>{`Telegram`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.iconContainer}>
            <Image source={Images.twitter} style={Styles.flatIcon} />
            <Text style={Styles.iconTitle}>{`Twitter`}</Text>
          </TouchableOpacity>

        </View>

      </View>
    </Modal>
  )
}

const Styles = StyleSheet.create({


  modalContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.LightGreen,
    borderRadius: 10,
  },
  dataWrapper: {
    marginBottom: hp(2),
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    width: '75%',
    alignSelf: "center"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: Colors.Black,
  },
  flatIcon: {
    width: 30,
    height: 30
  },
  iconTitle: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Inter-Medium",
    marginTop: hp(1),
    textAlign: "center"
  },
})
export default FollowPopup;