import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';

import { useAsyncStore } from 'shared/hooks';

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  useAsyncStore('profile', profileReducer);

  return <div>{t('Профиль')}</div>;
};

export default ProfilePage;
