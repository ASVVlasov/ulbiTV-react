import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
            <button type="button" onClick={toggle}>
                {t(collapsed ? 'Развернуть' : 'Свернуть')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
