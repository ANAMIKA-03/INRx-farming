import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface User {
  mobileNumber: String;
  userId: String;
  name: String;
  dob: String;
  username:String;
}
export interface AuthSliceStates {
  login: boolean;
  user: User;
  tokenId: String;
  apikey: String;
  initapplication: boolean;
}

const initialState: AuthSliceStates = {
  login: false,
  user: {
    mobileNumber: '+910000000000',
    userId: '',
    name: '',
    dob: '',
    username:'N/A'
  },
  tokenId: '',
  apikey: '',
  initapplication: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      state.user = action.payload.user;
      state.login = action.payload.login;
    },
    setSession: (state, action: PayloadAction<String>) => {
      state.tokenId = action.payload;
    },
    setAppInit: (state, action) => {
      state.initapplication = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuthInfo, setSession, setAppInit} = authSlice.actions;

export default authSlice.reducer;
