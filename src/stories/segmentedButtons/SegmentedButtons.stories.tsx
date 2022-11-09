import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SegmentedButtonProps } from '../../components/SegmetedButtons/SegmentedButton/SegmentedButton';
import { SegmentedButtons as BaseForStory } from '../../components/SegmetedButtons/SegmentedButtons';

const oneChild: SegmentedButtonProps[] = [
  { id: 1, selected: false, label: 'Btn', onClick: () => {}, direction: 'row', btnsDirection: 'row' }
];
const twoChildren: SegmentedButtonProps[] = [
  ...oneChild,
  { id: 2, selected: false, label: 'Btn 2', onClick: () => {}, direction: 'row', btnsDirection: 'row' }
];
const someChildren: SegmentedButtonProps[] = [
  ...twoChildren,
  { id: 3, selected: false, label: 'Btn 3', onClick: () => {}, direction: 'row', btnsDirection: 'row' }
];

const variants = { oneChild, twoChildren, someChildren };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: BaseForStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    btns: oneChild,
    direction: 'column'
  },
  argTypes: {
    btns: {
      options: Object.keys(variants),
      mapping: variants,
      labels: {
        oneChild: 'One Child',
        twoChildren: 'Two Children',
        someChildren: 'Some Children'
      },
      defaultValue: oneChild,
      control: 'radio'
    },
    direction: {
      options: ['row', 'column']
    }
  }
} as ComponentMeta<typeof BaseForStory>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SegmentedButtons: ComponentStory<typeof BaseForStory> = props => <BaseForStory {...props} />;
