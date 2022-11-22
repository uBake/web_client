import { ComponentMeta } from '@storybook/react';

import { Card as StoryBase } from '../../components/Card/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const Card = {
  args: {
    head: 'https://www.fillmurray.com/320/180',
    title: 'Cafe Basilico'
  }
};
