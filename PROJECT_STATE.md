# État du projet AZUREUM

## Phase actuelle

Sprint 018 — Conception de l'expérience publique V1 verrouillé sur sa branche et en
attente d'intégration.

Les Incréments 1 à 8 sont validés par le Product Owner. Le verrouillage documentaire
final est réalisé sur la branche du Sprint, sans ouvrir de futur Sprint ni autoriser
d'implémentation.

## Sprint actuel en clôture

Le contrat du Sprint 018 est verrouillé par le commit
`161f8e5acf924a43a4fb780ec9a476c820c7d0d3`. Les incréments documentaires suivants sont
validés et verrouillés :

- `57a7ec0bd55e907898aaa0b6d69060c5b42fadaf` — audit factuel des huit
  responsabilités publiques ;
- `781c2abde876b3517f86424397e1b0e91485940f` — intentions sensibles et hiérarchies
  d'attention ;
- `2f83e4028f60c4dc7f207e2d9f003e0f792712aa` — compositions, médias et
  transformations responsive conceptuelles ;
- `27a27c5559622deb74270be2a460ffa6788ef6c9` — mouvement facultatif et continuité
  publique ;
- `c8acba1303f1bf74caddddb6ec236900b31c26f3` — consolidation des décisions de
  conception ;
- `1dfcb2960c0d40b530e2f9f8b6987f1cb6507d42` — dépendances et stratégie générale
  d'implémentation.

Les décisions Product Owner structurantes sont :

- l'univers artistique constitue le premier foyer d'attention de l'accueil ;
- l'ensemble des œuvres constitue le premier foyer d'attention d'une collection ;
- la collection adopte un champ éditorial à rythme maîtrisé ;
- la fiche œuvre adopte une révélation puis contextualisation ;
- le mouvement reste facultatif et l'expérience demeure complète lorsqu'il est réduit
  ou supprimé ;
- la stratégie générale B — réduction des risques structurels — est retenue :
  fondations et shell, Collection–Œuvre, Accueil–Collections, David–Contenu artistique,
  Évolution dans le temps, puis contrôle transversal.

Deux capacités du Design System restent uniquement conditionnelles et à observer :

1. préserver des ratios hétérogènes dans un champ éditorial d'œuvres ;
2. maintenir une hiérarchie asymétrique entre une œuvre dominante et son contexte selon
   la largeur.

Elles ne constituent ni des besoins validés, ni des autorisations d'évolution du Design
System.

Les ambiguïtés héritées restent limitées aux contenus contextuels de collection non
observables, à l'état actif de `Collections` sur certaines routes imbriquées, au
caractère démonstratif des contenus et médias actuels et à l'absence de mesure réelle de
la réception émotionnelle. Elles ne constituent pas des corrections autorisées.

Les propositions non retenues restent tracées sans valeur normative : champ comparatif
stable pour la collection, dialogue protégé entre œuvre et contexte, stratégie A fondée
sur la progression du parcours. La stratégie C, vue par vue, reste non recommandée.

Les technologies, valeurs de production, évolutions du Design System, médias définitifs,
animations de production et contrats détaillés des futurs Sprints restent différés.

Une réserve historique de traçabilité est conservée pour l'Incrément 6. Le contrat
prévoyait le message
`docs(experience): consolidate public experience design decisions`, tandis que le
Product Owner a explicitement autorisé et fait créer, sur le commit
`c8acba1303f1bf74caddddb6ec236900b31c26f3`, le message
`docs(experience): consolidate public experience decisions`. Cet écart ne remet pas en
cause le contenu de l'incrément et ne justifie aucune réécriture Git.

À ce stade, la validation Product Owner finale est acquise. Le commit de clôture est en
cours de création sur la branche du Sprint ; le tag éventuel, la Pull Request et la
fusion dans `main` ne sont pas réalisés.

## Dernier Sprint clôturé

Le contrat du Sprint 017 est verrouillé par le commit
`33705e2afa993124ef6ec063f770c28553e3fcab`. Les Incréments 2 à 5 ont défini puis
verrouillé la vision et l'expérience émotionnelle, la grammaire de l'expérience, le
mouvement et la continuité publique, puis les contraintes et critères de rejet :

