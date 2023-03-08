import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type TRootState } from 'app/providers/StoreProvider';

import { type IAuthByUsernameSchema } from 'features/AuthByUsername/model/types/authByUsernameSchema';

import { authActions, type IAuthSchema } from 'entities/Auth';
import { currentUser } from 'entities/User';

import { axiosInstance } from 'shared/api/api';

interface IError {
  message: string;
}

export const authByUserName = createAsyncThunk<
  IAuthSchema,
  IAuthByUsernameSchema,
  { rejectValue: string; state: TRootState }
>('auth/authByUsername', async ({ email, password }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axiosInstance.post<IAuthSchema, AxiosResponse<IAuthSchema>, IAuthByUsernameSchema>(
      '/auth/signin',
      {
        email,
        password,
      },
    );
    dispatch(authActions.setToken(response.data.access_token));
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
