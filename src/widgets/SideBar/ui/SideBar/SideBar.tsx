import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);
  const toggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const [error, setError] = useState(false);
  const hackThisSite = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
      <div className="content">
        <Button type="button" onClick={hackThisSite} buttonType={collapsed ? 'square' : 'normal'}>
          {t(collapsed ? '.|..' : 'Hack this site')}
        </Button>
      </div>
      <div
        className={classNames(cls.switchers, {
          [cls.collapsed]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} data-testid="langSwitcher" />
      </div>
      <Button
        data-testid="toggleButton"
        onClick={toggle}
        buttonType={'square'}
        className={classNames(cls.collapsedBtn)}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