- `f4095dccf91038b6cf52bb02ffe603bdde1a625d` — vision et intention émotionnelle ;
- `1a4ba6b4eb5c1205e35eb7f180a41c885956511c` — grammaire de l'expérience publique ;
- `84aa7f9db2e9744c7aab8b5d6d361f9a0c7f57a8` — mouvement et continuité publique ;
- `c9fda95bf21b1caff27a843e3b882547e9869928` — contraintes et critères de rejet.

Le manifeste a été audité et validé par le Product Owner. L'audit final a relevé un
écart historique de méthode : le commit de l'Incrément 2 a créé le manifeste complet
avant les raffinements dédiés des Incréments 3 à 5. Cet écart ne remet pas en cause le
résultat final, ne constitue pas une non-conformité du manifeste et ne justifie aucune
réécriture de l'historique Git.

Le Sprint 017 a été intégré dans `main` par la Pull Request nº 19 et le commit de fusion
`2a83a69ff7ba298cbca40f3bf1449ed06000b921`, après réussite du contrôle GitHub Actions
`Validate`. Le tag `sprint-017` désigne cette référence officielle. La branche de travail
a été supprimée localement et à distance.

## Sprint précédent clôturé

Le Sprint 016 — Évolution dans le temps a introduit le module privé `timeline`, trois
repères fictifs ordonnés de 2023 à 2025, la route publique `/chronologie`, les relations
explicites vers les œuvres et les contenus artistiques, l'état vide ainsi que les
validations responsive et d'accessibilité.

Le tag historique `sprint-016`, publié sur le commit
`5d763424382725d41deb5d710ecd25627c5ae85c` avant une clôture conforme, reste inchangé.
Il constitue la référence historique initiale, mais conserve les imperfections relevées
par l'audit postérieur : le champ facultatif `period` n'était pas réellement modélisé
comme tel, la clôture documentaire n'avait pas été synchronisée et la vulnérabilité
transitive `brace-expansion@1.1.16` était devenue corrigeable. La racine Turbopack
dépendait en outre du répertoire courant du processus et pouvait donc désigner
incorrectement `src/app`.

La révision contrôlée `sprint-016-r1` constitue désormais la référence corrigée. La
correction fonctionnelle `071b3eae16d03fbad8af67e976a1708698de638e` représente
désormais `period` par `string | null`, utilise `null` pour son absence et couvre ce
comportement par des tests. La correction de sécurité
`7b50407aae486f4ba964c49cd62e5dccdd7df847` résout normalement `brace-expansion` vers
`1.1.17`, sans override ni modification de `package.json`. La correction de build
`1d87b42c35499cd1b57d0b998c9b87e4af9c9cf8` stabilise la racine Turbopack à partir du
répertoire de `next.config.ts`, indépendamment du répertoire de lancement.

Les preuves contractuelles ont été renforcées par les commits
`3ce90b506bc701f603e81a4a0f609b831d6e5821` pour l'immuabilité profonde du graphe
chronologique, `faafe47d5cbc290bb0b3dfd9e876d391b7216686` pour les trois repères
réellement rendus et `d18b090915e0a4df9e3d11719bfe6f021dcad9c5` pour la couverture
responsive, le parcours clavier, le focus et l'état actif de la navigation. Les six
incréments du Sprint 016-r1 ont été revus séparément. Les Incréments 1 et 4 ont été
validés sans modification ; les corrections ciblées des Incréments 2, 3 et 5 sont
enregistrées ; l'Incrément 6 est techniquement conforme après la présente
synchronisation documentaire.

Les contrôles de la R1 sont conformes : Prettier, ESLint, TypeScript, 14 fichiers
Vitest et 129 tests, build Next.js, 60 tests Playwright, `pnpm audit` avec zéro
vulnérabilité et `git diff --check`.

Deux avertissements LCP avaient été observés antérieurement sur
`/gallery/composition-b.webp` et `/gallery/composition-c.webp`. Ils n'ont pas été
reproduits pendant la validation finale actuelle, ne concernent pas `/chronologie` et ne
résultent pas des corrections de la R1. Aucune correction LCP n'est requise dans cette
révision.

