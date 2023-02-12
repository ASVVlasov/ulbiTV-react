import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/routerProvider';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import React, { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>loading...</div>}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
