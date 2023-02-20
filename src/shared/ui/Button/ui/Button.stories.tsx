import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button, EButtonSize } from './Button';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Template.decorators = [themeDecorator(ETheme.DARK)];
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'button',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    children: 'button',
    variant: 'secondary',
};

export const PrimaryM = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryM.args = {
    children: 'button',
    size: EButtonSize.M,
};

export const PrimaryL = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryL.args = {
    children: 'button',
    size: EButtonSize.L,
};

export const PrimaryXL = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryXL.args = {
    children: 'button',
    size: EButtonSize.XL,
};
