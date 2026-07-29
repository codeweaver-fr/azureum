# Sprint 013 — Page d'accueil publique

## Statut

**Validé par le Product Owner, verrouillé sous le tag `sprint-013`, fusionné dans
`main` et définitivement clos**

Le présent contrat constitue la référence documentaire canonique du Sprint 013. Toute
évolution ultérieure suit `docs/GOVERNANCE.md`.

## 1. Objectif

Le Sprint 013 a pour objectif de concevoir et d'implémenter la page d'accueil publique
`/` comme porte d'entrée principale dans l'univers AZUREUM et vers la galerie
existante.

Il appartient à la catégorie des Sprints fonctionnels définie par
`docs/GOVERNANCE.md`.

Le Sprint matérialise la responsabilité de `V-PUB-01` sans redéfinir la structure
produit, la démarche artistique de David, les contenus éditoriaux définitifs ni les
responsabilités des autres vues publiques.

L'implémentation constituera la référence fonctionnelle officielle de la page d'accueil
à la clôture du Sprint. Elle ne sera ni provisoire, ni inachevée au motif qu'une
évolution de direction artistique pourra être décidée ultérieurement. Une telle
évolution nécessitera une proposition non normative, un audit, un arbitrage Product
Owner, la mise à jour des documents canoniques concernés et un Sprint autorisé,
conformément à `docs/GOVERNANCE.md`.

Aucune modification de `src`, de `public` ou des tests ne peut commencer avant la
validation Product Owner et le verrouillage Git du présent contrat.

## 2. Références normatives

Les documents suivants constituent les sources de vérité du Sprint :

- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-010-application-shell.md` ;
- `docs/sprints/sprint-011-public-gallery.md` ;
- `docs/sprints/sprint-012-artwork-details.md` ;
- `docs/GOVERNANCE.md`.

En cas de divergence, les spécifications normatives prévalent. Le présent Sprint
applique ces décisions sans devenir une nouvelle source de vérité métier, visuelle ou
éditoriale.

## 3. Décisions héritées

Le Sprint applique exclusivement les décisions déjà validées suivantes :

- `V-PUB-01` introduit immédiatement l'univers et la démarche de David, puis propose
  les principales directions de découverte ;
- le visiteur découvre le travail de David comme une démarche artistique et non comme
  une succession d'œuvres isolées ;
- les collections constituent l'accès public principal aux œuvres ;
- la route officielle de l'accueil est `/` ;
- la route officielle de la galerie est `/collections` ;
- le parcours public peut conduire de `V-PUB-01` vers `V-PUB-02`, puis vers
  `V-PUB-03`, `V-PUB-07` et `V-PUB-04` ;
- le shell public, son Header, son Main, son Footer et sa navigation restent ceux
  verrouillés par le Sprint 010 ;
- le Design System V1 demeure l'unique référentiel visuel ;
- l'interface privilégie les œuvres, la cohérence, la simplicité, l'accessibilité, la
  sobriété et la performance ;
- les données de galerie actuellement disponibles restent locales, fictives, typées,
  immuables et temporaires.

## 4. Périmètre inclus

Le Sprint comprend uniquement :

- le remplacement de l'état transitoire actuel de `/` par une page d'accueil publique
  conforme à la responsabilité de `V-PUB-01` ;
- une introduction identifiable à AZUREUM et à la démarche artistique de David ;
- un accès explicite à la galerie existante par `/collections` ;
- l'utilisation du shell public existant ;
- l'utilisation exclusive des primitives, composants et tokens officiels du Design
  System ;
- la lecture des deux collections locales de démonstration déjà disponibles et de leurs
  médias d'aperçu, sans duplication ni modification ;
- les validations sémantiques, responsive, accessibles, visuelles et techniques de la
  page ;
- la synchronisation documentaire nécessaire à la clôture du Sprint.

## 5. Responsabilité de la page

La page `/` doit :

- fournir son propre `h1` ;
- permettre d'identifier immédiatement AZUREUM comme l'environnement public consacré
  au travail de David ;
- introduire la démarche artistique sans prétendre remplacer la vue `V-PUB-02` ;
- proposer un accès identifiable à la galerie publique existante ;
- conserver une hiérarchie de lecture compréhensible sans dépendre des médias ;
- rester une page publique de découverte et ne présenter aucune fonction de gestion,
  d'authentification ou d'acquisition.

La page ne porte aucune responsabilité appartenant aux vues :

- `V-PUB-02` — David et sa démarche ;
- `V-PUB-03` — Collections ;
- `V-PUB-04` — Œuvre ;
- `V-PUB-05` — Contenu artistique ;
- `V-PUB-06` — Évolution dans le temps ;
- `V-PUB-07` — Collection.

## 6. Comportements observables attendus

Une fois implémentée :

- `/` ne présente plus le message transitoire « Page d'entrée publique en cours de
  construction » ;
- la page possède un unique `h1` ;
- la page présente le texte introductif temporaire validé par le Product Owner ;
- les deux collections publiques de démonstration sont présentées comme accès à la
  galerie ;
- le média d'aperçu de `collection-alpha`, correspondant à `study-01`, constitue le
  média principal de l'accueil ;
- le contenu principal est rendu dans le landmark `main` fourni par le shell ;
- le visiteur peut rejoindre `/collections` au moyen du lien « Découvrir les
  collections », explicite et utilisable au clavier ;
- la navigation publique persistante continue de fonctionner sans modification ;
- `/design-system` reste absent de la navigation publique ;
- la page reste compréhensible lorsque les médias ne sont pas chargés ou sont
  indisponibles ;
- aucun contenu, lien ou contrôle ne simule une capacité non implémentée ;
- aucun appel réseau, état client ou traitement métier n'est nécessaire au rendu de
  l'accueil.

## 7. Données et médias disponibles

Le Sprint peut uniquement s'appuyer sur les éléments déjà présents :

- les deux collections fictives du module privé `gallery` ;
- les six œuvres fictives rattachées à ces collections ;
- leurs titres, intentions, descriptions et slugs temporaires ;
- leurs six médias locaux de démonstration ;
- les fonctions de lecture locale déjà exposées à l'intérieur du module `gallery`.

Ces éléments :

- ne deviennent pas des contenus officiels de David ;
- ne deviennent pas un modèle de persistance ;
- ne doivent pas être copiés dans un second jeu de données propre à l'accueil ;
- ne doivent pas être modifiés pour répondre à un besoin propre à la page d'accueil ;
- ne peuvent être utilisés que par lecture, sans mutation.

L'accueil présente les deux collections publiques actuellement disponibles :

- `collection-alpha` ;
- `collection-beta`.

Cette sélection ne crée aucun statut de mise en avant. Tant que le jeu public disponible
contient uniquement ces deux collections, elles sont toutes les deux présentées.

Le média principal réutilise le média d'aperçu de la première collection existante,
`collection-alpha`, soit l'œuvre fictive `study-01`. Aucun nouveau média et aucune
copie du média existant ne sont créés.

## 8. Liens autorisés

Le lien principal porte le libellé « Découvrir les collections » et cible :

```text
/collections
```

Les routes publiques déjà matérialisées restent techniquement disponibles :

```text
/
/david
/collections
/chronologie
```

Le Sprint ne crée aucun nouveau lien éditorial vers `/david` ou `/chronologie` tant que
leur contenu demeure structurel et qu'aucune responsabilité propre à l'accueil ne le
justifie explicitement.

Chaque aperçu de collection peut cibler sa route dynamique existante. Aucun lien direct
vers une œuvre n'est ajouté par l'accueil. Aucun lien vers une ressource inconnue,
fictive hors du jeu existant ou non matérialisée n'est autorisé.

## 9. Intégration du Design System

L'implémentation doit :

- utiliser exclusivement les composants et tokens officiels ;
- réutiliser les primitives existantes avant tout composant propre à l'accueil ;
- conserver les responsabilités de `Container`, `Stack`, `Grid`, `GridItem`, `Text`,
  `Heading`, `Button`, `Link`, `Icon` et `ArtworkImage` ;
- ne modifier aucune API publique du Design System ;
- ne créer aucun token, variant ou composant fondamental ;
- ne contenir aucune valeur visuelle locale lorsqu'un token existe ;
- ne créer aucun effet, mouvement ou traitement décoratif non prescrit ;
- respecter `prefers-reduced-motion`.

Si les primitives existantes ne permettent pas de respecter le contrat, l'implémentation
doit s'arrêter et la lacune doit être soumise au Product Owner.

## 10. Architecture et limites techniques

La page reste un Server Component par défaut.

Le Sprint n'introduit :

- aucun Client Component sans interaction démontrée et validée ;
- aucune dépendance ;
- aucun nouveau module métier ;
- aucune API, route handler ou Server Action ;
- aucune variable d'environnement ;
- aucun appel réseau ;
- aucune persistance ;
- aucun état global ;
- aucune duplication des données de galerie ;
- aucune nouvelle route.

Un composant colocalisé propre à l'accueil ne peut être créé que si une responsabilité
répétée et démontrée ne peut être exprimée clairement par composition des primitives
existantes. Il reste privé à la route et ne rejoint pas le Design System.

## 11. Responsive et accessibilité

La page suit l'approche mobile-first et les points de rupture `DT-10`.

Elle doit garantir :

- un ordre des titres cohérent ;
- un unique `h1` ;
- une lecture logique avec ou sans CSS ;
- une navigation complète au clavier ;
- un focus visible ;
- des noms accessibles explicites ;
- des alternatives adaptées aux médias informatifs ;
- l'absence de dépendance exclusive à la couleur ou au mouvement ;
- l'absence de débordement horizontal ;
- un reflow utilisable à 200 % de zoom ;
- une présentation utilisable sur mobile, tablette et bureau ;
- la continuité du skip link et des landmarks du shell ;
- l'absence de régression sur `/design-system` et le parcours de galerie.

## 12. Hors périmètre

Sont explicitement exclus :

- la page définitive `V-PUB-02` consacrée à David et à sa démarche ;
- les contenus artistiques de `V-PUB-05` ;
- la chronologie éditoriale de `V-PUB-06` ;
- tout texte biographique ou éditorial définitif ;
- toute image officielle de David ou de ses œuvres ;
- toute donnée réelle non encore validée ;
- toute modification du module ou des données de galerie existants ;
- toute nouvelle collection ou œuvre de démonstration ;
- toute nouvelle route ;
- toute acquisition, disponibilité, prix, panier, commande ou paiement ;
- toute authentification, autorisation ou espace privé ;
- toute recherche, tout filtre, tout tri et toute pagination ;
- tout carrousel, diaporama, parallaxe, vidéo, scène 3D ou WebGL ;
- toute animation créée uniquement pour l'accueil ;
- toute modification du shell public ou de sa navigation ;
- toute extension du Design System ;
- toute décision concernant l'exposition de `/design-system` ;
- le SEO éditorial définitif ;
- toute anticipation du Sprint suivant.

## 13. Fichiers susceptibles d'être concernés lors de l'implémentation

Sous réserve du contrat validé, l'implémentation pourra concerner uniquement :

```text
src/app/(public)/page.tsx
src/app/(public)/page.module.css
src/app/(public)/_components/        (uniquement si une responsabilité locale est démontrée)
src/test/public-routes.test.tsx
e2e/public-routes.spec.ts
PROJECT_STATE.md
CHANGELOG.md
docs/sprints/sprint-013-public-homepage.md
```

Les fichiers du module `gallery` sont des sources en lecture et ne doivent pas être
modifiés par ce Sprint.

Aucun média supplémentaire ne peut être ajouté sans arbitrage Product Owner.

## 14. Livrables

Le Sprint doit produire :

- le présent contrat validé et verrouillé ;
- la page d'accueil publique `/` conforme à `V-PUB-01` ;
- son intégration au shell et au Design System existants ;
- les tests unitaires et de rendu nécessaires ;
- les validations de bout en bout sur les formats prescrits ;
- la documentation de clôture synchronisée ;
- un audit final de conformité entre le contrat et l'implémentation.

## 15. Critères d'acceptation

### Responsabilité fonctionnelle

- `/` constitue une entrée publique identifiable dans AZUREUM ;
- la page introduit l'univers et la démarche de David sans remplacer `V-PUB-02` ;
- le texte introductif est exactement : « AZUREUM est l'espace officiel consacré au
  travail artistique de David. Découvrez ses collections, sa démarche et l'évolution
  de son univers. » ;
- le lien principal « Découvrir les collections » conduit à `/collections` ;
- les collections restent l'accès principal aux œuvres ;
- aucun contenu ou comportement hors périmètre n'est simulé.

### Structure et sémantique

- la page utilise le shell public existant ;
- un unique `h1` est présent ;
- les landmarks restent conformes ;
- la hiérarchie des titres et l'ordre de lecture sont cohérents ;
- le message transitoire actuel a disparu.

### Données

- seules les données locales déjà validées sont lues ;
- les deux collections publiques de démonstration sont présentées ;
- le média principal réutilise le média d'aperçu `study-01` de `collection-alpha` ;
- aucune donnée officielle ou définitive n'est inventée ;
- aucune donnée de galerie n'est dupliquée ou modifiée ;
- aucun appel réseau ni mécanisme de persistance n'est introduit.

### Design System

- seuls les composants et tokens officiels sont utilisés ;
- aucune API publique, aucun token et aucun variant ne sont ajoutés ;
- aucune valeur visuelle locale injustifiée n'est introduite ;
- aucun token candidat n'est utilisé.

### Responsive et accessibilité

- la page est utilisable sur mobile, tablette et bureau ;
- aucun débordement horizontal global n'est observé ;
- le reflow reste utilisable à 200 % de zoom ;
- le clavier et le focus visible permettent de rejoindre la galerie ;
- le contenu reste compréhensible lorsque les médias sont indisponibles ;
- `prefers-reduced-motion` est respecté.

### Non-régression

- le shell et sa navigation restent inchangés ;
- `/collections`, les collections et les œuvres restent accessibles ;
- `/design-system` ne subit aucune régression et reste hors navigation publique ;
- aucune nouvelle erreur ou aucun avertissement inattendu n'apparaît dans le navigateur.

## 16. Validations obligatoires

Avant clôture :

- Prettier ;
- ESLint ;
- TypeScript ;
- Vitest ;
- build Next.js ;
- Playwright sur les viewports `390 × 844`, `768 × 1024` et `1440 × 900` ;
- absence de débordement horizontal ;
- contrôle du reflow à 200 % ;
- contrôle du clavier et du focus ;
- contrôle des erreurs et avertissements navigateur ;
- `git diff --check` ;
- `pnpm audit`, avec restitution exacte de toute exception déjà documentée si elle
  subsiste ;
- audit de conformité entre le présent contrat, l'implémentation, `PROJECT_STATE.md`,
  `CHANGELOG.md` et l'historique Git.

## 17. Séquence d'implémentation proposée

1. **Contrat et inventaire**
   - validation du présent contrat ;
   - verrouillage documentaire avant tout code.
2. **Structure sémantique**
   - remplacement de l'état transitoire ;
   - responsabilité `V-PUB-01` ;
   - hiérarchie des titres et ordre de lecture.
3. **Entrée vers la galerie**
   - accès explicite à `/collections` ;
   - réutilisation des composants d'interaction existants.
4. **Données et médias validés**
   - lecture des deux collections existantes ;
   - média principal issu de `collection-alpha` ;
   - gestion du média indisponible sans perte d'information.
5. **Responsive et accessibilité**
   - mobile, tablette, bureau ;
   - clavier, focus, reflow et absence de débordement.
6. **Tests et non-régression**
   - Vitest ;
   - Playwright ;
   - shell, galerie et `/design-system`.
7. **Audit final et clôture**
   - contrôles complets ;
   - synchronisation documentaire ;
   - revue Product Owner ;
   - verrouillage Git selon `docs/GOVERNANCE.md`.

Aucun incrément ne commence avant la validation de l'incrément précédent.

## 18. Décisions Product Owner

Les décisions suivantes sont validées :

1. Le texte introductif temporaire est :

   > AZUREUM est l'espace officiel consacré au travail artistique de David. Découvrez
   > ses collections, sa démarche et l'évolution de son univers.

2. L'accueil présente un aperçu de la galerie.
3. L'aperçu présente les deux collections publiques de démonstration actuellement
   disponibles. Il ne sélectionne aucune œuvre indépendamment de sa collection et ne
   crée aucune notion de contenu mis en avant.
4. Le média principal réutilise le média d'aperçu de `collection-alpha`, correspondant
   à `study-01`.
5. Le lien principal vers `/collections` porte le libellé « Découvrir les collections ».
   Aucun lien secondaire propre au contenu de l'accueil n'est ajouté dans ce Sprint.

Ces décisions complètent localement le contrat de la page d'accueil. Elles ne modifient
ni les responsabilités des autres vues, ni le Design System, ni le module de galerie.

## 19. Résultat de l'audit final

Les Incréments 1 à 6 sont implémentés et validés :

- `/` remplit la responsabilité publique `V-PUB-01` ;
- le texte introductif et le lien principal vers `/collections` correspondent aux
  décisions Product Owner ;
- les deux collections publiques existantes sont présentées sans modification du
  module privé `gallery` ;
- `study-01` est réutilisé une seule fois comme média principal et aperçu de
  `collection-alpha`, tandis que `composition-a` représente `collection-beta` ;
- la page reste un Server Component et utilise exclusivement les composants officiels
  du Design System ;
- les validations couvrent le responsive, le reflow, le clavier, le focus, la
  sémantique, la résilience des médias et la non-régression du shell public, de la
  galerie et de `/design-system`.

Les contrôles finaux sont conformes : Prettier, ESLint, TypeScript, 11 fichiers Vitest
et 85 tests, build Next.js, 36 tests Playwright et `git diff --check`. `pnpm audit`
restitue uniquement l'exception de sécurité temporaire déjà documentée pour
`brace-expansion@1.1.16`, dépendance transitive de développement introduite par
`eslint → minimatch`, sans masquage ni nouvelle vulnérabilité.

L'Incrément 7 synchronise le présent document, `PROJECT_STATE.md` et `CHANGELOG.md`,
puis soumet le Sprint à la validation Product Owner finale. Aucun verrouillage Git
n'est réalisé avant cette autorisation.

## 20. Séquence de revue et de verrouillage

```text
Rédaction du contrat
→ Revue Product Owner
→ Audit Codex
→ Arbitrages documentés
→ Corrections éventuelles
→ Validation Product Owner
→ Verrouillage documentaire
→ Commit du contrat
→ Implémentation incrémentale
→ Revue de chaque incrément
→ Audit final
→ Synchronisation documentaire
→ Validation Product Owner finale
→ Commit de clôture
→ Tag du Sprint
→ Pull Request
→ Fusion dans main
→ Nettoyage de la branche
```
