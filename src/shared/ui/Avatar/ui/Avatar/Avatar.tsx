import React, { type FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';

import PhotoIcon from '../../../../assets/icons/photo.svg';

import cls from './Avatar.module.scss';

export enum EAvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface IAvatarProps {
  editable?: boolean;
  src?: string;
  name: string;
  size?: EAvatarSize;
  onChange?: (file: File) => void;
}

export const Avatar: FC<IAvatarProps> = ({ editable = false, src, name, size = EAvatarSize.SMALL, onChange }) => {
  const { t } = useTranslation();
  const fileRef = useRef<HTMLInputElement>(null);
  const mods: Record<string, boolean> = {
    [cls.bordered]: !src,
  };
  const onChangeClickHandler = () => {
    fileRef.current?.click();
  };

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const fileUploaded = event.target.files?.[0];
    console.log(fileUploaded);
    if (fileUploaded) {
      onChange?.(fileUploaded);
    }
  };

  const text = name
    ?.split(' ')
    .map((word) => word.substring(0, 1))
    .join('')
    .toUpperCase();

  return (
    <div className={classNames(cls.Avatar, mods, [cls[size]])}>
      {editable && (
        <div className={classNames(cls.editableOverlay, mods)} onClick={onChangeClickHandler}>
          <PhotoIcon className={cls.editIcon} />
          <div className={cls.editText}>{t('Изменить')}</div>
          <input type="file" ref={fileRef} onChange={onFileChangeHandler} style={{ display: 'none' }} />
        </div>
      )}
      {src && <img className={cls.image} src={src} alt={name} />}
      {!src && <div className={cls.text}>{text}</div>}
    </div>
  );
};
