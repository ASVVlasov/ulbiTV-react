import { BrowserRouter } from 'react-router-dom';
import { type DecoratorFn, type Story } from '@storybook/react';

export const RouterDecorator: DecoratorFn = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
