# Sprint 020-r1 — Recadrage de la direction d’expérience publique

## Statut

**Contrat validé par le Product Owner et verrouillé avant rédaction des versions V2**

Le présent document définit la révision contrôlée du Sprint 020. Il ne modifie encore
ni le canon, ni le contrat initial du Sprint 020, ni l’application. Sa validation et
son verrouillage conformément à `docs/GOVERNANCE.md` autorisent l’ouverture successive
des travaux documentaires définis par les incréments suivants.

## 1. Contexte et décision de révision

Le contrat initial du Sprint 020 — Matérialisation de l’entrée Accueil–Collections V1 a
été validé, verrouillé et conservé dans
`docs/sprints/sprint-020-homepage-collections-entry.md`.

Son Incrément 2 a commencé par une première exploration applicative de l’Accueil. La
revue Product Owner a établi que le problème observé ne relevait pas d’un simple
raffinement de cette implémentation : le niveau d’ambition de l’expérience publique a
évolué au-delà de la conception V1 que le contrat initial devait matérialiser.

Le Product Owner a donc décidé d’interrompre cet Incrément 2 avant sa validation et son
verrouillage, puis d’ouvrir une révision documentaire contrôlée avant toute reprise du
code.

Cette décision ne qualifie pas les Sprints 017 à 020 d’erronés. Leurs résultats restent
la base historique, fonctionnelle, technique et conceptuelle sur laquelle la révision
s’appuie.

## 2. Statut de l’Incrément 2 initial

**Interrompu avant validation — exploration non normative conservée hors commit**

Les changements actuellement présents dans :

- `src/app/(public)/page.tsx` ;
- `src/app/(public)/page.module.css` ;

constituent une exploration non validée de l’Incrément 2 initial.

Pendant toute la révision documentaire, ces changements doivent rester intacts :

- ils ne sont ni restaurés, ni supprimés, ni modifiés ;
- ils ne sont ni indexés, ni committés, ni poussés ;
- ils ne constituent ni une décision de conception, ni une référence applicative, ni
  une implémentation acquise ;
- leur conservation ne préjuge pas de leur réutilisation après la révision.

Le contrat initial du Sprint 020 et son historique Git restent inchangés. La présente
révision ne prétend pas qu’ils portaient déjà la nouvelle ambition.

## 3. Catégorie

**Direction artistique — révision documentaire contrôlée**

Le Sprint 020-r1 formalise une évolution de la direction d’expérience publique avant
la reprise de l’implémentation de l’Accueil. Il ne constitue pas un Sprint fonctionnel,
une refonte du Design System ni un Sprint d’implémentation.

## 4. Responsabilité unique

> Étendre la direction canonique de l’expérience publique afin qu’AZUREUM puisse passer
> d’une galerie éditoriale premium à une expérience numérique d’exposition dotée d’une
> signature forte, sans remettre en cause ses responsabilités fonctionnelles, ses
> fondations accessibles ni la primauté des œuvres.

## 5. Objectifs de la révision

La révision doit :

- préserver explicitement les fondations encore valides des versions V1 ;
- formaliser la nouvelle ambition : moderne, luxueuse sans cliché, cool, artistique,
  contemporaine, mémorable et maîtrisée ;
- distinguer l’intensité légitime de la mise en scène du spectacle autonome de
  l’interface ;
- définir une immersion produite d’abord par la composition statique ;
- préciser la présence, les échelles, l’asymétrie, la tension, le silence, la
  profondeur, les séquences et la typographie comme matière spatiale ;
- formaliser que l’équité éditoriale n’impose pas la symétrie graphique ;
- définir l’Accueil comme un seuil artistique ;
- encadrer les implications futures de cette direction sur les autres responsabilités
  publiques sans les implémenter ;
- distinguer ce qui reste réalisable avec les médias actuels des territoires médiatiques
  volontairement différés ;
- documenter un éventuel territoire motion futur sans autoriser son implémentation ;
- déterminer les frontières documentaires nécessaires à la reprise ultérieure du code.

## 6. Principes acquis à préserver

La révision conserve notamment :

- AZUREUM comme galerie numérique premium mono-artiste consacrée à David
  Prieur-Gélis ;
- la démarche artistique de David comme principe organisateur du produit ;
- la priorité des œuvres sur l’interface et sur la logique commerciale ;
- la technologie au service de l’expérience, jamais comme sujet autonome ;
- l’accessibilité, le responsive et une expérience complète sans mouvement ;
- les ratios intrinsèques et l’interdiction du recadrage destructif ;
- les responsabilités fonctionnelles, routes, destinations et relations existantes ;
- la Collection comme champ éditorial adaptatif ;
- l’Œuvre selon le principe « révélation puis contextualisation » ;
- le shell public comme encadrement stable et discret ;
- l’exclusion de la marketplace, du catalogue commercial, du SaaS, du portfolio
  générique et de la démonstration technique.

## 7. Évolution d’ambition à formaliser

La direction révisée doit permettre de décrire AZUREUM comme une expérience numérique
d’exposition avec une signature forte.

Elle doit autoriser, lorsqu’ils servent la rencontre avec les œuvres :

- une présence visuelle forte ;
- des changements d’échelle ;
- une asymétrie maîtrisée ;
- une alternance de tension et de silence ;
- une profondeur et des séquences perceptibles ;
- la typographie comme matière spatiale ;
- des superpositions justifiées et non destructives ;
- une rupture maîtrisée avec les structures web conventionnelles ;
- une énergie culturelle contemporaine ;
- une identité reconnaissable dans une image statique, même sans logo.

Le principe central proposé est :

> L’intensité de la mise en scène est légitime lorsqu’elle intensifie la rencontre avec
> l’œuvre. Elle devient non conforme lorsque l’interface devient un spectacle autonome.

