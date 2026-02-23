import type { Meta, StoryObj } from '@storybook/react-vite'
import { HiArrowRight } from 'react-icons/hi'
import { Button } from '@/components/ui'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'solid', 'plain'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    shape: { control: 'select', options: ['round', 'circle', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithIcon: Story = {
  args: {
    icon: <HiArrowRight />,
    iconAlignment: 'end',
    variant: 'solid',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
