import { ComponentStory } from '@storybook/react';

import { Tooltip as TooltipBase } from '../../components/Tooltip/Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: TooltipBase,
  args: {
    position: 'top',
    text: '99'
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Tooltip: ComponentStory<typeof TooltipBase> = ({ ...args }) => (
  <div style={{ padding: 100 }}>
    <TooltipBase {...args}>
      <div style={{ width: 40, height: 40, background: 'gray' }}></div>
    </TooltipBase>
  </div>
);
