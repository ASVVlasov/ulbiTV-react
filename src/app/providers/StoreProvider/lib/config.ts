import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { type IStateSchema } from './stateSchema';

export const createRootStore = (initialState?: IStateSchema) =>
    configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
//
// export const store = configureStore<IStateSchema>({
//     reducer: {
//         counter:
//     },
//     devTools: __IS_DEV__,
// });
//
// export type RootState = ReturnType<typeof store.getState>;
//
// export type AppDispatch = typeof store.dispatch;
