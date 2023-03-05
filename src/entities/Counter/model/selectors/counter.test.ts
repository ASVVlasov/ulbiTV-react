import { type DeepPartial } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider/config/storeConfig';

import { getCounter, getCounterValue } from './counter';

describe('counter selectors', () => {
  let deepState: DeepPartial<TRootState>;
  let testState: TRootState;
  beforeEach(() => {
    deepState = {
      counter: {
        value: 10,
      },
    };
    testState = deepState as TRootState;
  });
  test('getCounter should return counter state', () => {
    expect(getCounter(testState)).toEqual({ value: 10 });
  });
  test('getCounterValue should return value of counter state', () => {
    expect(getCounterValue(testState)).toBe(10);
  });
});
