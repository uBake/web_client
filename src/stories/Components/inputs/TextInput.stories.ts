import { ComponentMeta } from '@storybook/react';

import { TextInput as StoryBase } from '../../../components/inputs';

export default {
  title: 'Components/Inputs',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const TextInput = {
  args: {
    value: '',
    onChange: () => console.log('hi'),
    advantageText: 'Supporting text',
    error: '',
    textLimit: 9,
    label: 'Label',
    disabled: false
  }
};
