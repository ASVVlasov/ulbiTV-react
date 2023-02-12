import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

enum RouteEnum {
    MAIN = 'main',
    ABOUT = 'about'
}

const RoutePath: Record<RouteEnum, string> = {
    [RouteEnum.MAIN]: '/',
    [RouteEnum.ABOUT]: '/about'
}


export const RouteConfig: Record<RouteEnum, RouteProps> = {
    [RouteEnum.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [RouteEnum.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}
