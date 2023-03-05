import { type DecoratorFn, type Story } from '@storybook/react';

import 'app/styles/index.scss';

export const StyleDecorator: DecoratorFn = (StoryElement: Story) => <StoryElement />;
