import { ComponentMeta } from '@storybook/react';

import { Input } from '../../components/inputs/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: { label: 'Label', disabled: false }
} as ComponentMeta<typeof Input>;

export const Checkbox = {
  args: {
    type: 'checkbox',
    checked: false
  }
};

export const RadioButton = {
  args: {
    type: 'radio',
    checked: false
  }
};

export const TextInput = {
  args: {
    value: '',
    onChange: () => console.log('hi'),
    advantageText: 'Supporting text',
    error: '',
    textLimit: 9,
    label: 'Label'
  }
};
