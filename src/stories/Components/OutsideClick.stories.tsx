import { ComponentMeta } from '@storybook/react';

import { OutsideClick as StoryBase } from '../../components/OutsideClick/OutsideClick';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase,
  argTypes: {}
} as ComponentMeta<typeof StoryBase>;

export const OutsideClick = {
  args: {
    isOpen: true,
    children: (
      <div
        style={{ background: 'rgba(255, 0, 0, .5)', width: 200, height: 200 }}
      >
        Content
      </div>
    )
  }
};
