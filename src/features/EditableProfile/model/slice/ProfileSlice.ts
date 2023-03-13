import { createSlice } from '@reduxjs/toolkit';

import { getProfile } from '../services/getProfile';
import { saveProfile } from '../services/saveProfile';
import { type IProfileSchema } from '../types/Profile';

export const initialState: IProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
};
export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfile.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(saveProfile.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(saveProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(saveProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = ProfileSlice;
