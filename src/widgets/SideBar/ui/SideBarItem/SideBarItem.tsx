import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ISidebarItem } from 'widgets/SideBar/model/items';

import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import cls from './SideBarItem.module.scss';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo<ISidebarItemProps>(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
