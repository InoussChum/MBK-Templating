# Brief écran - Liste des doneurs

## 1) Métadonnées écran
- Nom de l'écran: Liste des doneurs
- Route/chemin: `/donors`
- Type d'écran: liste
- Objectif métier: Rechercher, filtrer et gérer les donneurs efficacement
- Rôle utilisateur principal: équipe opérations / support
- Priorité: P1

## 2) Périmètre et contraintes
- Références design system:
  - `carto/CONFLUENCE_MASTER.md`
  - `carto/BRAND_DEFINITION.md`
  - `carto/components/ui/Table.md`
  - `carto/components/ui/Input.md`
  - `carto/components/ui/Select.md`
  - `carto/components/ui/Drawer.md`
- Composants autorisés uniquement depuis le catalogue: Oui
- Nouvelle variante autorisée si absente: Oui (marquer `VARIANTE_A_CREER`)

## 3) Contenu et données
- Sections principales:
  1. Entête page + actions
  2. Barre de recherche/filtres
  3. Tableau des donneurs
  4. Panneau détail sur clic ligne
- Champs clés (libellé -> valeur exemple):
  - ID -> `P-10293`
  - Nom -> `Jane Doe`
  - E-mail -> `jane@example.com`
  - Statut -> `Actif`
  - Crée le -> `2026-02-20`
- Actions utilisateur:
  - Action primaire: `Ajouter donneur`
  - Actions secondaires: `Exporter CSV`, `Ouvrir détail`, `Mise à jour en lot`

## 4) Mise en page et grille
- Desktop (12 colonnes):
  - Entête span 12
  - Filtres span 12 (recherche 4 + statut 3 + date 3 + actions 2)
  - Tableau span 12
- Tablette (8 colonnes):
  - Entête span 8
  - Filtres sur 2 lignes, chaque ligne span 8
  - Tableau span 8
- Mobile (4 colonnes):
  - Ordre des blocs: entête -> filtres rapides -> liste/cartes -> pagination
  - Blocs pleine largeur: inputs/actions span 4

## 5) Mapping composants
| Section | Composant | Variante | Props clés | Span Desktop | Span Tablette | Span Mobile |
|---|---|---|---|---:|---:|---:|
| Entête | Button | solid | `Ajouter donneur` | 2 | 3 | 4 |
| Filtres | Input | default | `rechercher nom/e-mail` | 4 | 8 | 4 |
| Filtres | Select | default | options statut | 3 | 4 | 4 |
| Filtres | DatePicker | range | date de création | 3 | 4 | 4 |
| Liste | Table | default | tri, action ligne | 12 | 8 | 4 |
| Pied liste | Pagination | default | total/pageSize/current | 4 | 8 | 4 |
| Détail | Drawer | right-drawer | détail donneur + actions | 5 | 8 | 4 |

## 6) États requis
- default, hover, focus, disabled, loading
- empty: aucun donneur trouvé
- error: échec de chargement
- état sélection pour actions en lot

## 7) Règles d accessibilité
- Labels et placeholders explicites sur filtres
- Actions de ligne accessibles clavier
- Focus trap dans Drawer + retour focus à la fermeture
- États erreur/vide annoncés clairement

## 8) Points ouverts
| Sujet | Pourquoi nécessaire | Responsable | Statut |
|---|---|---|---|
| Liste d'actions en lot | Politique métier | Produit | A COMPLETER |
| Présentation mobile (tableau vs cartes) | Décision UX | Design | A COMPLETER |
| Permissions action par ligne | Gestion des rôles | Sécurité | A COMPLETER |

## 9) Critères d acceptation
- Recherche et filtres réduisent les données visibles immédiatement
- Interaction tableau + panneau détail cohérente sur tous breakpoints
- Actions en lot explicites et réversibles si nécessaire
- États empty/error/loading entièrement définis
