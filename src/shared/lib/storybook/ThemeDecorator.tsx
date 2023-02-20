import { type Story } from '@storybook/react';
import { type ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const themeDecorator = (theme: ETheme) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
