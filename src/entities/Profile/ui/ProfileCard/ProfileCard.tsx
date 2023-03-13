import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Avatar, EAvatarSize } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text/Text';

import { type IProfile } from '../../model/types/Profile';

import cls from './ProfileCard.module.scss';

export interface IProfileCardProps {
  editable?: boolean;
  values?: IProfile;
  onChange?: (values: IProfile) => void;
  onAvatarChange?: (file: File) => void;
}

export const ProfileCard = memo<IProfileCardProps>(({ editable = false, values, onChange, onAvatarChange }) => {
  const mods: Record<string, boolean> = {};

  const { t } = useTranslation('profile');
  const [profileValues, setProfileValues] = useState<IProfile>({
    firstName: '',
    secondName: '',
    lastName: '',
    age: 0,
    currency: '',
    country: '',
    city: '',
    avatar: '',
  });

  useEffect(() => {
    if (values) {
      setProfileValues(values);
    }
  }, [values]);

  const onInputChangeHandler = (value: string | number, field: keyof IProfile) => {
    const newProfileValues = { ...profileValues, [field]: value };
    setProfileValues(newProfileValues);
    onChange?.(newProfileValues);
  };

  const onAvatarChangeHandler = (file: File) => {
    onAvatarChange?.(file);
  };

  return (
    <div className={classNames(cls.ProfileCard, mods)}>
      <div className={cls.content}>
        <div className={cls.fields}>
          <Text title={t<string>('Профиль')} />
          <Input
            label={t<string>('Фамилия')}
            value={profileValues.lastName}
            onChange={(value) => {
              onInputChangeHandler(value, 'lastName');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Имя')}
            value={profileValues.firstName}
            onChange={(value) => {
              onInputChangeHandler(value, 'firstName');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Отчество')}
            value={profileValues.secondName}
            onChange={(value) => {
              onInputChangeHandler(value, 'secondName');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Возраст')}
            value={profileValues.age}
            type="number"
            onChange={(value) => {
              onInputChangeHandler(value, 'age');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Страна')}
            value={profileValues.country}
            onChange={(value) => {
              onInputChangeHandler(value, 'country');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Город')}
            value={profileValues.city}
            onChange={(value) => {
              onInputChangeHandler(value, 'city');
            }}
            disabled={!editable}
          />
          <Input
            label={t<string>('Валюта')}
            value={profileValues.currency}
            onChange={(value) => {
              onInputChangeHandler(value, 'currency');
            }}
            disabled={!editable}
          />
        </div>
        <div className={cls.avatar}>
          <Avatar
            name={(profileValues.firstName ?? '') + (profileValues.lastName ?? '')}
            src={profileValues.avatar}
            editable={editable}
            size={EAvatarSize.LARGE}
            onChange={onAvatarChangeHandler}
          />
        </div>
      </div>
    </div>
  );
});
