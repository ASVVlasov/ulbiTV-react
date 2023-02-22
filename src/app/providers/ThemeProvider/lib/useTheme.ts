import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    theme: ETheme;
    toggleTheme: () => void;
}
export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (): void => {
        let newTheme: ETheme;
        switch (theme) {
            case ETheme.LIGHT: {
                newTheme = ETheme.DARK;
                break;
            }

            case ETheme.DARK: {
                newTheme = ETheme.LIGHT;
                break;
            }

            default: {
                newTheme = ETheme.LIGHT;
            }
        }

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
