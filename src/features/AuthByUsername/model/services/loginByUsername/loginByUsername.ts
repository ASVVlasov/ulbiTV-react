import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type TRootState } from 'app/providers/StoreProvider';

import { tokenActions } from 'entities/Token';
import { currentUser } from 'entities/User';

import { axiosInstance } from 'shared/api/api';

import { type ILoginSchema } from '../../types/loginSchema';

interface IError {
  message: string;
}

interface ILoginResponse {
  token: string;
}

export type TLoginByUsername = Pick<ILoginSchema, 'username' | 'password'>;

export const loginByUsername = createAsyncThunk<
  ILoginResponse,
  TLoginByUsername,
  { rejectValue: string; state: TRootState }
>('login/loginByUsername', async ({ username, password }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axiosInstance.post<ILoginResponse, AxiosResponse<ILoginResponse>, TLoginByUsername>(
      '/auth/login',
      {
        username,
        password,
      },
    );
    dispatch(tokenActions.setToken(response.data.token));
    void dispatch(currentUser());
    return response.data;
  } catch (err) {
    if (isAxiosError<IError>(err)) {
      if (err.response?.data.message) {
        return rejectWithValue(err.response.data.message);
      }
    }

    return rejectWithValue(JSON.stringify(err));
  }
});
