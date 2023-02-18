import { StyleDecorator } from 'shared/lib/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';

import { type DecoratorFn } from '@storybook/react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            // Array of plain string values or MenuItem shape (see below)
            items: ['light', 'dark', 'blue'],
            // Property that specifies if the name of the item will be displayed
            title: 'Theme',
            // Change title based on selected value
            dynamicTitle: false,
        },
    },
};

const withTheme: DecoratorFn = (StoryFn, context) => (
    <div className={`app ${context.globals.theme as string}`}>
        <StoryFn />
    </div>
);

export const decorators = [withTheme, StyleDecorator, RouterDecorator];
