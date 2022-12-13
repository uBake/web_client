import { ComponentMeta } from '@storybook/react';

import { FullscreenDialog as StoryBase } from '../../../components/notifications/FullscreenDialog/FullscreenDialog';
import { Button } from '../buttons/Button.stories';
import { Toolbar } from '../toolbar/Toolbar.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Notifications',
  component: StoryBase,
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof StoryBase>;

export const FullscreenDialog = {
  args: {
    ...Toolbar.args,
    navigationItems: undefined,
    open: true,
    children: 'Dialog',
    icon: 'Placeholder',
    title: 'Title',
    closeButton: {
      ...Button.args,
      variant: 'ghost',
      icon: undefined
    }
  }
};
