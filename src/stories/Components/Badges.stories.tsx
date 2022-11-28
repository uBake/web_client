import { ComponentMeta } from '@storybook/react';

import { Badge as StoryBase } from '../../components/Badge/Badge';
import { Button } from '../../components/buttons/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {
    count: {
      options: [1, 5, 999],
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
} as ComponentMeta<typeof StoryBase>;

export const Badge = {
  args: {
    count: 1,
    hPos: 'right',
    vPos: 'top',
    children: <Button icon='Add' variant='ghost' />
  }
};
