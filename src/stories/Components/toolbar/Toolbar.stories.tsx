import { ComponentMeta } from '@storybook/react';

import { Toolbar as StoryBase } from '../../../components/Toolbar/Toolbar';
import { genFakeIconButton } from '../../helpers';
import { ToolbarTitle } from './ToolbarTitle.stories';

export default {
  title: 'Components/Toolbar',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const Toolbar = {
  args: {
    iconButton: {
      icon: 'Placeholder'
    },
    ...ToolbarTitle.args,
    navigationItems: [
      genFakeIconButton('1'),
      genFakeIconButton('2'),
      genFakeIconButton('3')
    ]
  }
};
