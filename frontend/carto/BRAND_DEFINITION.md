# Brand Definition - Design Tokens et Parametrage

## Objectif
Definir un systeme de marque editable (couleurs, tailles, typographie, rayons, motion, etc.) qui peut etre renseigne meme si le template ne fournit pas encore toutes les variantes.

## Mode d usage
- Utiliser ce document comme source de verite Design + Dev.
- Les valeurs `A DEFINIR` sont volontairement ouvertes.
- Les valeurs `CUSTOM_*` permettent d introduire des nouveaux tokens sans contrainte.

## 1) Couleurs - Palette de marque
| Token | Usage | Light | Dark |
|---|---|---|---|
| `brand.icons.primary-selected` | info | `#0F00E0` | `#E7E6FC` |
| `brand.icons.disable` | info | `#888888` | `#D7D7D7` |
| `brand.icons.utilities` | info | `#051473` | `#C0C4DC` |
| `brand.icons.utilities-hover` | info | `#040F56` | `#E6E8F1` |
| `brand.icons.resources` | info | `#9AB9FF` | `#9AB9FF` |
| `brand.icons.resources-hover` | info | `#78A1FF` | `#BBCFFF` |
| `brand.icons.action` | info | `#0F00E0` | `#C3BFF7` |
| `brand.icons.action-hover` | info | `#0B00A8` | `#E7E6FC` |
| `brand.icons.white` | info | `#44609F` | `#44609F` |
| `brand.icons.white-hover` | info | `#44609F` | `#44609F` |
| `brand.icons.white` | info | `#FFFFFF` | `#020202` |
| `brand.icons.white-hover` | info | `#E7E6FC` | `#070070` |
| `brand.icons.success` | info | `#339279` | `#7FEED1` |
| `brand.icons.success-hover` | info | `#2A7461` | `#A9F3E0` |
| `brand.icons.error` | info | `#C02006` | `#DF8F82` |
| `brand.icons.error-hover` | info | `#901805` | `#EFC7C1` |
| `brand.icons.warning` | info | `#BF7600` | `#FFCE7F` |
| `brand.icons.warning-hover` | info | `#804F00` | `#FFE6BF` |
| `brand.icons.information` | info | `#44609F` | `#9AB9FFF` |
| `brand.icons.information-hover` | info | `#3C5080` | `#BBCFFF` |
| `brand.icons.action-hover-2` | info | `#0B00A8` | `#867FEF` |
| `brand.icons.action-2` | info | `#0F00E0` | `#4B40E8` |
| `brand.icons.action-grey` | info | `#504C4D` | `#EEEDEE` |
| `brand.icons.action-grey-hover` | info | `#01000B` | `#FFFFFF` |
| `brand.text.heading-1` | Headings 1 | `#020202` | `#FFFFFF` |
| `brand.text.heading-2` | Headings 2 | `#0B00A8` | `#E7E6FC` |
| `brand.text.body` | Body | `#241F21` | `#FFFFFF` |
| `brand.text.notes` | Notes | `#504C4D` | `#EEEDEE` |
| `brand.text.action` | Action | `#0F00E0` | `#C3BFF7` |
| `brand.text.action-hover` | Action hover | `#0B00A8` | `#E7E6FC` |
| `brand.text.action-grey` | Action grey | `#504C4D` | `#EEEDEE` |
| `brand.text.action-grey-hover` | Action grey hover | `#01000B` | `#FFFFFF` |
| `brand.text.resources` | Resources | `#9AB9FF` | `#9AB9FF` |
| `brand.text.resources-hover` | Resources hover | `#78A1FF` | `#BBCFFF` |
| `brand.text.information` | Information | `#44609F` | `#9AB9FF` |
| `brand.text.information-hover` | Information hover | `#3C5080` | `#BBCFFF` |
| `brand.text.disabled` | Disabled | `#504C4D` | `#D7D7D7` |
| `brand.text.success` | Success | `#339279` | `#7FEED1` |
| `brand.text.success-hover` | Success hover | `#2A7461` | `#A9F3E0` |
| `brand.text.warning` | Warning | `#BF7600` | `#FFCE7F` |
| `brand.text.warning-hover` | Warning hover | `#804F00` | `#FFE6BF` |
| `brand.text.error` | Error | `#C02006` | `#DF8F82` |
| `brand.text.error-hover` | Error hover | `#901805` | `#EFC7C1` |
| `brand.text.on-action` | On action | `#FFFFFF` | `#020202` |
| `brand.text.on-action-hover` | On action hover | `#E7E6FC` | `#020202` |
| `brand.text.on-disable` | On disable | `#888888` | `#F4F4F4` |
| `brand.border.primary` | Primary | `#D7D7D7` | `#504C4D` |
| `brand.border.white` | White | `#FFFFFF` | `#020202` |
| `brand.border.resources` | Resources | `#DDE7FF` | `#070070` |
| `brand.border.secondary` | Secondary | `#0F00E0` | `#867FEF` |
| `brand.border.action` | Action | `#0F00E0` | `#C3BFF7` |
| `brand.border.action-hover` | Action hover | `#0B00A8` | `#E7E6FC` |
| `brand.border.information` | Information | `#44609F` | `#9AB9FF` |
| `brand.border.information-hover` | Information hover | `#3C5080` | `#BBCFFF` |
| `brand.border.success` | Succes | `#339279` | `#&FEED1` |
| `brand.border.success-hover` | Succes hover | `#2A7461` | `#a9F3E0` |
| `brand.border.warning` | Warning | `#BF7600` | `#FFCE7F` |
| `brand.border.warning-hover` | Warning hover | `#804F00` | `#FFE6BF` |
| `brand.border.error` | Error | `#C02006` | `#DF8F82` |
| `brand.border.error-hover` | Error hover | `#901805` | `#EFC7C1` |
| `brand.border.disable` | Disable | `#888888` | `#EEEDEE` |
| `brand.border.action-grey` | Action gray | `#504C4D` | `#EEEDEE` |
| `brand.border.action-grey-hover` | Action gray hover | `#01000B` | `#FFFFFF` |
| `brand.surface.page` | Page | `#FFFFFF` | `#020202` |
| `brand.surface.primary` | Primary | `#FFFFFF` | `#181717` |
| `brand.surface.content-boxes` | Content boxes | `#F4F4F4` | `#3C3939` |
| `brand.surface.secondary` | Secondary | `#E6E8F1` | `#E6E8F1` |
| `brand.surface.dark-content-boxes` | Dark content boxes | `#070070` | `#E7E6FC` |
| `brand.surface.disabled` | Disabled | `#D7D7D7` | `#888888` |
| `brand.surface.disabled-selected` | Disabled selected | `#888888` | `#EEEDEE` |
| `brand.surface.success` | Success | `#EEFDF9` | `#153A30` |
| `brand.surface.success-full` | Success full | `#339279` | `#7FEED1` |
| `brand.surface.success-hover` | Sucess hover | `#2A7461` | `#A9F3E0` |
| `brand.surface.warning` | Warning | `#FFF6E6` | `#BF7600` |
| `brand.surface.warning-full` | Warning full | `#BF7600` | `#FFCE7F` |
| `brand.surface.warning-hover` | Warning hover | `#804F00` | `#FFE6BF` |
| `brand.surface.error` | Error | `#F9E9E7` | `#901805` |
| `brand.surface.error-full` | Error full | `#C02006` | `#DF8F82` |
| `brand.surface.error-hover` | Error hover | `#901805` | `#EFC7C1` |
| `brand.surface.information` | Information | `#DDE7FF` | `#44609F` |
| `brand.surface.information-full` | Information full | `#44609F` | `#BBCFFF` |
| `brand.surface.information-hover` | Information hover | `#3C5080` | `#DDE7FF` |
| `brand.surface.resources` | Resources | `#9AB9FF` | `#9AB9FF` |
| `brand.surface.resources-hover` | Resources hover | `#78A1FF` | `#BBCFFF` |
| `brand.surface.action` | Action | `#0F00E0` | `#867FEF` |
| `brand.surface.action-hover` | Action hover | `#0B00A8` | `#C3BFF7` |
| `brand.surface.action-hover-2` | Action hover 2 | `#E7E6FC` | `#0B00A8` |
| `brand.surface.opaque-light-blue` | Opaque light blue | `#E7E6FC-20%` | `#241F21-20%` |
| `brand.surface.opaque-dark-blue` | Opaque dark blue | `#040038-20%` | `#241F21-20%` |
| `brand.surface.opaque-white` | Opaque white | `#FFFFFF-20%` | `#241F21-20%` |
| `brand.surface.opaque-dark` | Opaque white | `#241F21-20%` | `#FFFFFF-20%` |
| `brand.surface.transparent` | Opaque white | `#FFFFFF-0%` | `#FFFFFF-0%` |

