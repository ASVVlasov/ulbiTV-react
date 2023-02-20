import { type DecoratorFn, type Story } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

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
        padding: '15px 15px',
        height: '100vh',
    };
    return (
        <div style={className}>
            <StoryFn />
        </div>
    );
};

const WithRouter = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

export const decorators = [withLayout, WithRouter];
