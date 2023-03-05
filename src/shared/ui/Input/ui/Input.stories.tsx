import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 'test values',
};
