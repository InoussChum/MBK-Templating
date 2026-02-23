import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '@/components/ui'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  args: {
    defaultValue: 'overview',
    variant: 'underline',
  },
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-[640px]">
      <Tabs {...args}>
        <Tabs.TabList>
          <Tabs.TabNav value="overview">Overview</Tabs.TabNav>
          <Tabs.TabNav value="activity">Activity</Tabs.TabNav>
          <Tabs.TabNav value="settings">Settings</Tabs.TabNav>
        </Tabs.TabList>
        <Tabs.TabContent value="overview">Overview content</Tabs.TabContent>
        <Tabs.TabContent value="activity">Activity content</Tabs.TabContent>
        <Tabs.TabContent value="settings">Settings content</Tabs.TabContent>
      </Tabs>
    </div>
  ),
}
