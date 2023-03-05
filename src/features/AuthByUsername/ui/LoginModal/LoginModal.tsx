import { type FC, Suspense } from 'react';

import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';

import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
