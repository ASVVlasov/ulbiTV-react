import { useTranslation } from 'react-i18next';
import React, { type FC, type HTMLAttributes } from 'react';
import { classNames } from 'shared/lib';

import cls from './LangSwitcher.module.scss';
export interface ILangSwitcherProps extends HTMLAttributes<HTMLDivElement> {
    collapsed?: boolean;
}
export const LangSwitcher: FC<ILangSwitcherProps> = ({
    collapsed,
    ...otherProps
}) => {
    const { t, i18n } = useTranslation();
    const switchLanguage = async () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div
            className={classNames(cls.LangSwitcher)}
            onClick={switchLanguage}
            {...otherProps}
        >
            {t(collapsed ? 'RU' : 'Русский')}
        </div>
    );
};
