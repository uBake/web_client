import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '../../components/inputs/Input';

const oneChild = [{ id: 1, selected: false, label: 'Btn', onClick: () => {} }];
const twoChildren = [...oneChild, { id: 2, selected: false, label: 'Btn 2', onClick: () => {} }];
const someChildren = [...twoChildren, { id: 3, selected: false, label: 'Btn 3', onClick: () => {} }];

const variants = { oneChild, twoChildren, someChildren };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    btns: {
      options: Object.keys(variants),
      mapping: variants,
      labels: {
        oneChild: 'One Child',
        twoChildren: 'Two Children',
        someChildren: 'Some Children'
      },
      defaultValue: oneChild
    },
    direction: {
      options: ['row', 'column']
    }
  }
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = props => <Input {...props} />;

export const TextInput = Template.bind({});

export const RadioButton = Template.bind({});
RadioButton.args = {
  type: 'radio'
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox'
};
