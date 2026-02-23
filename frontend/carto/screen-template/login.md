# Brief Écran - Connexion

## 1) Métadonnées écran
- Nom de l écran: Connexion
- Route/chemin: `/sign-in`
- Type d écran: authentification
- Objectif métier: Permettre l authentification utilisateur de manière rapide et sécurisée
- Rôle utilisateur principal: Tous les utilisateurs authentifiés
- Priorité: P1

## 2) P�rim�tre et contraintes
- Références design system:
  - `carto/CONFLUENCE_MASTER.md`
  - `carto/BRAND_DEFINITION.md`
  - `carto/components/ui/Input.md`
  - `carto/components/ui/Button.md`
- Composants autorisés uniquement depuis le catalogue: Oui
- Nouvelle variante autorisée si absente: Oui (marquer `VARIANTE_A_CREER`)

## 3) Contenu et données
- Sections principales:
  1. Marque/logo et texte d introduction
  2. Formulaire de connexion
  3. Liens d'aide (mot de passe oublié)
- Champs clés (libellé -> valeur exemple):
  - E-mail -> `john@company.com`
  - Mot de passe -> `********`
- Actions utilisateur:
  - Action primaire: `Se connecter`
  - Actions secondaires: `Mot de passe oublié`

## 4) Mise en page et grille
- Desktop (12 colonnes):
  - Carte auth centrée span 4
  - Zone visuelle/message span 8 (optionnelle)
- Tablette (8 colonnes):
  - Carte auth centrée span 6
- Mobile (4 colonnes):
  - Ordre des blocs: logo -> titre -> formulaire -> liens
  - Blocs pleine largeur: formulaire et CTA principal (span 4)

## 5) Mapping composants
| Section | Composant | Variante | Props clés | Span Desktop | Span Tablette | Span Mobile |
|---|---|---|---|---:|---:|---:|
| Formulaire | Input | default | `type=email`, `placeholder`, `invalid` | 4 | 6 | 4 |
| Formulaire | Input | default | `type=password`, `placeholder`, `invalid` | 4 | 6 | 4 |
| Formulaire | Checkbox | default | `se souvenir de moi` | 4 | 6 | 4 |
| Actions | Button | solid | `block=true`, `loading` | 4 | 6 | 4 |
| Liens | ActionLink | default | `mot de passe oublié`, `inscription` | 4 | 6 | 4 |

## 6) États requis
- default, hover, focus, disabled, loading
- error: e-mail/mot de passe invalide et erreur globale d authentification

## 7) Règles d'accessibilité
Règles d'accessibilité
- Labels visibles pour e-mail/mot de passe
- Messages d'erreur associés aux champs
- Soumission accessible clavier
- Retour focus sur le premier champ invalide

## 8) Points ouverts
| Sujet | Pourquoi nécessaire | Responsable | Statut |
|---|---|---|---|
| Boutons de connexion sociale | Stratégie auth optionnelle | Produit | A COMPLETER |
| Illustration latérale sur mobile | Décision responsive | Design | A COMPLETER |

## 9) Critères d acceptation
- L'utilisateur se connecte en <= 3 interactions
- Gestion d erreur claire en cas d'identifiants invalides
- CTA pleine largeur sur mobile
- Contrôles formulaire conformes a11y
