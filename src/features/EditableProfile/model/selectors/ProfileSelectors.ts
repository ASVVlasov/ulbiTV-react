import { createSelector } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider';

import { initialState } from '../slice/ProfileSlice';

export const getProfileSelector = (state: TRootState) => state.profile ?? initialState;

export const getProfileDataSelector = createSelector(getProfileSelector, (state) => state.data);
export const getProfileIsLoadingSelector = createSelector(getProfileSelector, (state) => state.isLoading);
