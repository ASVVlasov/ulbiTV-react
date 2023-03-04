import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
