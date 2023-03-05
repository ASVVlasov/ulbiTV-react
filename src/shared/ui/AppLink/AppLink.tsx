import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';
export enum EAppLinkSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
export interface IAppLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  size?: EAppLinkSize;
}
export const AppLink: FC<IAppLinkProps> = (props) => {
  const { to, children, variant = 'primary', size = EAppLinkSize.M, ...otherProps } = props;
  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls[size]]: true,
  };
  return (
    <Link
      data-testid="AppLink"
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, mods, [otherProps.className])}
    >
      {children}
    </Link>
  );
};