La R1 a été validée par le Product Owner et verrouillée sous le tag publié
`sprint-016-r1`, qui cible le commit documentaire
`e4ff2303c7f21321827b976cbf59a8ef77cc8c37`. La Pull Request nº 17 a été fusionnée dans
`main` par le commit `39e5c6f58d82d408544fead5fe274f5714a4f618`. Les branches
`sprint-016-r1-public-timeline` et `sprint-016-public-timeline` ont été supprimées
localement et à distance après synchronisation de `main` avec `origin/main`. Le Sprint
016-r1 est définitivement clos.

Le Sprint 015 — Contenus artistiques est **validé par le Product Owner, fusionné dans
`main` et fonctionnellement terminé**. Les six incréments ont verrouillé le contrat,
ajouté le modèle privé et les trois contenus fictifs, matérialisé
`/contenus/[contentSlug]`, relié les contenus aux œuvres dans les deux sens, puis validé
le responsive, l'accessibilité et l'absence de régression.

La page reste un Server Component, utilise exclusivement le Design System existant et
ne crée ni index `/contenus`, ni entrée de navigation principale, ni nouveau média. Les
relations sont explicites, déterministes et résolues sans copie ni mutation des données
du module privé `gallery`. Aucun cycle d'import n'est introduit.

Les validations finales sont conformes : Prettier, ESLint, TypeScript, 12 fichiers
Vitest et 105 tests, build Next.js, 52 tests Playwright, contrôle des frontières
d'import et `git diff --check`. `pnpm audit` restitue uniquement l'exception de sécurité
temporaire déjà documentée pour `brace-expansion@1.1.16`, dépendance transitive de
développement introduite par `eslint → minimatch`, sans masquage ni nouvelle
vulnérabilité.

L'audit final a corrigé l'unique avertissement LCP reproduit par l'intégration continue
en préchargeant les deux aperçus de collection visibles au chargement de `/`, sans
changement visuel ou fonctionnel.

Le commit documentaire `0b13359` et le tag `sprint-015` ont précédé la correction LCP
`f734ef7`. Cette correction a été fusionnée par la Pull Request nº 14 dans le commit
`6bb96be`. La branche `sprint-015-artistic-content` a été supprimée localement et à
distance. Le tag publié `sprint-015` demeure inchangé comme référence historique. Le
tag `sprint-015-r1`, créé et poussé sur le commit `d43b8e2`, constitue la référence
officielle corrigée. Le Sprint 015 est définitivement clos.

Le Sprint 014 — David et sa démarche est **validé par le Product Owner, verrouillé sous
le tag `sprint-014`, fusionné dans `main` et définitivement clos**. Sa branche locale et
distante a été supprimée.

Les cinq incréments ont verrouillé le contrat, remplacé l'état structurel de `/david`
par une présentation éditoriale complète, intégré le contenu de travail et son accès aux
collections, puis validé le responsive, l'accessibilité et l'absence de régression.

La page `/david` remplit la responsabilité fonctionnelle de `V-PUB-02` au moyen d'une
structure éditoriale complète, d'un contenu de travail accepté par le Product Owner et
d'un accès explicite aux collections. Ce contenu permet de valider la fonctionnalité
sans prétendre constituer le corpus définitif ou officiellement approuvé par David.

La page demeure un Server Component, utilise exclusivement le Design System existant,
n'introduit aucun média fictif représentant David et reste conforme sur mobile,
tablette, bureau et avec un reflow équivalent à 200 %.

Les validations finales sont conformes : Prettier, ESLint, TypeScript, 11 fichiers
Vitest et 86 tests, build Next.js, 41 tests Playwright et `git diff --check`. `pnpm
audit` restitue uniquement l'exception de sécurité temporaire déjà documentée pour
`brace-expansion@1.1.16`, dépendance transitive de développement introduite par
`eslint → minimatch`, sans masquage ni nouvelle vulnérabilité.

Le Sprint 013 — Page d'accueil publique est **validé par le Product Owner, verrouillé
sous le tag `sprint-013`, fusionné dans `main` et définitivement clos**. Sa branche
locale et distante a été supprimée.

