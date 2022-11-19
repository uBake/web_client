import { ComponentMeta } from '@storybook/react';

import { Card } from '../../components/Card/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: Card
} as ComponentMeta<typeof Card>;

export const Cards = {
  args: {
    head: 'https://www.fillmurray.com/320/180',
    title: 'Cafe Basilico'
  }
};
