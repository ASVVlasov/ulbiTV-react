import { type FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <div
            data-testid="theme-switcher"
            className={classNames(cls.themeSwitcher)}
            onClick={toggleTheme}
        >
            <DarkTheme />
        </div>
    );
};
