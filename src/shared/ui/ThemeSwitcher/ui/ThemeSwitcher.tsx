import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {

    const {theme,toggleTheme} = useTheme();
    return (
        <div className={classNames(cls.themeSwitcher)} onClick={toggleTheme}>
            <DarkTheme/>
        </div>
    );
};
