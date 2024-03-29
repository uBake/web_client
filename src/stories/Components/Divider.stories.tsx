import { ComponentMeta, Story } from '@storybook/react';

import { Divider as StoryBase } from '../../components/Divider/Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  decorators: [
    (Story: Story) => (
      <div
        style={{
          width: 200,
          height: 200,
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

export const Divider = {
  args: {
    text: 'Subheader',
    direction: 'horizontal'
  }
};
