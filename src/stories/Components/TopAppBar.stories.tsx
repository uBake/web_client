import { ComponentMeta } from '@storybook/react';

import { Icon } from '../../components/Icon/Icon';
import { TopAppBar as StoryBase } from '../../components/TopAppBar/TopAppBar';
import { genFakeTab } from '../helpers';

const tabs = [genFakeTab('1'), genFakeTab('2'), genFakeTab('3')];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

const leftPart = (
  <Icon style={{ fill: 'black' }} size={24} icon='Placeholder' />
);

const rightPart = [
  <Icon style={{ fill: 'black' }} size={24} icon='Placeholder' />,
  <Icon style={{ fill: 'black' }} size={24} icon='Placeholder' />,
  <Icon style={{ fill: 'black' }} size={24} icon='Placeholder' />
];

export const TopAppBar = {
  args: {
    leftPart,
    rightPart,
    tabs,
    title: 'Title'
  }
};
