import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { type IStoreWithReducerManager, type TStoreSchemaKey } from 'app/providers/StoreProvider/config/storeSchema';

export const useAsyncStore = (key: TStoreSchemaKey, reducer: Reducer) => {
  const store = useStore() as IStoreWithReducerManager;
  const dispatch = useAppDispatch();
  useEffect(() => {
    store.reducerManager.add(key, reducer);
    dispatch({ type: `@INIT ${key} reducer` });
    return () => {
      store.reducerManager.remove(key);
      dispatch({ type: `@DESTROY ${key} reducer` });
    };
  }, []);
};
