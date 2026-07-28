# Changelog

Toutes les modifications importantes du projet AZUREUM seront documentées dans ce fichier.

## Non publié

### Sprint 013 — Page d'accueil publique

- remplacement de l'état transitoire de `/` par la porte d'entrée publique contractuelle d'AZUREUM ;
- ajout du texte introductif temporaire validé et maintien d'un unique titre principal ;
- ajout du lien principal « Découvrir les collections » vers `/collections` ;
- présentation des deux collections publiques de démonstration existantes, sans statut de mise en avant ni lien direct vers une œuvre ;
- réutilisation unique de `study-01` comme média principal et aperçu de `collection-alpha`, avec `composition-a` pour `collection-beta` ;
- lecture sans mutation des données du module privé `gallery`, maintien du rendu serveur et utilisation exclusive des composants officiels du Design System ;
- validation responsive sur mobile, tablette et bureau, sans débordement horizontal et avec un reflow compatible avec un zoom à 200 % ;
- validation de la navigation clavier, du focus visible, de la sémantique et de l'accessibilité de la page ;
- vérification de la résilience des aperçus et du maintien de l'accès aux collections lorsque leurs médias sont indisponibles ;
- couverture de non-régression du shell public, de la galerie et de `/design-system` ;
- validation finale de Prettier, ESLint, TypeScript, 11 fichiers Vitest et 85 tests, build Next.js, 36 tests Playwright et `git diff --check` ;
- maintien explicite de l'exception de sécurité temporaire déjà documentée pour `brace-expansion@1.1.16`, dépendance transitive de développement introduite par `eslint → minimatch`, sans masquage ni nouvelle vulnérabilité ;
- audit final et verrouillage Git en attente de la validation Product Owner finale.

### Sprint 012 — Consultation enrichie d'une œuvre

- enrichissement des données locales de démonstration avec l'année, la technique, le support et les dimensions physiques des œuvres ;
- prise en charge explicite des dimensions avec ou sans profondeur ;
- ajout d'une description courte distincte du texte artistique ;
- enrichissement de la fiche publique d'une œuvre sans modification de ses routes ni de sa relation avec sa collection d'origine ;
- structuration sémantique des caractéristiques matérielles au moyen d'une liste de descriptions ;
- maintien d'un rendu serveur et utilisation exclusive des primitives et tokens officiels du Design System ;
- validation mobile, tablette et bureau, sans débordement horizontal et avec un reflow compatible avec un zoom à 200 % ;
- maintien des informations descriptives essentielles lorsque le média principal est indisponible ;
- renforcement des tests Vitest et Playwright relatifs à la sémantique, à l'ordre de lecture, à la profondeur optionnelle, au responsive et à l'échec du média ;
- corrections R1 de l'ordre contractuel de la fiche, du positionnement du lien de retour, des valeurs visuelles locales et de la couverture transversale ;
- préchargement limité à l'image principale des listes publiques concernées afin de supprimer l'avertissement LCP de Next.js, sans changement visuel ;
- audit final conforme, sans dépendance, donnée commerciale, API, persistance ou fonctionnalité ultérieure introduite ;
- Sprint validé par le Product Owner, verrouillé sous le tag `sprint-012`, fusionné dans `main`, puis clôturé après suppression de sa branche locale et distante et vérification de la synchronisation du dépôt.

### Sprint 011 — Galerie publique

