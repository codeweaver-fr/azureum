# Sprint 020 — Matérialisation de l’entrée Accueil–Collections V1

## Statut

**Contrat validé par le Product Owner et verrouillé avant implémentation**

Le présent document constitue le contrat du Sprint 020. Il autorise exclusivement les
travaux définis par son périmètre et doit être appliqué conformément à
`docs/GOVERNANCE.md`.

## 1. Raison d’être

Les Sprints 017 et 018 ont respectivement défini le manifeste de l’expérience publique
puis sa conception canonique. Le Sprint 019 a matérialisé le continuum
Collection–Œuvre.

La stratégie générale validée place désormais en priorité l’entrée
Accueil–Collections. Le Sprint 020 traduit cette conception dans l’application sans la
redéfinir.

Le résultat doit être visible : l’Accueil introduit l’univers artistique d’AZUREUM et
la vue Collections rend perceptible la diversité des ensembles avant leur consultation
individuelle.

## 2. Catégorie

**Direction artistique — implémentation applicative**

Le Sprint applique une conception déjà validée. Il ne constitue ni une nouvelle phase
de direction artistique documentaire, ni une évolution fonctionnelle.

## 3. Responsabilité unique

> Matérialiser dans l’application l’entrée dans l’univers artistique d’AZUREUM, depuis
> l’Accueil jusqu’à la perception et l’exploration de la diversité des Collections, en
> préservant la continuité vers les Collections individuelles déjà matérialisées.

Cette responsabilité couvre :

- l’Accueil — `V-PUB-01` ;
- la vue générale Collections — `V-PUB-03` ;
- leur continuité existante vers les Collections individuelles — `V-PUB-07` ;
- les seules fondations nécessaires à cette matérialisation ;
- les preuves directement liées au périmètre.

## 4. Références normatives

Le Sprint applique notamment :

- `docs/GOVERNANCE.md` ;
- `PROJECT_STATE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/specifications/public-experience-manifest-v1.md` ;
- `docs/specifications/public-experience-design-v1.md` ;
- le contrat du Sprint 017 ;
- le contrat du Sprint 018 ;
- le contrat et les résultats verrouillés du Sprint 019 ;
- les contrats historiques des vues existantes lorsqu’ils définissent encore une
  décision applicable.

En cas de divergence entre une préférence locale et ces références, le canon prévaut.

## 5. Décisions Product Owner acquises

Le Sprint préserve les décisions suivantes :

- l’univers artistique constitue le premier foyer d’attention de l’Accueil ;
- l’identité éditoriale et la promesse d’AZUREUM soutiennent cette entrée sans devenir
  le sujet principal ;
- la diversité des ensembles constitue le premier foyer de la vue Collections ;
- aucune Collection ne reçoit de hiérarchie artistique arbitraire ;
- l’Accueil et `/collections` doivent être perceptuellement distincts ;
- leur continuité repose sur les identités, intentions, médias et destinations
  existants, sans reproduire la même composition ;
- les données et médias actuels restent démonstratifs ;
- aucun nouveau contenu, média, parcours, lien ou comportement fonctionnel n’est
  introduit ;
- les pages Collection et Œuvre matérialisées au Sprint 019 restent fermées ;
- aucun mouvement de production n’est autorisé ;
- la robustesse à un nombre variable de Collections est démontrée uniquement dans les
  tests ;
- aucune évolution du Design System n’est autorisée sans insuffisance réelle
  préalablement démontrée et nouvel arbitrage Product Owner.

## 6. Résultat attendu

### 6.1 Accueil

L’Accueil doit :

- conserver sa responsabilité fonctionnelle, son contenu et ses destinations
  existantes ;
- rendre l’univers artistique immédiatement perceptible comme premier foyer ;
- maintenir l’identité AZUREUM et le contexte nécessaire à la compréhension ;
- donner accès aux Collections sans détour ni écran introductif autonome ;
- éviter de devenir un index générique ou une reproduction de `/collections` ;
- protéger les ratios et les alternatives accessibles des médias existants ;
- rester complet lorsque les médias sont indisponibles.

### 6.2 Collections

La vue `/collections` doit :

- faire percevoir la diversité des ensembles comme masse plurielle dominante ;
- rendre chaque Collection identifiable par son média, son titre et son intention
  existants ;
- conserver un accès explicite à chaque route Collection ;
- éviter une succession de cartes interchangeables ou un vocabulaire de catalogue ;
- ne créer aucune hiérarchie artistique ou commerciale non déclarée ;
- rester robuste à des ratios, longueurs et quantités variables.

### 6.3 Continuité

Le parcours suivant doit rester cohérent :

```text
Accueil
→ Collections
→ Collection
```

