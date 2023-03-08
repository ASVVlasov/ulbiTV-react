import { type FC, lazy } from 'react';

export const MainPageAsync = lazy<FC>(
  async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./MainPage'));
      }, 1500);
    }),
);
