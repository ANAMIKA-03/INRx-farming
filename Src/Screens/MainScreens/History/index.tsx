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
  FlatList,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Services/Redux/store';
import {
  claimListData,
  convertHistory,
  sendHistory,
  stakeHistory,
} from '../../../utils/actionHandlers';
import {
  CLAIMLIST,
  GETDATA,
  SWAPLIST,
  WITHDRAWLIST,
} from '../../../utils/constants';

export type Props = {
  navigation: any;
};

const History = (props: any) => {
  const {navigation} = props;
  const [tab, setTab] = useState(1);
  const [withdrawList, setWithdrawList] = useState<WITHDRAWLIST[]>([]);
  const [swapList, setSwapList] = useState<SWAPLIST[]>([]);
  const [claimList, setClaimList] = useState<CLAIMLIST[]>([]);
  const {user, tokenId} = useSelector((state: RootState) => state.auth);
  const {stakes} = useSelector((state: RootState) => state.wallet);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

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
      setloading(true);

      sendHistory(user.mobileNumber, setWithdrawList, () => {
        setloading(false);
      });
    }
    if (user.mobileNumber && tab == 3) {
      const data: GETDATA = {
        mobile: user.mobileNumber,
        tokenId: tokenId,
      };
      setloading(true);
      convertHistory(data, setSwapList, () => {
        setloading(false);
      });
    }

    if (user.mobileNumber && tab == 4) {
      setloading(true);
      stakeHistory(user, dispatch, tokenId);
    }

    if (user.mobileNumber && tab == 5) {
      const data: GETDATA = {
        mobile: user.mobileNumber,
        tokenId: tokenId,
      };
      setloading(true);
      claimListData(data, setClaimList, () => {
        setloading(false);
      });
    }
  }, [user, tab]);


  const SwapList = ({item, i}: any) => {
    return (
      <TouchableOpacity
        key={i + 'Convert_list'}
        onPress={() => {
          navigation.navigate('HistoryDetail');
        }}
        style={Styles.listContainer}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Styles.listTitle}>{item?.payToken}</Text>
            <Text style={Styles.listTitle}>/{` `}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontFamily: 'Inter-SemiBold',
              }}>
              {item?.getToken}
            </Text>
          </View>

          <Text style={Styles.listDescription}>
            {new Date(item?.createdAt).toLocaleDateString()}
            {` `}
            {new Date(item?.createdAt).toLocaleTimeString()}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text style={Styles.listTitle}>{item?.payAmount}</Text>
            <Text style={Styles.listTitle}>/{` `}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontFamily: 'Inter-SemiBold',
              }}>
              {item?.getAmount}
            </Text>
          </View>
          <View style={Styles.completeWrap}>
            <Ionic name={'ellipse'} size={6} style={Styles.dotIcon} />
            <Text style={Styles.completeText}>{`Completed`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => selectTab(1)}
              style={{paddingHorizontal: 15}}>
              <Text
                style={[
                  tab == 1 ? Styles.innerActiveTab : Styles.innerInActiveTab,
                ]}>
                {'Deposit'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTab(2)}
              style={{paddingHorizontal: 15}}>
              <Text
                style={[
                  tab == 2 ? Styles.innerActiveTab : Styles.innerInActiveTab,
                ]}>
                {'Withdrawals'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTab(3)}
              style={{paddingHorizontal: 15}}>
              <Text
                style={[
                  tab == 3 ? Styles.innerActiveTab : Styles.innerInActiveTab,
                ]}>
                {'Convert'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTab(4)}
              style={{paddingHorizontal: 15}}>
              <Text
                style={[
                  tab == 4 ? Styles.innerActiveTab : Styles.innerInActiveTab,
                ]}>
                {'Stake'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTab(5)}
              style={{paddingHorizontal: 15}}>
              <Text
                style={[
                  tab == 5 ? Styles.innerActiveTab : Styles.innerInActiveTab,
                ]}>
                {'Claim'}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={Styles.line} />

        {/* Main Content */}
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={Styles.scrollContainer}>

          <View style={Styles.dataContainer}>
            <View style={Styles.tabContainer}>
              <Text style={Styles.inrTitle}>{`INRx`}</Text>
            </View>
            <View style={Styles.leftWrapper}>
              <Text style={Styles.depositText}>{`Deposits not arrived?`}</Text>
              <Text
                style={Styles.solutionText}>{`Check solutions here >  `}</Text>
            </View>
          </View>

          {tab == 2 ? (
            <FlatList
              data={withdrawList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index + 'Withdrwalist'}
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
                        <Ionic
                          name={'ellipse'}
                          size={6}
                          style={Styles.dotIcon}
                        />
                        <Text style={Styles.completeText}>{`Completed`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : null}
          {tab == 3 ? (
            <FlatList
              data={swapList}
              renderItem={item => {
                return (
                  <SwapList
                    item={item.item}
                    i={item.index}
                    key={item.index + 'swaplist'}
                  />
                );
              }}
            />
          ) : null}

          {tab == 4 ? (
            <FlatList
              data={stakes}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index + 'Withdrwalist'}
                    onPress={() => {
                      navigation.navigate('HistoryDetail');
                    }}
                    style={Styles.listContainer}>
                    <View>
                      <Text style={Styles.listTitle}>{item?.symbol}{`- Amount: `}{item?.tokenAmount}</Text>
                      <Text style={Styles.listDescription}>
                        {new Date(
                          item?.startTimestamp * 1000,
                        ).toLocaleDateString()}
                        {` `}
                        {new Date(
                          item?.startTimestamp * 1000,
                        ).toLocaleTimeString()}
                      </Text>
                    </View>
                    <View>
                      <Text style={Styles.priceTitle}>
                        {(item?.stakeAmount).toFixed(3)}
                        {` INRx`}
                      </Text>
                      <View style={Styles.completeWrap}>
                        <Ionic
                          name={'ellipse'}
                          size={6}
                          style={[Styles.dotIcon,{color:item.isStakeCompleted?'rgba(200,0,0,7)':Colors.Parrot}]}
                        />
                        <Text style={Styles.completeText}>{item.isStakeCompleted? `Not active` :`Active`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : null}

          {tab == 5 ? (
            <FlatList
              data={claimList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index + 'Withdrwalist'}
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
                      <Text style={Styles.priceTitle}>
                        {(item?.amount).toFixed(3)}
                        {` INRx`}
                      </Text>
                      <View style={Styles.completeWrap}>
                        <Ionic
                          name={'ellipse'}
                          size={6}
                          style={Styles.dotIcon}
                        />
                        <Text style={Styles.completeText}>{`Completed`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : null}
        </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default History;
