import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export interface IAppLinkProps extends LinkProps {
    variant?: 'primary' | 'secondary';
    size?: string;
}
export const AppLink: FC<IAppLinkProps> = (props) => {
    const { to, children, variant = 'primary', size = 'm', ...otherProps } = props;
    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        [cls[size]]: true,
    };
    return (
            <Link to={to} {...otherProps} className={classNames(cls.AppLink, mods)}>
                {children}
            </Link>
    );
};
