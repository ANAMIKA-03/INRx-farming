import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  FlatList,
  Share,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import SelectChainPopup from '../../../Components/SelectChainPopup';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-community/clipboard';
import {copyToClipboard} from '../../../utils/actionHandlers';

export type Props = {
  navigation: any;
};

const Received = (props: any) => {
  const {navigation} = props;
  const {wallets, activeWallet} = useSelector(
    (state: RootState) => state.wallet,
  );
  const {user} = useSelector((state: RootState) => state.auth);
  const wallet = wallets[activeWallet ? activeWallet : 0];
  const [openSelectChain, setOpenSelectChain] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeSocial = () => {
    setOpenSelectChain(false);
  };

  function shareaddress() {
    try {
      Share.share(
        {
          title: 'INRX Farming ' + wallet?.blockchain + ' Wallet Address',
          message:
            'Hello,I am ' +
            user.name +
            ' This is my ' +
            wallet?.blockchain +
            ' wallet address ' +
            wallet?.address,
        },
        Platform.OS == 'android'
          ? {dialogTitle: 'INRx Farming Wallet Address'}
          : {},
      );
    } catch (e: any) {
      console.log(e, 'error in share');
    }
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>
        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={Images.back} style={Styles.userIcon} />
            </TouchableOpacity>
            <Text style={Styles.userTitle}>{`Received`}</Text>
            <View style={Styles.empty} />
          </View>

          <View style={Styles.walletWrapper}>
            <Image source={Images.currencyLogo} style={Styles.currencyIcon} />
            <Text style={Styles.inrTitle}>
              {wallet?.totalinr ? wallet?.totalinr : `0.000`}
            </Text>
          </View>

          <View style={Styles.amountWrapper}>
            <Text style={Styles.solutionText}>{`+`}</Text>
            <Image source={Images.currencyLogo} style={Styles.amountIcon} />
            <Text style={Styles.solutionText}>{`000.00`}</Text>
          </View>
        </View>
        {/* Main Content */}

        <View style={Styles.mainDataContainer}>
          <View style={Styles.bottomWrapper}>
            <View style={Styles.line} />

            <Text style={Styles.qrText}>{`QR code`}</Text>
            {wallet?.address ? (
              <View
                style={{
                  margin: 15,
                  borderColor: 'rgba(0,0,0,0.3)',
                  borderWidth: 1,
                  padding: 22,
                  borderRadius: 15,
                }}>
                <QRCode
                  value={wallet?.address}
                  logo={activeWallet == 0 ? Images.ethereum : Images.tronicon}
                  logoSize={30}
                  logoBackgroundColor="transparent"
                  size={200}
                />
              </View>
            ) : (
              <Image source={Images.qr} style={Styles.qrIcon} />
            )}
            <TouchableOpacity
              style={Styles.dropDownWrapper}
              onPress={() => {
                setOpenSelectChain(true);
              }}>
              <Text style={Styles.listTitle}>Chain : {wallet?.blockchain}</Text>
              <Ionic name={'chevron-down'} size={18} style={Styles.dotIcon} />
            </TouchableOpacity>
            <Text style={Styles.hashTitle}>
              {wallet?.address
                ? wallet?.address.slice(0, 10) +
                  '...' +
                  wallet?.address.slice(wallet?.blockchain == 'Tron' ? 25 : 32)
                : '0x00000...000000'}
            </Text>
            {copied ? (
              <Text
                style={{
                  color: '#000',
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  position: 'absolute',
                  top: '62%',
                }}>{`Copied`}</Text>
            ) : null}
            <View style={Styles.bottomButton}>
              <TouchableOpacity
                onPress={() => {
                  if (wallet.address) {
                    copyToClipboard(wallet.address, () => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    });
                  }
                }}>
                <Image source={Images.copyIcon} style={Styles.sendIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  if (wallet.address) {
                    shareaddress();
                  }
                }}>
                <Image source={Images.shareIcon} style={Styles.sendIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {openSelectChain == true ? (
        <SelectChainPopup open={openSelectChain} close={closeSocial} />
      ) : null}
    </SafeAreaView>
  );
};

export default Received;
