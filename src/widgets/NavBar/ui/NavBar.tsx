import { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';

export const NavBar: FC = () => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const onToggleAuthModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.navlinks)}>
                <Button onClick={onToggleAuthModal}>{t('Войти')}</Button>
                <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
                    {t('login modal')}
                </Modal>
            </div>
        </div>
    );
};
