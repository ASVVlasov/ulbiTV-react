import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localStorage';

import { type IAuthSchema } from '../types/Auth';

const initialState: IAuthSchema = {
  access_token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ?? '',
};
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload);
      state.access_token = action.payload;
    },
    loadToken(state) {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      if (token) {
        state.access_token = token;
      }
    },
  },
});

export const { actions: authActions, reducer: authReducer } = AuthSlice;
