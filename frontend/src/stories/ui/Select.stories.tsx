import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '@/components/ui'

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  args: {
    placeholder: 'Select an option',
    isSearchable: true,
    isClearable: true,
    isDisabled: false,
    isMulti: false,
    options,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Multi: Story = {
  args: {
    isMulti: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: options[0],
  },
}
