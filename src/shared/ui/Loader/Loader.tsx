import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Loader.module.scss';

export interface ILoaderProps {
  isLoading?: boolean;
}
export const Loader: FC<ILoaderProps> = ({ isLoading, children }) => {
  const hasChildren = children !== undefined;
  return (
    <div className={classNames(cls.Loader, { [cls.withoutChildren]: !hasChildren })}>
      {(isLoading ?? !hasChildren) && (
        <div className={cls.spinnerContainer}>
          <div className={cls.spinner}></div>
        </div>
      )}
      <div className={classNames(cls.childrenContainer, { [cls.isLoading]: isLoading })}>{children}</div>
    </div>
  );
};