- implémentation d'un jeu local, typé, fini et explicitement temporaire de deux collections et six œuvres fictives ;
- ajout du modèle de démonstration de la galerie, de ses fonctions de résolution locale et de ses relations, sans base de données, API, variable d'environnement ni appel réseau ;
- remplacement du contenu structurel de `/collections` par la liste publique des collections de démonstration ;
- présentation de chaque collection avec une œuvre d'aperçu, son titre, une courte intention et un accès vers sa route publique stable ;
- implémentation des pages dynamiques `/collections/[collectionSlug]` présentant exactement trois œuvres appartenant exclusivement à la collection consultée ;
- implémentation des fiches publiques d'œuvre dans le contexte de leur collection d'origine, avec conservation du ratio du média via `ArtworkImage` ;
- ajout d'un retour explicite de chaque œuvre vers sa collection d'origine ;
- traitement des collections inconnues, des œuvres inconnues et des associations incohérentes entre collection et œuvre au moyen de l'état absent de l'App Router ;
- maintien explicite hors périmètre de toute persistance, authentification, acquisition, gestion éditoriale, contenu artistique définitif ou extension du Design System ;
- validation contractuelle du modèle temporaire, de ses relations et des routes dynamiques au moyen de Vitest ;
- validation du parcours complet Collections → Collection → Œuvre → Collection, des routes publiques, du responsive et de l'accessibilité au moyen de Playwright ;
- validation de 11 fichiers de tests et de 71 tests Vitest ;
- validation de 24 tests Playwright ;
- validation d'ESLint, TypeScript, du build Next.js et de la navigation publique sans régression ;
- validation de la compatibilité mobile, tablette et bureau, de l'absence de débordement horizontal, du reflow à 200 %, de la navigation clavier, du focus visible et des noms accessibles ;
- synchronisation de `PROJECT_STATE.md`, verrouillage sous le tag `sprint-011` et fusion dans `main`.

### Sprint 010 — Application Shell

- implémentation du layout public partagé avec Header, Main, Footer et lien d'évitement ;
- ajout de la navigation publique desktop et responsive vers Collections, David et Évolution dans le temps ;
- matérialisation des routes publiques structurelles validées, sans contenu métier ni route privée ou juridique anticipée ;
- maintien de `/design-system` comme référence technique interne, hors de la navigation publique et sans mécanisme de protection anticipé ;
- validation du Footer minimal sans faux lien, emplacement vide ni contenu légal non validé ;
- renforcement des contrôles de landmarks, hiérarchie des titres, focus, navigation clavier, `aria-current`, reflow et absence de débordement horizontal ;
- validation des routes `/` et `/design-system` sans erreur ni avertissement navigateur inattendu ;
- audit final conforme sur Prettier, ESLint, TypeScript, Vitest, build Next.js, Playwright et `git diff --check` ;
- maintien explicite de l'exception de sécurité temporaire déjà documentée pour `brace-expansion@1.1.16`, dépendance transitive de l'outillage ESLint, sans masquage de `pnpm audit`.

### Préparation du Sprint 010 — Application Shell

- clarification de `RM-ŒUV-13` : une œuvre appartient à une seule collection pendant tout son cycle de vie et son rattachement à sa collection d'origine devient définitif dès sa première publication ;
- clarification de `INV-14` afin que l'archivage ou l'évolution de la présentation ne permette ni de rompre ni de modifier ce rattachement ;
- ajout de `DEC-18`, qui fonde la stabilité des URL publiques sur des slugs immuables après première publication ;
- ajout de la section 8.6 à l'architecture technique afin de distinguer l'identifiant technique stable, le slug public et les données éditoriales ;
- interdiction de modifier, réattribuer ou réutiliser le slug public d'une collection, d'une œuvre ou d'un contenu artistique après sa première publication ;
- clarification du fait que la stabilité d'une URL concerne l'immutabilité de son chemin sans garantir l'accessibilité perpétuelle d'une ressource archivée ou retirée de la publication.

### Sprint 009 — Implémentation du Design System V1

