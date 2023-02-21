import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AboutPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutPage> = (args) => (
    <AboutPage {...args} />
);
export const Primary = Template.bind({});
