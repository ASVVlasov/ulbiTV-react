import { type FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'app/providers/routerProvider';
import { useTheme } from 'app/providers/ThemeProvider';

import { ErrorBoundary } from 'widgets/ErrorBoundary';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { tokenActions } from 'entities/Token';

import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenActions.loadToken());
  }, [dispatch]);

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
