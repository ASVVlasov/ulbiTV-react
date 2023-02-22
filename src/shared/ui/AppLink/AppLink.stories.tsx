import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    to: '/',
    children: 'Primary Link',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    to: '/',
    variant: 'secondary',
    children: 'Secondary Link',
};

export const XL = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XL.args = {
    to: '/',
    size: 'xl',
    children: 'XL Link',
};

export const L = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
L.args = {
    to: '/',
    size: 'l',
    children: 'L Link',
};

export const M = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
M.args = {
    to: '/',
    size: 'm',
    children: 'M Link',
};

export const S = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
S.args = {
    to: '/',
    size: 's',
    children: 'S Link',
};
