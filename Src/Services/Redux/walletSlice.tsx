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
}

export interface WalletSliceStates {
  wallets: Wallet[];
  activeWallet: number;
  assets: Asset[];
}

const initialState: WalletSliceStates = {
  wallets: [],
  activeWallet: 0,
  assets: [],
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
  },
});

// Action creators are generated for each case reducer function
export const {setWallet, setActiveWallet, setAssets} = walletSlice.actions;

export default walletSlice.reducer;
