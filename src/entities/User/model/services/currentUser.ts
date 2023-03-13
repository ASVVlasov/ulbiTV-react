import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type IThunkExtra } from 'app/providers/StoreProvider';

import { type IUser } from 'entities/User';

interface IError {
  message: string;
}

export const currentUser = createAsyncThunk<IUser, undefined, { rejectValue: string; extra: IThunkExtra }>(
  'user/currentUser',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<IUser, AxiosResponse<IUser>>('/users/current');
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
