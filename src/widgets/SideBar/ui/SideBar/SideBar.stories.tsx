import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { SideBar } from './SideBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'widgets/SideBar',
    component: SideBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SideBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof SideBar> = (args) => (
    <SideBar {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