Les Incréments 1 à 6 ont remplacé l'état transitoire de `/` par la porte d'entrée publique contractuelle d'AZUREUM, ajouté le texte introductif validé, l'accès principal à `/collections`, les aperçus des deux collections publiques existantes et leurs médias locaux, puis vérifié le responsive, l'accessibilité, la résilience des médias et l'absence de régression.

La page reste un Server Component, lit sans mutation les données du module privé `gallery`, utilise exclusivement les composants officiels du Design System et n'introduit aucune nouvelle route, donnée, dépendance, logique métier ou décision de direction artistique.

L'Incrément 7 a réalisé l'audit final, les contrôles complets et la synchronisation
documentaire avant la validation Product Owner et le verrouillage du Sprint.

Les validations finales sont conformes : Prettier, ESLint, TypeScript, 11 fichiers Vitest et 85 tests, build Next.js, 36 tests Playwright et `git diff --check`. `pnpm audit` restitue uniquement l'exception de sécurité temporaire déjà documentée pour `brace-expansion@1.1.16`, dépendance transitive de développement introduite par `eslint → minimatch`, sans masquage ni nouvelle vulnérabilité.

Le Sprint 012 — Consultation enrichie d'une œuvre est **terminé, validé par le Product Owner, verrouillé sous le tag `sprint-012` et fusionné dans `main`**. Sa branche locale et distante a été supprimée.

Le Sprint 010 — Application Shell est **Validé, verrouillé et fusionné dans `main`**. Le tag `sprint-010` en constitue la référence historique. Le dépôt est propre et `main` est synchronisée avec `origin/main`.

Le Sprint 010 traduit les spécifications validées en structure applicative publique persistante, sans introduire de nouvelle décision produit, métier ou visuelle. Le shell public partagé, sa navigation responsive, ses routes structurelles minimales, son Footer et leurs validations transversales sont implémentés.

Le Sprint 009 — Implémentation du Design System V1 est **Validé, verrouillé et fusionné dans `main`**. Le tag `sprint-009` en constitue la référence historique.

Le Sprint 008-r1 — Consolidation du Design System V1 est **Validé, verrouillé et fusionné dans `main`**. Le tag `sprint-008-r1` en constitue la référence historique.

Le Sprint 008 — Design System a été validé, fusionné dans `main` et conservé sous le tag `sprint-008`. Son audit rétrospectif a justifié la révision contrôlée `sprint-008-r1`, sans déplacement du tag initial.

Le Sprint 007 — Fondations techniques est **Validé et verrouillé**. Il fournit le socle Next.js, les contrôles de qualité, les tests, l'intégration continue et l'environnement développeur nécessaires aux sprints d'implémentation.

Le Sprint 006 — Architecture technique de la V1 est **Validé et verrouillé**.

Le livrable `docs/specifications/technical-architecture-v1.md` est **Validé**. Il constitue la référence architecturale de la V1 et s'appuie exclusivement sur les références validées des Sprints 003-r1, 004-r1 et 005-r1.

La synthèse opérationnelle `docs/QUICK_REFERENCE.md` est **Validée** avec le Sprint 006. Elle facilite l'accès aux décisions sans remplacer les documents de référence.

La révision documentaire du Sprint 005 — `sprint-005-r1` est **Validée et verrouillée**.

Le verrouillage Git initial du Sprint 005 et le tag `sprint-005` sont conservés dans l'historique. Ils ont été réalisés avant la validation finale du Product Owner et ne constituent donc pas la ratification de la version corrigée.

Le livrable `docs/specifications/product-structure-v1.md` est **Validé** dans le cadre de cette révision. Le tag `sprint-005-r1` en constitue la référence historique.

Le Sprint 004 — Règles métier de la V1 est validé et verrouillé. Sa révision contrôlée `sprint-004-r1`, limitée aux collections, à l'archivage, à la suppression exceptionnelle et au modèle d'autorisations, est validée par le Product Owner.

Le Sprint 003 — Cahier des charges fonctionnel V1 a été validé puis verrouillé le 20 juillet 2026. Son historique initial reste conservé sous le tag `sprint-003`.

La révision contrôlée du cahier des charges intégrant la déclaration d'état à réception et le signalement d'anomalie dans le périmètre fonctionnel de la V1 est validée. Son tag de validation est `sprint-003-r1`.

