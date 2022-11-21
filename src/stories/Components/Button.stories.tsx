import { ComponentMeta } from '@storybook/react';

import { Button as StoryBase } from '../../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons',
  component: StoryBase,
  args: {
    children: 'Button',
    disabled: false,
    direction: 'row'
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: 'radio'
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof StoryBase>;

export const Button = {
  args: {
    variant: 'filled',
    children: 'Button'
  }
};
