import { type TRootState } from 'app/providers/StoreProvider';

import { initialState } from '../slice/ProfileSlice';

export const getProfileStateSelector = (state: TRootState) => state.profile ?? initialState;
