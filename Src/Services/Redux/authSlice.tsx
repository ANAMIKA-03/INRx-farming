import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface User {
  mobileNumber: String;
  userId: String;
  name: String;
  dob: String;
}
export interface AuthSliceStates {
  login: boolean;
  user: User;
  sessionId: String;
  apikey: String;
}

const initialState: AuthSliceStates = {
  login: false,
  user: {
    mobileNumber: '+910000000000',
    userId: '',
    name: '',
    dob:''
  },
  sessionId: '',
  apikey: '',
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
      state.sessionId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuthInfo, setSession} = authSlice.actions;

export default authSlice.reducer;
