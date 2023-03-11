import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';

import { authReducer } from 'entities/Auth';
import { userReducer } from 'entities/User';

import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { type IStoreSchema, type IStoreWithReducerManager } from './storeSchema';

export const rootReducers: ReducersMapObject<IStoreSchema> = {
  user: userReducer,
  auth: authReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
});

(store as IStoreWithReducerManager).reducerManager = reducerManager;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
