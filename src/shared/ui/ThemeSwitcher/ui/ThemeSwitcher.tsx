import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button type="button" className={classNames(cls.themeSwitcher)} onClick={toggleTheme}>
            <DarkTheme />
        </button>
    );
};
