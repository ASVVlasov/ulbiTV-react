import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LangSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LangSwitcher> = (args) => (
    <LangSwitcher {...args} />
);

const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

Primary.decorators = [themeDecorator(ETheme.DARK)];

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {};

Secondary.decorators = [themeDecorator(ETheme.LIGHT)];
