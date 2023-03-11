import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';

import { getProfileStateSelector } from '../../model/selectors/ProfileSelector';

import cls from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const { t } = useTranslation('profile');
  const mods: Record<string, boolean> = {};

  const { profile } = useAppSelector(getProfileStateSelector);

  return (
    <div className={classNames(cls.ProfileCard, mods)}>
      <div>
        <Text title={t<string>('Профиль')} />
        {profile?.id}
        <Button>{t('Редактировать')}</Button>
      </div>
    </div>
  );
};
