import { type ButtonHTMLAttributes, type FC, useMemo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
}
export const Button: FC<IButtonProps> = ({
    variant,
    children,
    ...otherProps
}) => {
    const additionalClasses = useMemo(() => {
        const result = [];
        if (variant) {
            result.push(cls[variant]);
        }

        return result;
    }, [variant]);
    return (
        <button
            className={classNames(cls.Button, {}, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
