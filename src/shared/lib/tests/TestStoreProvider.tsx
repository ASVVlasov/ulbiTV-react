import { type FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore, type DeepPartial } from '@reduxjs/toolkit';

import { rootReducers, type TRootState } from 'app/providers/StoreProvider/config/storeConfig';

export interface ITestStoreProviderProps {
  initialState?: DeepPartial<TRootState>;
}

export const TestStoreProvider: FC<ITestStoreProviderProps> = ({ initialState, children }) => {
  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState as TRootState,
  });
  return <Provider store={store}>{children}</Provider>;
};
