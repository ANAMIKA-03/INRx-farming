import {Alert} from 'react-native';
import {
  claimReward,
  fetchWallet,
  getStakeData,
  transferToken,
  updateBalance,
  withdrawList,
} from '../Services/Apis/apis';
import {User} from '../Services/Redux/authSlice';
import {setAssets, setStakes, setWallet} from '../Services/Redux/walletSlice';
import {GETDATA, TRANSFERTOKEN} from './constants';

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

export function stakeHistory(user: User, dispatch: any, tokenId: String) {
  if (user.userId) {
    const data: GETDATA = {
      mobile: user.mobileNumber,
      tokenId: tokenId,
    };
    getStakeData(data)
      .then(resp => {
        // console.log(resp.stakes,' stakelist')
        if (resp.status == 200) {
          dispatch(setStakes({stakes: resp.data, allstakes: resp.stakes}));
        } else {
          dispatch(setStakes({stakes: [], allstakes: {}}));
        }
      })
      .catch((e: any) => {
        console.log(e, 'Error');
      });
  }
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
