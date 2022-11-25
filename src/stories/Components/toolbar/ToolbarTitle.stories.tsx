import { ComponentMeta } from '@storybook/react';

import { ToolbarTitle as StoryBase } from '../../../components/Toolbar/ToolbarTitle/ToolbarTitle';

export default {
  title: 'Components/Toolbar',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const ToolbarTitle = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    image: {
      src: 'https://picsum.photos/200',
      unoptimized: true
    }
  }
};
