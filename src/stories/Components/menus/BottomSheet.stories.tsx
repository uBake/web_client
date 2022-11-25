import { ComponentMeta, Story } from '@storybook/react';

import { BottomSheet as StoryBase } from '../../../components/menu/BottomSheet/BottomSheet';
import { Toolbar } from '../toolbar/Toolbar.stories';

export default {
  title: 'Components/Menu',
  component: StoryBase,
  argTypes: {},
  decorators: [
    (Story: Story) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          minWidth: '50vw',
          minHeight: '50vh'
        }}
      >
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof StoryBase>;

export const BottomSheet = {
  args: {
    ...Toolbar.args,
    onClose: () => console.log('Click on close button'),
    children: <div></div>
  }
};
