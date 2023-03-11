import { createSlice } from '@reduxjs/toolkit';

import { fetchProfile } from '../services/fetchProfile';
import { type IProfileSchema } from '../types/Profile';

export const initialState: IProfileSchema = {
  profile: undefined,
  error: undefined,
};
export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.error = undefined;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = ProfileSlice;
