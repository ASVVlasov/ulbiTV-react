import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { tokenReducer } from 'entities/Token';
import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';
import { type IStoreSchema, type IStoreWithReducerManager } from './storeSchema';

export const rootReducers: ReducersMapObject<IStoreSchema> = {
  counter: counterReducer,
  user: userReducer,
  token: tokenReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
});

(store as IStoreWithReducerManager).reducerManager = reducerManager;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
