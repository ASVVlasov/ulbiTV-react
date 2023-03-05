import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type IUser } from 'entities/User';

import { axiosInstance } from 'shared/api/api';

interface IError {
  message: string;
}

export const currentUser = createAsyncThunk<IUser, undefined, { rejectValue: string }>(
  'user/currentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<IUser, AxiosResponse<IUser>>('/users/current');
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
