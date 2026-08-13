# Sprint 019 — Matérialisation du continuum Collection–Œuvre V1

## Statut

**Validé par le Product Owner et verrouillé avant implémentation**

Le présent document constitue le contrat du Sprint 019. Il autorise exclusivement les
travaux définis par son périmètre et doit être appliqué conformément à
`docs/GOVERNANCE.md`.

## 1. Raison d'être

Les Sprints 017 et 018 ont respectivement défini le manifeste de l'expérience publique
puis sa traduction en conception canonique, vue par vue.

Le Sprint 019 ouvre la phase d'implémentation visuelle. Il ne recherche pas une nouvelle
direction et ne reprend pas les arbitrages déjà acquis. Il matérialise dans
l'application le premier continuum retenu par la stratégie générale B : le passage de
la collection comme ensemble cohérent à la concentration sur une œuvre individuelle.

Le résultat doit être directement visible dans l'application.

## 2. Catégorie

**Direction artistique — implémentation applicative**

Le Sprint fait évoluer la mise en scène de responsabilités fonctionnelles déjà
stabilisées. Il n'ajoute aucune capacité fonctionnelle et ne modifie aucune règle
métier.

## 3. Responsabilité unique

> Matérialiser dans l'application la conception canonique du continuum
> Collection–Œuvre, depuis la perception de la collection comme ensemble cohérent
> jusqu'à la concentration sur une œuvre individuelle.

Cette responsabilité couvre :

- `V-PUB-07` — consultation d'une collection ;
- `V-PUB-04` — consultation d'une œuvre ;
- leur continuité existante ;
- les seules fondations communes nécessaires à leur matérialisation ;
- la localisation de `Collections` dans le shell sur leurs routes imbriquées, uniquement
  si la vérification démontre qu'une correction est nécessaire.

## 4. Références normatives

