import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  args: {
    placeholder: 'Type here',
    size: 'md',
    disabled: false,
    invalid: false,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'Bad value',
  },
}

export const WithAffixes: Story = {
  args: {
    prefix: '$',
    suffix: 'USD',
    defaultValue: '1200',
  },
}
