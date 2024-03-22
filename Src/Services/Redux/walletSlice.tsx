import {createSlice} from '@reduxjs/toolkit';

export interface Wallet {
  address: string;
  blockchain: string;
  totalinr: number;
  totalusd: number;
  createdAt: string;
}
export interface Asset {
  balance: number;
  icon: string;
  symbol: string;
  available: number;
}

export interface STAKE {
  symbol: String;
  tokenAmount: number;
  stakeAmount: number;
  claimAmount: number;
  totalAmount: number;
  availableAmount: number;
  startTimestamp: number;
  endTimestamp: number;
  isClaimed: boolean;
  isStakeCompleted: boolean;
  stakePrice: number;
  count: number;
}

export interface ALLSTAKES{
  INR: STAKE;
    USDT: STAKE;
    USDC: STAKE;
}

export interface WalletSliceStates {
  wallets: Wallet[];
  activeWallet: number;
  assets: Asset[];
  stakes: STAKE[];
  allstakes: ALLSTAKES
}

const initialState: WalletSliceStates = {
  wallets: [],
  activeWallet: 0,
  assets: [],
  stakes: [],
  allstakes: {
    INR: {
      symbol: '',
      tokenAmount: 0,
      stakeAmount: 0,
      claimAmount: 0,
      totalAmount: 0,
      availableAmount: 0,
      startTimestamp: 0,
      endTimestamp: 0,
      isClaimed: false,
      isStakeCompleted: false,
      stakePrice: 0,
      count: 0,
    },
    USDT: {
      symbol: '',
      tokenAmount: 0,
      stakeAmount: 0,
      claimAmount: 0,
      totalAmount: 0,
      availableAmount: 0,
      startTimestamp: 0,
      endTimestamp: 0,
      isClaimed: false,
      isStakeCompleted: false,
      stakePrice: 0,
      count: 0,
    },
    USDC: {
      symbol: '',
      tokenAmount: 0,
      stakeAmount: 0,
      claimAmount: 0,
      totalAmount: 0,
      availableAmount: 0,
      startTimestamp: 0,
      endTimestamp: 0,
      isClaimed: false,
      isStakeCompleted: false,
      stakePrice: 0,
      count: 0,
    },
  },
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallets = action.payload.wallet;
    },
    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
    },
    setAssets: (state, action) => {
      state.assets = action.payload.assets;
    },
    setStakes: (state, action) => {
      state.stakes = action.payload.stakes;
      state.allstakes = action.payload.allstakes;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setWallet, setActiveWallet, setAssets, setStakes} =
  walletSlice.actions;

export default walletSlice.reducer;
