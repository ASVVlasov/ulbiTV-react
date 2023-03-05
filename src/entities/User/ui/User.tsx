import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames';

export const User: FC = () => {
  const mods: Record<string, boolean> = {};
  return <div className={classNames('', mods)}></div>;
};
