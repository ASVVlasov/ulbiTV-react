import { type FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames';

export const Loader: FC = () => {
    const mods: Record<string, boolean> = {};
    return (
        <div className={classNames(cls.Loader, mods)}>
            <div className={cls.spinner}></div>
        </div>
    );
};
