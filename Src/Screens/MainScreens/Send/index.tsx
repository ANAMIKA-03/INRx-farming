import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  FlatList
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const Send = (props: any) => {
  const { navigation } = props;
  const [walletAddress, setWalletAddress] = useState("")
  const [walletAmount, setWalletAmount] = useState("")


  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image source={Images.back} style={Styles.userIcon} />
            </TouchableOpacity>
            <Text style={Styles.userTitle}>{`Received`}</Text>
            <View style={Styles.empty} />
          </View>


          <View style={Styles.walletWrapper}>
            <Image source={Images.currencyLogo} style={Styles.currencyIcon} />
            <Text style={Styles.inrTitle}>{`14,545.44`}</Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Text style={Styles.solutionText}>{`+`}</Text>
            <Image source={Images.currencyLogo} style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`5243.54`}</Text>
          </View>

        </View>
        {/* Main Content */}

        <View style={Styles.mainDataContainer}>

          <View style={Styles.bottomWrapper}>

            <View style={Styles.headerWrap}>

              <View style={Styles.inputContainer}>
                <Text style={Styles.primary}>{'Wallet Address'}</Text>
                <View style={Styles.wrapper}>
                  <TextInput style={Styles.textInput}
                    value={walletAddress}
                    placeholder='1hjh22jjh56584jhhgb'
                    placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                    onChangeText={(value) => {
                      setWalletAddress(value)
                    }}
                  />
                </View>
              </View>

              <View style={Styles.inputContainer}>
                <Text style={Styles.primary}>{'Wallet Address'}</Text>
                <View style={Styles.inputWrapper}>

                  <View style={Styles.amountInputWrapper}>
                    <TextInput style={Styles.textInput}
                      value={walletAmount}
                      placeholder='0.085'
                      placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                      onChangeText={(value) => {
                        setWalletAmount(value)
                      }}
                    />
                  </View>

                  <TouchableOpacity style={Styles.dropDownWrapper}>
                    <View style={Styles.completeWrap}>
                      <Image source={Images.convertInrx} style={Styles.listIcon} />
                      <Text style={Styles.listTitle}>{`INRx`}</Text>
                    </View>
                    <Ionic
                      name={"chevron-down"}
                      size={14}
                      style={Styles.dotIcon} />
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <View style={Styles.downBottomWrap}>

              <TouchableOpacity style={Styles.sendButton}>
                <Text style={Styles.sendTitle}>{`Send`}</Text>
              </TouchableOpacity>

            </View>


          </View>
        </View>


      </View>
    </SafeAreaView>
  );
}

export default Send;
