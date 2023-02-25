import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/routerProvider';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { type FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'widgets/ErrorBoundary';
import { Loader } from 'shared/ui/Loader/Loader';

const App: FC = () => {
    const { theme } = useTheme();
    return (
        <BrowserRouter>
            <div className={classNames('app', {}, [theme])}>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <NavBar />
                        <div className="content-page">
                            <SideBar />
                            <div className="page-wrapper">
                                <AppRouter />
                            </div>
                        </div>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    );
};

export default App;
