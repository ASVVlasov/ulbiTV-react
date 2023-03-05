import { lazy } from 'react';

export const LoginFormAsync = lazy(
  async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error emulation throttle
        resolve(import('./LoginForm'));
      }, 1500);
    }),
);