Le Sprint applique notamment :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/public-experience-manifest-v1.md` ;
- `docs/specifications/public-experience-design-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/sprints/sprint-010-application-shell.md` ;
- `docs/sprints/sprint-011-public-gallery.md` ;
- `docs/sprints/sprint-012-artwork-details.md` ;
- `docs/sprints/sprint-017-public-experience-direction.md` ;
- `docs/sprints/sprint-018-public-experience-design.md`.

En cas de différence entre une préférence locale et ces références, le canon prévaut.

Le Sprint 019 ne recopie pas la conception détaillée du Sprint 018. Il la référence et
l'implémente.

## 5. Décisions Product Owner acquises

### 5.1 Collection

L'ensemble des œuvres constitue le premier foyer d'attention.

La composition retenue est :

> **Champ éditorial à rythme maîtrisé**

Le rythme :

- provient des œuvres, de leurs ratios et de leurs relations ;
- protège la lisibilité individuelle ;
- conserve l'accès à chaque œuvre ;
- respecte l'ordre sémantique ;
- reste robuste face aux quantités et ratios variables ;
- ne transforme jamais la composition en sujet principal.

### 5.2 Œuvre

L'œuvre individuelle constitue le premier foyer d'attention.

La composition retenue est :

> **Révélation puis contextualisation**

La hiérarchie conceptuelle est :

```text
Œuvre
→ respiration
→ identité et contexte
→ relations et actions existantes
```

Cette hiérarchie ne prescrit pas un empilement identique à toutes les largeurs. Une
présence simultanée du contexte est possible lorsque la primauté perceptive de l'œuvre
reste démontrable.

### 5.3 Continuité

Le passage suivant doit être perceptible sans créer un nouveau parcours :

```text
Collection
→ rencontre avec les œuvres comme ensemble cohérent
→ Œuvre
→ concentration sur une œuvre individuelle
```

Les routes, destinations, actions et responsabilités existantes restent inchangées.

### 5.4 Mouvement

Aucune animation ou technologie de mouvement de production n'est introduite.

L'expérience doit être complète, cohérente et qualitative sans mouvement.

### 5.5 Contenus et médias

Les données et médias existants sont des matériaux de validation.

Ils :

- ne deviennent pas des contenus officiels ;
- ne déterminent pas une hiérarchie métier durable ;
- ne justifient aucun nouveau média ;
- ne doivent pas rendre la composition dépendante d'une quantité, longueur ou
  orientation précise.

Aucune relation Collection–Contenu artistique n'est ajoutée.

## 6. Hypothèse contrôlée sur le Design System

Le Sprint part de l'hypothèse que le Design System actuel suffit.

Deux capacités doivent être vérifiées avant leur matérialisation complète :

1. préserver des ratios hétérogènes dans un champ éditorial d'œuvres ;
2. maintenir une hiérarchie asymétrique entre œuvre et contexte selon la largeur.

Cette vérification est minimale et directement intégrée à l'implémentation.

Elle ne constitue :

- ni un Sprint préalable ;
- ni une nouvelle phase de conception ;
- ni une autorisation d'évolution du Design System ;
- ni la validation implicite d'un nouveau composant, token, état ou variante.

Si une insuffisance réelle est démontrée :

1. seul le travail qui en dépend s'arrête ;
2. l'insuffisance est documentée factuellement ;
3. aucune compensation locale arbitraire n'est introduite ;
4. le Product Owner arbitre la suite.

Si les fondations suffisent, l'implémentation continue immédiatement.

## 7. Périmètre

Le Sprint peut modifier uniquement ce qui est nécessaire à :

- la composition publique de la route Collection ;
- la composition publique de la route Œuvre ;
- leurs styles locaux ;
- leur continuité visuelle et fonctionnelle existante ;
- la vérification du comportement actuel de l'état actif `Collections` sur les routes
  Collection et Œuvre puis, uniquement si une perte réelle de localisation dans le
  continuum est démontrée, sa correction ciblée ;
- les tests directement concernés ;
- le contrat et les documents de clôture du Sprint.

Les structures de données existantes sont consommées sans modification de leur
responsabilité.

## 8. Hors périmètre

Sont exclus :

- toute nouvelle responsabilité fonctionnelle ;
- toute nouvelle route, action ou destination ;
- toute modification des règles métier ;
- toute nouvelle relation Collection–Contenu artistique ;
- toute modification des modèles ou données du module `gallery`, sauf non-conformité
  indispensable et arbitrage Product Owner préalable ;
- les pages Accueil, Collections générale, David, Contenu artistique et Chronologie ;
- toute refonte générale du shell ;
- toute modification générale de la navigation ;
- tout nouveau média ou contenu officiel ;
- le backend, le CMS et la persistance ;
- les fonctionnalités commerciales ;
- tout nouveau token, composant fondamental, état, variante ou API du Design System ;
- toute valeur hors Design System non justifiée par une composition strictement locale ;
- toute bibliothèque ou technologie de mouvement ;
- toute animation de production ;
- toute optimisation sans rapport direct avec le Sprint ;
- la définition des Sprints suivants.

## 9. Zones applicatives candidates

Sous réserve du contrôle réalisé dans chaque incrément, les modifications peuvent
concerner :

- `src/app/(public)/collections/[collectionSlug]/page.tsx` ;
- un éventuel CSS Module local associé à cette page ;
- `src/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page.tsx` ;
- `src/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page.module.css` ;
- `src/app/(public)/_components/PublicHeaderContent.tsx`, uniquement si la vérification
  démontre que son comportement actuel compromet réellement la localisation du
  visiteur dans le continuum ;
- ses tests, pour caractériser le comportement actuel puis couvrir la correction ciblée
  seulement si celle-ci devient nécessaire ;
- `src/test/public-routes.test.tsx` ;
- `src/test/application-shell.test.tsx`, si le shell est modifié ;
- `e2e/public-routes.spec.ts` ;
- le présent contrat ;
- `PROJECT_STATE.md` et `CHANGELOG.md` uniquement lors de la clôture.

Une primitive partagée peut être inspectée. Sa modification exige la démonstration
qu'elle est nécessaire, compatible avec son contrat existant et strictement
transversale. Une évolution du Design System demeure interdite sans nouvel arbitrage
Product Owner.

## 10. Exigences d'implémentation

### 10.1 Préservation fonctionnelle

Le Sprint préserve :

- les slugs et routes canoniques ;
- la résolution serveur ;
- les cas `notFound()` ;
- l'ordre des œuvres détenu par `gallery` ;
- les titres, descriptions, caractéristiques et textes existants ;
- les contenus artistiques associés à une œuvre ;
- le retour vers la collection ;
- les alternatives des médias ;
- l'état de média indisponible ;
- les liens et noms accessibles ;
- les Server Components existants, hors frontière cliente déjà justifiée.

### 10.2 Collection

La vue doit :

- placer l'ensemble des œuvres avant l'interface dans la hiérarchie d'attention ;
- matérialiser un rythme éditorial maîtrisé ;
- conserver l'intention de la collection comme contexte d'accompagnement ;
- protéger les ratios ;
- préserver un ordre DOM et une lecture compréhensibles ;
- maintenir un accès explicite à chaque œuvre ;
- fonctionner avec des quantités et orientations variables ;
- éviter toute hiérarchie arbitraire fondée uniquement sur les médias de démonstration.

### 10.3 Œuvre

La vue doit :

- rendre l'œuvre perceptivement dominante ;
- matérialiser la révélation puis la contextualisation ;
- offrir une respiration protectrice autour du média ;
- préserver le ratio intégral de l'œuvre ;
- maintenir le contexte dans une largeur lisible ;
- conserver les caractéristiques, descriptions, textes, relations et actions ;
- permettre une asymétrie sur les largeurs adaptées sans compromettre l'ordre
  sémantique ;
- rester complète dans un flux linéaire compact.

### 10.4 Shell

Le comportement actuel de l'état actif `Collections` doit d'abord être caractérisé sur :

- `/collections` ;
- les routes Collection ;
- les routes Œuvre.

Ce comportement ne constitue pas une non-conformité par principe. Le shell n'est
modifié que si les contrôles démontrent que l'absence d'état actif sur une route
imbriquée compromet réellement la localisation du visiteur dans le continuum
Collection–Œuvre.

Si cette nécessité n'est pas démontrée, le comportement existant est conservé.

Si une correction est démontrée nécessaire, elle reste strictement limitée à la
détermination de l'état actif. Elle ne modifie ni les libellés, ni les destinations, ni
l'ordre, ni le comportement responsive général de la navigation.

### 10.5 Responsive et robustesse

Les deux vues doivent rester complètes sur :

- mobile ;
- tablette ;
- bureau ;
- reflow équivalent à 200 %.

La composition peut changer selon la largeur. Le contenu, les actions, l'ordre
compréhensible et les relations restent disponibles.

## 11. Critères d'acceptation

Le Sprint est acceptable si :

- la Collection matérialise le champ éditorial à rythme maîtrisé ;
- l'Œuvre matérialise la révélation puis contextualisation ;
- les œuvres restent prioritaires sur l'interface ;
- les ratios portrait, paysage et carré sont préservés ;
- aucun recadrage destructif n'est introduit ;
- l'ordre sémantique reste cohérent ;
- toutes les œuvres et informations existantes restent accessibles ;
- les routes et liens canoniques sont inchangés ;
- le passage Collection–Œuvre–Collection reste fonctionnel ;
- le comportement actuel de l'état actif `Collections` sur les routes Collection et
  Œuvre est vérifié ;
- la nécessité ou l'absence de nécessité d'une correction est démontrée par rapport à
  la localisation du visiteur dans le continuum ;
- le comportement existant est conservé si aucune perte réelle de localisation n'est
  démontrée ;
- si une correction est nécessaire, elle reste limitée à l'état actif et le shell
  demeure autrement inchangé ;
- mobile, tablette, bureau et reflow sont conformes ;
- aucun débordement horizontal n'est introduit ;
- clavier, focus, skip link, landmarks et titres restent conformes ;
- la perte d'un média ne bloque pas la consultation ;
- aucune animation de production n'est ajoutée ;
- aucune évolution implicite du Design System n'est introduite ;
- aucune fonctionnalité ou modification hors périmètre n'est présente ;
- la documentation reflète exactement le résultat final.

## 12. Validations obligatoires

Les contrôles finaux comprennent au minimum :

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
pnpm audit
git diff --check
```

