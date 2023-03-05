import { createContext } from 'react';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface IThemeContextProps {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}
export const ThemeContext = createContext<IThemeContextProps>({
  theme: ETheme.LIGHT,
  setTheme() {
    console.warn('default theme method');
  },
});