- validation finale du Sprint 009 par le Product Owner avec exception de sécurité temporaire explicitement acceptée ;
- correction compatible de `brace-expansion@5.0.7` vers `5.0.8` dans le lockfile ;
- acceptation temporaire et documentée de `brace-expansion@1.1.16`, dépendance transitive de développement concernée par `GHSA-mh99-v99m-4gvg` / `CVE-2026-14257`, sans masquage de `pnpm audit` ni override incompatible ;
- validation Product Owner de l’incrément 7 après création de la référence technique `/design-system`, séparation de la route `/` et ajout des validations responsive, clavier, médias et console ;
- validation visuelle desktop, tablette et mobile sans débordement ; l’indicateur de développement Next.js et la densité de la matrice d’interactions ne constituent aucune réserve ;
- validation Product Owner de l’incrément 6 après formalisation de `CMP-07` et `CMP-08`, implémentation de `ArtworkImage` et `Icon`, ajout des tests contractuels et de leur démonstration temporaire ;
- conservation de la taille officielle `large` de 24 pixels pour l’icône du placeholder : l’observation visuelle ne justifie ni valeur locale ni nouveau token ;
- maintien de la configuration des sources distantes hors du composant, sans `remotePatterns` fictif ;
- ouverture du Sprint 009 à partir de la référence documentaire `sprint-008-r1` ;
- création du contrat d’implémentation des tokens, fondations CSS et composants fondamentaux ;
- maintien explicite hors périmètre des fonctionnalités métier et des interfaces produit définitives.
- validation du contrat par le Product Owner et adoption d’une implémentation incrémentale avec revue entre chaque groupe de fondations.
- validation de l’incrément 1 : polices, ombres, courbe d’animation, réduction globale des mouvements, convention CSS, sélection et traitement des points de rupture ;
- intégration de ces décisions au Design System V1 avant toute ligne de CSS ou de React.
- validation de l’incrément 2 : tokens CSS, reset, styles globaux, accessibilité, médias et chargement des typographies avec `next/font` ;
- ajout d’un test de contrat des fondations CSS, sans création de composant React.
- conservation du rendu typographique natif du navigateur plutôt que l'ajout de propriétés de lissage non standardisées.
- validation de l’incrément 3 : primitives génériques Conteneur, Empilement et Grille, extensions responsive et tests de contrat associés ;
- interdiction des styles inline dans l’API de ces primitives afin de préserver l’usage des Design Tokens.
- adoption d’une API sémantique stable pour les espacements, reliée explicitement aux tokens `DT-03` sans modifier leurs valeurs.
- validation de l’incrément 4 : primitives typographiques Texte et Titre, séparation du niveau HTML et de la variante visuelle, tests de contrat associés ;
- formalisation dans `CMP-04` des éléments HTML autorisés, des variantes, des graisses et de la responsabilité exclusive du Conteneur pour les largeurs de lecture.
- validation de l’incrément 5 : primitives d’interaction Bouton et Lien, matrices d’états, tailles, chargement accessible et tests de contrat associés ;
- adoption de la matrice C pour la variante destructive et promotion contrôlée de ses tokens après expérimentation isolée.
- confirmation de l’héritage typographique contextuel du composant Lien, la typographie fonctionnelle Inter restant sous la responsabilité des conteneurs de navigation et d’interface.

### Révision Sprint 008-r1 — Validée, verrouillée et fusionnée

- autorisation explicite par le Product Owner d'une révision corrective fermée du Design System V1 ;
- correction des contradictions documentaires relatives aux familles de couleurs, aux tokens sémantiques et aux conventions techniques ;
- vérification et documentation des associations colorimétriques autorisées sans modification de la palette ;
- identification explicite des valeurs d'ombre et des courbes d'animation restant à définir pendant le Sprint 009, sans décision inventée ;
- synchronisation des critères d'acceptation et des documents de gouvernance avec l'état réel du projet.
- audit ciblé conforme et validation documentaire prononcée par le Product Owner le 22 juillet 2026, sans réserve bloquante.
- verrouillage sous le tag `sprint-008-r1`, puis fusion contrôlée dans `main` avant la reprise du Sprint 009.

### Sprint 008 — Design System

- définition et validation des fondations visuelles et ergonomiques de la V1 ;
- formalisation de l'identité visuelle, des Design Tokens, de la mise en page, du responsive, de l'accessibilité et des composants fondamentaux ;
- validation de la direction graphique du logo sans validation automatique de son master de production ;
- fusion dans `main` et conservation de la validation initiale sous le tag `sprint-008` ;
- ouverture ultérieure de la révision corrective `sprint-008-r1` à la suite d'un audit rétrospectif.

### Sprint 007 — Fondations techniques

