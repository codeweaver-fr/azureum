# État du projet AZUREUM

## Phase actuelle

Construction du produit — Sprint 012 définitivement clos ; aucun Sprint actif.

## Sprint actif

Aucun Sprint n'est actuellement ouvert. Le Sprint 012 — Consultation enrichie d'une œuvre est **terminé, validé par le Product Owner, verrouillé sous le tag `sprint-012` et fusionné dans `main`**.

Les Incréments 1 à 5 enrichissent le modèle local et la fiche publique d'une œuvre avec son année, sa technique, son support, ses dimensions physiques, une profondeur optionnelle et une description courte distincte du texte artistique.

L'Incrément 6 a réalisé l'audit final et la synchronisation documentaire. Les corrections R1 ont rétabli l'ordre contractuel de lecture, supprimé le déplacement visuel du lien de retour, remplacé les valeurs visuelles locales par les tokens officiels, couvert les œuvres avec et sans profondeur, renforcé les validations transversales et préchargé uniquement l'image principale des listes publiques concernées afin de supprimer l'avertissement LCP de Next.js.

Les validations finales sont conformes : formatage, ESLint, TypeScript, 11 fichiers Vitest et 79 tests, build Next.js, 29 tests Playwright et `git diff --check`. Aucun bloqueur indispensable ne reste ouvert.

Le Sprint 012 a été validé par le Product Owner, verrouillé sous le tag `sprint-012`, fusionné dans `main`, puis sa branche locale et distante a été supprimée. Le dépôt est propre et `main` est synchronisée avec `origin/main`.

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

AZUREUM est une galerie d'art numérique premium consacrée durablement à David Prieur-Gélis.

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
- David Prieur-Gélis est l'artiste permanent et le sujet de la vision d'AZUREUM ;
- la fidélité à sa démarche artistique prime sur l'optimisation commerciale.
- le contenu métier du Sprint 004 est validé et son modèle métier est stabilisé ;
- les règles conditionnelles `RM-LEG-01` à `RM-LEG-05` devront faire l'objet d'une vérification juridique, fiscale et contractuelle adaptée avant toute mise en exploitation d'AZUREUM.
- toute œuvre appartient à exactement une collection ;
- le rattachement d'une œuvre à sa collection d'origine devient définitif dès sa première publication ;
- l'archivage d'une œuvre ne supprime ni son identité ni son historique ;
- la suppression définitive d'une œuvre est exceptionnelle et relève du rôle Administrateur ;
- les rôles Artiste et Administrateur portent les responsabilités opérationnelles et peuvent être cumulés par un même utilisateur ;
- l'identité artistique, la qualité d'auteur, la propriété initiale et la qualité de vendeur demeurent exclusivement attachées à David Prieur-Gélis.
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

## Base de données

Aucune base de données déployée. Le modèle conceptuel et l'architecture PostgreSQL cible sont validés dans le livrable du Sprint 006 ; aucun schéma physique ni aucune migration ne sont encore créés.

## Prochaine étape

Définir puis faire valider le contrat du Sprint 013 avant toute nouvelle implémentation. Aucun Sprint 013 n'est encore ouvert.
