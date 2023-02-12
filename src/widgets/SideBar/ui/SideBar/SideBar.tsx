import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
interface SideBarProps {

}
export const SideBar: FC<SideBarProps> = (props) => {
    const {t} = useTranslation();
    const {} = props;

    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(prev => !prev);
    }
    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed})}>
            <button onClick={toggle}>{t(collapsed ? 'Развернуть' : 'Свернуть')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher />
            </div>
        </div>
    );
};