- ouverture du Sprint 007 sur la branche `sprint-007-technical-foundations` ;
- définition du contrat de Sprint, de son périmètre strictement technique et de ses critères d'acceptation ;
- interdiction explicite d'introduire une logique métier ou de modifier les contrats validés des Sprints 003-r1 à 006.
- adoption de pnpm comme gestionnaire de paquets unique avant la création du socle applicatif.
- choix de Node.js 24 LTS comme runtime de référence et fixation de pnpm `10.34.5` compatible avec Vercel ;
- alignement des dépendances sur leurs dernières versions stables compatibles, sans forcer TypeScript 7 ni ESLint 10 au-delà des plages déclarées par l'écosystème Next.js.
- génération du premier jalon Next.js App Router et TypeScript, sans logique métier ni interface produit définitive ;
- validation reproductible sous Node.js `24.18.0` et pnpm `10.34.5` : installation figée, lint, vérification TypeScript, build et audit réussis, sans modification du lockfile ni vulnérabilité connue.
- installation de Prettier `3.9.6` et harmonisation avec ESLint au moyen de `eslint-config-prettier` `10.1.8` ;
- ajout des scripts `format`, `format:check` et `check` pour les contrôles statiques reproductibles ;
- ajout de `.editorconfig` et limitation de l'exclusion Prettier aux documents contractuels, afin de contrôler également les README techniques ;
- normalisation des fins de ligne avec `.gitattributes` et ajout d'une configuration VS Code partagée limitée aux réglages et extensions justifiés par le socle ;
- création et documentation des frontières minimales `modules`, `shared`, `server`, `styles` et `test`, sans logique métier ni dépendance d'interface supplémentaire.
- installation de Vitest `4.1.10`, configuration de l'environnement Node.js et alignement de l'alias `@` sur `src/` ;
- ajout des scripts `test` et `test:watch`, intégration des tests unitaires dans `check` et création d'un premier test représentatif du contrat technique du projet.
- installation de Playwright `1.61.1` avec Chromium uniquement et ajout d'un test de disponibilité du socle ;
- création d'un workflow GitHub Actions minimal exécutant installation figée, contrôles, build et test de bout en bout lors des pushes et pull requests.
- validation distante réussie du workflow de qualité sur le commit `98f33d5` ;
- installation de la CLI Supabase `2.109.1`, initialisation de la configuration locale et création du répertoire de migrations sans contenu métier ;
- ajout des commandes d'exploitation Supabase, d'un modèle d'environnement sans secret et du guide complet `docs/DEVELOPMENT.md` ;
- mise à jour du README pour refléter l'entrée du projet dans sa phase de construction.

### Sprint 006 — Architecture technique de la V1

- ouverture du Sprint 006 ;
- création de la fiche courte `docs/sprints/sprint-006-technical-architecture.md` ;
- création de la première version complète de `docs/specifications/technical-architecture-v1.md` ;
- création de `docs/QUICK_REFERENCE.md` comme synthèse opérationnelle non normative ;
- ajout de cette référence rapide au parcours documentaire du `README.md` ;
- motivation explicite des décisions techniques structurantes ;
- vérification des dépendances technologiques dans leurs documentations officielles ;
- identification explicite des réserves juridiques, fiscales, contractuelles et opérationnelles restant à fermer ;
- adoption d'objectifs RPO et RTO différenciés selon la criticité des données ;
- fixation d'un objectif interne de disponibilité de 99,5 % par mois ;
- constat du besoin de PITR ou d'un mécanisme équivalent pour les données transactionnelles critiques ;
- exigence d'une copie indépendante pour les fichiers irremplaçables ;
- adoption de CSS moderne et Motion comme socle d'animation proportionné pour la V1 ;
- exclusion des moteurs 3D et WebGL en l'absence de capacité fonctionnelle correspondante ;
- prise en compte architecturale de la réduction des mouvements et du budget JavaScript des animations.
- définition de Stripe Connect avec paiements directs comme architecture cible sous réserve de validation juridique, fiscale et contractuelle ;
- sélection de Brevo comme architecture cible sous réserve pour les e-mails transactionnels, derrière un adaptateur AZUREUM ;
- validation de la politique différenciée des fichiers, de leur quarantaine, de leur versionnement et de la copie indépendante des éléments irremplaçables ;
- formalisation de la matrice provisoire de conservation et des réserves de conformité restant à lever avant les échéances concernées.
- audit documentaire global conforme, sans contradiction ni référence orpheline ;
- validation du livrable et acceptation explicite des réserves `RES-01`, `RES-03` et `RES-04` par le Product Owner ;
- verrouillage documentaire du Sprint 006 et autorisation d'ouverture du Sprint 007.

