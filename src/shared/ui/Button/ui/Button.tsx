import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: EButtonSize;
}
export enum EButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
export const Button: FC<IButtonProps> = ({
    variant = 'primary',
    size = EButtonSize.M,
    children,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        [cls[size]]: true,
    };
    return (
        <button className={classNames(cls.Button, mods, [])} {...otherProps}>
            {children}
        </button>
    );
};
