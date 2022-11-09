import { ComponentMeta } from '@storybook/react';

import { Button } from '../../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

export const Filled = {
  args: {
    variant: 'filled',
    children: 'Filled Button'
  }
};

export const Tonal = {
  args: {
    variant: 'tonal',
    children: 'Tonal Button'
  }
};

export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
};

export const Elevated = {
  args: {
    variant: 'elevated',
    children: 'Elevated Button'
  }
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
};
