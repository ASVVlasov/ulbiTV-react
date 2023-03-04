import { createSlice } from '@reduxjs/toolkit';
import { type IUserSchema } from '../types/user';

const initialState: IUserSchema = {};
export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
