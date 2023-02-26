import { render } from 'react-dom';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StoreProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StoreProvider>,
    document.getElementById('root')
);
