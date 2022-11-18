import { Story } from '@storybook/react';

import { Tooltip as TooltipBase } from '../../components/Tooltip/Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: TooltipBase,
  decorators: [
    (Story: Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    )
  ]
};

export const Tooltip = {
  args: {
    children: <div style={{ width: 40, height: 40, background: 'gray' }}></div>,
    position: 'top',
    text: '99'
  }
};
