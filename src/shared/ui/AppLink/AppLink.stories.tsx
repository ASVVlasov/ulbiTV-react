import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';
import { RouterDecorator } from 'shared/lib/storybook/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    to: '/',
    children: 'Button',
};

Primary.decorators = [RouterDecorator]
