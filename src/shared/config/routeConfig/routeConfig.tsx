import { type RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

enum ERouteEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // Last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<ERouteEnum, string> = {
  [ERouteEnum.MAIN]: '/',
  [ERouteEnum.ABOUT]: '/about',
  [ERouteEnum.PROFILE]: '/profile',
  [ERouteEnum.NOT_FOUND]: '*',
};

export const RouteConfig: Record<ERouteEnum, RouteProps> = {
  [ERouteEnum.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [ERouteEnum.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [ERouteEnum.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [ERouteEnum.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