### Gouvernance — Procédure de clôture à partir du Sprint 006

- adoption d'une validation unique du Product Owner après la revue finale ;
- autorisation globale des opérations de verrouillage Git couvertes par cette validation ;
- suppression des demandes d'autorisation intermédiaires entre le staging, les commits, le tag, le push, la fusion et le nettoyage de branche ;
- maintien d'un arrêt obligatoire en cas d'écart de périmètre, conflit, contrôle en échec, historique divergent, tag existant à déplacer ou opération destructive ;
- maintien de l'interdiction des réécritures d'historique sans autorisation spécifique.

### Sprint 005 — Verrouillage initial

- création du livrable `docs/specifications/product-structure-v1.md` et de la fiche du Sprint ;
- organisation du produit en espaces, vues, parcours et états perceptibles ;
- création du commit et du tag `sprint-005`, puis intégration dans `main` ;
- verrouillage Git réalisé avant la validation finale du Product Owner ;
- conservation du tag `sprint-005` comme référence historique, sans déplacement.

### Révision Sprint 005-r1 — Validée et verrouillée

- préparation d'une révision documentaire après audit complémentaire ;
- correction de la provenance métier du concept de collection ;
- alignement de `PAR-01` avec `V-PUB-02` ;
- remplacement d'une formulation introduisant implicitement une recherche dans `V-ADM-02` ;
- renforcement de la traçabilité vers `H-06`, `H-07`, `RM-ŒUV-13`, `RM-ŒUV-14`, `INV-09` et `INV-14` ;
- validation finale du Product Owner prononcée sans réserve ;
- premier commit de révision créé sous la référence `3cea85f` ;
- second commit de métadonnées créé sous la référence `395b300` ;
- création du tag `sprint-005-r1` comme nouvelle référence documentaire de la structure fonctionnelle de la V1.

### Révision contrôlée du Sprint 004

- validation par le Product Owner de la révision documentaire `sprint-004-r1` ;
- ajout des collections obligatoires avec une cardinalité d'une collection par œuvre ;
- distinction entre archivage et suppression définitive exceptionnelle ;
- formalisation des rôles Artiste et Administrateur et de leur cumul possible ;
- séparation entre responsabilités opérationnelles et qualités artistiques ou juridiques exclusivement attachées à David Prieur-Gélis ;
- conservation de la validation initiale du Sprint 004 et de son tag `sprint-004`.

### Sprint 004 — Règles métier de la V1

- validation par le Product Owner du modèle métier de la V1 ;
- ajout de la spécification métier officielle `docs/specifications/business-rules-v1.md` ;
- formalisation des règles métier, invariants, décisions structurantes et interprétations fonctionnelles applicables à la V1 ;
- acceptation explicite de la réserve attachée aux règles conditionnelles `RM-LEG-01` à `RM-LEG-05`, à vérifier avant toute mise en exploitation ;
- verrouillage documentaire du Sprint 004.

### Révision contrôlée du Sprint 003

- validation par le Product Owner de la révision documentaire `sprint-003-r1` ;
- intégration au périmètre fonctionnel de la V1 de la déclaration d'état à réception et du signalement d'anomalie ;
- conservation de la validation initiale du Sprint 003 et de son tag `sprint-003`.

### Ajouté

- fondation documentaire ;
- gouvernance ;
- roadmap initiale ;
- glossaire métier ;
- Sprint 001 ;
- vision produit validée du Sprint 002.

### Modifié

- synchronisation de l'état du projet avec la clôture du Sprint 002 ;
- remplacement de la vision initiale par le livrable officiel du Sprint 002.

### Corrigé

- suppression de marqueurs PowerShell présents dans plusieurs documents de fondation ;
- correction des références devenues obsolètes après le déplacement de la vision produit.
