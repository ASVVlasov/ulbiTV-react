import { type Story } from '@storybook/react';
import { type ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
