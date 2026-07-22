# Logo AZUREUM — Spécification de production

## Statut

**En production — symbole V1 soumis à validation**

## Références

- `RC-06 — Identité de marque` dans `docs/specifications/design-system-v1.md` ;
- palette identitaire du Design System V1 ;
- concept 3 retenu lors de l'exploration graphique.

## Objectif

Cette spécification définit les contraintes de production du logo AZUREUM. Elle ne remplace pas le Design System et n'ouvre aucune nouvelle recherche conceptuelle.

Le premier actif produit est le symbole équilibré. Le mot-symbole, la signature complète et les exports de production ne seront créés qu'après sa validation.

## Silhouette

Le symbole représente une cigale géométrique minimaliste :

- silhouette verticale immédiatement reconnaissable ;
- symétrie autour d'un axe vertical unique ;
- tête compacte ;
- ailes longues, fermées et effilées ;
- construction intérieure réduite aux lignes nécessaires à l'identité du concept 3 ;
- absence de facette décorative ou de détail naturaliste.

Toute évolution préserve cette silhouette et ne peut en augmenter la complexité visuelle.

### Référence visuelle verrouillée

La **proposition 3** de la planche de sélection constitue la référence visuelle définitive du symbole. Sa silhouette, sa tête géométrique, le croisement central et la forme générale de ses ailes ne peuvent plus faire l'objet d'une nouvelle interprétation créative.

Le travail vectoriel consiste exclusivement à reproduire fidèlement cette référence, puis à en corriger la symétrie, les courbes, les épaisseurs et les points de contrôle sans modifier sa lecture générale.

## Référence anatomique

La référence anatomique secondaire est une photographie dorsale de *Magicicada cassinii*. Elle permet de contrôler que le symbole reste identifiable comme une cigale, mais ne peut justifier aucune modification de la référence visuelle verrouillée :

- [*Magicicada cassinii* femelle, vue dorsale — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Magicicada_cassinii-female_dorsal.jpg).

Le symbole doit conserver uniquement les caractères nécessaires à la lecture d'une cigale :

- une tête lisible mais secondaire, plus large que l'attache du corps ;
- un thorax compact assurant la transition entre la tête, le corps et les ailes ;
- un axe corporel vertical et effilé ;
- deux ailes longues, symétriques et légèrement divergentes ;
- une silhouette générale plus longue que large ;
- des antennes discrètes.

La nervation détaillée des ailes, les yeux, les pattes, la segmentation abdominale et les détails de carapace ne doivent pas être reproduits. La photographie sert à préserver la lecture anatomique, jamais à ajouter des détails illustratifs.

## Construction géométrique

- grille de construction : `128 × 128` unités ;
- axe de symétrie : `x = 64` ;
- coordonnées entières ou demi-entières autant que possible ;
- courbes de Bézier limitées aux contours des ailes et aux raccords organiques nécessaires ;
- segments droits pour la structure centrale ;
- extrémités et raccords arrondis ;
- aucun élément superposé sans fonction géométrique.

Le master conserve des tracés séparés et lisibles afin de rester éditable. Les côtés gauche et droit doivent être des constructions géométriquement symétriques.

## Épaisseurs

La version équilibrée constitue le tracé directeur de référence.

| Adaptation | Usage | Principe |
|---|---|---|
| Fine | Grands formats et édition | Trait allégé sans modification de la géométrie |
| Équilibrée | Signature principale | Épaisseur de référence |
| Icône | 16 à 32 px | Trait renforcé et simplification optique strictement nécessaire |

Les adaptations futures dérivent du même tracé directeur. Elles ne peuvent introduire aucune ligne, facette ou décoration.

## Couleurs autorisées

- or fumé : `#D2C7A3`, couleur officielle et couleur de référence du symbole ;
- noir minéral : `#0F0F11`, déclinaison monochrome ;
- blanc : `#FFFFFF`, déclinaison monochrome inversée.

Le master utilise l'or fumé comme couleur de référence. Le symbole demeure strictement monochrome : aucun dégradé, effet, filtre, ombre ou transparence n'est autorisé.

## Zone de protection

La zone de protection provisoire autour du symbole correspond au minimum à la largeur de sa tête. Aucun texte, bord, image ou autre élément graphique ne doit empiéter sur cette zone.

Sa valeur définitive sera mesurée et documentée après validation du master.

## Taille minimale

Le symbole doit rester identifiable à `16 px`, `24 px` et `32 px`.

- `16 px` : silhouette et structure principale reconnaissables ;
- `24 px` : lecture nette des ailes et de la structure centrale ;
- `32 px` : restitution complète du symbole.

La taille minimale définitive de chaque adaptation sera arrêtée après les tests visuels.

## Versions

Le dossier `master/v1/` devient immuable après validation. Toute évolution ultérieure crée une nouvelle version sans modifier le master V1.

Le fichier en cours de validation est :

- `master/v1/azureum-symbol-master.svg`.

## Exports

Après validation du symbole, les exports pourront comprendre :

- symbole SVG optimisé ;
- mot-symbole SVG ;
- signature complète SVG ;
- déclinaisons noire, blanche et or fumé ;
- favicon SVG ;
- PNG aux tailles nécessaires aux plateformes ciblées.

Les exports destinés au Web sont optimisés séparément. Le master ne fait l'objet d'aucune optimisation destructive.

## Critères d'acceptation

- le concept 3 et sa silhouette générale sont préservés ;
- la géométrie est symétrique autour de `x = 64` ;
- les épaisseurs sont cohérentes ;
- les espaces négatifs sont équilibrés ;
- le symbole reste reconnaissable à 16, 24 et 32 px ;
- les versions monochromes restent lisibles sans effet ;
- le master ne contient aucun élément redondant, filtre, masque, texte, police embarquée ou point de contrôle sans fonction géométrique ;
- le master est constitué exclusivement de tracés vectoriels propres, éditables et reproductibles ;
- aucune nouvelle ligne, facette ou décoration n'est introduite ;
- aucune opération d'optimisation destinée au Web n'altère le master.
