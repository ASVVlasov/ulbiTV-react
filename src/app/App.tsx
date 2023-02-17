import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/routerProvider';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'widgets/ErrorBoundary';

const App = () => {
    const { theme } = useTheme();
    return (
        <ErrorBoundary>
            <BrowserRouter>
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
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;
