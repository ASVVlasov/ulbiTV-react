import { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

export const NavBar: FC = () => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const onAuthModalShow = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onAuthModalClose = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.navlinks)}>
        <Button onClick={onAuthModalShow}>{t('Войти')}</Button>
        <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
      </div>
    </div>
  );
};
