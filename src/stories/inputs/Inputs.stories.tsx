import { ComponentMeta } from '@storybook/react';

import { Input } from '../../components/inputs/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    placeholder: 'Label',
    disabled: false
  }
} as ComponentMeta<typeof Input>;

export const Checkbox = {
  args: {
    type: 'checkbox',
    advantageText: 'Supporting text',
    error: '',
    textLimit: 9
  }
};

export const RadioButton = {
  args: {
    type: 'radio'
  }
};

export const TextInput = {
  args: {
    value: ''
  }
};
