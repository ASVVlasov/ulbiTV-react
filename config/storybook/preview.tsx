import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';
import { StyleDecorator } from 'shared/lib/storybook/StyleDecorator';
import { DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/lib/storybook/StoreDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            defaultViewport: DEFAULT_VIEWPORT,
        },
    },
};

export const decorators = [StyleDecorator, StoreDecorator, RouterDecorator, themeDecorator];
