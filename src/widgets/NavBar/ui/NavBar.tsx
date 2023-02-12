import React, { FC } from 'react';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {

}
export const NavBar: FC<NavBarProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.navlinks)}>
                <AppLink to="/" variant="primary">{t('Главная')}</AppLink>
                <AppLink to="/about" variant="primary">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
