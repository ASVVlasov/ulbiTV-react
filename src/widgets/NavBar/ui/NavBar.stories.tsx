import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { NavBar } from './NavBar';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'widgets/NavBar',
    component: NavBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof NavBar> = (args) => (
    <NavBar {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

Primary.decorators = [themeDecorator(ETheme.LIGHT)];

export const Secondary: ComponentStory<typeof NavBar> = (args) => (
    <NavBar {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {};

Secondary.decorators = [themeDecorator(ETheme.DARK)];
