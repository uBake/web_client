import { ComponentMeta } from '@storybook/react';

import { Badge } from '../../components/Badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: Badge,
  argTypes: {
    count: {
      options: [undefined, 5, '99+'],
      control: 'radio'
    },
    hPos: {
      options: ['right', 'left'],
      control: 'radio'
    },
    vPos: {
      options: ['top', 'bottom'],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof Badge>;

export const Badges = {
  args: {
    count: undefined,
    hPos: 'right',
    vPos: 'top',
    children: (
      <div
        style={{ background: 'rgba(0, 0, 0, .5)', width: 24, height: 24 }}
      ></div>
    )
  }
};
