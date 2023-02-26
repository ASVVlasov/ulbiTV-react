import { type FC } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';
import { createRootStore } from 'app/providers/StoreProvider/lib/config';
export interface ITestStoreProviderProps {
    initialState?: DeepPartial<IStateSchema>;
}
export const TestStoreProvider: FC<ITestStoreProviderProps> = ({ initialState, children }) => {
    const store = createRootStore(initialState as IStateSchema);
    return <Provider store={store}>{children}</Provider>;
};
