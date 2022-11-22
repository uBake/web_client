import { ComponentMeta } from '@storybook/react';

import {
  NavigationRailItem as StoryBase,
} from '../../../components/navigation/NavigationRail/NavigationRailItem/NavigationRailItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation',
  component: StoryBase,
  argTypes: {
    active: {
      options: [true, false],
      control: 'boolean'
    },
    disabled: {
      options: [true, false],
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof StoryBase>;

const onItemClick = (id: string) => {
  console.log('Click on item №' + id);
};

export const NavigationRailItem = {
  args: {
    id: '1',
    icon: 'Add',
    active: false,
    disabled: false,
    onItemClick
  }
};
