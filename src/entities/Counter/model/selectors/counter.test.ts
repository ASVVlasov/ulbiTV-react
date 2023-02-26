import { getCounter, getCounterValue } from './counter';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';

describe('counter selectors', () => {
    let deepState: DeepPartial<IStateSchema>;
    let testState: IStateSchema;
    beforeEach(() => {
        deepState = {
            counter: {
                value: 10,
            },
        };
        testState = deepState as IStateSchema;
    });
    test('getCounter should return counter state', () => {
        expect(getCounter(testState)).toEqual({ value: 10 });
    });
    test('getCounterValue should return value of counter state', () => {
        expect(getCounterValue(testState)).toBe(10);
    });
});
