import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

// New story using controls
const Template = (args) => <Avatar {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  loading: false,
  size: 'tiny',
  username: 'Julio Leiva',
  src: 'https://avatars.githubusercontent.com/u/23626338',
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: 'large',
  username: 'Julio Leiva',
  src: 'https://avatars.githubusercontent.com/u/23626338',
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size='large' />
    <Avatar {...args} size='medium' />
    <Avatar {...args} size='small' />
    <Avatar {...args} size='tiny' />
  </div>
);
Sizes.args = {
  username: 'Julio Leiva',
  src: 'https://avatars.githubusercontent.com/u/23626338',
};

export const Initials = (args) => (
  <div>
    <Avatar username='Juli ¡0 Leiva' />
    <Avatar username='Dominic Nguyen' />
    <Avatar username='Kyle Suss' />
    <Avatar username='Michael Shilman' />
  </div>
);

export const Loading = (args) => (
  <div>
    <Avatar {...args} size='large' />
    <Avatar {...args} size='medium' />
    <Avatar {...args} size='small' />
    <Avatar {...args} size='tiny' />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = (args) => (
  <div>
    <Avatar loading size='large' />
    <Avatar size='large' username='Julio Leiva' />
    <Avatar
      size='large'
      username='Tom Coleman'
      src='https://avatars.githubusercontent.com/u/23626338'
    />
  </div>
);
