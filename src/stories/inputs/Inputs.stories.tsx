import { ComponentMeta } from '@storybook/react';

import { Input } from '../../components/inputs/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    placeholder: 'Label',
    advantageText: 'Supporting text',
    error: '',
    textLimit: 9
  }
} as ComponentMeta<typeof Input>;

export const TextInput = {
  args: {
    value: ''
  }
};

export const RadioButton = {
  args: {
    type: 'radio'
  }
};

export const Checkbox = {
  args: {
    type: 'checkbox'
  }
};
