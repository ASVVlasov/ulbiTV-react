import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Button, EButtonSize } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Default Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Default Secondary Button',
};

export const Normal = Template.bind({});
Normal.args = {
    children: 'Default Primary Button',
};

export const Square = Template.bind({});
Square.args = {
    buttonType: 'square',
    children: 'Btn',
};

export const XL = Template.bind({});
XL.args = {
    size: EButtonSize.XL,
    children: 'XL Button',
};

export const L = Template.bind({});
L.args = {
    size: EButtonSize.L,
    children: 'L Button',
};

export const M = Template.bind({});
M.args = {
    size: EButtonSize.M,
    children: 'M Button',
};

export const S = Template.bind({});
S.args = {
    size: EButtonSize.S,
    children: 'S Button',
};