## 8. Périmètre documentaire

La révision peut proposer et, après validation Product Owner de chaque incrément,
produire :

- le présent document de révision ;
- `docs/specifications/public-experience-manifest-v2.md` ;
- `docs/specifications/public-experience-design-v2.md` ;
- la synchronisation de `PROJECT_STATE.md` et `CHANGELOG.md` lors de la clôture ;
- le contrat d’implémentation révisé nécessaire à la reprise de l’Accueil, uniquement
  après validation des deux documents V2.

Les versions V1 et les contrats antérieurs restent intacts comme références
historiques. Leur maintien n’attribue pas simultanément une valeur normative
concurrente aux décisions qui seraient explicitement remplacées par les V2.

## 9. Audits autorisés en lecture

Peuvent être audités sans présumer leur modification :

- `docs/specifications/design-system-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- la documentation et l’inventaire des médias ;
- les responsabilités publiques et leurs implémentations existantes.

Une évolution du Design System n’est recevable que si un besoin transversal répété et
démontré ne peut pas être satisfait par les primitives existantes. Une composition
locale forte ne constitue pas, à elle seule, une insuffisance du système.

## 10. Hors périmètre

Sont exclus de la révision documentaire :

- toute modification du code applicatif ou des tests ;
- toute reprise de l’implémentation de l’Accueil ;
- toute modification des deux fichiers exploratoires non committés ;
- toute nouvelle responsabilité fonctionnelle, route, destination, action ou relation
  métier ;
- toute modification des données permanentes ;
- tout nouveau média ou contenu officiel ;
- toute implémentation de mouvement, animation, transition, vidéo, WebGL ou parallaxe ;
- toute refonte implicite du Design System ;
- tout nouveau token, composant, état, variante ou API sans besoin transversal démontré
  et arbitrage Product Owner ;
- toute modification rétroactive des contrats et documents V1 ;
- toute remise en cause opportuniste de la Collection, de l’Œuvre ou du shell déjà
  validés ;
- toute opération Git non explicitement autorisée.

## 11. Critères de sortie de la révision

La révision est terminée uniquement lorsque :

- le statut historique du Sprint 020 initial et de son Incrément 2 est explicite ;
- le manifeste V2 formalise l’ambition, la présence, le premium, la modernité, l’énergie
  contemporaine, l’immersion, la mémorabilité et le rôle éventuel du mouvement ;
- la conception publique V2 définit une grammaire applicable sans produire de maquette
  finale ni de prescription technique ;
- l’Accueil est défini comme un seuil artistique conciliant présence dominante,
  identification d’AZUREUM, compréhension minimale et accès évident aux Collections ;
- la distinction « équité éditoriale ≠ symétrie graphique » est explicitement encadrée
  sans créer de hiérarchie artistique permanente ;
- les conséquences sur les autres responsabilités publiques sont identifiées sans être
  implémentées ;
- les possibilités offertes par les médias actuels et les territoires médiatiques
  différés sont distingués ;
- tout territoire motion reste futur, facultatif, accessible et subordonné à une
  composition statique suffisamment forte ;
- aucune responsabilité fonctionnelle, règle métier ou route n’est modifiée ;
- aucune évolution du Design System n’est implicitement validée ;
- les décisions remplacées, conservées et différées sont traçables ;
- les documents de projet sont synchronisés ;
- un contrat d’implémentation révisé peut être soumis au Product Owner sans dépendre
  d’une décision documentaire encore ouverte.

## 12. Découpage documentaire proposé

### Incrément R1-1 — Contrat de révision

Formaliser la décision d’interrompre l’Incrément 2 initial, la responsabilité de la
révision, son périmètre, son hors-périmètre et ses critères de sortie.

### Incrément R1-2 — Manifeste de l’expérience publique V2

Étendre les principes de l’expérience publique sans modifier les responsabilités
fonctionnelles ni prescrire une implémentation.

### Incrément R1-3 — Conception de l’expérience publique V2

Traduire le manifeste V2 en grammaire de conception, avec un traitement prioritaire de
l’Accueil comme seuil artistique et des conséquences bornées pour les autres vues.

### Incrément R1-4 — Audit de cohérence et frontières d’implémentation

Vérifier la cohérence des V2 avec le produit, le Design System, les médias disponibles
et les références conservées ; identifier les décisions réellement nécessaires avant
la reprise du code.

### Incrément R1-5 — Clôture documentaire et contrat de reprise

Synchroniser l’état du projet et proposer le contrat d’implémentation révisé. Aucun code
n’est repris avant la validation et le verrouillage de ce contrat.

Ce découpage reste une proposition tant que le présent document n’a pas été validé par
le Product Owner.

## 13. Conditions de l’Incrément R1-1

L’Incrément R1-1 est validable lorsque :

- la décision de révision est décrite sans réécrire l’historique ;
- le statut de l’Incrément 2 initial est non ambigu ;
- une responsabilité unique est définie ;
- le périmètre documentaire et le hors-périmètre sont bornés ;
- les critères de sortie permettent d’évaluer la révision ;
- les versions V1 restent intactes ;
- les deux fichiers exploratoires restent intacts et hors commit ;
- aucun travail appartenant aux Incréments R1-2 à R1-5 n’est commencé ;
- le Product Owner valide explicitement le présent brouillon avant son verrouillage.

## 14. Séquence de gouvernance

```text
Interruption explicite de l’Incrément 2 initial
→ contrat de révision validé et verrouillé
→ manifeste V2
→ conception publique V2
→ audit de cohérence et arbitrages Product Owner
→ clôture documentaire
→ contrat d’implémentation révisé
→ reprise du code après verrouillage
```
