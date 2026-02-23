import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker } from '@/components/ui'

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  args: {
    placeholder: 'Pick a date',
    clearable: true,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SingleDate: Story = {}

export const DateRange: Story = {
  render: (args) => (
    <DatePicker.DatePickerRange
      {...args}
      placeholder="Pick a date range"
      separator="->"
    />
  ),
}

export const DateTime: Story = {
  render: (args) => (
    <DatePicker.DateTimepicker {...args} placeholder="Pick date and time" />
  ),
}
