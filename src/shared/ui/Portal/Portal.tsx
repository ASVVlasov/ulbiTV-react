import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames';

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<IPortalProps> = (props) => {
  const { element = document.body, children } = props;
  const { theme } = useTheme();
  return createPortal(<div className={classNames('portal', {}, [theme])}>{children}</div>, element);
};
