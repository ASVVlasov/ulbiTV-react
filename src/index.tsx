import { render } from 'react-dom';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
