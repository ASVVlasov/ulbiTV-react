import { useTranslation } from 'react-i18next';
import React, { type FC } from 'react';

export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation();
    const switchLanguage = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <button type="button" onClick={switchLanguage}>
            {t('Перевод')}
        </button>
    );
};
