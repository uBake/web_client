import { ComponentMeta } from '@storybook/react';

import { RadioButton as StoryBase } from '../../../components/inputs';

export default {
  title: 'Components/Inputs',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const RadioButton = {
  args: {
    checked: false,
    label: 'Label',
    disabled: false
  }
};
