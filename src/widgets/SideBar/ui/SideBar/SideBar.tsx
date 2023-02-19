import { type FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './SideBar.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';

export const SideBar: FC = () => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    const [error, setError] = useState(false);
    const hackThisSite = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}
        >
            <Button data-testid="toggleButton" type="button" onClick={toggle}>
                {t(collapsed ? 'Развернуть' : 'Свернуть')}
            </Button>
            <Button type="button" onClick={hackThisSite}>
                {t('Hack this site')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher data-testid="langSwitcher" />
            </div>
        </div>
    );
};
