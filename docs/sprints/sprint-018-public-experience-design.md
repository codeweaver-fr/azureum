# Sprint 018 — Conception de l'expérience publique V1

## Statut

**Validé par le Product Owner et verrouillé avant le début de la conception**

Le présent document constitue le contrat du Sprint 018, validé par le Product Owner et
verrouillé conformément à `docs/GOVERNANCE.md`. Il autorise exclusivement les travaux
documentaires et conceptuels définis par son périmètre, sans aucune modification du
produit.

## 1. Raison d'être

Les Sprints 010 à 016 ont stabilisé les responsabilités fonctionnelles et sémantiques
de l'expérience publique d'AZUREUM. Le Sprint 017 a ensuite défini le manifeste
canonique permettant d'évaluer la qualité de cette expérience sans la réduire à une
préférence esthétique ou à une solution technique.

Le Sprint 018 intervient pour traduire ce manifeste en une conception publique
cohérente, traçable et exploitable, vue par vue. Il ne part ni d'une page blanche, ni du
constat que l'existant serait défectueux. Les vues actuelles constituent la référence
fonctionnelle à préserver. Le Sprint doit concevoir leur évolution sensible sans
remettre en cause leurs responsabilités, leurs parcours ou leurs destinations.

Le Sprint demeure exclusivement documentaire et conceptuel. Il répond à la question :

> Comment les principes du manifeste se traduisent-ils concrètement, vue par vue, sans
> encore écrire une ligne de code ?

## 2. Catégorie

Le Sprint 018 est un Sprint de **direction artistique** au sens de
`docs/GOVERNANCE.md`.

Ses livrables sont documentaires, mais sa responsabilité n'est pas une simple
synchronisation du référentiel. Il conçoit l'expérience future d'un produit
fonctionnellement stabilisé, sans l'implémenter.

## 3. Responsabilité unique

La responsabilité unique du Sprint est :

> Transformer le manifeste canonique en une conception publique cohérente, traçable et
> exploitable, vue par vue, sans produire d'implémentation.

Cette responsabilité ne permet aucune modification fonctionnelle, technique ou
applicative.

## 4. Objectif

Le Sprint doit produire une conception globale de l'expérience publique V1 qui :

- parte de l'expérience existante et préserve ses responsabilités canoniques ;
- traduise les principes du manifeste en intentions, compositions, hiérarchies,
  rythmes et continuités compréhensibles ;
- rende les propositions comparables et arbitrables par le Product Owner ;
- justifie chaque décision par sa contribution à la rencontre entre le visiteur, David
  et les œuvres ;
- reste indépendante de toute technologie et de toute valeur de production ;
- identifie séparément les éventuels besoins d'évolution du Design System ;
- établisse, à sa clôture seulement, une cartographie des dépendances et une stratégie
  générale pour les futurs Sprints d'implémentation.

## 5. Références applicables

