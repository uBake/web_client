import { ComponentMeta } from '@storybook/react';

import { NavigationRail as StoryBase } from '../../components/navigation/NavigationRail/NavigationRail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

const onItemClick = (id: string) => {
  console.log('onClick', id);
};

export const NavigationRail = {
  args: {
    iconButton: {
      icon: 'Placeholder',
      onClick: () => console.log('on icon button Click'),
      disabled: false
    },
    fab: {
      onClick: () => console.log('onClick'),
      icon: 'Placeholder',
      disabled: false
    },
    items: [
      {
        id: '1',
        title: 'TitleTitleTitleTitleTitleTitleTitleTitle',
        icon: 'Add',
        meta: '+99',
        active: true,
        disabled: false,
        onItemClick
      },
      {
        id: '2',
        title: 'Title',
        icon: 'Add',
        meta: '+99',
        active: false,
        disabled: false,
        onItemClick
      },
      {
        id: '3',
        title: 'Title',
        icon: 'Placeholder',
        meta: '+99',
        active: false,
        disabled: true,
        onItemClick
      }
    ]
  }
};
