import { ComponentMeta } from '@storybook/react';

import { Slider as StoryBase } from '../../../components/inputs/Slider/Slider';

export default {
  title: 'Components/Inputs',
  component: StoryBase,
  argTypes: {
    // open: {
    //   control: 'boolean'
    // }
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof StoryBase>;

export const Slider = {
  args: {
    value: 5000,
    min: 0,
    max: 10000
  }
};
