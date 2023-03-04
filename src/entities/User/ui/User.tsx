import { type FC } from 'react';
import cls from './User.module.scss';
import { classNames } from 'shared/lib/classNames';

export const User: FC = () => {
  const mods: Record<string, boolean> = {};
  return <div className={classNames(cls.User, mods)}></div>;
};