## 2) Tailles - Echelle
### 2.1) Body (À valider : notes)
| Token | Usage | Desktop | Tablet | mobile |
|---|---|---|---|---|
| `size.notes` | Notes | 12 | 11 | 10 |
| `size.sm` | Controles petits | 14 | 12 | 12 |
| `size.md` | Taille par defaut | 16 | 14 | 14 |
| `size.lg` | Controles larges | 20 | 16 | 16 |
| `size.2xl` | Cas specifiques | 64 | 56 | 48 |

### 2.2) Heading
| Token | Usage | Desktop | Tablet | mobile |
|---|---|---|---|---|
| `size.h1` | Heading 1 | 60 | 48 | 32 |
| `size.h2` | Heading 2 | 48 | 40 | 28 |
| `size.h3` | Heading 3 | 40 | 32 | 28 |
| `size.h4` | Heading 4 | 32 | 28 | 24 |
| `size.h5` | Headinf 5 | 24 | 24 | 20 |
| `size.h6` | Heading 6 | 20 | 20 | 20 |



## 3) Typography
| Token | Usage | Valeur |
|---|---|---|
| `font.family.base` | Texte UI | DM Sans |
| `font.family.heading` | Title | DM Sans |
| `font.weight.regular` | Texte normal | regular |
| `font.weight.medium` | Labels | medium |
| `font.weight.bold` | CTA/Titres | bold |

