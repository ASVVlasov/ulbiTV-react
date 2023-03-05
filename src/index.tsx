import { render } from 'react-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import App from './app/App';

render(
  <StoreProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
