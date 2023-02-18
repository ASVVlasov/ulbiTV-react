import { type FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <button
            data-testid="theme-switcher"
            type="button"
            className={classNames(cls.themeSwitcher)}
            onClick={toggleTheme}
        >
            <DarkTheme />
        </button>
    );
};
