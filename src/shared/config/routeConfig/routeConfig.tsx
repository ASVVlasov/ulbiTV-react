import { type RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

enum ERouteEnum {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

const RoutePath: Record<ERouteEnum, string> = {
  [ERouteEnum.MAIN]: '/',
  [ERouteEnum.ABOUT]: '/about',
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
  [ERouteEnum.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
