import { type FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/storeConfig';

export const StoreProvider: FC = (props) => {
    const { children } = props;
    return <Provider store={store}>{children}</Provider>;
};
