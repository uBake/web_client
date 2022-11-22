import { ComponentMeta } from '@storybook/react';

import { NavigationRail as StoryBase } from '../../../components/navigation/NavigationRail/NavigationRail';
import { FloatingActionButton } from '../buttons/FloatingActionButton.stories';
import { NavigationRailItem } from './NavigationRailItem.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const NavigationRail = {
  args: {
    iconButton: {
      icon: 'Placeholder',
      onClick: () => console.log('Click on icon button'),
      disabled: false
    },
    fab: {
      ...FloatingActionButton.args,
      variant: 'tertiary',
      size: 'medium'
    },
    items: [
      {
        ...NavigationRailItem.args,
        id: '1'
      },
      {
        ...NavigationRailItem.args,
        active: true,
        id: '2'
      },
      {
        ...NavigationRailItem.args,
        id: '3'
      }
    ]
  }
};
