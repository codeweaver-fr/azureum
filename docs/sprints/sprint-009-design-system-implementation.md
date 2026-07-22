# Sprint 009 — Implémentation du Design System V1

## Statut

En cours — incrément 3 validé

## Objectif

Le Sprint 009 a pour objectif d'implémenter le Design System V1 validé, sans modifier les décisions documentaires prises lors des Sprints 008 et 008-r1.

Le Sprint transforme le contrat documentaire en fondations CSS et React réutilisables, testables et accessibles, sans introduire de fonctionnalité métier ni concevoir les pages définitives d’AZUREUM.

## Références normatives

- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-008-r1-design-system-consolidation.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/GOVERNANCE.md`.

Les documents référencés constituent le contrat de référence. En cas de divergence entre le code et ces documents, les documents prévalent jusqu'à leur révision officielle.

En cas de contradiction, le travail s’arrête et l’écart est soumis au Product Owner. Aucune contradiction ne peut être résolue implicitement dans le code.

## Principes d’implémentation

- aucune valeur visuelle ne peut être codée en dur lorsqu’un token correspondant existe ;
- aucun composant ne peut contourner les tokens du Design System ;
- aucune décision artistique ne peut être prise localement ;
- toute nouvelle valeur doit provenir d’une décision explicitement reportée au Sprint 009 par le Design System V1 ;
- les composants restent génériques, réutilisables et indépendants du métier ;
- les Server Components restent la règle par défaut ;
- une frontière cliente n’est introduite que lorsqu’une interaction l’exige ;
- CSS moderne et CSS Modules sont privilégiés ;
- aucune bibliothèque d’interface n’est ajoutée sans nécessité démontrée ;
- l’accessibilité, le responsive et la réduction des mouvements sont intégrés dès l’implémentation.

## Périmètre

Le Sprint comprend uniquement :

- la définition des variables CSS correspondant aux Design Tokens validés ;
- le reset CSS et les fondations globales ;
- le chargement et les piles de repli des typographies validées ;
- les règles globales d’accessibilité et de réduction des mouvements ;
- les règles globales applicables aux médias ;
- l’implémentation des composants fondamentaux définis au chapitre 13 du Design System ;
- une page de validation visuelle du Design System, exclusivement destinée à vérifier le système ;
- les tests nécessaires à la validation des fondations ;
- la documentation développeur strictement nécessaire.

## Décisions explicitement reportées au Sprint 009

Le Sprint finalise exclusivement les décisions explicitement reportées au Sprint 009 par le Design System V1. Les décisions suivantes ont été validées par le Product Owner et intégrées au Design System avant toute implémentation :

- valeurs numériques des trois niveaux d’ombre ;
- courbe d’animation unique et neutralisation de toutes les durées animées avec `prefers-reduced-motion` ;
- liste définitive des variables CSS dérivée des tokens ;
- chargement de Cormorant Garamond et Inter avec `next/font/google`, licences vérifiées ;
- rôle `Selection` fondé sur Brand Primary et Text Inverse ;
- report explicite de `Overlay`, `Backdrop`, `Skeleton` et `Placeholder` jusqu’à l’existence d’un usage démontré ;
- traitement centralisé et traçable des points de rupture `DT-10`.

Ces décisions ne peuvent créer une nouvelle direction artistique, une nouvelle catégorie de token ou une valeur sans usage démontré.

Chaque décision validée dans cette section est intégrée au Design System V1 avant la clôture du Sprint afin que celui-ci demeure la source de vérité.

## Livrables attendus

- fondations CSS globales ;
- variables CSS documentées ;
- composants fondamentaux génériques et colocalisés avec leurs styles ;
- page de validation visuelle du Design System ;
- tests unitaires ou de contrat adaptés ;
- test de bout en bout minimal de la page de validation visuelle ;
- mise à jour du Design System V1 limitée aux décisions techniques explicitement reportées et validées pendant le Sprint ;
- documentation développeur mise à jour ;
- documents de gouvernance synchronisés.

## Composants fondamentaux

Le périmètre est limité aux composants déjà définis par le Design System :

- Conteneur (`CMP-01`) ;
- Empilement (`CMP-02`) ;
- Grille (`CMP-03`) ;
- Texte et titre (`CMP-04`) ;
- Bouton (`CMP-05`) ;
- Lien (`CMP-06`) ;
- Image d’œuvre (`CMP-07`) ;
- Icône (`CMP-08`).

Ces composants constituent la première implémentation de référence du Design System. Ils sont des fondations génériques destinées aux futurs écrans et non des composants propres à la galerie.

Aucun composant métier ou composant supplémentaire ne peut être ajouté dans ce Sprint sans révision explicite du contrat.

## Hors périmètre

- pages publiques ou privées définitives ;
- galerie fonctionnelle ;
- collections et œuvres réelles ;
- acquisition, paiement, remise ou remboursement ;
- authentification et autorisations ;
- intégration applicative Supabase, Stripe ou Brevo ;
- logique métier ;
- contenu éditorial définitif ;
- thème sombre ;
- animations complexes ;
- Tailwind CSS ;
- bibliothèque de composants tierce ;
- Storybook ;
- modification d’une décision déjà validée du Design System V1 ; seules les décisions explicitement reportées au Sprint 009 peuvent y être intégrées après validation du Product Owner.

## Contrôles attendus

- formatage ;
- ESLint ;
- vérification TypeScript ;
- tests Vitest ;
- build Next.js ;
- tests Playwright ;
- absence de régression sur les tests existants ;
- audit des dépendances ;
- contrôle du diff Git ;
- vérification clavier, focus, contrastes et réduction des mouvements ;
- contrôle responsive aux points de rupture documentés ;
- recherche des valeurs visuelles locales non justifiées.

## Critères d’acceptation

Le Sprint est terminable lorsque :

- les tokens validés possèdent une représentation CSS cohérente et documentée ;
- aucune valeur visuelle locale injustifiée n’est présente et aucun token existant n’est contourné ;
- les composants `CMP-01` à `CMP-08` respectent leur contrat documentaire ;
- les composants restent exempts de logique métier ;
- les états nécessaires sont perceptibles au clavier et sans dépendre uniquement de la couleur ;
- la réduction des mouvements est respectée ;
- les médias conservent leurs proportions et ne provoquent aucun recadrage destructif ;
- la page de validation visuelle démontre l’ensemble des éléments du Design System effectivement implémentés sans devenir une interface produit ;
- les contrôles locaux et distants sont conformes ;
- aucune contradiction avec les Sprints 003-r1 à 008-r1 n’est introduite ;
- les décisions techniques ouvertes au début du Sprint sont toutes intégrées au Design System V1 ou explicitement reportées par une nouvelle décision du Product Owner ;
- le Product Owner valide le résultat final.

## Séquence de réalisation

1. valider le présent contrat ;
2. proposer les décisions techniques explicitement reportées au Sprint 009 ;
3. obtenir leur validation par le Product Owner ;
4. intégrer les décisions validées au Design System V1 ;
5. implémenter et revoir séparément chaque incrément ;
6. créer la page de validation visuelle ;
7. compléter les tests ;
8. réaliser la revue visuelle et technique ;
9. corriger uniquement les écarts constatés ;
10. réaliser l’audit final ;
11. obtenir la validation Product Owner et verrouiller le Sprint.

## Incréments du Sprint

Le Sprint progresse par incréments contrôlés :

Aucun incrément ne commence tant que l’incrément précédent n’a pas été validé lors de la revue Product Owner.

1. décisions techniques explicitement reportées : **Validé** ;
2. fondations CSS : tokens, reset, styles globaux et typographies — **Validé** ;
3. mise en page : Conteneur, Empilement et Grille — **Validé** ;
4. typographie : Texte et titres ;
5. interactions : Bouton et Lien ;
6. médias : Image d’œuvre et Icône ;
7. page de validation visuelle ;
8. tests consolidés et audit final.
