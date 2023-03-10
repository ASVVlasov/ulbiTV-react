import { type FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';

import { ETheme, ThemeContext } from '../lib/ThemeContext';

const savedTheme: ETheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) ?? ETheme.LIGHT;
export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(savedTheme);
  const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>;
};
