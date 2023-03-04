import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from 'entities/User';
import { type IStoreSchema } from 'app/providers/StoreProvider/config/storeSchema';

export const rootReducer: ReducersMapObject<IStoreSchema> = {
  counter: counterReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
