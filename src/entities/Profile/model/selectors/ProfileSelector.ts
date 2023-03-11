import { type TRootState } from 'app/providers/StoreProvider';

export const getProfileStateSelector = (state: TRootState) => state.profile;
