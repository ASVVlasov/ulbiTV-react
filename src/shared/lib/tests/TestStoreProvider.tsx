import { type FC } from 'react';
import { configureStore, type DeepPartial } from '@reduxjs/toolkit';
import { rootReducer, type TRootState } from 'app/providers/StoreProvider/config/storeConfig';
import { Provider } from 'react-redux';

export interface ITestStoreProviderProps {
    initialState?: DeepPartial<TRootState>;
}

export const TestStoreProvider: FC<ITestStoreProviderProps> = ({ initialState, children }) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState as TRootState,
    });
    return <Provider store={store}>{children}</Provider>;
};
