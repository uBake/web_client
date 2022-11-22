import { ComponentMeta } from '@storybook/react';

import { Button as StoryBase } from '../../../components/buttons/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons',
  component: StoryBase,
  argTypes: {
    disabled: {
      options: [true, false],
      control: 'boolean'
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof StoryBase>;

export const Button = {
  args: {
    variant: 'filled',
    label: 'Button',
    disabled: false,
    direction: 'row'
  }
};
