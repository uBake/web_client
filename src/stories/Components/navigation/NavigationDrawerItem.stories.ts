import { ComponentMeta } from '@storybook/react';

import {
  NavigationDrawerItem as StoryBase,
} from '../../../components/navigation/NavigationDrawer/NavigationDrawerItem/NavigationDrawerItem';

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

export const NavigationDrawerItem = {
  args: {
    id: '1',
    title: 'TitleTitleTitleTitleTitleTitleTitleTitle',
    icon: 'Add',
    meta: '+99',
    active: false,
    disabled: false,
    onItemClick
  }
};
