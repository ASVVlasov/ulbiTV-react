import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

export const NavBar: FC = () => {
    const { t: aboutT } = useTranslation('aboutPage');
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.navlinks)}>
                <AppLink to="/" variant="primary">
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" variant="primary">
                    {aboutT('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
