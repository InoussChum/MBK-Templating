import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button, Drawer } from '@/components/ui'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  args: {
    title: 'Edit profile',
    placement: 'right',
    width: 420,
    showBackdrop: true,
  },
  argTypes: {
    placement: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="h-[380px] w-[760px] p-4 border border-gray-200">
        <Button variant="solid" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer
          {...args}
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          onClose={() => setOpen(false)}
          footer={
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="solid" onClick={() => setOpen(false)}>
                Save
              </Button>
            </div>
          }
        >
          <p className="text-sm text-gray-600">Drawer content preview.</p>
        </Drawer>
      </div>
    )
  },
}
