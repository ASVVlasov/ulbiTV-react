import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';

import { type IStoreWithReducerManager, type TStoreSchemaKey } from 'app/providers/StoreProvider/config/storeSchema';

export const useAsyncStore = (key: TStoreSchemaKey, reducer: Reducer) => {
  const store = useStore() as IStoreWithReducerManager;
  const dispatch = useDispatch();
  useEffect(() => {
    store.reducerManager.add(key, reducer);
    dispatch({ type: `@INIT ${key} reducer` });
    return () => {
      store.reducerManager.remove(key);
      dispatch({ type: `@DESTROY ${key} reducer` });
    };
  }, []);
};
