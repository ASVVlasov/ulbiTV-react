import { type FC } from 'react';
import { Provider } from 'react-redux';
import { type IStateSchema } from 'app/providers/StoreProvider/lib/stateSchema';
import { createRootStore } from 'app/providers/StoreProvider/lib/config';

interface IStoreProviderProps {
    initialState?: IStateSchema;
}

export const StoreProvider: FC<IStoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createRootStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};
