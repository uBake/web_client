import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../../components/Badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    count: {
      options: [undefined, 5, '99+'],
      defaultValue: undefined
    },
    hPos: {
      options: ['right', 'left'],
      control: {
        type: 'select'
      }
    },
    vPos: {
      options: ['top', 'bottom'],
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Badges: ComponentStory<typeof Badge> = ({ children, ...args }) => (
  <Badge {...args}>
    <div style={{ background: 'rgba(0, 0, 0, .5)', width: 24, height: 24 }}></div>
  </Badge>
);
