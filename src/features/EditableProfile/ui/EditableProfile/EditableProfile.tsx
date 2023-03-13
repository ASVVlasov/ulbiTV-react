import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';

import { type IProfile, ProfileCard } from 'entities/Profile';

import { useAsyncStore } from 'shared/hooks';
import { Button } from 'shared/ui/Button';
import { Loader } from 'shared/ui/Loader/Loader';

import { getProfileDataSelector, getProfileIsLoadingSelector } from '../../model/selectors/ProfileSelectors';
import { getProfile } from '../../model/services/getProfile';
import { saveProfile } from '../../model/services/saveProfile';
import { profileReducer } from '../../model/slice/ProfileSlice';

import cls from './EditableProfile.module.scss';

export const EditableProfile: FC = () => {
  useAsyncStore('profile', profileReducer);

  const { t } = useTranslation('profile');
  const [editable, setEditable] = useState(false);
  const profileData = useAppSelector(getProfileDataSelector);
  const isLoading = useAppSelector(getProfileIsLoadingSelector);
  const [profile, setProfile] = useState<IProfile>();
  const [newAvatar, setNewAvatar] = useState<File>();

  const appDispatch = useAppDispatch();

  useEffect(() => {
    void appDispatch(getProfile());
  }, []);

  const reloadProfile = () => {
    if (profileData) {
      const newProfile = { ...profileData };
      if (newProfile.avatar) {
        newProfile.avatar = __BASE_URL__ + newProfile.avatar;
      }

      setProfile(newProfile);
    }
  };

  const onSaveHandler = () => {
    if (profile) {
      void appDispatch(saveProfile({ profile, avatar: newAvatar }));
    }
  };

  useEffect(() => {
    reloadProfile();
  }, [profileData]);

  const onProfileChangeHandler = (values: IProfile) => {
    setProfile(values);
  };

  const onButtonClickHandler = () => {
    if (editable) {
      reloadProfile();
    }

    setEditable((prev) => !prev);
  };

  const onAvatarChangeHandler = (file: File) => {
    setNewAvatar(file);
    if (profile) {
      setProfile({ ...profile, avatar: URL.createObjectURL(file) });
    }
  };

  return (
    <Loader isLoading={isLoading}>
      <div className={cls.buttons}>
        <Button onClick={onSaveHandler}>{t('Сохранить')}</Button>

        <Button onClick={onButtonClickHandler}>{editable ? t('Отменить') : t('Редактировать')}</Button>
      </div>

      <ProfileCard
        editable={editable}
        values={profile}
        onChange={onProfileChangeHandler}
        onAvatarChange={onAvatarChangeHandler}
      />
    </Loader>
  );
};
