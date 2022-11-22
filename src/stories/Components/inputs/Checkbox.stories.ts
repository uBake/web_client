import { ComponentMeta } from '@storybook/react';

import { Checkbox as StoryBase } from '../../../components/inputs';

export default {
  title: 'Components/Inputs',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const Checkbox = {
  args: {
    checked: false,
    label: 'Label',
    disabled: false
  }
};
