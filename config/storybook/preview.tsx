import { DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/lib/storybook/StoreDecorator';
import { StyleDecorator } from 'shared/lib/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/lib/storybook/ThemeDecorator';

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

export const decorators = [StyleDecorator, StoreDecorator, RouterDecorator, ThemeDecorator];