Le livrable officiel demeure `docs/specifications/functional-specification-v1.md`.

La référence métier officielle de la V1 est `docs/specifications/business-rules-v1.md`.

## Produit

AZUREUM est une galerie d'art numérique premium consacrée durablement à David Prieur-Gelis.

La démarche artistique de David structure prioritairement le produit. L'acquisition des œuvres s'intègre à l'expérience sans la définir.

## V1 fonctionnelle

Le périmètre fonctionnel de la V1 est validé dans `docs/specifications/functional-specification-v1.md`, qui en constitue l'unique référence fonctionnelle.

## V2 envisagée

- moteur d'enchères inspiré du fonctionnement d'eBay ;
- offres manuelles ;
- enchère maximale automatisée ;
- prolongation anti-snipe ;
- historique des offres ;
- notifications ;
- délai de paiement contrôlé.

## Décisions validées

- reconstruction complète depuis une base blanche ;
- aucun ancien code réutilisé automatiquement ;
- aucune technologie installée avant validation de l'architecture ;
- les enchères sont hors périmètre de la V1 ;
- un seul Sprint peut être actif à la fois ;
- aucune implémentation avant validation des contrats correspondants ;
- le Sprint 001 est verrouillé ;
- la vision produit du Sprint 002 est validée ;
- le cahier des charges fonctionnel V1 du Sprint 003 a été validé dans sa version initiale ;
- le Sprint 003 est verrouillé ;
- la révision contrôlée `sprint-003-r1` est validée par le Product Owner ;
- la déclaration d'état à réception et le signalement d'anomalie font partie du périmètre fonctionnel de la V1 ;
- David Prieur-Gelis est l'artiste permanent et le sujet de la vision d'AZUREUM ;
- la fidélité à sa démarche artistique prime sur l'optimisation commerciale.
- le contenu métier du Sprint 004 est validé et son modèle métier est stabilisé ;
- les règles conditionnelles `RM-LEG-01` à `RM-LEG-05` devront faire l'objet d'une vérification juridique, fiscale et contractuelle adaptée avant toute mise en exploitation d'AZUREUM.
- toute œuvre appartient à exactement une collection ;
- le rattachement d'une œuvre à sa collection d'origine devient définitif dès sa première publication ;
- l'archivage d'une œuvre ne supprime ni son identité ni son historique ;
- la suppression définitive d'une œuvre est exceptionnelle et relève du rôle Administrateur ;
- les rôles Artiste et Administrateur portent les responsabilités opérationnelles et peuvent être cumulés par un même utilisateur ;
- l'identité artistique, la qualité d'auteur, la propriété initiale et la qualité de vendeur demeurent exclusivement attachées à David Prieur-Gelis.
- la structure fonctionnelle et les parcours de la V1 sont validés dans le cadre de la révision `sprint-005-r1` ;
- la découverte publique est éditoriale et structurée par les collections, sans recherche ni filtrage exigés en V1 ;
- les espaces privés ne participent pas à la navigation publique.
- l'architecture technique de la V1 est validée dans le cadre du Sprint 006 ;
- les identifiants publics reposent sur des slugs immuables dès la première publication de la ressource concernée ;
- les évolutions éditoriales, l'archivage ou le retrait de publication ne permettent ni de modifier ni de réattribuer un slug public ;
- la stabilité d'une URL publique désigne l'immutabilité de son chemin et ne garantit pas la disponibilité perpétuelle de la ressource ;
- `RES-01`, `RES-03` et `RES-04` restent à lever avant leurs échéances respectives sans remettre en cause la validation architecturale.
- le Sprint 007 et ses fondations techniques sont validés et verrouillés ;
- le Sprint 008 définit la direction artistique et les fondations du Design System V1 ;
- la révision `sprint-008-r1` est limitée à la consolidation de ce contrat avant son implémentation.
- le Sprint 011 utilise exclusivement un jeu local et temporaire de deux collections et six œuvres fictives ;
- ces données de démonstration ne définissent ni le futur modèle de persistance, ni le contenu artistique officiel d’AZUREUM ;
- la collection constitue l’accès public structurant aux œuvres ;
- une œuvre publique reste consultée dans le contexte de sa collection d’origine ;
- les routes inconnues ou les associations incohérentes entre une collection et une œuvre produisent un état absent sans donnée de remplacement ;
- aucune information commerciale, acquisition, recherche, filtre ou tri interactif n’est introduit par le Sprint 011.