Cette continuité ne crée aucune route, destination ou navigation nouvelle. Les pages
Collection ne peuvent être modifiées qu’en présence d’une régression certaine
directement provoquée par le Sprint et après revue Product Owner.

## 7. Hypothèse contrôlée sur les fondations

Le Sprint part de l’hypothèse que le Design System existant suffit.

Avant l’implémentation, les primitives strictement nécessaires sont vérifiées :

- conteneurs ;
- grille et `GridItem` ;
- empilements ;
- typographie ;
- liens et focus ;
- présentation intrinsèque ou responsive des médias ;
- conservation des ratios ;
- espacements et règles responsive existants.

Deux issues sont possibles :

### A. Fondations suffisantes

L’implémentation commence immédiatement dans le même incrément.

### B. Insuffisance réellement démontrée

Seul le travail concerné s’arrête. L’insuffisance, la primitive concernée et
l’impossibilité de composition locale conforme sont présentées au Product Owner.

Aucun contournement local arbitraire, nouveau token, composant fondamental, état,
variante ou API n’est créé.

## 8. Données et médias

Le Sprint consomme en lecture les données existantes du module `gallery`.

Il préserve :

- les slugs ;
- les titres ;
- les intentions ;
- les médias d’aperçu ;
- les alternatives ;
- les relations existantes ;
- les routes et destinations ;
- l’ordre fourni par les données.

Les données ne deviennent ni définitives ni canoniques du seul fait de leur utilisation.

La preuve d’un nombre variable de Collections :

- reste isolée dans les tests ;
- ne modifie pas les données permanentes ;
- ne crée aucune Collection canonique ;
- ne modifie aucune règle métier ;
- ne transforme pas le module `gallery` en générateur de fixtures.

## 9. Mouvement

Aucune animation, transition ou technologie de mouvement de production n’est
introduite.

L’expérience doit être complète, expressive et cohérente par :

- la composition ;
- la hiérarchie ;
- les rapports de masses ;
- la typographie ;
- les médias ;
- les respirations ;
- les états interactifs déjà canoniques.

Le Sprint ne crée aucune dépendance à `prefers-reduced-motion`, puisque aucun mouvement
nouveau n’est produit.

## 10. Périmètre autorisé

Peuvent être modifiés uniquement lorsque cela est nécessaire :

- `src/app/(public)/page.tsx` ;
- son éventuel CSS Module local ;
- `src/app/(public)/collections/page.tsx` ;
- son éventuel CSS Module local ;
- les tests unitaires, de rendu ou E2E directement concernés ;
- le contrat du Sprint ;
- `PROJECT_STATE.md` et `CHANGELOG.md` lors de la clôture.

Peuvent être inspectés en lecture :

- le shell public ;
- les primitives du Design System ;
- le module `gallery` ;
- les pages Collection et Œuvre ;
- leurs tests et styles.

Une abstraction partagée supplémentaire n’est créée que si un besoin réellement
transversal ne peut pas être exprimé clairement par composition locale. Elle exige une
justification et une revue Product Owner préalable.

## 11. Hors périmètre

Sont exclus :

- toute nouvelle responsabilité fonctionnelle ;
- toute nouvelle route, destination, action ou navigation ;
- toute modification des règles métier ;
- toute nouvelle Collection, œuvre, donnée ou relation permanente ;
- toute modification métier du module `gallery` ;
- tout nouveau contenu ou média officiel ;
- toute modification de la composition des pages Collection et Œuvre ;
- toute refonte du shell ou de sa navigation ;
- toute évolution du Design System non démontrée ;
- tout nouveau token, composant fondamental, état, variante ou API ;
- tout mouvement ou technologie d’animation de production ;
- toute recherche, tout filtre, tri, carrousel ou pagination ;
- les pages David, Contenu artistique et Évolution dans le temps ;
- toute fonctionnalité commerciale, privée ou administrative ;
- tout Sprint ultérieur.

## 12. Critères d’acceptation

Le Sprint est acceptable lorsque :

- l’univers artistique est le premier foyer perceptible de l’Accueil ;
- l’identité et la promesse d’AZUREUM restent compréhensibles sans dominer les œuvres ;
- l’accès aux Collections reste immédiat et explicite ;
- la diversité des ensembles est le premier foyer de `/collections` ;
- l’Accueil et `/collections` possèdent des compositions perceptuellement distinctes ;
- chaque Collection conserve son identité, son intention, son média et sa destination ;
- aucune hiérarchie artistique ou commerciale n’est inventée ;
- les pages Collection et Œuvre du Sprint 019 restent inchangées, hors correction
  autorisée d’une régression certaine ;
