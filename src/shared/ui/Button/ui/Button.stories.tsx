import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from './Button';
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

const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    buttonType: 'normal',
    variant: 'primary',
};

const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    buttonType: 'normal',
    variant: 'primary',
};

Secondary.decorators = [themeDecorator(ETheme.LIGHT)];
