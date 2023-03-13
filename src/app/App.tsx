import { type FC, Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'app/providers/routerProvider';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useTheme } from 'app/providers/ThemeProvider';

import { ErrorBoundary } from 'widgets/ErrorBoundary';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { currentUser } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

const App: FC = () => {
  const { theme } = useTheme();
  const appDispatch = useAppDispatch();

  useEffect(() => {
    void appDispatch(currentUser());
  }, []);

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
