# Brief écran - Tableau de bord

## 1) Métadonnées écran
- Nom de l'écran: Tableau de bord
- Route/chemin: `/dashboard`
- Type d'écran: tableau de bord
- Objectif métier: Donner une vision rapide de l activité et des actions clés
- Rôle utilisateur principal: Responsable back-office
- Priorité: P1

## 2) Périmètre et contraintes
- Références design system:
  - `carto/CONFLUENCE_MASTER.md`
  - `carto/BRAND_DEFINITION.md`
  - `carto/components/ui/Card.md`
  - `carto/components/ui/Table.md`
  - `carto/components/ui/Tabs.md`
- Composants autorisés uniquement depuis le catalogue: Oui
- Nouvelle variante autorisée si absente: Oui (marquer `VARIANTE_A_CREER`)

## 3) Contenu et données
- Sections principales:
  1. Rangée de cartes KPI
  2. Graphiques et tendances
  3. Tableau d activité récente
- Champs clés (libellé -> valeur exemple):
  - Total participants -> `1,245`
  - Sessions actives -> `37`
  - Taux de complétion -> `82%`
- Actions utilisateur:
  - Action primaire: `Créer une nouvelle campagne`
  - Actions secondaires: `Exporter`, `Filtrer par période`

## 4) Mise en page et grille
- Desktop (12 colonnes):
  - KPI: 4 cartes x span 3
  - Graphiques: principal span 8 + secondaire span 4
  - Tableau activité span 12
- Tablette (8 colonnes):
  - KPI: 2 cartes par ligne (span 4)
  - Graphiques: span 8 puis span 8
  - Tableau activité span 8
- Mobile (4 colonnes):
  - Ordre des blocs: entête -> KPI -> graphiques -> activité
  - Blocs pleine largeur: toutes les sections majeures span 4

## 5) Mapping composants
| Section | Composant | Variante | Props clés | Span Desktop | Span Tablette | Span Mobile |
|---|---|---|---|---:|---:|---:|
| Entête | Button | solid | `Créer`, icône début | 2 | 3 | 4 |
| KPI | Card | bordered | titre, valeur, variation | 3 | 4 | 4 |
| Tendances | Tabs | underline | `vue globale/activité` | 12 | 8 | 4 |
| Tendances | Chart | line/bar | dataset, légende | 8 | 8 | 4 |
| Activité | Table | default | tri, pagination | 12 | 8 | 4 |
| Pied de liste | Pagination | default | total/pageSize/current | 4 | 8 | 4 |

## 6) États requis
- default, hover, focus, disabled, loading
- empty: aucune donnée sur la période
- error: échec de chargement (cartes/graphes/tableau)

## 7) Règles d'accessibilité
- Résumé texte des graphiques disponible
- Entêtes de colonnes accessibles clavier
- Libellés explicites sur les boutons
- La couleur n'est pas le seul indicateur des variations KPI

## 8) Points ouverts
| Sujet | Pourquoi nécessaire | Responsable | Statut |
|---|---|---|---|
| Ordre de priorité des KPI | Décision métier | Produit | A COMPLETER |
| Type de graphique par métrique | Lisibilité métier | Data/Design | A COMPLETER |

## 9) Critères d'acceptation
- Vision synthétique comprise en < 5 secondes
- Mise en page lisible sur mobile
- États loading/empty/error définis sur tous les blocs principaux
- Uniquement composants catalogue ou variantes nouvelles documentées
