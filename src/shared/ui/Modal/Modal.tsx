import { type FC, type MouseEvent, useCallback, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const { isOpen, onClose, className, children } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const contentClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    } else {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])} onClick={closeHandler}>
        <div className={classNames(cls.content)} onClick={contentClickHandler}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
