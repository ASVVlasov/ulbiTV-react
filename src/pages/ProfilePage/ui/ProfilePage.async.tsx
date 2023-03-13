import { type FC, lazy } from 'react';

export const ProfilePageAsync = lazy<FC>(
  async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./ProfilePage'));
      }, 1500);
    }),
);