## 4) Spacing, Radius, Borders, Shadow
| Famille | Tokens a definir |
|---|---|
| Spacing | `space.0/1/2/3/4/5/6/8/10/12/16` + `space.custom.*` |
| Radius | `radius.none/sm/md/lg/xl/full` + `radius.custom.*` |
| Border width | `border.0/1/2/4` + `border.custom.*` |
| Shadow | `shadow.xs/sm/md/lg/xl` + `shadow.focus` + `shadow.custom.*` |

## 5) Motion
| Token | Usage | Valeur |
|---|---|---|
| `motion.duration.fast` | hover/focus | A DEFINIR |
| `motion.duration.base` | transition standard | A DEFINIR |
| `motion.duration.slow` | drawers/dialogs | A DEFINIR |
| `motion.ease.standard` | animation par defaut | A DEFINIR |
| `motion.ease.emphasis` | animation marquee | A DEFINIR |

## 6) Z-index et layers
| Token | Usage | Valeur |
|---|---|---|
| `z.dropdown` | Menus | A DEFINIR |
| `z.sticky` | Header sticky | A DEFINIR |
| `z.drawer` | Drawer | A DEFINIR |
| `z.modal` | Dialog | A DEFINIR |
| `z.toast` | Notifications | A DEFINIR |
| `z.tooltip` | Tooltip | A DEFINIR |

## 7) Etats transverses (tous composants)
| Etat | Couleur | Bordure | Opacite | Motion |
|---|---|---|---|---|
| `default` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `hover` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `focus` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `active` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `disabled` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `loading` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `selected` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| `error` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |

## 8) Variantes non definies (a creer)
Utiliser ce tableau pour declarer les variantes meme si le template ne les propose pas encore.

| Composant | Variante proposee | Parametres styles attendus | Statut |
|---|---|---|---|
| Button | `destructive` | bg, text, hover, focus ring, disabled | A COMPLETER |
| Input | `clearable` | icon, padding, hover/focus, disabled | A COMPLETER |
| Select | `creatable` | option chip, menu, selected, hover | A COMPLETER |
| Table | `sticky-header` | bg header, shadow, border, z-index | A COMPLETER |
| CUSTOM_COMPONENT | `CUSTOM_VARIANT` | CUSTOM_STYLE_FIELDS | A COMPLETER |

## 9) Storybook - Parametrage
- Stories de reference: `src/stories/ui/*.stories.tsx`
- Playground brand: `src/stories/ui/BrandPlayground.stories.tsx`
- Regle: toute nouvelle decision de style validee dans Storybook doit etre reportee ici.
