import { type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';

import { type ILoginSchema } from 'features/AuthByUsername';

import { type ICounterSchema } from 'entities/Counter';
import { type ITokenSchema } from 'entities/Token';
import { type IUserSchema } from 'entities/User';

export interface IStoreSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  token: ITokenSchema;

  // Асинхронные редьюсеры
  login?: ILoginSchema;
}

export type TStoreSchemaKey = keyof IStoreSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStoreSchema>;
  reduce: (state: IStoreSchema, action: AnyAction) => IStoreSchema;
  add: (key: TStoreSchemaKey, reducer: Reducer) => void;
  remove: (key: TStoreSchemaKey) => void;
}

export interface IStoreWithReducerManager extends EnhancedStore {
  reducerManager: IReducerManager;
}
