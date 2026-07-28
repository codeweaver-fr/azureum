# Sprint 011 — Inventaire des médias temporaires

## Statut

**Livrable historique préparatoire — état antérieur à la création des médias**

## Note de clôture

Le présent document conserve l'inventaire préparatoire établi lors de l'Incrément 1 du
Sprint 011. Ses noms de fichiers cibles, formats et formulations au futur décrivent
l'état prévu à cette date et ne constituent pas un inventaire vivant.

L'état effectivement implémenté et validé est défini par :

- les fichiers présents dans `public/gallery/` ;
- les chemins, dimensions, orientations et alternatives textuelles déclarés dans
  `src/modules/gallery/demo-data.ts` ;
- les contrôles contractuels de `src/test/gallery-demo-data.test.ts`.

Ces sources prévalent pour toute vérification de l'inventaire actuel. Le contenu
historique ci-dessous n'est pas réécrit rétroactivement.

## 1. Périmètre

Cet inventaire couvre exclusivement les six médias fictifs nécessaires au jeu de
démonstration verrouillé par le Sprint 011.

Il ne définit :

- aucun contenu artistique officiel ;
- aucune œuvre réelle de David ;
- aucun pipeline média ;
- aucun format définitif de production ;
- aucune donnée métier ou structure de persistance.

## 2. Actifs existants

| Actif | Dimensions | Usage actuel | Décision |
|---|---:|---|---|
| `public/design-system/technical-artwork.png` | 1536 × 1024 | Validation technique de `ArtworkImage` sur `/design-system` | Conservé dans son périmètre actuel ; non réutilisé par la galerie |

Le symbole de marque présent dans `assets/brand/logo/` n'est pas une œuvre et ne peut pas
servir de média de démonstration pour la galerie.

## 3. Médias requis

Les futurs médias seront regroupés sous `public/gallery/demo/`. Le dossier ne sera créé
qu'au moment où les fichiers validés seront ajoutés.

| Identifiant temporaire | Collection | Nom de fichier cible | Orientation | Rôle |
|---|---|---|---|---|
| `study-01` | Collection Alpha | `study-01-vertical.png` | Verticale | Aperçu de la Collection Alpha et œuvre 1 |
| `study-02` | Collection Alpha | `study-02-horizontal.png` | Horizontale | Œuvre 2 |
| `study-03` | Collection Alpha | `study-03-square.png` | Carrée | Œuvre 3 |
| `composition-a` | Collection Bêta | `composition-a-horizontal.png` | Horizontale | Aperçu de la Collection Bêta et œuvre 4 |
| `composition-b` | Collection Bêta | `composition-b-vertical.png` | Verticale | Œuvre 5 |
| `composition-c` | Collection Bêta | `composition-c-square.png` | Carrée | Œuvre 6 |

Cette répartition exerce deux médias verticaux, deux horizontaux et deux carrés sans
augmenter les six œuvres prévues.

## 4. Contraintes communes

Chaque média doit :

- être manifestement fictif et non attribuable à David ;
- être abstrait et technique, sans reproduire une œuvre connue ;
- être dépourvu de texte, logo, signature, filigrane ou donnée personnelle ;
- disposer de dimensions intrinsèques connues ;
- utiliser un fond et une composition permettant de vérifier son ratio sans simuler un
  contenu artistique officiel ;
- rester identifiable comme donnée temporaire dans son nom de fichier et dans les tests ;
- être suffisamment léger pour les contrôles locaux, sans définir une politique
  d'optimisation de production.

## 5. Alternatives textuelles préparatoires

Les alternatives définitives seront rattachées aux données temporaires lors de
l'incrément 2. Elles décriront sobrement la composition visible et préciseront son
caractère technique lorsque nécessaire.

Elles ne reprendront ni titre réel, ni intention artistique attribuée à David.

## 6. Décisions et dépendances

- Aucun actif existant n'est adapté à l'ensemble des six cas requis.
- Le média de `/design-system` reste isolé afin de préserver la responsabilité de cette
  route technique.
- Les six médias doivent être produits et validés avant l'implémentation visuelle de
  l'incrément 3.
- Leur création ne doit entraîner ni dépendance, ni configuration distante, ni
  modification de `next.config`.
- Les noms, orientations et rôles de cet inventaire sont techniques et temporaires ; ils
  ne constituent pas un modèle éditorial définitif.
