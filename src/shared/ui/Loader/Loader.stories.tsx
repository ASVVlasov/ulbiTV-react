import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Loader } from './Loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Loader',
    component: Loader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
