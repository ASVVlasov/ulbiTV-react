import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Loader.module.scss';

export const Loader: FC = () => {
  const mods: Record<string, boolean> = {};
  return (
    <div className={classNames(cls.Loader, mods)}>
      <div className={cls.spinner}></div>
    </div>
  );
};
