import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import cls from './PageError.module.scss';

export const PageError: FC = () => {
  const { t } = useTranslation();
  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError)}>
      {t('Что-то пошло не так, попробуйте')}
      <AppLink to={'/'} onClick={reloadPage}>
        {t('перезагрузить страницу')}
      </AppLink>
    </div>
  );
};
