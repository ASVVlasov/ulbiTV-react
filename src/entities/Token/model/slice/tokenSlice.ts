import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ITokenSchema } from 'entities/Token/model/types/token';

import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localStorage';

const initialState: ITokenSchema = {};
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload);
      state.token = action.payload;
    },
    loadToken(state) {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      if (token) {
        state.token = token;
      }
    },
  },
});

export const { actions: tokenActions, reducer: tokenReducer } = tokenSlice;
