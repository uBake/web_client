import { ComponentMeta } from '@storybook/react';

import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/buttons/Button/Button';

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
    children: <Button icon='Add' variant='ghost' />
  }
};