Les contrôles ciblés de chaque incrément précèdent les contrôles complets.

La revue visuelle couvre au minimum :

- `390 × 844` ;
- `768 × 1024` ;
- `1440 × 900` ;
- reflow équivalent à 200 % ;
- orientations portrait, paysage et carrée ;
- média indisponible ;
- contenus de longueurs variables ;
- navigation clavier ;
- absence d'erreur ou d'avertissement navigateur inattendu.

## 13. Découpage incrémental

### Incrément 1 — Contrat Sprint 019

**Objectif unique :** définir et verrouiller le cadre opérationnel de l'implémentation.

**Périmètre borné :** le contrat du Sprint uniquement.

**Travaux autorisés :** vérifier les références, décisions Product Owner, frontières,
zones applicatives, critères et incréments ; appliquer uniquement les corrections
validées.

**Critères de validation :** le contrat autorise une implémentation visible sans rouvrir
la conception ; les responsabilités, interdictions et mécanismes d'arrêt sont
explicites ; le Product Owner valide le contrat.

**Contrôles :** audit contre la gouvernance et les références canoniques ; Prettier
ciblé ; `git diff --check` ; staging nominatif.

**Commit attendu :**

```text
docs(sprint-019): lock collection artwork continuum contract
```

### Incrément 2 — Fondations minimales et démarrage Collection

