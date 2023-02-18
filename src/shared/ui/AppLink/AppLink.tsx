import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export interface IAppLinkProps extends LinkProps {
    variant?: 'primary' | 'secondary';
}
export const AppLink: FC<IAppLinkProps> = (props) => {
    const { to, children, variant = 'primary', ...otherProps } = props;
    return (
        <div className={classNames(cls.test)}>
            <Link to={to} {...otherProps} className={classNames(cls[variant])}>
                {children}
            </Link>
        </div>
    );
};
