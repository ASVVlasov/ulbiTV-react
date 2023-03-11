import { createSlice } from '@reduxjs/toolkit';

import { type IProfileSchema } from '../types/Profile';

const initialState: IProfileSchema = {};
export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = ProfileSlice;
