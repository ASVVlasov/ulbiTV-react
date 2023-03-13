import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosResponse, isAxiosError } from 'axios';

import { type IThunkExtra } from 'app/providers/StoreProvider';

import { type IProfile } from 'entities/Profile';

interface IError {
  message: string;
}

interface ISaveProfileRequest {
  profile: IProfile;
  avatar?: File;
}

export const saveProfile = createAsyncThunk<IProfile, ISaveProfileRequest, { rejectValue: string; extra: IThunkExtra }>(
  'profile/saveProfile',
  async (saveProfileRequest, { rejectWithValue, extra }) => {
    try {
      const { profile, avatar } = saveProfileRequest;
      const formData = new FormData();
      Object.entries(profile).forEach(([key, value]) => {
        formData.set(key, String(value));
      });
      if (avatar) {
        formData.set('avatar', avatar);
      }

      const response = await extra.api.put<IProfile, AxiosResponse<IProfile>>('/users/current', formData);
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