**Objectif unique :** vérifier les fondations indispensables puis engager immédiatement
la matérialisation de la Collection si elles suffisent.

**Périmètre borné :** primitives de grille, conteneur et média ; shell inspecté sans
refonte ; première implémentation visible de la Collection.

**Travaux autorisés :**

- vérifier les deux capacités conditionnelles ;
- confronter les primitives existantes aux ratios actuels ;
- établir que le Design System suffit ou démontrer précisément une insuffisance ;
- commencer la composition réelle de la Collection lorsque la vérification est positive ;
- créer uniquement les styles locaux nécessaires.

**Critères de validation :**

- la conclusion sur les fondations est démontrée ;
- aucune évolution du Design System n'est introduite ;
- la Collection présente une première matérialisation visible du rythme éditorial ;
- les fonctions, routes, données et ratios sont préservés.

**Contrôles :** tests ciblés de la Collection et des primitives consommées ; TypeScript ;
ESLint ; Prettier ; revue sur les trois largeurs ; `git diff --check`.

**Commit attendu :**

```text
feat(collection): establish editorial artwork field foundations
```

### Incrément 3 — Collection

**Objectif unique :** matérialiser complètement le champ éditorial à rythme maîtrisé.

**Périmètre borné :** page Collection et styles locaux associés.

**Travaux autorisés :** finaliser zones, masses, rythme, respiration, hiérarchie locale
et adaptations selon la largeur avec les primitives validées à l'Incrément 2.

**Critères de validation :**

- l'ensemble des œuvres domine ;
- le contexte accompagne ;
- les présences peuvent varier sans hiérarchie arbitraire ;
- chaque œuvre reste identifiable et accessible ;
- ratios, ordre sémantique et robustesse sont préservés.

**Contrôles :** tests ciblés ; orientations et quantités disponibles ; mobile, tablette,
bureau ; clavier ; débordement ; TypeScript ; ESLint ; Prettier ; `git diff --check`.

**Commit attendu :**

```text
feat(collection): materialize editorial artwork composition
```

### Incrément 4 — Œuvre

**Objectif unique :** matérialiser la révélation puis contextualisation de l'œuvre
individuelle.

**Périmètre borné :** page Œuvre et styles locaux associés.

**Travaux autorisés :** faire évoluer la présence du média, la respiration, la largeur
du contexte et leur relation responsive sans modifier les informations ni actions
existantes.

**Critères de validation :**

- l'œuvre est le premier foyer ;
- son ratio est protégé ;
- le contexte enrichit sans concurrencer ;
- le flux compact reste complet ;
- les grandes largeurs matérialisent deux temps d'attention ;
- toutes les informations et relations existantes sont conservées.

**Contrôles :** tests ciblés ; orientations de média ; contenus courts et longs
disponibles ; média indisponible ; responsive ; clavier ; TypeScript ; ESLint ;
Prettier ; `git diff --check`.

**Commit attendu :**

```text
feat(artwork): materialize reveal then context composition
```

### Incrément 5 — Continuité Collection–Œuvre et shell

**Objectif unique :** assurer la continuité du passage entre l'ensemble et l'œuvre
individuelle et vérifier si le comportement actuel du shell compromet cette continuité.

**Périmètre borné :** relations existantes Collection–Œuvre–Collection ; comportement
actuel de l'état actif `Collections` ; correction ciblée du shell uniquement si sa
nécessité est démontrée.

