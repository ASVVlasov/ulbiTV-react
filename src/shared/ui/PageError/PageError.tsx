import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';

export const PageError: FC = () => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError)} onClick={reloadPage}>
            {t('Что-то пошло не так, попробуйте перезагрузить страницу')}
        </div>
    );
};
