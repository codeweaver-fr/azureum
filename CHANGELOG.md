# Changelog

Toutes les modifications importantes du projet AZUREUM seront documentées dans ce fichier.

## Non publié

### Sprint 007 — Fondations techniques

- ouverture du Sprint 007 sur la branche `sprint-007-technical-foundations` ;
- définition du contrat de Sprint, de son périmètre strictement technique et de ses critères d'acceptation ;
- interdiction explicite d'introduire une logique métier ou de modifier les contrats validés des Sprints 003-r1 à 006.
- adoption de pnpm comme gestionnaire de paquets unique avant la création du socle applicatif.
- choix de Node.js 24 LTS comme runtime de référence et fixation de pnpm `10.34.5` compatible avec Vercel ;
- alignement des dépendances sur leurs dernières versions stables compatibles, sans forcer TypeScript 7 ni ESLint 10 au-delà des plages déclarées par l'écosystème Next.js.
- génération du premier jalon Next.js App Router et TypeScript, sans logique métier ni interface produit définitive ;
- validation reproductible sous Node.js `24.18.0` et pnpm `10.34.5` : installation figée, lint, vérification TypeScript, build et audit réussis, sans modification du lockfile ni vulnérabilité connue.

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
