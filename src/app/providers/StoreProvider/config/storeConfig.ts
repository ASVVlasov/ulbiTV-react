import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';

import { type IStoreSchema } from 'app/providers/StoreProvider/config/storeSchema';

import { loginReducer } from 'features/AuthByUsername';

import { counterReducer } from 'entities/Counter';
import { tokenReducer } from 'entities/Token';
import { userReducer } from 'entities/User';

export const rootReducer: ReducersMapObject<IStoreSchema> = {
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
  token: tokenReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
