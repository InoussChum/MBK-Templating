export type Donor = {
    id: string
    name: string
    email: string
    status: 'Actif' | 'Inactif'
    createdAt: string
}

export const dashboardSummary = {
    totalDonors: '1,245',
    activeSessions: '37',
    completionRate: 82,
    pendingActions: '14',
    globalTrend: 'Progression stable cette semaine (+6%).',
    activityTrend: '83 nouveaux enregistrements sur les 7 derniers jours.',
}

export const recentActivities = [
    { id: 'P-10293', name: 'Jane Doe', action: 'Profil mis à jour', date: '2026-02-20' },
    { id: 'P-10295', name: 'Moussa Fall', action: 'Ajout donneur', date: '2026-02-21' },
    { id: 'P-10302', name: 'Fatou Ndiaye', action: 'Statut activé', date: '2026-02-22' },
]

export const donors: Donor[] = [
    {
        id: 'P-10293',
        name: 'Jane Doe',
        email: 'jane@example.com',
        status: 'Actif',
        createdAt: '2026-02-20',
    },
    {
        id: 'P-10295',
        name: 'Moussa Fall',
        email: 'moussa@example.com',
        status: 'Actif',
        createdAt: '2026-02-21',
    },
    {
        id: 'P-10301',
        name: 'Awa Diop',
        email: 'awa@example.com',
        status: 'Inactif',
        createdAt: '2026-02-19',
    },
    {
        id: 'P-10302',
        name: 'Fatou Ndiaye',
        email: 'fatou@example.com',
        status: 'Actif',
        createdAt: '2026-02-22',
    },
]
