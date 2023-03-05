import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ETextVariant, Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  text: 'text',
};

export const Success = Template.bind({});
Success.args = {
  variant: ETextVariant.SUCCESS,
  title: 'title',
  text: 'text',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: ETextVariant.DANGER,
  title: 'title',
  text: 'text',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: ETextVariant.WARNING,
  title: 'title',
  text: 'text',
};

export const Info = Template.bind({});
Info.args = {
  variant: ETextVariant.INFO,
  title: 'title',
  text: 'text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};
