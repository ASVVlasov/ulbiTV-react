import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: EButtonSize;
  buttonType?: TButtonType;
}

export type TButtonType = 'square' | 'normal';
export enum EButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  size = EButtonSize.M,
  buttonType = 'normal',
  className,
  children,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls[size]]: true,
    [cls[buttonType]]: true,
  };
  return (
    <button className={classNames(cls.Button, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};
