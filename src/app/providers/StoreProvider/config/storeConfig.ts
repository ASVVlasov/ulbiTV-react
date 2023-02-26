import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const rootReducer = {
    counter: counterReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
