import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"
import { FC, useMemo, useState } from 'react';

const savedTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;
export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(savedTheme)
    const themeProps = useMemo(() => ({ theme, setTheme }),[theme])
    return <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
}
