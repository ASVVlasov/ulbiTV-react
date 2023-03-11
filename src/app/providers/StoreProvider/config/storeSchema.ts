import { type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type AxiosInstance } from 'axios';

import { type IAuthByUsernameSchema } from 'features/AuthByUsername';

import { type IAuthSchema } from 'entities/Auth';
import { type IProfileSchema } from 'entities/Profile';
import { type IUserSchema } from 'entities/User';

export interface IStoreSchema {
  user: IUserSchema;
  auth: IAuthSchema;

  // Асинхронные редьюсеры
  profile?: IProfileSchema;
  authByUserName?: IAuthByUsernameSchema;
}

export type TStoreSchemaKey = keyof IStoreSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStoreSchema>;
  reduce: Reducer<IStoreSchema>;
  add: (key: TStoreSchemaKey, reducer: Reducer) => void;
  remove: (key: TStoreSchemaKey) => void;
}

export interface IStoreWithReducerManager extends EnhancedStore {
  reducerManager: IReducerManager;
}

export interface IThunkExtra {
  api: AxiosInstance;
}
