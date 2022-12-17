import { ComponentMeta, Story } from '@storybook/react';

import { Tabs as StoryBase } from '../../components/Tabs/Tabs';
import { genFakeTab } from '../helpers';

const tabs = [genFakeTab('1'), genFakeTab('2'), genFakeTab('3')];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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

export const Tabs = {
  args: {
    tabs,
    selectedId: '1',
    onTabSelect: (id: string) => {
      console.log('Selected id is ', id);
    }
  }
};
