import { ComponentMeta } from '@storybook/react';

import { Switch as StoryBase } from '../../../components/inputs';

export default {
  title: 'Components/Inputs',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const Switch = {
  args: {
    checked: false,
    label: 'Label',
    disabled: false
  }
};