- les ratios des médias sont préservés sans recadrage destructif ;
- les médias indisponibles ne bloquent ni l’identité ni l’accès ;
- les contenus courts et longs restent lisibles ;
- une quantité variable de Collections reste supportée dans une preuve de test isolée ;
- mobile, tablette, bureau et reflow à 200 % restent utilisables ;
- aucun débordement horizontal n’apparaît ;
- l’ordre sémantique et l’ordre de tabulation restent cohérents ;
- les liens sont accessibles au clavier et leur focus est visible ;
- le parcours Accueil → Collections → Collection conserve les identités et destinations ;
- aucun mouvement de production n’est introduit ;
- aucun fichier hors périmètre n’est modifié ;
- tous les contrôles contractuels sont conformes.

## 13. Découpage incrémental

### Incrément 1 — Contrat Sprint 020

**Objectif unique :** définir et verrouiller le cadre opérationnel de la matérialisation
Accueil–Collections.

**Périmètre :** contrat du Sprint 020 uniquement.

**Travaux autorisés :**

- vérifier le contrat contre la gouvernance et les références canoniques ;
- intégrer les arbitrages Product Owner ;
- expliciter les frontières, critères, contrôles et commits.

**Critères de validation :**

- responsabilité unique ;
- périmètre borné ;
- sept incréments explicitement définis ;
- aucune redéfinition de la conception du Sprint 018 ;
- validation Product Owner explicite.

**Contrôles :**

- audit documentaire ciblé ;
- Prettier ciblé ;
- `git diff --check` ;
- staging nominatif du seul contrat.

**Commit attendu :**

```text
docs(sprint-020): lock homepage collections entry contract
```

### Incrément 2 — Fondations minimales et démarrage Accueil

**Objectif unique :** vérifier les fondations nécessaires puis produire immédiatement
une première matérialisation visible de l’Accueil.

**Périmètre :** Accueil et primitives inspectées en lecture.

**Travaux autorisés :**

- vérifier les primitives nécessaires ;
- conclure sur la suffisance du Design System ;
- créer une composition locale de l’Accueil ;
- commencer à rendre l’univers artistique dominant ;
- conserver le contenu, les médias, liens et destinations existants.

**Critères de validation :**

- conclusion explicite sur les fondations ;
- résultat visible dans l’application ;
- univers artistique perceptiblement prioritaire ;
- aucune modification du Design System ou du module `gallery` ;
- aucune modification de `/collections` dans cet incrément.

**Contrôles :**

- revue visuelle mobile, tablette et bureau ;
- ratios et médias indisponibles ;
- tests Accueil ciblés ;
- Prettier ciblé ;
- TypeScript ;
- ESLint ciblé ;
- `git diff --check`.

**Commit attendu :**

```text
feat(home): establish artistic entry foundations
```

### Incrément 3 — Accueil

**Objectif unique :** matérialiser complètement l’Accueil conformément à sa conception
canonique.

**Périmètre :** route `/` et styles locaux.

**Travaux autorisés :**

- stabiliser les rapports entre univers artistique, identité, promesse et accès ;
- rendre la composition robuste aux longueurs et ratios existants ;
- différencier l’Accueil d’un index de Collections ;
- renforcer les preuves directement liées à l’Accueil.

**Critères de validation :**

- premier foyer artistique démontrable ;
- identité AZUREUM compréhensible mais subordonnée ;
- accès immédiat aux Collections ;
- absence d’écran introductif autonome ;
- contenu et destinations inchangés ;
- fonctionnement complet sans média.

**Contrôles :**

- revue visuelle Product Owner ;
- mobile, tablette et bureau ;
- reflow à 200 % ;
- clavier et focus ;
- tests Accueil ciblés ;
- Prettier ;
- TypeScript ;
- ESLint ;
- `git diff --check`.

**Commit attendu :**

```text
feat(home): materialize public artistic entry
```

### Incrément 4 — Collections

**Objectif unique :** matérialiser la diversité des ensembles artistiques sur
`/collections`.

**Périmètre :** vue générale Collections et styles locaux.

**Travaux autorisés :**

- rendre les ensembles dominants et distincts ;
- préserver leur égalité métier ;
- différencier la vue de l’Accueil ;
- organiser localement médias, titres, intentions et accès ;
- protéger ratios, ordre et destinations.

**Critères de validation :**

- diversité perceptible ;
- collections non réduites à des cartes interchangeables ;
- aucune hiérarchie artistique arbitraire ;
- ajout ou retrait simulé d’une Collection sans emplacement réservé ;
- aucune modification des données permanentes ;
- aucune modification des pages Collection.

**Contrôles :**

