import { ComponentMeta } from '@storybook/react';

import { NavigationDrawer as StoryBase } from '../../../components/navigation/NavigationDrawer/NavigationDrawer';
import { FloatingActionButton } from '../buttons/FloatingActionButton.stories';
import { NavigationDrawerItem } from './NavigationDrawerItem.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const NavigationDrawer = {
  args: {
    iconButton: {
      icon: 'Placeholder',
      onClick: () => console.log('Click on icon button'),
      disabled: false
    },
    title: 'Title',
    subtitle: 'Subtitle',
    fab: FloatingActionButton.args,
    items: [
      {
        ...NavigationDrawerItem.args,
        id: '1'
      },
      {
        ...NavigationDrawerItem.args,
        id: '2',
        active: true
      },
      {
        ...NavigationDrawerItem.args,
        id: '3'
      }
    ]
  }
};
