import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    variant?: 'primary' | 'secondary';
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, children, variant = 'primary', ...otherProps } = props;
    return (
        <div className={classNames(cls.test)}>
            <Link to={to} {...otherProps} className={classNames(cls[variant])}>
                {children}
            </Link>
        </div>
    );
};
