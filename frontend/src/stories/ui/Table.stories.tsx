import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from '@/components/ui'

const rows = [
  { id: 'U-001', name: 'Alice', role: 'Admin', status: 'Active' },
  { id: 'U-002', name: 'Bob', role: 'Editor', status: 'Pending' },
  { id: 'U-003', name: 'Charlie', role: 'Viewer', status: 'Inactive' },
]

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  args: {
    compact: false,
    hoverable: true,
    cellBorder: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-[900px]">
      <Table {...args}>
        <Table.THead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.THead>
        <Table.TBody>
          {rows.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td>{row.id}</Table.Td>
              <Table.Td>{row.name}</Table.Td>
              <Table.Td>{row.role}</Table.Td>
              <Table.Td>{row.status}</Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>
    </div>
  ),
}
