import { type FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';

import { LoginModal } from 'features/AuthByUsername';

import { getUserDataSelector, userActions } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';

import cls from './NavBar.module.scss';

export const NavBar: FC = () => {
  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  const user = useAppSelector(getUserDataSelector);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const onLoginHandler = useCallback(() => {
    if (user) {
      appDispatch(userActions.logout());
    } else {
      setIsAuthModalOpen(true);
    }
  }, [appDispatch, user]);

  const onAuthModalClose = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.user}>{user?.email}</div>
      <div className={classNames(cls.navlinks)}>
        <Button onClick={onLoginHandler}>{user ? t('Выйти') : t('Войти')}</Button>
        <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
      </div>
    </div>
  );
};
