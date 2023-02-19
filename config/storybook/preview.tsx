import { StyleDecorator } from 'shared/lib/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';

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

export const decorators = [StyleDecorator, RouterDecorator];
