import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip as TooltipBase } from '../../components/Tooltip/Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: TooltipBase,
  argTypes: {
    position: ['top', 'bottom', 'left', 'right'],
    text: '99'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as unknown as ComponentMeta<typeof TooltipBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Tooltip: ComponentStory<typeof TooltipBase> = ({ ...args }) => (
  <div style={{ padding: 100 }}>
    <TooltipBase {...args}>
      <div style={{ width: 40, height: 40, background: 'gray' }}></div>
    </TooltipBase>
  </div>
);
