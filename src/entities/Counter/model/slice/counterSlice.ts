import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ICounterSchema } from '../types/counterSchema';

const initialState: ICounterSchema = {
    value: 0,
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
