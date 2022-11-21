import { ComponentMeta } from '@storybook/react';

import { Navigation as StoryBase } from '../../components/Navigation/Navigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

const onClick = (id: string) => {
  console.log('onClick', id);
};

export const Navigation = {
  args: {
    icon: 'Placeholder',
    title: 'Title',
    subtitle: 'Subtitle',
    fab: {
      text: 'Fab',
      onClick: () => console.log('onClick'),
      icon: 'Placeholder',
      variant: 'primary'
    },
    items: [
      {
        id: '1',
        title: 'TitleTitleTitleTitleTitleTitleTitleTitle',
        icon: 'Add',
        meta: '+99',
        active: true,
        disabled: false,
        onClick
      },
      {
        id: '2',
        title: 'Title',
        icon: 'Add',
        meta: '+99',
        active: false,
        disabled: false,
        onClick
      },
      {
        id: '3',
        title: 'Title',
        icon: 'Placeholder',
        meta: '+99',
        active: false,
        disabled: true,
        onClick
      }
    ]
  }
};
