import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { authByUserName } from '../services/authByUsername/authByUsername';
import { type IAuthByUsernameSchema } from '../types/authByUsernameSchema';

export const initialState: IAuthByUsernameSchema = {
  email: '',
  password: '',
  isLoading: false,
};
export const authByUsernameSlice = createSlice({
  name: 'authByUsername',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authByUserName.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })

      .addCase(authByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authByUsernameActions, reducer: authByUsernameReducer } = authByUsernameSlice;
