import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { Pagination } from '@/components/ui'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  args: {
    total: 120,
    pageSize: 10,
    currentPage: 1,
    displayTotal: true,
  },
  argTypes: {
    total: { control: { type: 'number', min: 0, step: 10 } },
    pageSize: { control: { type: 'number', min: 1, step: 1 } },
    currentPage: { control: { type: 'number', min: 1, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs()
    return (
      <Pagination
        {...args}
        onChange={(pageNumber) => updateArgs({ currentPage: pageNumber })}
      />
    )
  },
}
