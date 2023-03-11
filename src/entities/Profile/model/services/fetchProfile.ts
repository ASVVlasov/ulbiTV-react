import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type IThunkExtra } from 'app/providers/StoreProvider';

import { type IProfile } from '../types/Profile';

interface IError {
  message: string;
}

export const fetchProfile = createAsyncThunk<IProfile, undefined, { rejectValue: string; extra: IThunkExtra }>(
  'profile/fetchProfile',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<IProfile, AxiosResponse<IProfile>>('/users/userInfo');
      return response.data;
    } catch (err) {
      if (isAxiosError<IError>(err)) {
        if (err.response?.data.message) {
          return rejectWithValue(err.response.data.message);
        }
      }

      return rejectWithValue(JSON.stringify(err));
    }
  },
);
