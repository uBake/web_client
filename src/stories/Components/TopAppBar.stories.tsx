import { ComponentMeta } from '@storybook/react';

import { TopAppBar as StoryBase } from '../../components/TopAppBar/TopAppBar';
import { genFakeTab } from '../helpers';
import { Toolbar } from './toolbar/Toolbar.stories';

const tabs = [genFakeTab('1'), genFakeTab('2'), genFakeTab('3')];

export default {
  title: 'Components',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const TopAppBar = {
  args: {
    size: 'standard',
    tabs,
    ...Toolbar.args
  }
};
