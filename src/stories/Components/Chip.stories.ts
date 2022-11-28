import { ComponentMeta } from '@storybook/react';

import { Chip as StoryBase } from '../../components/Chip/Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    active: {
      control: 'boolean'
    },
    withCheck: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof StoryBase>;

export const Chip = {
  args: {
    label: 'Chip',
    disabled: false,
    active: false,
    withCheck: false,
    avatar: 'https://picsum.photos/200'
  }
};
