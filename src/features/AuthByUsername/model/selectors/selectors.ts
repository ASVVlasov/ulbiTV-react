import { createSelector } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider';

import { initialState } from 'features/AuthByUsername/model/slice/loginSlice';

export const getLoginState = (state: TRootState) => state.login ?? initialState;

export const getUserName = createSelector(getLoginState, (state) => state.username);
export const getPassword = createSelector(getLoginState, (state) => state.password);
