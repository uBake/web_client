import { ComponentMeta } from '@storybook/react';

import { SegmentedButtonProps } from '../../../components/buttons/SegmetedButtons/SegmentedButton/SegmentedButton';
import { SegmentedButtons as BaseForStory } from '../../../components/buttons/SegmetedButtons/SegmentedButtons';

const getFakeButton = (id: string): SegmentedButtonProps => ({
  id,
  selected: false,
  label: 'Btn ' + id,
  onItemSelect: (id: string) => {
    console.log(id);
  },
  direction: 'row',
  btnsDirection: 'row'
});

const oneChild = [getFakeButton('1')];
const twoChildren = [...oneChild, getFakeButton('2')];
const someChildren = [...twoChildren, getFakeButton('3')];

const variants = { oneChild, twoChildren, someChildren };

export default {
  title: 'Components/Buttons',
  component: BaseForStory,
  argTypes: {
    btns: {
      options: Object.keys(variants),
      mapping: variants,
      labels: {
        oneChild: 'One Child',
        twoChildren: 'Two Children',
        someChildren: 'Some Children'
      },
      control: 'radio'
    },
    direction: {
      options: ['row', 'column']
    }
  }
} as ComponentMeta<typeof BaseForStory>;

export const SegmentedButtons = {
  args: {
    btns: oneChild,
    direction: 'column'
  }
};
