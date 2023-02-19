import { StyleDecorator } from 'shared/lib/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';

import { type DecoratorFn } from '@storybook/react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withLayout: DecoratorFn = (StoryFn) => {
    const className = {
        width: '100%',
        display: 'flex',
        padding: '15px 20px',
    };
    return (
        <div className={`app light`} style={className}>
            <StoryFn />
        </div>
    );
};

export const decorators = [withLayout, StyleDecorator, RouterDecorator];
