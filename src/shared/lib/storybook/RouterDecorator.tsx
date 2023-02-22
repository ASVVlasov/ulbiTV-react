import { type DecoratorFn, type Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFn = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
