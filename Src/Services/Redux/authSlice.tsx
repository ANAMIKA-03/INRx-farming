import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthSliceStates {
  login: boolean;
  user: Object;
  sessionId: String;
  apikey: String;
}

const initialState: AuthSliceStates = {
  login: false,
  user: {},
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
