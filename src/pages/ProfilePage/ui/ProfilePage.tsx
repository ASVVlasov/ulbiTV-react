import { type FC, useEffect } from 'react';

import { useAppDispatch } from 'app/providers/StoreProvider';

import { fetchProfile, ProfileCard, profileReducer } from 'entities/Profile';

import { useAsyncStore } from 'shared/hooks';

const ProfilePage: FC = () => {
  const appDispatch = useAppDispatch();
  useAsyncStore('profile', profileReducer);

  useEffect(() => {
    void appDispatch(fetchProfile());
  }, []);

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
