import { type IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { type ICounterSchema } from '../types/counterSchema';

export const getCounter = (state: IStateSchema) => state.counter;
export const getCounterValue = createSelector(getCounter, (counter: ICounterSchema) => counter.value);
