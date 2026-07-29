# État du projet AZUREUM

## Phase actuelle

Construction du produit — entre deux Sprints après la clôture du Sprint 014.

## Sprint actif

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

Le runtime Node.js `24.18.0` et pnpm `10.34.5` sont validés par une installation figée, le lint, la vérification TypeScript et le build. L’audit de sécurité du Sprint 009 conserve temporairement `brace-expansion@1.1.16`, dépendance transitive de l’outillage ESLint concernée par `GHSA-mh99-v99m-4gvg` / `CVE-2026-14257`. Cette exception n’est pas masquée et doit être réévaluée lors des mises à jour de la chaîne ESLint/Next.js.

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

Définir et valider le contrat du prochain Sprint conformément à
`docs/GOVERNANCE.md`. Aucun Sprint suivant n'est actuellement ouvert.
