import { createSelector } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider';

export const getLoginState = (state: TRootState) => state.login;

export const getUserName = createSelector(getLoginState, (state) => state.username);
export const getPassword = createSelector(getLoginState, (state) => state.password);
