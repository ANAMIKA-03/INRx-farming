import {Alert} from 'react-native';
import {
  claimHistory,
  claimReward,
  fetchWallet,
  getStakeData,
  getTokenPriceInINR,
  logOutUser,
  swapHistory,
  transferToken,
  updateBalance,
  withdrawList,  
} from '../Services/Apis/apis';
import {User, setAuthInfo, setSession} from '../Services/Redux/authSlice';
import {setAssets, setStakes, setWallet} from '../Services/Redux/walletSlice';
import {GETDATA, TRANSFERTOKEN} from './constants';
import Clipboard from '@react-native-community/clipboard';

export function updateWalletAndAssets(mobile: String, dispatch: any) {
  fetchWallet(mobile)
    .then((res: any) => {
      // console.log(res.assets, 'assets');
      if (res?.status == 200) {
        dispatch(
          setWallet({wallet: res?.wallets?.length > 0 ? res?.wallets : []}),
        );
        dispatch(
          setAssets({assets: res?.assets?.length > 0 ? res?.assets : []}),
        );
      }
    })
    .catch((e: any) => {
      console.log(e, 'Error in wallet fetch in homescreen');
    });
}

export function balanceUpdate(mobile: String, cb: any) {
  updateBalance(mobile)
    .then(res => {
      if (res && res?.status == 200) {
        console.log(
          res?.message,
          ' :success::balanceUpdate():actionHandlers.tsx',
        );
        if (cb) {
          cb();
        }
      } else {
        console.log(
          res?.message,
          ' :failer::balanceUpdate():actionHandlers.tsx',
        );
      }
    })
    .catch(e => {
      if (cb) {
        cb();
      }
      console.log(e, ' ::balanceUpdate():actionHandlers.tsx');
    });
}

export function transferTokenAction(data: TRANSFERTOKEN, cb: any) {
  try {
    transferToken(data)
      .then((res: any) => {
        if (res?.status) {
          if (cb) {
            cb(res);
          }
          console.log(
            res?.message,
            'Success::in transferTokenAction()::actionhandlers.tsx',
          );
        } else {
          if (cb) {
            cb(res);
          }
          console.log(
            res?.message,
            'Failur::in transferTokenAction()::actionhandlers.tsx',
          );
        }
      })
      .catch((e: any) => {
        if (cb) {
          cb(false);
        }
        console.log(e, 'Error in transferTokenAction()::actionhandlers.tsx');
      });
  } catch (e: any) {
    if (cb) {
      cb(false);
    }
    console.log(e, '::CatchError in transferTokenAction::actionHandlers.tsx');
  }
}

export function sendHistory(mobile: String, setWithdrawList: any, cb: any) {
  withdrawList(mobile)
    .then(resp => {
      if (resp?.status == 200) {
        setWithdrawList(resp.data);
      }
      if (cb) {
        cb();
      }
    })
    .catch(e => {
      if (cb) {
        cb();
      }
      console.log(e, 'Error in sendHistory():actionHandlers.tsx');
    });
}

export function stakeHistory(
  user: User,
  dispatch: any,
  tokenId: String,
  cb: any,
) {
  if (user.userId) {
    const data: GETDATA = {
      mobile: user.mobileNumber,
      tokenId: tokenId,
    };
    getStakeData(data)
      .then(resp => {
        // console.log(resp.data,' stakelist')
        if (resp.status == 200) {
          dispatch(setStakes({stakes: resp.data, allstakes: resp.stakes}));
        } else {
          dispatch(setStakes({stakes: [], allstakes: {}}));
        }
        if (cb) {
          cb();
        }
      })
      .catch((e: any) => {
        if (cb) {
          cb();
        }
        console.log(e, 'Error');
      });
  }
}

export function convertHistory(data: GETDATA, setSwapList: any, cb: any) {
  swapHistory(data)
    .then(resp => {
      // console.log(resp)
      if (resp?.status == 200) {
        setSwapList(resp.data);
      }
      if (cb) {
        cb();
      }
    })
    .catch(e => {
      if (cb) {
        cb();
      }
      console.log(e, 'Error in sendHistory():actionHandlers.tsx');
    });
}

export function claimListData(data: GETDATA, setClaimList: any, cb: any) {
  claimHistory(data)
    .then(resp => {
      // console.log(resp)
      if (resp?.status == 200) {
        setClaimList(resp.data);
      }
      if (cb) {
        cb();
      }
    })
    .catch(e => {
      if (cb) {
        cb();
      }
      console.log(e, 'Error in sendHistory():actionHandlers.tsx');
    });
}

export function claimToken(user: User, tokenId: String, cb: any) {
  if (user.userId) {
    const data: GETDATA = {
      mobile: user.mobileNumber,
      tokenId: tokenId,
    };
    claimReward(data)
      .then(resp => {
        // console.log(resp.stakes,' stakelist')
        Alert.alert(resp.message);
        if (cb) {
          cb();
        }
      })
      .catch((e: any) => {
        if (cb) {
          cb();
        }
        console.log(e, 'Error');
      });
  }
}

export const copyToClipboard = (string: string, cb: any) => {
  Clipboard.setString(string);
  if (cb) {
    cb();
  }
};

export async function getINRPriceOfToken(token: string) {
  try {
    const coin = token?.toUpperCase();
    const price = await getTokenPriceInINR(coin);
    if (price && price?.data) {
      if (price?.data[coin]?.quote && price?.data[coin]?.quote['INR']) {
        const prc =
          price?.data[coin]?.quote && price?.data[coin]?.quote['INR'].price;
        return prc;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } catch (e) {
    console.log(e, 'Error in getINRPriceOfToken()::actionHandlers.tsx');
    return 0;
  }
}

export async function totalInrCalculator(assets: any, cb: any) {
  let totalinr = 0;
  assets.forEach(async (item: any, i: number) => {
    let price = 0;
    // if (item.symbol != 'INR' && item.symbol != 'INRx') {
    //   price = await getINRPriceOfToken(item.symbol);
    //   console.log('symbol',item.symbol,price);
    // } else {
    //   price = 1;
    // }

    if (price > 0) {
      console.log(price, item.symbol, item.available, 'dd');
      totalinr += price * item.available;
      if (i == assets.length - 1) {
        cb(0);
      }
    }
  });
}

export async function logOutAction(
  user: User,
  tokenId: any,
  dispatch: any,
  navigation: any,
  cb: any,
) {
  try {
    const data = {
      mobile: user.mobileNumber,
      tokenId: tokenId,
      userId: user.userId,
    };
    const resp = await logOutUser(data);
    const initaluser = {
      mobileNumber: '',
      userId: '',
      name: '',
      dob: '',
    };
    if (resp.logout) {
      dispatch(setAuthInfo({user: {...initaluser}, login: false}));
      dispatch(setSession(''));
      navigation.replace('Splash');
    } else {
      Alert.alert('Sometihng went wrong!');
    }
    if (cb) {
      cb();
    }
  } catch (e) {
    if (cb) {
      cb();
    }
    console.log(e, 'Error in logoutuser');
  }
}