- revue visuelle Product Owner ;
- mobile, tablette et bureau ;
- ratios et médias indisponibles ;
- contenu court et long ;
- test isolé de quantité variable ;
- Prettier ;
- tests ciblés ;
- TypeScript ;
- ESLint ;
- `git diff --check`.

**Commit attendu :**

```text
feat(collections): materialize artistic ensemble diversity
```

### Incrément 5 — Continuité Accueil–Collections–Collection

**Objectif unique :** démontrer la continuité fonctionnelle et perceptuelle entre les
trois niveaux existants.

**Périmètre :** relations et tests du parcours Accueil → Collections → Collection.

**Travaux autorisés :**

- vérifier les identités, médias, intentions et destinations ;
- vérifier que les vues restent distinctes mais cohérentes ;
- renforcer uniquement les preuves manquantes ;
- corriger une rupture certaine dans les deux vues du Sprint.

**Critères de validation :**

- parcours complet sans erreur ;
- identité de chaque Collection conservée ;
- destinations canoniques inchangées ;
- aucune nouvelle navigation ;
- pages Collection inchangées ;
- shell inchangé sauf non-conformité certaine et arbitrage Product Owner préalable.

**Contrôles :**

- tests de parcours ciblés ;
- navigation clavier ;
- absence d’erreur navigateur ;
- Prettier ;
- TypeScript ;
- ESLint ;
- `git diff --check`.

**Commit attendu :**

```text
feat(experience): preserve homepage collections continuity
```

### Incrément 6 — Responsive, accessibilité et robustesse

**Objectif unique :** démontrer que l’entrée Accueil–Collections reste complète et
robuste dans les situations de référence.

**Périmètre :** Accueil, Collections, leur continuité et leurs tests.

**Travaux autorisés :**

- compléter les preuves manquantes ;
- tester mobile, tablette, bureau et reflow ;
- vérifier ratios, contenus variables, médias indisponibles et quantité variable ;
- corriger uniquement une non-conformité certaine du périmètre.

**Critères de validation :**

- aucun débordement horizontal ;
- ordre sémantique et tabulation cohérents ;
- focus visible ;
- contenu et actions complets sur toutes les largeurs ;
- médias sans recadrage destructif ;
- quantité variable démontrée sans données permanentes ;
- aucune erreur React, hydratation ou navigateur.

**Contrôles :**

- Prettier ciblé ;
- Vitest concerné ;
- Playwright concerné ;
- TypeScript ;
- ESLint ;
- `git diff --check`.

**Commit attendu :**

```text
test(experience): validate homepage collections responsive continuity
```

### Incrément 7 — Audit final et clôture

**Objectif unique :** démontrer la conformité globale du Sprint et préparer son
verrouillage documentaire.

**Périmètre :** diff complet du Sprint, contrat, `PROJECT_STATE.md` et `CHANGELOG.md`.

**Travaux autorisés :**

- auditer le périmètre final ;
- vérifier les critères d’acceptation ;
- exécuter les contrôles globaux ;
- documenter les décisions, réserves et sujets différés ;
- synchroniser les documents de clôture.

**Critères de validation :**

- responsabilité unique atteinte ;
- aucune redéfinition du canon ;
- aucun fichier ou comportement hors périmètre ;
- aucune évolution implicite du Design System ou du module `gallery` ;
- contrôles globaux conformes ;
- validation Product Owner finale.

**Contrôles :**

- `pnpm format:check` ;
- `pnpm lint` ;
- `pnpm typecheck` ;
- `pnpm test` ;
- `pnpm build` ;
- `pnpm test:e2e` ;
- `pnpm audit` ;
- `git diff --check` ;
- audit du diff complet contre `main` ;
- staging nominatif des seuls documents de clôture.

**Commit attendu :**

```text
docs(sprint-020): finalize homepage collections entry
```

## 14. Séquence de travail

```text
Contrat validé et verrouillé
→ fondations minimales et code visible de l’Accueil
→ Accueil stabilisé
→ Collections matérialisé
→ continuité démontrée
→ robustesse transversale
→ audit final
→ validation Product Owner
→ verrouillage Git
→ Pull Request
→ fusion
→ tag
→ nettoyage de branche
```

## 15. Décisions différées

Restent hors du Sprint :

- les contenus et médias officiels futurs ;
- toute évolution métier du module `gallery` ;
- tout mouvement de production ;
- toute évolution non démontrée du Design System ;
- David et Contenu artistique ;
- Évolution dans le temps ;
- le contrôle transversal final de toute l’expérience publique ;
- les contrats, numéros et périmètres des Sprints ultérieurs.

La présence d’un sujet différé ne constitue ni sa validation, ni son autorisation, ni
sa priorité contractuelle.
