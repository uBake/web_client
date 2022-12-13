import { ComponentMeta } from '@storybook/react';

import { Snackbar as StoryBase } from '../../../components/notifications/Snackbar/Snackbar';
import { Button } from '../buttons/Button.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Notifications',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const Snackbar = {
  args: {
    children: 'Snackbar',
    buttonAttributes: {
      ...Button.args,
      variant: 'ghost',
      icon: undefined,
      disabled: false
    }
  }
};
