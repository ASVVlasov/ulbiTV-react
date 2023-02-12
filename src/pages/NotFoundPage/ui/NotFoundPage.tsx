import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('404')}
        </div>
    );
};
