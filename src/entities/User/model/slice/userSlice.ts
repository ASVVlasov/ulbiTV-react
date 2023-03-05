import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { currentUser } from 'entities/User/model/services/currentUser/currentUser';

import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localStorage';

import { type IUser, type IUserSchema } from '../types/user';

const initialState: IUserSchema = {};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = undefined;
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(currentUser.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
