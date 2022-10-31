import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
  children: 'Filled Button'
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: 'tonal',
  children: 'Tonal Button'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined Button'
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  children: 'Elevated Button'
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button'
};