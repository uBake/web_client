import { ComponentMeta } from '@storybook/react';

import { LineLoader as StoryBase } from '../../../components/loaders/LineLoader/LineLoader';

export default {
  title: 'Components/Loaders',
  component: StoryBase,
  argTypes: {},
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

export const LineLoader = {
  args: {}
};
