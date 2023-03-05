import { type ICounterSchema } from '../types/counterSchema';

import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  let testState: ICounterSchema;
  beforeEach(() => {
    testState = {
      value: 10,
    };
  });

  test('should work with undefined state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
  test('should increment counter', () => {
    expect(counterReducer(testState, counterActions.increment())).toEqual({ value: 11 });
  });
  test('should decrement counter', () => {
    expect(counterReducer(testState, counterActions.decrement())).toEqual({ value: 9 });
  });
});
