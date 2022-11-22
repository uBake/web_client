import { ComponentMeta } from '@storybook/react';

import { FloatingActionButton as StoryBase } from '../../../components/buttons/FloatingActionButton/FloatingActionButton';

export default {
  title: 'Components/Buttons',
  component: StoryBase,
  argTypes: {
    disabled: {
      options: [true, false],
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof StoryBase>;

export const FloatingActionButton = {
  args: {
    variant: 'primary',
    size: 'extended',
    label: 'Button',
    icon: 'Add',
    disabled: false,
    onClick: () => console.log('Click on FAB')
  }
};
