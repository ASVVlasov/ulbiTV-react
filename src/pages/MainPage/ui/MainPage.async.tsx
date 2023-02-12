import { lazy } from 'react';

export const MainPageAsync = lazy(
    async () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error emulation throttle
                resolve(import('./MainPage'));
            }, 1500);
        })
);
