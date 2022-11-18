import { ComponentMeta, Story } from '@storybook/react';

import { Tabs as TabsBase } from '../../components/Tabs/Tabs';

const genFakeTab = (id: number) => ({
  id: id.toString(),
  title: 'Tab ' + id
});

const tabs = [genFakeTab(1), genFakeTab(2), genFakeTab(3)];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: TabsBase,
  decorators: [
    (Story: Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof TabsBase>;

export const Tabs = {
  args: {
    tabs,
    selectedId: '1',
    onTabSelect: (id: number) => {
      console.log('Selected id is ', id);
    }
  }
};
