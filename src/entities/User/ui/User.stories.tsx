import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { User } from './User';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/User',
  component: User,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof User>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof User> = (args) => <User {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
