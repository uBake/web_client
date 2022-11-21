import { ComponentMeta } from '@storybook/react';

import { SegmentedButtonProps } from '../../components/SegmetedButtons/SegmentedButton/SegmentedButton';
import { SegmentedButtons as BaseForStory } from '../../components/SegmetedButtons/SegmentedButtons';

const oneChild: SegmentedButtonProps[] = [
  {
    id: 1,
    selected: false,
    label: 'Btn',
    onClick: () => {},
    direction: 'row',
    btnsDirection: 'row'
  }
];
const twoChildren: SegmentedButtonProps[] = [
  ...oneChild,
  {
    id: 2,
    selected: false,
    label: 'Btn 2',
    onClick: () => {},
    direction: 'row',
    btnsDirection: 'row'
  }
];
const someChildren: SegmentedButtonProps[] = [
  ...twoChildren,
  {
    id: 3,
    selected: false,
    label: 'Btn 3',
    onClick: () => {},
    direction: 'row',
    btnsDirection: 'row'
  }
];

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