Le Sprint applique sans les redéfinir :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/specifications/public-experience-manifest-v1.md` ;
- les contrats des Sprints 008, 008-r1 et 009 relatifs au Design System ;
- les contrats des Sprints 010 à 016 relatifs aux responsabilités publiques ;
- `docs/sprints/sprint-017-public-experience-direction.md` ;
- l'application publique existante, uniquement comme référence fonctionnelle et
  sémantique à préserver.

En cas de contradiction, les documents canoniques applicables prévalent sur toute
proposition produite pendant le Sprint.

## 6. Décisions héritées

Le Sprint préserve notamment les décisions suivantes :

- les responsabilités `V-PUB-01` à `V-PUB-07` restent inchangées ;
- le shell public reste la structure partagée de l'expérience ;
- les routes, destinations et libellés de navigation restent inchangés ;
- les collections constituent l'accès public structurant aux œuvres ;
- les œuvres et la démarche de David priment sur l'interface ;
- le manifeste de l'expérience publique V1 constitue la référence d'intention ;
- le Design System reste l'unique source des fondations, tokens, composants, états,
  variantes et règles transversales ;
- l'expérience demeure mobile-first, responsive, accessible et compatible avec le
  reflow ;
- le mouvement reste utile, discret et compatible avec `prefers-reduced-motion` ;
- les œuvres ne subissent aucun recadrage destructif ;
- les contenus et médias fictifs ou provisoires conservent leur statut ;
- aucune proposition non arbitrée ne possède de valeur normative.

## 7. Arbitrages Product Owner validés

### 7.1 Représentations conceptuelles

Les schémas de composition et wireframes conceptuels non exécutables sont autorisés.
Ils servent exclusivement à concevoir, comprendre, comparer et arbitrer.

Ils peuvent représenter :

- les zones et rapports de masses ;
- les hiérarchies et directions d'attention ;
- les rythmes et relations spatiales ;
- les rapports entre texte, œuvre, contexte, action et respiration ;
- les transformations conceptuelles selon la largeur disponible.

Ils ne constituent ni des maquettes finales, ni des écrans prêts à implémenter, ni des
spécifications techniques ou pixel-perfect.

### 7.2 Support principal

Le Sprint produit un document canonique principal couvrant l'ensemble de l'expérience
publique. Des documents séparés ne peuvent être créés que si un besoin documentaire
réel est démontré et explicitement arbitré.

### 7.3 Niveau de fidélité

Les représentations doivent être assez précises pour rendre la conception
compréhensible et arbitrable. Elles ne peuvent contenir aucune valeur technique de
production.

### 7.4 Variantes

Deux ou trois approches maximum peuvent être comparées lorsqu'une décision importante
possède plusieurs réponses réellement crédibles. Une variante peut concerner une règle
transversale, une vue ou une relation entre plusieurs vues.

Aucune variante ne doit être créée artificiellement lorsqu'une seule proposition
découle clairement du canon.

### 7.5 Cohérence et singularité locale

La grammaire commune reste la référence. Une vue peut néanmoins adopter une composition
fortement singulière lorsque sa responsabilité le justifie et lorsque cette singularité :

- renforce la rencontre avec les œuvres ou la compréhension de David ;
- conserve les repères nécessaires ;
- reste cohérente avec l'identité AZUREUM ;
- ne compromet ni responsive, ni accessibilité, ni performance ;
- ne transforme pas l'interface en sujet principal.

Aucun seuil abstrait de divergence n'est défini. Toute singularité doit être justifiée
par la responsabilité de la vue.

### 7.6 Contenus et médias de démonstration

Les contenus et médias existants peuvent servir de matériaux de travail. Une
proposition ne peut cependant dépendre de leur longueur, quantité, ratio ou contenu
exact. Sa robustesse face à leur remplacement futur doit être évaluée.

L'utilisation d'un contenu fictif ou provisoire pendant la conception ne le rend pas
canonique.

### 7.7 Captures de l'existant

Les captures des vues actuelles peuvent servir de preuves d'audit et de supports de
comparaison non normatifs. Elles ne deviennent pas automatiquement des références de
conception ni des éléments canoniques.

### 7.8 Stratégie d'implémentation future

À la fin du Sprint, une cartographie démontrée des dépendances, une proposition
argumentée de regroupement et un ordre recommandé doivent être présentés au Product
Owner.

Le Product Owner valide uniquement la stratégie générale. Chaque futur Sprint conserve
son propre contrat et suit la gouvernance. Le Sprint 018 ne fige pas le contenu détaillé
des Sprints 019 et suivants.

## 8. Périmètre inclus

Le Sprint peut :

- auditer l'expérience publique réellement présente ;
- identifier les forces, limites et risques de l'existant au regard du manifeste ;
- définir l'intention sensible propre à chaque vue ;
- définir la première direction d'attention et la hiérarchie conceptuelle ;
- concevoir les principes de composition, densité, silence, tension et respiration ;
- concevoir les relations entre œuvre, contexte, texte et actions existantes ;
- décrire les transformations conceptuelles entre mobile, tablette et bureau ;
- définir les principes de présentation des œuvres et médias existants ;
- concevoir les usages justifiés du mouvement au niveau de l'intention ;
- concevoir la continuité et la progression entre les vues existantes ;
- produire des schémas et wireframes conceptuels non exécutables ;
- comparer jusqu'à trois approches lorsqu'un arbitrage réel est démontré ;
- relier chaque proposition au manifeste et à la responsabilité de la vue ;
- identifier séparément d'éventuels besoins d'évolution du Design System ;
- produire une cartographie des dépendances de conception ;
- recommander une stratégie générale de futurs Sprints d'implémentation.

## 9. Hors périmètre

Sont exclus :

- toute modification de code, de configuration ou de dépendance ;
- toute modification fonctionnelle ;
- toute route, destination ou entrée de navigation nouvelle ;
- toute modification implicite ou explicite du Design System ;
- tout nouveau token, composant, état, variante ou API ;
- toute valeur technique de production ;
- toute technologie d'animation ou de rendu ;
- tout nouveau média non validé ;
- toute modification des contenus métier ou éditoriaux existants ;
- toute maquette finale, pixel-perfect ou directement implémentable ;
- tout prototype exécutable ;
- toute spécification CSS, responsive ou d'animation ;
- tout choix fondé sur React, Next.js, CSS, Framer Motion, GSAP, WebGL, Canvas, SVG ou
  une autre solution technique ;
- toute remise en cause des responsabilités fonctionnelles publiques ;
- tout découpage définitif anticipé des Sprints 019 et suivants ;
- toute implémentation des propositions retenues.

## 10. Responsabilités publiques concernées

Le Sprint couvre exactement les huit responsabilités suivantes :

1. accueil — `V-PUB-01` ;
2. David et sa démarche — `V-PUB-02` ;
3. collections — `V-PUB-03` ;
4. collection — `V-PUB-07` ;
5. œuvre — `V-PUB-04` ;
6. contenu artistique — `V-PUB-05` ;
7. évolution dans le temps — `V-PUB-06` ;
8. shell public.

Pour chaque vue, la conception doit examiner :

- son rôle dans la rencontre entre le visiteur et le travail de David ;
- ce qui doit attirer l'attention en premier ;
- le niveau approprié de silence, de densité et de tension ;
- la place de l'œuvre, du contexte et des actions existantes ;
- ses relations avec les vues précédentes et suivantes ;
- ses risques de surcharge, de banalisation ou de démonstration de l'interface.

Cette lecture sensible complète la responsabilité fonctionnelle sans la modifier.

## 11. Livrables

Le Sprint doit produire :

1. le présent contrat validé et verrouillé ;
2. `docs/specifications/public-experience-design-v1.md`, document canonique principal
   de conception de l'expérience publique V1 ;
3. l'audit critique et factuel des huit responsabilités publiques existantes ;
4. les intentions sensibles et hiérarchies d'attention de chaque vue ;
5. les compositions conceptuelles et leurs transformations responsive ;
6. les principes de présentation des œuvres et médias existants ;
7. les principes de mouvement et de continuité ;
8. les comparaisons nécessaires et les arbitrages Product Owner associés ;
9. une matrice de traçabilité vers le manifeste et les responsabilités publiques ;
10. un registre des décisions retenues, rejetées et différées ;
11. un inventaire séparé des éventuels besoins d'évolution du Design System ;
12. une cartographie des dépendances entre les vues ;
13. une recommandation générale de regroupement et d'ordre des futurs Sprints
    d'implémentation ;
14. la synchronisation documentaire nécessaire à la clôture.

Le document canonique principal est créé dans l'Incrément 2 à l'emplacement
`docs/specifications/public-experience-design-v1.md`.

## 12. Méthode de conception

### 12.1 Partir de l'existant

L'audit distingue :

- les faits observables dans les vues actuelles ;
- leur conformité aux références canoniques ;
- les interprétations de conception ;
- les propositions soumises à arbitrage ;
- les décisions Product Owner ;
- les éléments différés.

L'existant n'est ni conservé par inertie, ni rejeté par principe.

### 12.2 Justification obligatoire

Chaque proposition doit préciser :

- les principes du manifeste qu'elle matérialise ;
- la responsabilité sensible qu'elle sert ;
- la manière dont elle améliore la rencontre avec les œuvres ou David ;
- ses avantages ;
- ses limites ;
- ses risques ;
- ses éventuelles dépendances ;
- son statut : proposée, retenue, rejetée ou différée.

Une proposition ne peut être retenue uniquement parce qu'elle paraît plus belle, plus
moderne ou plus spectaculaire.

### 12.3 Comparaison proportionnée

Une comparaison est produite uniquement lorsqu'un arbitrage réel existe. Les approches
utilisent les mêmes critères afin de permettre une décision argumentée. Les variantes
non retenues restent tracées sans acquérir de valeur normative.

### 12.4 Indépendance technologique

Le Sprint décrit l'expérience à concevoir, jamais sa construction technique. Une
proposition qui dépend d'une technologie, d'une API ou d'une capacité d'implémentation
précise est irrecevable dans ce Sprint.

## 13. Statut des représentations visuelles

Les schémas et wireframes conceptuels sont des propositions non normatives tant qu'ils
n'ont pas été explicitement arbitrés et intégrés au document de référence verrouillé.

Même retenus, ils expriment une intention de conception. Ils ne constituent pas une
spécification de production et ne peuvent être transmis comme instruction directe
d'implémentation sans le contrat d'un Sprint ultérieur.

Ils doivent rester :

- conceptuels ;
- lisibles ;
- comparables lorsqu'une variante existe ;
- indépendants des technologies ;
- dépourvus de mesures et valeurs de production ;
- accompagnés de leur justification et de leur statut.

## 14. Articulation avec le manifeste

Le manifeste définit pourquoi et selon quels principes l'expérience publique doit être
conçue. Le Sprint 018 traduit ces principes en propositions de conception concrètes,
sans les modifier.

Chaque proposition doit citer les principes du manifeste qu'elle matérialise. Si une
proposition exige de modifier le manifeste, elle sort du périmètre et doit être
différée ou faire l'objet d'un arbitrage documentaire distinct.

Le principe directeur reste le filtre prioritaire :

> Une proposition renforce-t-elle la rencontre entre le visiteur et les œuvres, ou
> attire-t-elle davantage l'attention sur l'interface elle-même ?

## 15. Articulation avec le Design System

Le Sprint orchestre les fondations existantes au niveau de l'intention. Il ne crée et
ne modifie aucun token, composant, état, variante, règle technique ou comportement du
Design System.

Lorsqu'une proposition semble nécessiter une évolution du Design System :

1. le besoin est formulé séparément ;
2. sa contribution à l'expérience est démontrée ;
3. aucune solution technique n'est imposée ;
4. il n'est pas intégré implicitement à la conception canonique ;
5. il est différé à un Sprint autorisé après arbitrage Product Owner.

L'inventaire de ces besoins ne constitue ni une validation, ni une roadmap, ni une
autorisation d'implémentation.

## 16. Critères d'acceptation

Le Sprint est acceptable si :

- les huit responsabilités publiques sont auditées et conçues ;
- l'existant est traité comme référence fonctionnelle à préserver ;
- chaque proposition retenue est reliée au manifeste et à la responsabilité de la vue ;
- les intentions sensibles et hiérarchies d'attention sont explicites ;
- les compositions conceptuelles sont compréhensibles sans devenir des maquettes de
  production ;
- mobile, tablette et bureau sont conçus comme des expériences complètes ;
- la robustesse aux changements de contenus et médias est examinée ;
- les œuvres restent dominantes et ne subissent aucun traitement contraire au canon ;
- le mouvement et la continuité restent utiles, non spectaculaires et indépendants de
  toute technologie ;
- les comparaisons sont limitées aux arbitrages réels ;
- les décisions retenues, rejetées et différées sont traçables ;
- les éventuels besoins du Design System sont isolés et non intégrés implicitement ;
- aucune responsabilité fonctionnelle, route ou navigation n'est modifiée ;
- aucune valeur technique, technologie ou prescription d'implémentation n'est
  introduite ;
- la cartographie des dépendances est démontrée ;
- la stratégie générale des futurs Sprints est argumentée sans figer leurs contrats ;
- la documentation de clôture reflète exactement l'état du Sprint ;
- le dépôt ne contient aucune modification hors périmètre.

## 17. Critères de rejet

Une proposition est rejetée si elle :

- attire davantage l'attention sur l'interface que sur les œuvres ou David ;
- repose seulement sur une préférence esthétique ;
- réécrit une responsabilité fonctionnelle ou un parcours ;
- crée une route, une destination ou une action ;
- dépend d'un contenu fictif, d'une longueur ou d'un ratio exact ;
- transforme un wireframe en maquette de production ;
- introduit une valeur technique ou une technologie ;
- prescrit une modification non arbitrée du Design System ;
- compromet l'accessibilité, le responsive, le reflow ou la performance ;
- impose le mouvement comme condition de qualité ;
- recadre ou subordonne une œuvre au bénéfice de l'interface ;
- utilise le spectaculaire ou la démonstration technologique comme finalité ;
- anticipe le contenu détaillé d'un futur Sprint d'implémentation ;
- ne peut pas être reliée à un principe du manifeste et à une responsabilité sensible.

## 18. Zones autorisées

Pendant le Sprint, les modifications sont limitées à :

- `docs/sprints/sprint-018-public-experience-design.md` ;
- `docs/specifications/public-experience-design-v1.md` ;
- les éventuelles captures factuelles de l'existant, exclusivement comme preuves
  d'audit non normatives et lorsqu'elles sont référencées par le document principal ;
- les éventuels fichiers visuels conceptuels explicitement prévus par le contrat et
  référencés par le document principal ;
- `PROJECT_STATE.md` et `CHANGELOG.md`, uniquement pour leur synchronisation directement
  induite par la clôture du Sprint.

Toute création d'un fichier supplémentaire exige un besoin documentaire démontré et un
arbitrage Product Owner préalable.

Sont notamment interdits :

- `src/` ;
- `e2e/` ;
- les fichiers de configuration ;
- les dépendances ;
- les spécifications canoniques existantes ;
- les contrats des Sprints antérieurs ;
- les fichiers du Design System.

## 19. Découpage incrémental

### Incrément 1 — Contrat

**Objectif unique :** définir et verrouiller le cadre du Sprint avant toute conception.

**Périmètre borné :** le présent contrat uniquement.

**Travaux autorisés :** consolider les références, arbitrages, frontières, livrables,
méthode, critères et incréments ; auditer le brouillon contre les documents canoniques ;
appliquer uniquement les corrections validées par le Product Owner.

**Critères de validation :** responsabilité unique, périmètre, hors périmètre,
livrables, méthode, huit incréments et contrôles sont explicites ; aucune conception de
vue ni aucune règle technique n'est produite ; le Product Owner valide le contrat.

**Contrôles :** relecture contre `docs/GOVERNANCE.md`, le manifeste et les documents
canoniques applicables ; Prettier ciblé ; `git diff --check` ; staging nominatif et
vérification que seul le contrat est inclus.

**Commit attendu :**

```text
docs(sprint-018): lock public experience design contract
```

### Incrément 2 — Audit de l'expérience publique existante

**Objectif unique :** établir la base factuelle de conception des huit responsabilités
publiques.

**Périmètre borné :** vues publiques et shell existants, observés sans modification ;
document principal de conception.

**Travaux autorisés :** inventorier les structures, hiérarchies, contenus, médias,
actions et continuités existantes ; utiliser des captures comme preuves non normatives ;
distinguer faits, conformités, limites et risques ; établir la matrice de traçabilité
initiale.

**Critères de validation :** les huit responsabilités sont auditées ; chaque constat
est factuel ou explicitement qualifié d'interprétation ; aucune proposition de
conception, correction applicative ou décision future n'est introduite.

**Contrôles :** exhaustivité des huit responsabilités ; cohérence avec les routes et
contrats existants ; statut non normatif des captures ; absence de modification hors
zones documentaires ; Prettier ciblé et `git diff --check`.

**Commit attendu :**

```text
docs(experience): audit current public views
```

### Incrément 3 — Intentions sensibles et hiérarchies d'attention

**Objectif unique :** définir l'intention sensible de chaque vue et ce qu'elle doit
guider en premier.

**Périmètre borné :** intentions sensibles, premières directions d'attention,
équilibres entre œuvre, contexte et actions existantes.

**Travaux autorisés :** définir pour chaque responsabilité son rôle sensible, son
niveau de silence, de densité et de tension, sa hiérarchie d'attention et ses risques ;
relier chaque proposition au manifeste ; soumettre les arbitrages réels au Product
Owner.

**Critères de validation :** les huit responsabilités possèdent une intention sensible
claire sans modification fonctionnelle ; chaque proposition est justifiée et
traçable ; aucune composition détaillée, valeur technique ou maquette n'est produite.

**Contrôles :** matrice manifeste–responsabilités complète ; vérification des statuts
des propositions ; absence de duplication ou modification du manifeste ; Prettier
ciblé et `git diff --check`.

**Commit attendu :**

```text
docs(experience): define view intentions and attention hierarchy
```

### Incrément 4 — Compositions, médias et transformations responsive

**Objectif unique :** traduire les intentions validées en compositions conceptuelles
compréhensibles sur les largeurs de référence.

**Périmètre borné :** zones, masses, hiérarchies spatiales, rythmes, rapports entre
texte, œuvre, contexte et actions, présentation des médias existants et transformations
mobile, tablette et bureau.

**Travaux autorisés :** produire les schémas et wireframes conceptuels nécessaires ;
décrire les transformations selon la largeur ; évaluer la robustesse aux contenus de
démonstration ; comparer jusqu'à trois approches lorsqu'un arbitrage réel existe.

**Critères de validation :** chaque vue possède une composition conceptuelle cohérente
avec son intention ; les trois familles de largeur constituent des expériences
complètes ; les œuvres restent dominantes ; aucune représentation n'est finale,
pixel-perfect ou dépendante d'une valeur de production.

**Contrôles :** traçabilité de chaque représentation ; statut et légende explicites ;
comparabilité des variantes ; vérification de l'absence de mesures techniques,
technologies et besoins du Design System intégrés implicitement ; Prettier ciblé,
contrôle des fichiers visuels et `git diff --check`.

**Commit attendu :**

```text
docs(experience): define public compositions and responsive transformations
```

### Incrément 5 — Mouvement et continuité

**Objectif unique :** concevoir la progression sensible entre les vues et les usages
justifiés du mouvement.

**Périmètre borné :** continuité, progression, reprises visuelles et intentions de
mouvement entre les parcours existants.

**Travaux autorisés :** définir où le mouvement apporte compréhension, orientation ou
continuité ; décrire les expériences équivalentes sans mouvement ; concevoir les
relations entre vues sans modifier leurs destinations ; comparer les approches
crédibles si nécessaire.

**Critères de validation :** tout mouvement possède une finalité ; son absence reste
compatible avec une expérience complète ; les continuités préservent les parcours et
responsabilités existants ; aucune durée, courbe, API, bibliothèque ou technologie
n'est prescrite.

**Contrôles :** traçabilité vers le manifeste ; vérification de l'équivalence sans
mouvement et de la compatibilité avec `prefers-reduced-motion` au niveau du principe ;
absence de nouvelle navigation ou logique fonctionnelle ; Prettier ciblé et
`git diff --check`.

**Commit attendu :**

```text
docs(experience): define public movement and continuity concepts
```

### Incrément 6 — Arbitrages et consolidation

**Objectif unique :** transformer les propositions auditées en une conception globale
cohérente et explicitement arbitrée.

**Périmètre borné :** document principal, variantes produites, registre des décisions,
matrice de traçabilité et inventaire séparé des besoins éventuels du Design System.

**Travaux autorisés :** comparer les approches crédibles ; enregistrer les décisions
Product Owner ; retirer toute ambiguïté de statut ; consolider la grammaire commune et
les singularités locales justifiées ; isoler les éléments rejetés ou différés.

**Critères de validation :** chaque proposition possède un statut ; les choix retenus
sont justifiés ; les vues forment une expérience cohérente sans uniformisation
artificielle ; aucun besoin du Design System n'est implicitement validé ; aucune
implémentation n'est autorisée.

**Contrôles :** cohérence transversale ; exhaustivité du registre et de la matrice ;
absence de contradiction avec le manifeste, les responsabilités et le Design System ;
absence de variante artificielle ; Prettier ciblé et `git diff --check`.

**Commit attendu :**

```text
docs(experience): consolidate public experience design decisions
```

### Incrément 7 — Dépendances et stratégie générale d'implémentation

**Objectif unique :** recommander un ordre et des regroupements futurs à partir des
dépendances réellement démontrées.

**Périmètre borné :** cartographie des dépendances entre vues, risques de séquençage,
regroupements candidats et ordre recommandé.

**Travaux autorisés :** identifier les fondations communes, relations de continuité et
besoins préalables ; comparer les regroupements plausibles ; proposer une stratégie
générale au Product Owner ; documenter avantages, limites et risques.

**Critères de validation :** la cartographie repose sur la conception retenue ; la
recommandation est argumentée ; aucun contenu détaillé, engagement ou contrat des
Sprints 019 et suivants n'est créé ; le Product Owner peut accepter ou différer la
stratégie générale.

**Contrôles :** traçabilité de chaque dépendance ; distinction entre dépendance
démontrée, préférence d'ordre et sujet différé ; absence de numéro ou périmètre futur
présenté comme définitif ; Prettier ciblé et `git diff --check`.

**Commit attendu :**

```text
docs(experience): recommend public implementation sequence
```

### Incrément 8 — Audit final et clôture documentaire

**Objectif unique :** démontrer la conformité globale du Sprint et préparer son
verrouillage.

**Périmètre borné :** contrat, document principal, représentations conceptuelles,
matrices, registre, inventaire, cartographie et documents de synchronisation.

**Travaux autorisés :** auditer contrat, livrables et arbitrages ; vérifier la
traçabilité et les frontières ; corriger uniquement les non-conformités documentaires
démontrées ; synchroniser `PROJECT_STATE.md` et `CHANGELOG.md` directement pour la
clôture ; préparer le diff final.

**Critères de validation :** tous les critères du Sprint sont satisfaits ; aucune
proposition sans statut ni décision implicite ne subsiste ; les décisions différées
sont explicites ; aucun fichier hors périmètre n'est modifié ; le Product Owner valide
le Sprint avant verrouillage.

**Contrôles :** audit transversal contre la gouvernance, le manifeste, le Design System
et les responsabilités fonctionnelles ; validation des liens et fichiers ; Prettier sur
les documents modifiés ; `git diff --check` ; vérification du diff final, du staging
nominatif et des seuls fichiers autorisés.

**Commit attendu :**

```text
docs(sprint-018): finalize public experience design
```

## 20. Contrôles proportionnés du Sprint

Le Sprint étant exclusivement documentaire et conceptuel, ses contrôles portent sur :

- la conformité avec `docs/GOVERNANCE.md` ;
- la conformité avec le manifeste et les responsabilités publiques ;
- la cohérence avec le Design System sans duplication ni modification ;
- la traçabilité des faits, propositions, arbitrages et décisions différées ;
- l'exhaustivité des huit responsabilités publiques ;
- le statut explicite de chaque représentation et proposition ;
- la validité des liens et références documentaires ;
- l'absence de valeur technique, technologie ou prescription d'implémentation ;
- l'absence de modification applicative ou fonctionnelle ;
- le formatage Prettier des fichiers concernés ;
- `git diff --check` ;
- le contrôle nominatif des fichiers modifiés et indexés.

Les contrôles applicatifs ne sont pas requis en l'absence de modification du code, de
la configuration ou des dépendances. Toute extension du périmètre imposerait un nouvel
arbitrage et des contrôles adaptés avant de poursuivre.

## 21. Décisions explicitement différées

Le Sprint ne décide pas :

- les technologies ou bibliothèques d'implémentation ;
- les valeurs CSS, durées, courbes, seuils ou mesures de production ;
- les nouveaux tokens, composants, états, variantes ou APIs ;
- les évolutions du Design System éventuellement nécessaires ;
- les contenus et médias artistiques définitifs ;
- les maquettes finales ;
- le contenu détaillé ou le contrat des Sprints 019 et suivants ;
- les estimations, priorités de livraison ou dates d'implémentation ;
- les modifications fonctionnelles ou nouvelles responsabilités ;
- les optimisations techniques qui devront être démontrées pendant l'implémentation.

La présence d'un sujet dans un inventaire, une cartographie ou une recommandation ne
constitue ni sa validation, ni sa priorité, ni son autorisation d'implémentation.

## 22. Séquence de revue et de verrouillage

```text
Validation et verrouillage du contrat
→ Audit de l'expérience publique existante
→ Revue et acceptation de l'Incrément 2
→ Intentions sensibles et hiérarchies d'attention
→ Revue et acceptation de l'Incrément 3
→ Compositions, médias et transformations responsive
→ Revue et acceptation de l'Incrément 4
→ Mouvement et continuité
→ Revue et acceptation de l'Incrément 5
→ Arbitrages et consolidation
→ Revue et acceptation de l'Incrément 6
→ Dépendances et stratégie générale d'implémentation
→ Revue et acceptation de l'Incrément 7
→ Audit final et synchronisation documentaire
→ Validation Product Owner finale
→ Verrouillage du Sprint selon docs/GOVERNANCE.md
```

Chaque incrément commence uniquement après l'acceptation et le commit dédié du
précédent. Cette acceptation intermédiaire ne remplace pas la validation Product Owner
finale du Sprint.
