import { ComponentMeta, Story } from '@storybook/react';

import { Tooltip as StoryBase } from '../../components/Tooltip/Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  decorators: [
    (Story: Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof StoryBase>;

export const Tooltip = {
  args: {
    children: <div style={{ width: 40, height: 40, background: 'gray' }}></div>,
    position: 'top',
    text: '99'
  }
};
