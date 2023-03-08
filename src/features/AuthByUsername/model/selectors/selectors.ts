import { type TRootState } from 'app/providers/StoreProvider';

import { initialState } from 'features/AuthByUsername/model/slice/AuthByUsernameSlice';

export const getAuthByUsernameState = (state: TRootState) => state.authByUserName ?? initialState;
