import { ComponentMeta, Story } from '@storybook/react';

import { DropDown as StoryBase } from '../../components/DropDown/DropDown';
import { genFakeDropDownItem } from '../helpers';

const items = [
  genFakeDropDownItem('1'),
  {
    ...genFakeDropDownItem('2'),
    startSlot: 'inset',
    arrow: true,
    divider: true
  },
  { ...genFakeDropDownItem('3'), startSlot: null }
];

export default {
  title: 'Components',
  component: StoryBase,
  decorators: [
    (Story: Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof StoryBase>;

export const DropDown = {
  args: {
    items,
    onChoose: (id: string) => {
      console.log('Selected id is ', id);
    }
  }
};
