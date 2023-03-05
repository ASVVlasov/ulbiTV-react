import { createSelector } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider/config/storeConfig';

import { type ICounterSchema } from '../types/counterSchema';

export const getCounter = (state: TRootState) => state.counter;

export const getCounterValue = createSelector(getCounter, (counter: ICounterSchema) => counter.value);
