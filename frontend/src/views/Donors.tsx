import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Button, Card, DatePicker, Drawer, Input, Pagination, Select, Table, Tag } from '@/components/ui'
import { donors as donorsData, type Donor } from '@/mock/data/donorsDashboardData'

type StatusFilter = 'all' | Donor['status']

const statusOptions = [
    { label: 'Tous', value: 'all' },
    { label: 'Actif', value: 'Actif' },
    { label: 'Inactif', value: 'Inactif' },
]

const PAGE_SIZE = 3

const Donors = () => {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState<StatusFilter>('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null)

    const filteredDonors = useMemo(() => {
        return donorsData.filter((donor) => {
            const matchesSearch =
                donor.name.toLowerCase().includes(search.toLowerCase()) ||
                donor.email.toLowerCase().includes(search.toLowerCase())
            const matchesStatus = status === 'all' || donor.status === status
            return matchesSearch && matchesStatus
        })
    }, [search, status])

    const paginatedDonors = useMemo(() => {
        const start = (currentPage - 1) * PAGE_SIZE
        return filteredDonors.slice(start, start + PAGE_SIZE)
    }, [filteredDonors, currentPage])

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3>Liste des donneurs</h3>
                    <p className="text-sm">Recherche, filtres et consultation rapide.</p>
                </div>
                <div className="flex gap-2">
                    <Button asElement={Link} to="/dashboard">Retour dashboard</Button>
                    <Button variant="solid">Ajouter donneur</Button>
                </div>
            </div>

            <Card bordered>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
                    <Input
                        placeholder="Rechercher nom/e-mail"
                        value={search}
                        onChange={(event) => {
                            setCurrentPage(1)
                            setSearch(event.target.value)
                        }}
                    />
                    <Select
                        placeholder="Statut"
                        options={statusOptions}
                        value={statusOptions.find((option) => option.value === status)}
                        onChange={(option) => {
                            setCurrentPage(1)
                            setStatus((option?.value || 'all') as StatusFilter)
                        }}
                    />
                    <DatePicker.DatePickerRange placeholder="Date de création" />
                    <Button>Exporter CSV</Button>
                </div>
            </Card>

            <Card bordered>
                <Table hoverable>
                    <Table.THead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Nom</Table.Th>
                            <Table.Th>E-mail</Table.Th>
                            <Table.Th>Statut</Table.Th>
                            <Table.Th>Créé le</Table.Th>
                        </Table.Tr>
                    </Table.THead>
                    <Table.TBody>
                        {paginatedDonors.map((donor) => (
                            <Table.Tr key={donor.id} className="cursor-pointer" onClick={() => setSelectedDonor(donor)}>
                                <Table.Td>{donor.id}</Table.Td>
                                <Table.Td>{donor.name}</Table.Td>
                                <Table.Td>{donor.email}</Table.Td>
                                <Table.Td>
                                    <Tag className={donor.status === 'Actif' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100'}>
                                        {donor.status}
                                    </Tag>
                                </Table.Td>
                                <Table.Td>{donor.createdAt}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.TBody>
                </Table>

                <div className="mt-4">
                    <Pagination
                        total={filteredDonors.length}
                        pageSize={PAGE_SIZE}
                        currentPage={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            </Card>

            <Drawer
                title="Détail donneur"
                placement="right"
                width={380}
                isOpen={Boolean(selectedDonor)}
                onClose={() => setSelectedDonor(null)}
                onRequestClose={() => setSelectedDonor(null)}
            >
                {selectedDonor && (
                    <div className="space-y-2 text-sm">
                        <p><strong>ID:</strong> {selectedDonor.id}</p>
                        <p><strong>Nom:</strong> {selectedDonor.name}</p>
                        <p><strong>E-mail:</strong> {selectedDonor.email}</p>
                        <p><strong>Statut:</strong> {selectedDonor.status}</p>
                        <p><strong>Créé le:</strong> {selectedDonor.createdAt}</p>
                    </div>
                )}
            </Drawer>
        </div>
    )
}

export default Donors
