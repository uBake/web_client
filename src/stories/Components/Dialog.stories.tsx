import { ComponentMeta } from '@storybook/react';

import { Dialog as StoryBase } from '../../components/Dialog/Dialog';
import { Button } from './buttons/Button.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof StoryBase>;

export const Dialog = {
  args: {
    open: true,
    children: 'Dialog',
    icon: 'Placeholder',
    title: 'Title',
    neutralBtn: {
      ...Button.args,
      variant: 'ghost',
      icon: ''
    },
    negativeBtn: {
      ...Button.args,
      variant: 'ghost',
      icon: ''
    },
    positiveBtn: {
      ...Button.args,
      variant: 'ghost',
      icon: ''
    }
  }
};
