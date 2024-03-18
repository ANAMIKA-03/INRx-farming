import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import {sendHistory} from '../../../utils/actionHandlers';
import {WITHDRAWLIST} from '../../../utils/constants';

export type Props = {
  navigation: any;
};

const History = (props: any) => {
  const {navigation} = props;
  const [tab, setTab] = useState(1);
  const [withdrawList, setWithdrawList] = useState<WITHDRAWLIST[]>([]);
  const {user} = useSelector((state: RootState) => state.auth);
  const [loading, setloading] = useState(false);

  const HISTORY_DATA = [
    {
      symbol: `USDT`,
      createdAt: `2024-03-18T07:27:50.226+00:00`,
      amount: `2,000`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-19T07:27:50.226+00:00`,
      amount: `1,500`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-11T07:27:50.226+00:00`,
      amount: `2,000`,
      status: `Completed`,
    },
    {
      symbol: `RAY`,
      createdAt: `2024-03-13T07:27:50.226+00:00`,
      amount: `1,023.7946`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-12T07:27:50.226+00:00`,
      amount: `3,427.85600591`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-21T07:27:50.226+00:00`,
      amount: `740`,
      status: `Completed`,
    },
    {
      symbol: `BUSD `,
      createdAt: `2024-03-18T07:27:50.226+00:00`,
      amount: `14.73657197`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-18T07:27:50.226+00:00`,
      amount: `3,427.85600591`,
      status: `Completed`,
    },
    {
      symbol: `USDT`,
      createdAt: `2024-03-10T07:27:50.226+00:00`,
      amount: `740`,
      status: `Completed`,
    },
    {
      symbol: `BUSD `,
      createdAt: `2024-03-23T07:27:50.226+00:00`,
      amount: `14.73657197`,
      status: `Completed`,
    },
  ];

  const selectTab = (num: any) => {
    setTab(num);
  };

  useEffect(() => {
    if (user.mobileNumber && tab == 2) {
		setloading(true)
      sendHistory(user.mobileNumber, setWithdrawList,()=>{setloading(false)});
    } else {
      setWithdrawList(HISTORY_DATA as any);
    }
  }, [user, tab]);

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      {loading ? (
        <ActivityIndicator
          color={'#000'}
          size={28}
          style={{position: 'absolute', top: '50%', left: '45%'}}
        />
      ) : null}
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
            <Text style={Styles.userTitle}>{`Transaction History`}</Text>
            <View style={Styles.empty} />
          </View>
        </View>
        {/* Tabs Data */}

        <View style={Styles.flexNotification}>
          <TouchableOpacity onPress={() => selectTab(1)}>
            <Text
              style={[
                tab == 1 ? Styles.innerActiveTab : Styles.innerInActiveTab,
              ]}>
              {'Deposit'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => selectTab(2)}>
            <Text
              style={[
                tab == 2 ? Styles.innerActiveTab : Styles.innerInActiveTab,
              ]}>
              {'Withdrawals'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => selectTab(3)}>
            <Text
              style={[
                tab == 3 ? Styles.innerActiveTab : Styles.innerInActiveTab,
              ]}>
              {'Buy'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.line} />

        {/* Main Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>
            <View style={Styles.dataContainer}>
              <View style={Styles.tabContainer}>
                <Text style={Styles.inrTitle}>{`INRx`}</Text>
              </View>
              <View style={Styles.leftWrapper}>
                <Text
                  style={Styles.depositText}>{`Deposits not arrived?`}</Text>
                <Text
                  style={
                    Styles.solutionText
                  }>{`Check solutions here >  `}</Text>
              </View>
            </View>

            {withdrawList?.map((item, keyID) => {
              return (
                <TouchableOpacity
                  key={keyID + 'Withdrwalist'}
                  onPress={() => {
                    navigation.navigate('HistoryDetail');
                  }}
                  style={Styles.listContainer}>
                  <View>
                    <Text style={Styles.listTitle}>{item?.symbol}</Text>
                    <Text style={Styles.listDescription}>
                      {new Date(item?.createdAt).toLocaleDateString()}
                      {` `}
                      {new Date(item?.createdAt).toLocaleTimeString()}
                    </Text>
                  </View>
                  <View>
                    <Text style={Styles.priceTitle}>{item?.amount}</Text>
                    <View style={Styles.completeWrap}>
                      <Ionic name={'ellipse'} size={6} style={Styles.dotIcon} />
                      <Text style={Styles.completeText}>{`Completed`}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;
