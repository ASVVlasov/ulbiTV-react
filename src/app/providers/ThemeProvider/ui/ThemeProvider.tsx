import { type FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ETheme,
    ThemeContext,
} from '../lib/ThemeContext';

const savedTheme: ETheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.BLUE;
export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(savedTheme);
    const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);
    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
};
