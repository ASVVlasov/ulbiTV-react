import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

enum RouteEnum {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

const RoutePath: Record<RouteEnum, string> = {
    [RouteEnum.MAIN]: '/',
    [RouteEnum.ABOUT]: '/about',
    [RouteEnum.NOT_FOUND]: '*',
};

export const RouteConfig: Record<RouteEnum, RouteProps> = {
    [RouteEnum.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [RouteEnum.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [RouteEnum.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
