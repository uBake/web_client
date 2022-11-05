import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SegmentedButtons as BaseForStory } from '../../components/SegmetedButtons/SegmentedButtons';

const oneChild = [{ id: 1, selected: false, label: 'Btn', onClick: () => {} }];
const twoChildren = [...oneChild, { id: 2, selected: false, label: 'Btn 2', onClick: () => {} }];
const someChildren = [...twoChildren, { id: 3, selected: false, label: 'Btn 3', onClick: () => {} }];

const variants = { oneChild, twoChildren, someChildren };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: BaseForStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    btns: {
      options: Object.keys(variants),
      mapping: variants,
      labels: {
        oneChild: 'One Child',
        twoChildren: 'Two Children',
        someChildren: 'Some Children'
      },
      defaultValue: oneChild
    },
    direction: {
      options: ['horizontal', 'vertical']
    }
  }
} as ComponentMeta<typeof BaseForStory>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SegmentedButtons: ComponentStory<typeof BaseForStory> = (props) => <BaseForStory {...props} />;