**Travaux autorisés :**

- vérifier la permanence des identités, médias et destinations ;
- préserver le retour vers la collection ;
- caractériser l'état actif actuel sur les routes Collection et Œuvre ;
- vérifier si ce comportement compromet réellement la localisation du visiteur ;
- conserver le comportement existant si aucune perte de localisation n'est démontrée ;
- corriger uniquement la détermination de l'état actif si cette perte est démontrée ;
- renforcer les tests de continuité.

**Critères de validation :**

- aucune nouvelle navigation n'est créée ;
- les destinations restent canoniques ;
- le passage entre les vues est compréhensible ;
- le comportement du shell est couvert par une preuve permettant de conclure sur la
  nécessité ou non d'une correction ;
- toute correction appliquée répond à une nécessité démontrée ;
- le shell reste autrement inchangé.

**Contrôles :** caractérisation du comportement avant correction ; tests unitaires et
end-to-end ciblés ; clavier ; état actif mobile et bureau ; comparaison avant/après si
une correction est appliquée ; TypeScript ; ESLint ; Prettier ; `git diff --check`.

**Commit attendu :**

```text
feat(experience): preserve collection artwork continuity
```

### Incrément 6 — Responsive, accessibilité et robustesse

**Objectif unique :** démontrer la qualité complète du continuum sur les largeurs et
usages de référence.

**Périmètre borné :** Collection, Œuvre, continuité et shell modifié dans le Sprint.

**Travaux autorisés :** corriger uniquement les non-conformités démontrées concernant
responsive, reflow, médias variables, contenu variable, clavier, focus et sémantique.

**Critères de validation :**

- les trois viewports sont conformes ;
- le reflow reste complet ;
- aucun débordement horizontal ;
- ratios et ordre de lecture préservés ;
- navigation clavier complète ;
- focus visible ;
- état actif conforme à la conclusion de l'Incrément 5 ;
- média indisponible non bloquant ;
- aucune correction hors périmètre.

**Contrôles :** Playwright ciblé sur les trois viewports et le reflow ; tests Vitest
ciblés ; console et `pageerror` ; TypeScript ; ESLint ; Prettier ; `git diff --check`.

**Commit attendu :**

```text
test(experience): validate collection artwork responsive continuity
```

### Incrément 7 — Tests, audit final et clôture

**Objectif unique :** démontrer la conformité globale du Sprint et préparer son
verrouillage.

**Périmètre borné :** changements du Sprint, tests et documents de synchronisation.

**Travaux autorisés :**

- exécuter les contrôles complets ;
- contre-auditer l'implémentation contre les Sprints 017 et 018 ;
- vérifier le Design System et les frontières fonctionnelles ;
- corriger uniquement les non-conformités démontrées ;
- synchroniser `PROJECT_STATE.md` et `CHANGELOG.md` ;
- préparer la validation Product Owner finale.

**Critères de validation :**

- tous les critères du contrat sont démontrés ;
- aucun hors-périmètre ni dette implicite ;
- aucune évolution non autorisée du Design System ;
- documentation exacte ;
- dépôt propre et reproductible ;
- validation Product Owner finale acquise avant verrouillage.

**Contrôles :** suite complète définie à la section 12 ; audit du diff ; contrôle
nominatif des fichiers ; vérification de l'historique incrémental.

**Commit attendu :**

```text
docs(sprint-019): finalize collection artwork continuum
```

## 14. Séquence de travail

```text
Validation et verrouillage du contrat
→ vérification minimale des fondations
→ démarrage immédiat de la Collection si les fondations suffisent
→ finalisation de la Collection
→ matérialisation de l'Œuvre
→ continuité et localisation
→ responsive, accessibilité et robustesse
→ audit final
→ validation Product Owner
→ verrouillage selon GOVERNANCE.md
```

## 15. Décisions différées

Restent explicitement différés :

- les contenus contextuels supplémentaires au niveau Collection ;
- les médias et contenus officiels ;
- toute évolution du Design System non démontrée ;
- toute animation ;
- les autres vues publiques ;
- les contrats et numéros des Sprints suivants ;
- les optimisations ou modifications fonctionnelles étrangères au continuum.

La présence d'un sujet différé dans le présent contrat ne constitue ni sa validation,
ni son autorisation, ni sa priorité future.
