import { lazy } from 'react';

export const AboutPageAsync = lazy(
    async () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error emulation throttle
                resolve(import('./AboutPage'));
            }, 1500);
        })
);
