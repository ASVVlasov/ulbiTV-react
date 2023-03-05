import { type FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/providers/StoreProvider';

import { LoginModal } from 'features/AuthByUsername';

import { getUserDataSelector, userActions } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';

import cls from './NavBar.module.scss';

export const NavBar: FC = () => {
  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  const user = useSelector(getUserDataSelector);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const onLoginHandler = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);
  const onLogoutHandler = useCallback(() => {
    appDispatch(userActions.logout());
    setIsAuthModalOpen(true);
  }, [appDispatch]);

  const onAuthModalClose = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  if (user) {
    return (
      <div className={classNames(cls.navbar)}>
        <div className={classNames(cls.navlinks)}>
          <Button onClick={onLogoutHandler}>{t('Выйти')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.navlinks)}>
        <Button onClick={onLoginHandler}>{t('Войти')}</Button>
        <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
      </div>
    </div>
  );
};
