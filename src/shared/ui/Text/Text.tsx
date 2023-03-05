import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Text.module.scss';

export enum ETextVariant {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: ETextVariant;
}

export const Text: FC<ITextProps> = (props) => {
  const { className, title, text, variant = ETextVariant.PRIMARY } = props;
  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
  };
  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
