import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Avatar, EAvatarSize } from './Avatar';
import image from './d91ffc95-b88a-4c06-9c20-fe36038dd19d.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  src: image,
  name: 'avatar',
};

export const Medium = Template.bind({});
Medium.args = {
  size: EAvatarSize.MEDIUM,
  src: image,
  name: 'avatar',
};

export const Large = Template.bind({});
Large.args = {
  size: EAvatarSize.LARGE,
  src: image,
  name: 'avatar',
};

export const Editable = Template.bind({});
Editable.args = {
  size: EAvatarSize.LARGE,
  editable: true,
  src: image,
  name: 'avatar',
};

export const WithoutImage: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Avatar {...args} />
    <Avatar {...args} size={EAvatarSize.MEDIUM} />
    <Avatar {...args} size={EAvatarSize.LARGE} />
  </>
);
WithoutImage.args = {
  name: 'vlasov sanya',
};
