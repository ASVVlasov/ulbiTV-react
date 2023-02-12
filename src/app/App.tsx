import './styles/index.scss';
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/routerProvider';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const { theme } = useTheme();
    return (
        <BrowserRouter>
            <ThemeProvider>
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
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
