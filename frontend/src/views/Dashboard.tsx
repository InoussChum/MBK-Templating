import { useMemo } from 'react'
import { Link } from 'react-router'
import { Button, Card, Table, Tabs } from '@/components/ui'
import { dashboardSummary, recentActivities } from '@/mock/data/donorsDashboardData'

const Dashboard = () => {
    const completionLabel = useMemo(
        () => `${dashboardSummary.completionRate}%`,
        [],
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3>Tableau de bord</h3>
                    <p className="text-sm">Vue rapide des indicateurs et de l’activité.</p>
                </div>
                <Button asElement={Link} to="/donors" variant="solid">
                    Créer une nouvelle campagne
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Card bordered>
                    <p className="text-sm">Total donneurs</p>
                    <h4>{dashboardSummary.totalDonors}</h4>
                </Card>
                <Card bordered>
                    <p className="text-sm">Sessions actives</p>
                    <h4>{dashboardSummary.activeSessions}</h4>
                </Card>
                <Card bordered>
                    <p className="text-sm">Taux de complétion</p>
                    <h4>{completionLabel}</h4>
                </Card>
                <Card bordered>
                    <p className="text-sm">Actions en attente</p>
                    <h4>{dashboardSummary.pendingActions}</h4>
                </Card>
            </div>

            <Card bordered>
                <Tabs defaultValue="global" variant="underline">
                    <Tabs.TabList>
                        <Tabs.TabNav value="global">Vue globale</Tabs.TabNav>
                        <Tabs.TabNav value="activity">Activité</Tabs.TabNav>
                    </Tabs.TabList>
                    <Tabs.TabContent value="global">
                        <p className="text-sm">{dashboardSummary.globalTrend}</p>
                    </Tabs.TabContent>
                    <Tabs.TabContent value="activity">
                        <p className="text-sm">{dashboardSummary.activityTrend}</p>
                    </Tabs.TabContent>
                </Tabs>
            </Card>

            <Card bordered>
                <div className="mb-3 flex items-center justify-between">
                    <h5>Activité récente</h5>
                    <Link to="/donors" className="text-sm font-semibold text-primary-600">
                        Voir la liste des donneurs
                    </Link>
                </div>
                <Table hoverable>
                    <Table.THead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Nom</Table.Th>
                            <Table.Th>Action</Table.Th>
                            <Table.Th>Date</Table.Th>
                        </Table.Tr>
                    </Table.THead>
                    <Table.TBody>
                        {recentActivities.map((activity) => (
                            <Table.Tr key={activity.id}>
                                <Table.Td>{activity.id}</Table.Td>
                                <Table.Td>{activity.name}</Table.Td>
                                <Table.Td>{activity.action}</Table.Td>
                                <Table.Td>{activity.date}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.TBody>
                </Table>
            </Card>
        </div>
    )
}

export default Dashboard
