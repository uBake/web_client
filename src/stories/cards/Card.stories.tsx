import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../../components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = ({ ...args }) => (
  <Card {...args} />
);

export const BaseCard = Template.bind({});
BaseCard.args = {
  head: 'url(https://www.fillmurray.com/320/240)',
  title: 'Cafe Basilico'
};
