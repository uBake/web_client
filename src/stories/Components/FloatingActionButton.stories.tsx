import { ComponentMeta } from '@storybook/react';

import { FloatingActionButton as StoryBase } from '../../components/FloatingActionButton/FloatingActionButton';

export default {
  title: 'Components/Buttons',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const FloatingActionButton = {
  args: {
    variant: 'primary',
    size: 'extended',
    text: 'Button',
    icon: 'Add',
    disabled: false
  }
};
