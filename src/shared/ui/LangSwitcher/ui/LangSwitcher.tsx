import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';


export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation();
    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return <button onClick={switchLanguage}>{t('Перевод')}</button>
}
