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


const UpdatePopup = (props: any) => {
  const { navigation, open, close } = props

  return (
    <Modal animationInTiming={300}
      animationOutTiming={200}
      animationIn="slideInUp"
      animationOut="slideInUp"
      backdropOpacity={0.05}
      avoidKeyboard={true}
      isVisible={open}
      onBackdropPress={() => { close() }}
      style={{ flex: 1, justifyContent: "center" }}>
      <View style={Styles.modalMainContainer}>
        <View style={Styles.modalContainer}>
          <Image source={Images.rocket} style={Styles.rocketIcon} />
          <View style={Styles.dataWrapper}>

            <Text style={Styles.userTitle}>{`What’s New?`}</Text>
            <Text style={Styles.userId}>{`v2.78.1`}</Text>


            <Text style={Styles.iconTitle}>{`This Update:`}</Text>
            <Text style={Styles.iconTitle}>{`-Pro homepage chat entry point supports yellow dots for unread messages`}</Text>
            <Text style={Styles.iconTitle}>{`-Support countdown of new Launchpad projects on New Listings ranking`}</Text>
            <Text style={Styles.iconTitle}>{`-P2P support merchant to quick`}</Text>




            <TouchableOpacity style={Styles.sendButton}>
              <Text style={Styles.sendTitle}>{`Updates`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { close() }}>
              <Text style={Styles.notKnowTitle}>{`Not Now`}</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </Modal>
  )
}

const Styles = StyleSheet.create({

  modalMainContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(3)
  },
  modalContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.LightGreen,
    borderRadius: 10,
    marginTop: hp(3)
  },
  rocketIcon: {
    width: 135,
    height: 98,
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: -10
  },
  dataWrapper: {
    marginBottom: hp(4),
    marginTop: hp("8%"),
    width: '80%',
    alignSelf: "center"
  },

  userTitle: {
    fontSize: 20,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
    textAlign: "center"
  },
  userId: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "Inter-Medium",
    marginTop: hp(1),
    textAlign: "center",
    marginBottom: hp(3)
  },
  sendButton: {
    width: '100%',
    alignSelf: "center",
    backgroundColor: Colors.Parrot,
    height: hp(5),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
  },
  sendTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: hp(2),
    color: Colors.White,
  },
  notKnowTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: hp(1.8),
    color: Colors.Black,
    textAlign: "center",
    marginTop: hp(2),
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
    fontSize: hp(1.6),
    color: Colors.Black,
    fontFamily: "Inter-Regular",
    marginTop: hp(0.5),
    lineHeight: 22
  },
})
export default UpdatePopup;