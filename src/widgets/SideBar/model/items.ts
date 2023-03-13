import type React from 'react';

import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItem[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
  },
];
