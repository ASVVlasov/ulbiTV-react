import { useTranslation } from 'react-i18next';
import React, { type FC } from 'react';
import { Button } from 'shared/ui/Button/ui/Button';

export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation();
    const switchLanguage = async () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            data-testid="langSwitcher"
            type="button"
            onClick={switchLanguage}
        >
            {t('Перевод')}
        </Button>
    );
};
