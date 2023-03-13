import { type TRootState } from 'app/providers/StoreProvider';

import { initialState } from '../slice/AuthByUsernameSlice';

export const getAuthByUsernameState = (state: TRootState) => state.authByUserName ?? initialState;