## Implémentation

Les cinq jalons du socle sont préparés : Next.js App Router, TypeScript, pnpm, ESLint, Prettier, structure modulaire minimale, Vitest, Playwright, GitHub Actions, variables d'environnement documentées, Supabase local et guide développeur, sans logique métier ni interface produit définitive.

Le runtime Node.js `24.18.0` et pnpm `10.34.5` sont validés par une installation figée, le lint, la vérification TypeScript et le build. L'audit de sécurité du Sprint 009 avait conservé temporairement `brace-expansion@1.1.16`, dépendance transitive de l'outillage ESLint concernée par `GHSA-mh99-v99m-4gvg` / `CVE-2026-14257`. La révision contrôlée `sprint-016-r1` résout cette occurrence vers `1.1.17` sans masquage ni override ; `pnpm audit` retourne désormais zéro vulnérabilité.

Les scripts de formatage et de contrôle statique sont opérationnels. Les frontières `modules`, `shared`, `server`, `styles` et `test` sont documentées sans implémentation prématurée.

Vitest exécute un premier test de contrat du socle sous Node.js, sans environnement navigateur ni bibliothèque de composants prématurée.

Playwright vérifie localement la disponibilité du socle avec Chromium uniquement. Le workflow distant reproduisant installation figée, contrôles, build et test de bout en bout a terminé avec succès sur le commit `98f33d5`.

La CLI Supabase `2.109.1`, sa configuration locale et le répertoire de migrations sont présents. Docker Desktop n'étant pas installé sur la machine de validation, le cycle réel de démarrage et d'arrêt Supabase reste à vérifier avant la clôture définitive.

Le Sprint 011 implémente le premier domaine fonctionnel public d’AZUREUM au moyen d’un module de galerie isolé. Le modèle temporaire, les données fictives et les fonctions de résolution locale sont confinés au domaine de la galerie.

La page `/collections` présente exactement deux collections de démonstration avec leur œuvre d’aperçu, leur titre, leur intention et leur accès public.

Chaque page de collection présente exactement trois œuvres rattachées à cette collection. Chaque fiche d’œuvre conserve son ratio média, présente ses informations artistiques temporaires et permet de revenir explicitement à sa collection d’origine.

Les collections inconnues, les œuvres inconnues et les associations collection–œuvre incohérentes utilisent l’état absent de l’App Router. L’ensemble du parcours est validé sur mobile, tablette et bureau, au clavier, sans débordement horizontal et avec un reflow compatible avec un zoom à 200 %.

Le Sprint 012 enrichit la fiche publique d'une œuvre sans modifier les routes ni les relations introduites par le Sprint 011. Les données descriptives restent locales, fictives, typées et immuables. La fiche conserve un rendu serveur, une structure sémantique, un ordre de lecture stable et l'accès aux informations essentielles lorsque le média est indisponible.

Le Sprint 013 remplace l'état transitoire de `/` par la page d'accueil publique contractuelle d'AZUREUM. Elle introduit l'univers de David, propose l'accès principal à `/collections`, présente les deux collections publiques existantes et conserve un rendu serveur fondé exclusivement sur le Design System et les données immuables du module privé `gallery`.

Le Sprint 014 remplace l'état structurel de `/david` par la référence fonctionnelle V1
de la présentation de David et de sa démarche. Le contenu éditorial intégré reste un
contenu de travail accepté par le Product Owner. Les contenus et médias officiels seront
recueillis ultérieurement auprès de David avant toute mise en production ou remise
officielle.

## Base de données

Aucune base de données déployée. Le modèle conceptuel et l'architecture PostgreSQL cible sont validés dans le livrable du Sprint 006 ; aucun schéma physique ni aucune migration ne sont encore créés.

## Prochaine étape

Publier le verrouillage documentaire du Sprint 018 sur sa branche, puis procéder à son
intégration conformément à `docs/GOVERNANCE.md`. Aucun futur Sprint n'est encore ouvert
ou contractuellement défini.
