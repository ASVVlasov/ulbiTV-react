import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { type TRootState } from 'app/providers/StoreProvider';

export const getUserStateSelector = (state: TRootState) => state.user;

export const getUserDataSelector = createDraftSafeSelector(getUserStateSelector, (item) => item.user);
