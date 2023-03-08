import { type TRootState } from 'app/providers/StoreProvider';

export const getAuthStateSelector = (state: TRootState) => state.auth;
