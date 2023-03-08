import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  return <div>{t('Профиль')}</div>;
};

export default ProfilePage;
