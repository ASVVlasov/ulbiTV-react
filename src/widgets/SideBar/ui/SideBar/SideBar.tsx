import { type FC, useMemo, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SideBarItem/SideBarItem';

import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => SidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed],
  );

  return (
    <div data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
      <div className="content">{itemsList}</div>
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
