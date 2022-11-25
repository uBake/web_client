import { ComponentMeta } from '@storybook/react';

import { Toolbar as StoryBase } from '../../../components/Toolbar/Toolbar';
import { genFakeIconButton } from '../../helpers';

export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const Toolbar = {
  args: {
    iconButton: {
      icon: 'Placeholder'
    },
    title: 'Title',
    subtitle: 'Subtitle',
    image: {
      src: 'https://picsum.photos/40',
      unoptimized: true
    },
    navigationItems: [
      genFakeIconButton('1'),
      genFakeIconButton('2'),
      genFakeIconButton('3')
    ]
  }
};
