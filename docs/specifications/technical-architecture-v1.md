# Architecture technique — AZUREUM V1

| Élément | Valeur |
|---|---|
| Document | Architecture technique de la V1 |
| Sprint d'origine | Sprint 006 |
| Statut documentaire | Validé |
| Version | 1.0 |
| Date de préparation | 2026-07-21 |
| Références amont | Sprints 003-r1, 004-r1 et 005-r1 |

## Référentiel des identifiants

| Préfixe | Signification | Exemple |
|---|---|---|
| `PA` | Principe architectural | `PA-03` |
| `DEC` | Décision technique structurante | `DEC-04` |
| `CMP` | Composant logique | `CMP-ACQ` |
| `DAT` | Décision relative aux données | `DAT-05` |
| `INT` | Intégration externe | `INT-PAY` |
| `SEC` | Mesure de sécurité architecturale | `SEC-06` |
| `OPS` | Exploitation et résilience | `OPS-04` |
| `TST` | Contrôle ou famille de tests | `TST-03` |
| `RES` | Réserve ou décision restant à valider | `RES-04` |

Les identifiants hérités (`CAP`, `CU`, `EF`, `ENF`, `CT`, `H`, `RM`, `INV`, `PS`, `ESP`, `V`, `PAR`) conservent la signification définie dans leur document d'origine.

## 1. Objet

Le présent document définit l'architecture technique cible d'AZUREUM V1. Il traduit les contrats fonctionnels, métier et structurels validés en décisions de construction, de sécurité, d'exploitation et de vérification.

Il ne modifie aucun contrat amont. Une incompatibilité détectée doit être signalée au Product Owner et traitée par gouvernance avant toute implémentation.

## 2. Sources et méthode de décision

### 2.1 Références internes

- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/GOVERNANCE.md` ;
- `docs/glossary/GLOSSARY.md`.

Le document dérivé `docs/QUICK_REFERENCE.md` facilite le travail quotidien. Il n'est pas une source normative et doit toujours renvoyer vers les spécifications souveraines.

### 2.2 Références techniques officielles vérifiées

- [Next.js — App Router et démarrage](https://nextjs.org/docs/app/getting-started) ;
- [Next.js — Server Components et Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) ;
- [Next.js — modes de déploiement](https://nextjs.org/docs/app/getting-started/deploying) ;
- [Motion for React — documentation officielle](https://motion.dev/docs/react) ;
- [Motion for React — réduction des mouvements](https://motion.dev/docs/react-use-reduced-motion) ;
- [Motion for React — chargement optimisé](https://motion.dev/docs/react-lazy-motion) ;
- [Supabase — base PostgreSQL](https://supabase.com/docs/guides/database/overview) ;
- [Supabase — sécurité des API et RLS](https://supabase.com/docs/guides/api/securing-your-api) ;
- [Supabase — authentification côté serveur](https://supabase.com/docs/guides/auth/server-side) ;
- [Supabase — stockage et contrôle d'accès](https://supabase.com/docs/guides/storage/security/access-control) ;
- [Supabase — buckets, formats et limites de fichiers](https://supabase.com/docs/guides/storage/buckets/creating-buckets) ;
- [Supabase — développement local et migrations](https://supabase.com/docs/guides/local-development/overview) ;
- [Supabase — sauvegardes et restauration ponctuelle](https://supabase.com/docs/guides/platform/backups) ;
- [Supabase — objectifs de reprise des sauvegardes](https://supabase.com/features/database-backups) ;
- [Supabase — téléchargement des objets Storage](https://supabase.com/docs/guides/storage/management/download-objects) ;
- [Stripe Connect — types de paiements](https://docs.stripe.com/connect/charges) ;
- [Stripe Connect — vendeur contractuel apparent](https://docs.stripe.com/connect/merchant-of-record) ;
- [Stripe — webhooks](https://docs.stripe.com/webhooks) ;
- [DGCCRF — règles du commerce électronique entre professionnels et consommateurs](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/e-commerce-les-regles-entre-professionnels-et-consommateurs) ;
- [DGCCRF — obligations relatives à la livraison](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/livraison-quelles-sont-les-obligations-du-professionnel-et-les-recours) ;
- [Service Public — conservation des documents d'entreprise](https://entreprendre.service-public.fr/vosdroits/F10029) ;
- [CNIL — durées de conservation des données](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) ;
- [CNIL — obligations relatives aux sous-traitants](https://cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) ;
- [CNIL — recommandation relative à la journalisation](https://www.cnil.fr/fr/la-cnil-publie-une-recommandation-relative-aux-mesures-de-journalisation) ;
- [Brevo — événements transactionnels](https://developers.brevo.com/docs/transactional-webhooks) ;
- [Brevo — sécurisation des appels webhook](https://developers.brevo.com/docs/secured-webhooks) ;
- [Brevo — authentification du domaine d'expédition](https://developers.brevo.com/docs/domain-authentication-and-verification) ;
- [Brevo — authentification DKIM et DMARC du domaine](https://help.brevo.com/hc/fr/articles/12163873383186-Authentifier-votre-domaine-dans-Brevo-code-Brevo-enregistrement-DKIM-enregistrement-DMARC) ;
- [Vercel — fonctions](https://vercel.com/docs/functions) ;
- [Vercel — tâches planifiées](https://vercel.com/docs/cron-jobs) ;
- [Vercel — offres et niveaux de service](https://vercel.com/pricing) ;
- [GitHub — mises à jour de dépendances avec Dependabot](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates) ;
- [Playwright — tests de bout en bout](https://playwright.dev/docs/intro) ;
- [Vitest — tests](https://vitest.dev/guide/).

Les versions exactes des dépendances seront figées par le fichier de verrouillage lors du Sprint de fondations techniques. La validation du présent document porte sur les choix structurants, pas sur un numéro de version futur.

### 2.3 Statuts de décision

| Statut | Signification |
|---|---|
| Décision validée | Décision définitivement retenue dans le Sprint 006 et ne dépendant plus d'un élément externe identifié. |
| Architecture cible sous réserve | Décision retenue sur le plan technique, dont la mise en œuvre reste conditionnée à une validation extérieure explicitement identifiée. |

Les questions encore ouvertes ne constituent pas un troisième statut de décision : elles sont enregistrées séparément sous un identifiant `RES` avec leur périmètre, leur échéance et la validation attendue.

## 3. Contraintes héritées

L'architecture doit notamment préserver :

- la primauté de l'expérience artistique sur l'acquisition ;
- une V1 consacrée exclusivement à David Prieur-Gélis ;
- les œuvres uniques et éditions limitées, avec identité propre de chaque exemplaire ;
- l'appartenance obligatoire de toute œuvre à exactement une collection ;
- une seule réservation active par exemplaire ;
- l'immuabilité des conditions après engagement ;
- la distinction entre vente externe et acquisition conclue dans AZUREUM ;
- la confidentialité du suivi, des déclarations, des anomalies et des preuves ;
- le cumul possible des rôles Artiste et Administrateur ;
- l'accès légitime au suivi sans compte acquéreur persistant obligatoire ;
- les exigences WCAG 2.2 AA et de performance perçue ;
- l'absence d'enchères, de recherche et de filtres fonctionnels en V1.

## 4. Principes architecturaux

### PA-01 — Contrats amont souverains

Le code, les données et les intégrations appliquent les spécifications validées. Ils ne redéfinissent pas silencieusement le produit.

### PA-02 — Monolithe modulaire

AZUREUM V1 est construit comme une seule application déployable, organisée en modules fonctionnels explicitement séparés.

**Motivation :** la V1 concerne un produit mono-artiste exploité par une petite équipe. Des microservices multiplieraient les déploiements, les contrats réseau, la supervision et les risques de cohérence sans besoin établi. Le découpage modulaire conserve des limites claires et permet des tests isolés sans coût distribué.

### PA-03 — Intégrité au plus près des données

Les invariants qui doivent résister aux accès concurrents sont garantis par PostgreSQL au moyen de contraintes, d'index et de transactions, puis complétés par les validations applicatives.

### PA-04 — Serveur comme frontière de confiance

Le navigateur n'est jamais considéré comme une autorité. Toute opération sensible est vérifiée et exécutée côté serveur.

### PA-05 — Dépendances externes isolées

Chaque service tiers est encapsulé derrière un contrat applicatif propre à AZUREUM. Aucun module métier ne dépend directement d'un fournisseur, de son SDK ou de ses objets. Une intégration concrète est portée par un adaptateur remplaçable ; les événements entrants sont validés, dédupliqués et transformés avant d'affecter le métier.

### PA-06 — Échec explicite

Une dépendance indisponible ou un résultat indéterminé ne peut produire un succès apparent. Les opérations importantes disposent d'un état déterminable et d'une reprise contrôlée.

### PA-07 — Traçabilité distincte des journaux techniques

L'historique métier, les traces de sécurité et les journaux techniques répondent à des finalités différentes. Ils sont corrélables mais ne sont pas confondus.

### PA-08 — Portabilité raisonnable

L'architecture utilise les capacités gérées retenues sans disperser leur API dans le domaine. Elle évite une abstraction générale prématurée, mais maintient des frontières permettant le remplacement d'une intégration.

Elle ne conçoit ni le multi-artistes, ni les enchères, ni un dispositif logistique international spécifique. Elle évite uniquement de disperser les hypothèses de V1 : l'identité artistique reste gouvernée par le catalogue, le mécanisme d'acquisition reste isolé de la présentation publique, les modalités de remise restent portées par leurs contrats et les services tiers restent encapsulés. Toute évolution future nécessitera une décision produit, une révision des contrats et des migrations ; aucune compatibilité automatique n'est promise.

### PA-09 — Immersion proportionnée

**L'immersion est au service des œuvres, jamais l'inverse.** Les animations accompagnent la découverte, la compréhension et la contemplation des œuvres sans détourner l'attention de leur contenu ni dégrader les performances ou l'accessibilité.

L'expérience immersive de la V1 repose prioritairement sur le rendu des œuvres, la typographie, la composition, les capacités natives du navigateur, CSS moderne et Motion. Une animation doit servir la compréhension, la continuité ou la mise en valeur artistique sans masquer l'information, ralentir un parcours essentiel ni imposer un mouvement à une personne qui demande sa réduction.

Les effets simples et autonomes utilisent CSS. Motion est réservé aux transitions coordonnées, apparitions, changements de disposition ou interactions qui dépassent raisonnablement les capacités maintenables de CSS seul.

Aucune capacité validée de la V1 ne nécessite une scène 3D. Three.js, React Three Fiber, WebGL et WebGPU ne font donc pas partie du socle retenu. Leur introduction nécessiterait une capacité explicitement validée, une analyse de performance et d'accessibilité, ainsi qu'une révision architecturale contrôlée.

## 5. Registre des décisions structurantes

Les statuts employés sont définis en section 2.3.

| Identifiant | Décision | Statut | Motivation synthétique |
|---|---|---|---|
| DEC-01 | Application Next.js avec App Router et TypeScript | Décision validée | Rendu serveur, navigation web, exécution serveur et client cohérentes dans un même produit. |
| DEC-02 | Monolithe modulaire | Décision validée | Complexité opérationnelle adaptée à la V1. |
| DEC-03 | Hébergement applicatif sur Vercel | Décision validée | Intégration native de Next.js, fonctions gérées, CDN et déploiements de prévisualisation. |
| DEC-04 | Supabase géré pour PostgreSQL, Auth et Storage | Décision validée | Socle cohérent, PostgreSQL transactionnel, contrôle d'accès et services gérés. |
| DEC-05 | Schéma versionné par migrations SQL | Décision validée | Reproductibilité, audit et conformité avec la gouvernance. |
| DEC-06 | Accès aux données par client Supabase typé et couche de dépôts, sans ORM initial | Décision validée | Préserve les capacités PostgreSQL et évite une abstraction supplémentaire sans besoin V1. |
| DEC-07 | Stripe Connect avec paiements directs sur le compte connecté de David et commission d'application au profit de l'exploitant | Architecture cible sous réserve | Correspond au vendeur David et à la commission d'AZUREUM, sous réserve de confirmation juridique, fiscale et contractuelle. |
| DEC-08 | Accès acquéreur par lien secret révocable, sans compte obligatoire | Décision validée | Respecte explicitement le Sprint 003-r1. |
| DEC-09 | Traitements différés par boîte de sortie persistante et exécution planifiée | Décision validée | Résiste aux interruptions et évite de perdre une notification ou une action secondaire. |
| DEC-10 | GitHub Actions pour l'intégration continue | Décision validée | Dépôt déjà hébergé sur GitHub et contrôles reproductibles avant fusion. |
| DEC-11 | Tests unitaires avec Vitest et tests de bout en bout avec Playwright | Décision validée | Couvre séparément règles isolées et parcours réels multi-navigateurs. |
| DEC-12 | Brevo pour les e-mails transactionnels, derrière un adaptateur AZUREUM | Architecture cible sous réserve | API transactionnelle, authentification du domaine, événements de délivrance et compatibilité avec la boîte de sortie ; conditions de traitement des données à confirmer contractuellement. |
| DEC-13 | Boîte de sortie exécutée par Vercel Cron | Décision validée | Traitement différé persistant, idempotent et exploitable sans ajouter un service de file distinct à la V1. |
| DEC-14 | Objectifs de reprise différenciés selon la criticité | Décision validée | Une perte uniforme de 24 heures serait inacceptable pour les transactions, mais disproportionnée pour tous les médias. |
| DEC-15 | Objectif interne de disponibilité de 99,5 % par mois | Décision validée | Guide les offres, la supervision et la reprise sans créer une garantie contractuelle envers les utilisateurs. |
| DEC-16 | CSS natif et Motion pour l'expérience animée de la V1 | Décision validée | Préserve une expérience expressive sans imposer le poids ni la complexité d'un moteur 3D. |
| DEC-17 | Politique différenciée de gestion des fichiers | Décision validée | Sépare publication, originaux et pièces privées ; impose quarantaine, contrôles, versionnement et copie indépendante des fichiers irremplaçables. |

## 6. Vue d'ensemble

```text
Navigateur
   │
   ▼
Vercel CDN / Next.js
   ├── rendu public
   ├── application serveur
   ├── endpoints d'intégration
   └── traitements planifiés
          │
          ├── Supabase Auth
          ├── PostgreSQL / RLS
          ├── Supabase Storage
          ├── Stripe Connect
          └── service d'e-mail transactionnel
```

Le domaine n'appelle pas directement les SDK externes. Les modules applicatifs coordonnent le domaine, la persistance et les adaptateurs d'intégration.

## 7. Découpage logique

| Module | Responsabilité et éléments possédés | Contrats exposés | Contrats consommés |
|---|---|---|---|
| CMP-GAL — Galerie | Possède la projection publique des collections, de la démarche, de la chronologie, des expositions et des contenus éditoriaux. | Consultation publique et invalidation éditoriale. | Catalogue publié et médias publics. |
| CMP-CAT — Catalogue artistique | Possède les œuvres, exemplaires, éditions, rattachements aux collections, publication, archivage et disponibilité volontaire. | Consultation d'un exemplaire ; gestion artistique ; événements de publication et disponibilité. | Autorisations, audit et stockage des médias. |
| CMP-ACQ — Acquisition | Possède les instantanés de conditions, engagements, réservations et cycle de vie des acquisitions. | Engager, interrompre, consulter et appliquer un résultat de paiement normalisé. | Contrats de lecture du catalogue et identité de l'acteur. |
| CMP-PAY — Paiement | Possède les références de paiement, résultats externes, commissions, remboursements et rapprochements. | Préparer une demande de paiement ; normaliser un résultat vérifié ; demander un remboursement. | Adaptateur Stripe et données financières figées fournies par l'orchestration applicative. |
| CMP-REM — Remise | Possède les modalités retenues, préparation, progression et éléments de constatation de la remise. | Préparer, constater, contester et consulter une remise. | Contrats de lecture de l'acquisition et du catalogue, stockage et identité de l'acteur. |
| CMP-AUT — Authenticité | Possède les éléments d'authenticité, leur association, remise, correction et remplacement. | Produire, remettre, corriger et consulter un élément d'authenticité. | Contrats de lecture du catalogue et de l'acquisition, stockage et identité de l'acteur. |
| CMP-REC — Réception et anomalies | Possède les déclarations, compléments, situations anormales et événements d'instruction. | Déclarer, compléter, ouvrir, instruire et clôturer une anomalie. | Contrats de lecture de l'acquisition et de la remise, stockage et identité de l'acteur. |
| CMP-EXT — Ventes externes | Possède l'enregistrement distinct des ventes conclues hors AZUREUM. | Enregistrer et consulter une vente externe. | Contrats de lecture du catalogue et de l'authenticité, et identité de l'acteur. |
| CMP-IAM — Identité et accès | Possède les profils applicatifs, attributions de rôles et accès acquéreur ; la session primaire est fournie par Supabase Auth. | Établir l'acteur, ses rôles et la portée de son accès. | Supabase Auth, audit et notifications. |
| CMP-ADM — Administration | Possède les dossiers et motifs des interventions administratives exceptionnelles. | Orchestrer une intervention autorisée et consulter les situations à traiter. | Contrats publics des modules supervisés et identité de l'acteur. |
| CMP-AUD — Audit | Possède les événements d'audit et leurs corrélations. | Enregistrer et consulter les traces autorisées. | Événements applicatifs publiés et identité de l'acteur. |
| CMP-NOT — Notifications | Possède la boîte de sortie, les tentatives et résultats de communication. | Planifier et suivre une communication transactionnelle. | Événements applicatifs publiés, accès destinataire et adaptateur d'e-mail. |

Les modules communiquent par des services applicatifs explicites et des événements internes typés. Ils ne modifient pas directement les tables d'un autre module hors contrat défini.

### 7.1 Règles de dépendance

- un module de domaine ne dépend jamais de l'implémentation interne d'un autre module ;
- les enchaînements entre modules sont coordonnés par la couche applicative à partir de leurs contrats publics ;
- Acquisition et Paiement n'importent pas réciproquement leurs implémentations : l'orchestration transmet au paiement les données figées nécessaires, puis transmet à l'acquisition un résultat normalisé ;
- Audit et Notifications consomment des événements applicatifs et ne sont jamais appelés comme autorités décidant d'une transition métier ;
- un événement technique provenant d'un prestataire est d'abord transformé en résultat interne avant d'être présenté au domaine ;
- les dépendances partagées sont limitées aux types stables, à l'identité de l'acteur, au temps et aux primitives techniques indispensables ; elles ne deviennent pas un module métier fourre-tout.

Le sens des dépendances de code reste donc :

```text
Interface et intégrations
          ↓
Orchestration applicative
          ↓
Contrats et modules de domaine
          ↓
Ports de persistance et services externes
          ↓
Adaptateurs d'infrastructure

Événements applicatifs ──→ Audit
                       └─→ Notifications
```

## 8. Architecture web et rendu

### 8.1 Frontière Server Components / Client Components

Les pages, layouts et composants sont des **Server Components par défaut**, conformément au modèle de l'App Router. Ils assurent la lecture des données, le rendu des informations et la composition des vues sans ajouter de JavaScript client inutile.

Un **Client Component** n'est introduit qu'à une frontière qui nécessite réellement un état interactif, un gestionnaire d'événement, un effet ou une API du navigateur. La directive `use client` reste placée aussi bas que possible dans l'arbre afin de limiter le bundle envoyé au navigateur.

### 8.2 Galerie publique

La stratégie est hybride :

- les destinations éditoriales stables sont prérendues et mises en cache avec invalidation ciblée ;
- les vues publiques dépendant d'une œuvre ou d'une collection utilisent un rendu serveur pouvant réutiliser des données mises en cache ;
- la disponibilité, les conditions d'acquisition et toute information dépendant de l'acteur restent dynamiques ou explicitement invalidées ;
- le streaming permet d'afficher le contenu artistique et textuel disponible sans attendre un contenu secondaire plus lent.

Une modification éditoriale déclenche l'invalidation ciblée des contenus concernés. La disponibilité commerciale et les conditions visibles utilisent une fraîcheur compatible avec leur caractère sensible et ne doivent pas rester figées dans un cache public non invalidable.

### 8.3 Espaces privés

Les espaces de suivi, de gestion artistique et d'administration sont rendus dynamiquement. Le cache partagé y est interdit. Chaque accès réévalue la session, les rôles et la portée de la ressource.

### 8.4 Actions sensibles

Les engagements, réservations, confirmations, changements d'état et interventions administratives passent par des fonctions serveur. Les contrôles d'autorisation et d'intégrité sont exécutés dans la même opération logique que la mutation.

Le navigateur peut gérer la présentation, la saisie locale et le retour perceptible. Il ne décide jamais d'une autorisation, d'une transition métier, d'une disponibilité, d'un montant, d'une confirmation de paiement ou de l'achèvement d'une acquisition. Toute valeur issue du client est considérée comme une demande à valider côté serveur.

### 8.5 Compatibilité

La matrice de développement cible les versions stables courantes de Chromium, Firefox et Safari sur ordinateur et mobile au début de l'implémentation. Elle sera matérialisée par les projets Playwright et révisée avant chaque livraison majeure.

## 9. Données et persistance

### DAT-01 — Modèle relationnel

PostgreSQL porte les relations et invariants du domaine. Les familles persistées sont au minimum :

- collections, œuvres, exemplaires et éditions ;
- utilisateurs et attributions de rôles ;
- acquisitions, instantanés de conditions et réservations ;
- paiements, événements de paiement, commissions et remboursements ;
- remises et éléments de constatation ;
- éléments d'authenticité ;
- déclarations de réception et compléments ;
- anomalies et événements d'instruction ;
- ventes externes ;
- accès acquéreur ;
- événements d'audit, boîte d'entrée et boîte de sortie.

### 9.1 Modèle conceptuel technique

```text
Collection 1 ─── n Œuvre 1 ─── n Exemplaire
                                  │
                                  ├── 0..1 Réservation active
                                  ├── n Acquisitions historiques
                                  ├── n Éléments d'authenticité
                                  └── 0..1 Vente externe enregistrée

Acquisition 1 ─── 1 Instantané de conditions
Acquisition 1 ─── n Résultats et opérations de paiement
Acquisition 1 ─── 0..1 Processus de remise ─── n Éléments de constatation
Acquisition 1 ─── n Déclarations et compléments
Acquisition 1 ─── n Situations anormales ─── n Événements d'instruction

Utilisateur n ─── n Rôle
Acquisition 1 ─── n Accès acquéreur révocables
```

Principales contraintes conceptuelles :

- une œuvre appartient à exactement une collection ;
- un exemplaire appartient à exactement une œuvre et possède une identité indépendante ;
- une acquisition porte sur exactement un exemplaire et un instantané immuable de conditions ;
- un exemplaire possède au maximum une réservation active ;
- une vente externe est rattachée à l'exemplaire sans devenir une acquisition AZUREUM ;
- une remise et ses preuves restent rattachées à l'acquisition ;
- les déclarations initiales et événements historiques ne sont pas réécrits ;
- les rôles sont cumulables et indépendants de l'identité artistique de David.

Ce modèle fixe les entités, leurs responsabilités et leurs cardinalités structurantes. Le schéma physique, les noms de tables, les colonnes et les index non structurants seront matérialisés par migrations lors du Sprint de fondations techniques.

### DAT-02 — Identifiants et temps

Les entités possèdent des identifiants opaques stables. Les dates techniques sont conservées en UTC et présentées selon le contexte de l'utilisateur. Les instants métier significatifs sont distincts des dates de création et modification techniques.

### DAT-03 — Montants

Les montants monétaires sont conservés dans l'unité mineure de leur devise, avec la devise explicite. Aucun calcul financier ne repose sur un nombre à virgule flottante.

### DAT-04 — Conditions figées

À l'engagement, les conditions acceptées sont copiées dans un instantané immuable rattaché à l'acquisition : exemplaire, prix, devise, frais, modalité de remise, conditions particulières et références applicables.

Une modification ultérieure de l'œuvre ou de ses conditions ne modifie jamais cet instantané.

### DAT-05 — Archivage et suppression

L'archivage est un changement d'état conservant l'identité, les liens et l'histoire. La suppression définitive reste une opération administrative exceptionnelle, précédée d'un contrôle de dépendances et inscrite dans l'audit.

### DAT-06 — Historique append-only

Les déclarations validées, compléments, transitions importantes, décisions administratives et résultats externes sont ajoutés à l'historique. Une correction crée un nouvel événement ou une nouvelle version ; elle ne réécrit pas silencieusement le fait initial.

## 10. Transactions, concurrence et invariants

### 10.1 Frontières transactionnelles

Une commande applicative critique ouvre une transaction après validation de la forme de la demande et établissement de l'acteur. Elle relit dans cette transaction les données qui déterminent la décision, applique les contraintes et transitions, écrit l'audit ou les événements de boîte de sortie indispensables, puis valide l'ensemble en une seule fois.

Un appel réseau vers Stripe, le service d'e-mail ou un autre prestataire n'est jamais maintenu à l'intérieur d'une transaction PostgreSQL. La transaction conserve d'abord l'intention ou l'événement reçu ; l'appel ou son traitement intervient ensuite de façon idempotente.

| Opération critique | Début de la transaction | Fin normale | Échec |
|---|---|---|---|
| Engagement | Après identification de la demande et de l'exemplaire. | Conditions figées, acquisition, réservation et événements indispensables sont persistés ensemble. | Retour arrière complet ; aucune réservation partielle. |
| Transition d'acquisition | Avant la relecture de l'état source et des préconditions. | Nouvel état et historique correspondant sont persistés ensemble. | État précédent conservé ; erreur déterminable. |
| Enregistrement d'un webhook | Après authentification selon les capacités du fournisseur et validation minimale de l'enveloppe. | Événement de boîte d'entrée enregistré une seule fois. | Aucun effet métier ; le prestataire peut réessayer. |
| Application d'un résultat externe | Lors de la prise en charge d'un événement persistant non traité. | Résultat, transition autorisée, audit et sortie éventuelle sont atomiques. | Événement conservé pour reprise ou intervention ; aucun succès partiel. |
| Déclaration ou anomalie | Après établissement de l'accès à l'acquisition. | Déclaration immuable, anomalie éventuelle et historique sont persistés ensemble. | Aucun fait incomplet n'est publié. |
| Intervention administrative | Après établissement du rôle et chargement de la situation. | Décision, motif, effets autorisés et audit sont persistés ensemble. | Situation antérieure conservée et échec tracé techniquement. |
| Vente externe | Après validation de l'exemplaire et de l'absence de conflit. | Vente externe, disponibilité et historique sont cohérents ensemble. | Aucun enregistrement partiel ni changement isolé de disponibilité. |

### 10.2 Réservation exclusive

L'engagement d'une acquisition s'exécute dans une transaction PostgreSQL qui :

1. vérifie l'exemplaire et ses conditions ;
2. vérifie l'absence de réservation active ;
3. crée l'instantané des conditions ;
4. crée l'acquisition engagée et sa réservation ;
5. enregistre l'événement d'audit.

Une contrainte d'unicité conditionnelle garantit qu'un exemplaire ne possède jamais plusieurs réservations actives, y compris lors de requêtes concurrentes. Une seule tentative concurrente peut être reconnue ; les autres reçoivent un résultat d'indisponibilité déterminable.

### 10.3 Transitions d'état

Les transitions sont exécutées par des opérations nommées qui vérifient l'état source attendu. Une mise à jour générique de l'état est interdite. Les transitions impossibles échouent sans mutation partielle.

### 10.4 Expiration

L'expiration est évaluée lors de toute opération sensible et par un traitement planifié de rattrapage. La validité ne dépend donc pas uniquement de l'exécution ponctuelle d'une tâche planifiée.

### 10.5 Idempotence

Chaque commande sensible reçoit une clé d'idempotence de portée définie. La répétition d'une même demande renvoie le résultat déjà déterminé ou poursuit son traitement sans créer une seconde acquisition, confirmation ou opération financière.

### 10.6 Résultats tardifs

Un résultat de paiement reçu après expiration ou interruption est enregistré comme situation à rapprocher. Il ne confirme pas automatiquement l'acquisition et ne change pas silencieusement la disponibilité de l'exemplaire.

## 11. Identité et autorisation

### 11.1 Profils d'accès techniques

Les lignes ci-dessous décrivent des profils d'accès ; « Public » et « Acquéreur » ne deviennent pas pour autant des rôles internes.

| Profil | Établissement de l'accès | Responsabilités techniques autorisées |
|---|---|---|
| Public | Aucune session requise | Lire exclusivement les projections et médias publiés ; initier un parcours sans accéder aux données privées. |
| Acquéreur | Lien secret limité à une acquisition, ou identité légitime équivalente | Consulter son acquisition, transmettre les informations autorisées, déclarer une réception ou anomalie et consulter les suites qui le concernent. |
| Rôle Artiste | Session interne et attribution active du rôle | Gérer collections, œuvres, exemplaires, publication, archivage, conditions, authenticité et ventes externes dans les limites métier. |
| Rôle Administrateur | Session interne et attribution active du rôle | Superviser acquisitions et anomalies, exercer les interventions administratives autorisées et réaliser les opérations exceptionnelles auditées. |

Une personne cumulant Artiste et Administrateur reçoit l'union de ces autorisations. Aucune autorisation implicite ne résulte de son identité civile.

### 11.2 Utilisateurs internes

Supabase Auth identifie les utilisateurs accédant aux espaces privés. La session serveur est utilisée pour établir l'identité ; une donnée fournie par le navigateur ne suffit jamais.

Les rôles Artiste et Administrateur sont conservés dans les données applicatives et peuvent être cumulés. Toute opération vérifie la responsabilité requise. L'attribution du rôle Artiste ne modifie ni l'auteur, ni le propriétaire initial, ni le vendeur.

### 11.3 Accès acquéreur sans compte obligatoire

L'acquéreur peut accéder au suivi au moyen d'un secret opaque, aléatoire, limité à l'acquisition concernée et transmis par un canal transactionnel. Seule une empreinte non réversible du secret est persistée.

L'accès peut expirer, être révoqué et être renouvelé après vérification appropriée. Il n'accorde aucun accès à une autre acquisition. Les opérations particulièrement sensibles peuvent exiger une vérification complémentaire sans imposer la création d'un compte persistant.

### 11.4 Défense en profondeur

Les autorisations sont appliquées dans les services serveur et renforcées par les privilèges PostgreSQL et les politiques RLS. La clé de service Supabase n'est jamais exposée au navigateur.

## 12. Paiement et commission

### INT-PAY — Stripe Connect

Stripe Connect constitue la famille d'intégration retenue pour permettre à David de rester vendeur et à l'exploitant de percevoir une commission.

Le domaine conserve ses propres acquisitions, montants acceptés, commissions attendues et états. Les objets Stripe sont référencés comme preuves et résultats externes ; ils ne remplacent pas le cycle métier AZUREUM.

### 12.1 Architecture cible et réserve de conformité

AZUREUM V1 retient comme architecture cible Stripe Connect avec des paiements directs sur le compte connecté de David et une commission d'application au profit de l'exploitant. Cette orientation traduit le modèle dans lequel David demeure le vendeur, encaisse les fonds et supporte principalement les risques financiers attachés à la vente, tandis que l'exploitant d'AZUREUM est rémunéré pour son service sans devenir vendeur.

Cette décision est conditionnée à la confirmation que ce modèle est juridiquement, fiscalement et contractuellement compatible avec l'activité exercée. La documentation Stripe établit les possibilités et conséquences techniques de la configuration ; elle ne constitue pas une validation juridique ou fiscale.

**RES-01 — À valider avant implémentation du paiement :** configuration Connect, responsabilité contractuelle, encaissement, facturation, remboursement, litiges et commission doivent être confirmés juridiquement, fiscalement et contractuellement. Aucun flux de production ne peut être développé sur une supposition.

L'arbitrage ne recherche pas la configuration la plus simple à développer, mais celle qui respecte le modèle économique, juridique et fonctionnel d'AZUREUM. Il doit établir explicitement :

- qui est juridiquement le vendeur et conclut la vente avec l'acquéreur ;
- pour le compte de qui les fonds sont encaissés ;
- comment la commission de l'exploitant est perçue ;
- quelle identité apparaît sur les relevés bancaires et reçus ;
- qui initie et supporte les remboursements ;
- qui gère les litiges, rétrofacturations et soldes négatifs ;
- quelle configuration Stripe Connect traduit ces responsabilités ;
- quelles hypothèses restent soumises à une validation juridique ou contractuelle.

Aucune implémentation du paiement ne peut commencer avant la fermeture explicite de cet arbitrage.

### 12.2 Webhooks

Le point d'entrée Stripe :

- vérifie la signature sur le corps brut ;
- n'accepte que les types d'événements nécessaires ;
- enregistre l'événement dans une boîte d'entrée avec unicité sur son identifiant ;
- répond rapidement après persistance ;
- traite ensuite l'effet de façon idempotente ;
- ne suppose aucun ordre de livraison ;
- rapproche l'objet Stripe courant lorsque l'information reçue est insuffisante.

### 12.3 Paiement côté navigateur

Les données de carte ne transitent pas par les serveurs AZUREUM. L'interface de paiement sécurisée du prestataire reçoit les données nécessaires. AZUREUM ne conserve que les références, montants, états et informations indispensables à la justification de l'opération.

## 13. Stockage des médias et documents

### 13.1 Catégories et limites

Supabase Storage est organisé en buckets distincts selon la finalité, la sensibilité et les règles d'accès des fichiers.

| Catégorie | Accès | Formats autorisés | Taille maximale par fichier |
|---|---|---|---:|
| Médias artistiques originaux | Privé | JPEG, PNG, WebP, AVIF | 50 Mo |
| Variantes destinées à la publication | Public après validation | JPEG, PNG, WebP, AVIF | 20 Mo |
| Photographies de réception ou d'anomalie | Privé | JPEG, PNG, WebP | 15 Mo |
| Preuves de remise | Privé | PDF, JPEG, PNG, WebP | 25 Mo |
| Éléments d'authenticité numériques | Privé, accès contrôlé | PDF, JPEG, PNG | 25 Mo |

Les formats SVG et HTML, les images animées, les archives, les documents bureautiques modifiables, les exécutables, les scripts, les formats RAW propriétaires ainsi que les fichiers audio et vidéo sont exclus de la V1.

### 13.2 Séparation public et privé

Seules les variantes expressément publiées d'un média artistique peuvent être placées dans un bucket public et diffusées par CDN. Les originaux, preuves, déclarations, photographies d'anomalies et éléments d'authenticité restent dans des buckets privés.

Un objet privé est accessible uniquement après autorisation serveur ou au moyen d'une URL signée de courte durée et de portée limitée. La connaissance de son chemin ne confère aucun accès.

### 13.3 Quarantaine et contrôles

Tout fichier déposé par un utilisateur arrive d'abord dans un bucket privé de quarantaine distinct des buckets définitifs :

```text
Dépôt
  ↓
Bucket privé de quarantaine
  ↓
Contrôles
  ↓
Bucket définitif autorisé
```

Avant tout déplacement vers sa destination, le serveur vérifie la taille, l'extension, le type déclaré, la signature réelle et leur cohérence. Pour une image, le serveur tente de décoder le fichier avec un décodeur conforme au format attendu ; tout échec entraîne le rejet du dépôt. Les PDF et les dépôts provenant d'un acquéreur sont soumis à une analyse des contenus potentiellement malveillants.

Un contrôle indisponible, incomplet ou indéterminé maintient le fichier en quarantaine. Un fichier refusé n'est ni publié ni transmis à un autre utilisateur. Le choix du dispositif d'analyse relève des fondations techniques ; le comportement de sécurité défini ici est obligatoire.

### 13.4 Conservation, remplacement et suppression

Un remplacement crée un nouvel objet et une nouvelle version ; il n'écrase pas silencieusement le fichier précédent. La version antérieure reste rattachée à son historique lorsque sa conservation est nécessaire. L'archivage d'une œuvre ne supprime ni ses originaux ni les fichiers liés à son histoire.

Une suppression fonctionnelle retire l'accès courant sans provoquer automatiquement une suppression physique. La suppression physique respecte les durées et obligations définies par la matrice de conservation relevant de `RES-04`. Les fichiers rejetés comme dangereux sont supprimés après conservation de la trace minimale nécessaire à l'audit. Les variantes publiques reproductibles peuvent être supprimées puis régénérées depuis un original valide.

### 13.5 Copie indépendante

Les originaux artistiques irremplaçables, éléments d'authenticité numériques établis, preuves de remise nécessaires, pièces d'anomalie à conserver et autres documents privés dont la perte empêcherait d'établir un fait métier bénéficient d'une copie indépendante.

Cette copie réside sur un stockage distinct du stockage Supabase principal, éventuellement auprès d'un autre fournisseur. Un second bucket du même stockage principal ne constitue pas une copie indépendante. Les variantes publiques reproductibles n'exigent pas de copie autonome lorsqu'elles peuvent être régénérées depuis un original sauvegardé.

Les sauvegardes PostgreSQL de Supabase ne couvrant pas les objets Storage, la restauration réunit les objets sauvegardés et leurs métadonnées cohérentes.

## 14. Traitements différés et notifications

### 14.1 Boîte de sortie

Lorsqu'une transaction métier doit provoquer un e-mail ou un traitement secondaire, elle écrit dans la même transaction un élément de boîte de sortie. Un exécuteur planifié traite les éléments, enregistre les tentatives et applique une stratégie de reprise bornée.

L'échec d'une notification ne transforme pas une acquisition réussie en échec, mais reste visible et réessayable. Une notification n'est jamais la source de vérité du métier.

### 14.2 Planification

L'orientation retenue pour la V1 est une **Vercel Cron Job** qui invoque périodiquement une fonction serveur protégée. Cette fonction réclame un lot limité d'éléments de boîte de sortie, les traite de manière idempotente, enregistre chaque résultat puis laisse les éléments en échec disponibles pour une nouvelle tentative bornée.

Les webhooks servent uniquement à recevoir les événements des prestataires ; ils ne remplacent pas l'exécuteur de la boîte de sortie. Les tâches planifiées servent également au rattrapage des réservations expirées et aux contrôles de cohérence. Leur point d'entrée est protégé par un secret et tolère les invocations concurrentes ou répétées.

### 14.3 Fournisseur d'e-mail

AZUREUM V1 retient Brevo comme architecture cible pour les e-mails transactionnels. Ce choix repose sur :

- une API transactionnelle mature ;
- l'authentification du domaine d'expédition au moyen des mécanismes applicables, notamment DKIM, DMARC et SPF lorsqu'il est requis ;
- la prise en charge des événements de délivrance, rebonds et plaintes ;
- une intégration compatible avec la boîte de sortie persistante ;
- l'isolation derrière un adaptateur applicatif garantissant la réversibilité vers un autre fournisseur ;
- la compatibilité attendue avec les exigences de confidentialité du projet, sous réserve de validation contractuelle des conditions de traitement des données.

L'application dépend d'un contrat interne d'envoi transactionnel. L'adaptateur Brevo est seul autorisé à traduire ce contrat vers l'API et les événements du fournisseur. Aucun module métier ne connaît Brevo, son SDK ou ses objets.

Le domaine d'expédition doit être authentifié. Les événements de livraison, rebond et plainte sont reçus, authentifiés selon les capacités du fournisseur, dédupliqués et rapprochés de la tentative correspondante. Le suivi des ouvertures et des clics est désactivé par défaut ; son activation nécessiterait un besoin explicite et une vérification de conformité.

**RES-03 — À valider avant la mise en service des e-mails :** conditions contractuelles de traitement, localisation, sous-traitance et conservation des données par Brevo.

## 15. Sécurité architecturale

### SEC-01 — Moindre privilège

Chaque utilisateur, rôle, fonction et intégration reçoit uniquement les accès nécessaires. Les opérations administratives exceptionnelles sont séparées et auditées.

### SEC-02 — Secrets

Les secrets résident dans les gestionnaires d'environnement des plateformes et dans les variables locales ignorées par Git. Aucun secret n'est préfixé ou exposé comme variable publique. Leur rotation est documentée.

Aucune décision métier, autorisation ou mesure de sécurité ne repose sur un secret transmis au navigateur. Les secrets d'accès acquéreur constituent des justificatifs présentés par l'acteur, mais leur validité, leur portée et leurs effets sont toujours vérifiés côté serveur.

### SEC-03 — Sessions

Les sessions utilisent des cookies sécurisés, non accessibles au JavaScript lorsqu'applicable, avec politique adaptée de site et de durée. Les changements de rôle et événements de sécurité permettent la révocation.

### SEC-04 — Entrées et sorties

Les entrées sont validées à la frontière serveur. Les contenus éditoriaux sont rendus avec échappement sûr ; tout contenu riche autorisé suit une politique de nettoyage explicite.

### SEC-05 — Protection web

L'application définit des en-têtes de sécurité, une politique de contenu, la protection contre les requêtes intersites sur mutations, la validation d'origine et une limitation de débit sur authentification, accès par lien, engagement, paiement et dépôts.

### SEC-06 — Journalisation sûre

Les journaux techniques excluent secrets, jetons d'accès, données de paiement et pièces privées. Les identifiants de corrélation permettent l'investigation sans exposer le contenu sensible.

### SEC-07 — Dépendances

Les dépendances sont verrouillées, analysées automatiquement et mises à jour par changement revu. Une dépendance n'est ajoutée qu'avec une responsabilité identifiée et une justification.

Dependabot surveille chaque semaine les dépendances npm et les actions GitHub, et ouvre des propositions de mise à jour séparées ou groupées de façon lisible. Les correctifs de sécurité critiques sont traités prioritairement. Les mises à jour ordinaires sont regroupées pour limiter le bruit ; une version majeure reste isolée, accompagnée de ses notes de migration et validée par l'ensemble des contrôles CI. Aucune mise à jour automatique n'est fusionnée sans revue.

### SEC-08 — Réponse aux incidents

Les alertes critiques, la révocation des secrets, la suspension d'une intégration et la préservation des traces disposent d'une procédure avant production. Le Sprint 006 ne constitue pas un audit de sécurité ni un test d'intrusion.

## 16. Protection des données et conformité

### 16.1 Limite de l'analyse

Le Sprint 006 ne produit pas un avis juridique. Il identifie les contraintes ayant un impact sur l'architecture, documente les hypothèses retenues et maintient sous forme de réserves les questions qui nécessitent une validation par une source officielle applicable au cas précis ou par un conseil juridique, fiscal ou contractuel compétent.

Une règle conditionnelle ne devient pas une conclusion juridique par sa traduction technique. L'architecture applique la minimisation, la confidentialité par défaut, la limitation des finalités et la traçabilité des accès sensibles.

### 16.2 Vente, facturation et paiement

L'hypothèse structurante reste que David vend les œuvres dans le cadre de son entreprise individuelle et assume les obligations attachées à la vente. Jérémie exploite AZUREUM et perçoit une commission sans acheter, revendre ni devenir propriétaire des œuvres.

L'architecture cible Stripe Connect matérialise cette séparation, mais ne la valide pas juridiquement. Avant l'implémentation du paiement, `RES-01` doit confirmer :

- l'identité du cocontractant de l'acquéreur et du vendeur indiqué dans le parcours, la confirmation et les documents applicables ;
- l'entité qui émet la facture ou le justificatif relatif à l'œuvre et celle qui facture la commission d'exploitation ;
- le mandat autorisant un utilisateur habilité d'AZUREUM à initier un remboursement pour le compte de David ;
- la répartition des frais, litiges, rétrofacturations, fraudes et soldes négatifs ;
- les responsabilités respectives de David, Jérémie et Stripe dans les contrats correspondants.

### 16.3 Rétractation et catégories de vente

Pour une vente à distance conclue entre un professionnel et un consommateur, le cadre officiel prévoit en principe un délai de rétractation de quatorze jours courant, pour un bien, à compter de sa réception. Il prévoit également des exceptions, notamment pour un bien confectionné selon les spécifications du consommateur ou nettement personnalisé. L'existence d'une œuvre originale ou d'une édition numérotée ne suffit pas, à elle seule dans le présent document, à conclure qu'une exception s'applique.

La validation juridique doit distinguer au minimum :

- acquisition à distance par un consommateur ;
- acquisition conclue avec un professionnel ;
- acquisition ou vente externe conclue physiquement lors d'une exposition ou d'un vernissage ;
- commande éventuellement personnalisée ;
- acquéreur ou livraison hors de France.

Le résultat détermine les informations précontractuelles, le point de départ du délai, l'action permettant d'exercer la rétractation, le retour de l'œuvre, le remboursement, la commission, l'authenticité et le retour éventuel de l'exemplaire à la disponibilité. Aucun workflow de production ne doit supposer qu'une œuvre d'art est automatiquement exclue du droit de rétractation.

### 16.4 Sous-traitants et transferts

Avant la production, chaque prestataire traitant des données pour AZUREUM fait l'objet d'une fiche recensant : rôle au regard des traitements, finalités, catégories de données, régions de traitement, sous-traitants ultérieurs, durées propres, mesures de sécurité, assistance aux droits, restitution ou suppression et mécanisme applicable aux transferts hors de l'Espace économique européen.

Les contrats et documents de Stripe, Brevo, Supabase, Vercel ainsi que du futur stockage de sauvegarde indépendant doivent être examinés. Une simple localisation européenne de l'infrastructure ne suffit pas à conclure à l'absence de transfert. Lorsqu'un prestataire agit comme sous-traitant, un contrat conforme aux exigences applicables encadre le traitement. Les rôles de responsable, responsable conjoint, sous-traitant ou responsable indépendant ne sont pas attribués silencieusement et peuvent différer selon le service ou la finalité.

### 16.5 Matrice de conservation provisoire

La matrice suivante constitue une base architecturale de travail. Les valeurs juridiquement imposées sont distinguées des objectifs à confirmer ; `RES-04` reste ouverte jusqu'à validation de la matrice définitive.

| Catégorie | Conservation active | Archivage intermédiaire ou sort final | État |
|---|---|---|---|
| Contrats, commandes, livraison, réception et facturation | Pendant l'exécution et le suivi courant | Dix ans lorsque la pièce relève des obligations comptables ou du contrat électronique avec un consommateur atteignant le seuil légal ; déclencheur et exemplaire faisant foi à confirmer | À valider juridiquement et comptablement |
| Paiements, commissions et remboursements | Pendant le traitement, le rapprochement et les contestations | Références et justificatifs nécessaires alignés sur les obligations comptables et contentieuses ; aucune donnée de carte conservée par AZUREUM | À valider avec `RES-01` |
| Éléments d'authenticité | Pendant leur production, leur remise et leur suivi | Conservation historique justifiée par le lien avec l'œuvre et l'exemplaire ; données personnelles dissociées ou minimisées lorsqu'elles ne sont plus nécessaires | Durée exacte à valider |
| Anomalies, retours, rétractations et pièces privées | Jusqu'à clôture et exécution des effets | Archivage limité à la prescription, à la preuve et aux obligations applicables, puis suppression ou anonymisation | Durée exacte à valider |
| Événements d'audit métier | Pendant le cycle de l'objet concerné | Alignement sur la durée de preuve de l'opération correspondante | Durée exacte à valider |
| Journaux techniques et de sécurité | Disponibles pour détection et investigation | Cible de six à douze mois, sauf justification documentée différente | Recommandation CNIL à confirmer selon les risques |
| Comptes et attributions de rôles | Pendant l'habilitation ou la relation active | Désactivation immédiate lorsque l'accès n'est plus justifié ; suppression ou archivage limité selon les obligations restantes | Critère d'inactivité à définir avant production |
| Originaux artistiques et médias publics | Pendant la gestion artistique et la publication | Originaux irremplaçables conservés selon la finalité artistique ; variantes publiques régénérables supprimables | Hors données personnelles, sauf métadonnées associées |
| Fichiers en quarantaine refusés | Jusqu'à la fin du contrôle et du traitement de l'échec | Suppression rapide du fichier ; conservation de la seule trace minimale nécessaire | Décision architecturale validée |

La conservation distingue base active, archivage intermédiaire à accès restreint et suppression ou anonymisation. Une donnée ne reste pas accessible aux opérations courantes au seul motif qu'elle doit encore être archivée.

### 16.6 Responsabilités ayant un impact architectural

- le remboursement est exécuté conformément à la décision administrative autorisée, mais son débiteur économique et le mandat d'exécution doivent être confirmés dans `RES-01` ;
- pour une vente à un consommateur, la documentation officielle rattache au vendeur le respect de la livraison et situe en principe le transfert du risque lors de la prise de possession physique, sous réserve du cas où le consommateur choisit lui-même un transporteur non proposé ;
- une anomalie déclarée ouvre une instruction traçable sans permettre à AZUREUM de conclure automatiquement à une responsabilité juridique ;
- une fraude ou un litige de paiement est conservé et rapproché des événements du prestataire sans que son résultat technique tranche à lui seul la responsabilité contractuelle ;
- l'indisponibilité d'un prestataire ne supprime aucune obligation envers l'acquéreur : AZUREUM présente un état honnête, conserve les intentions et reprend les traitements de manière contrôlée ;
- les ventes ou livraisons vers un territoire non encore validé doivent pouvoir être empêchées avant l'engagement, sans instaurer une restriction géographique générale non décidée par le produit.

### 16.7 Information et gouvernance des traitements

Avant production, AZUREUM dispose d'un registre ou inventaire des traitements et d'informations accessibles précisant notamment les responsables concernés, finalités, bases légales, destinataires, transferts, durées ou critères de conservation et droits applicables. Les mécanismes d'accès, rectification, opposition, limitation, portabilité ou effacement sont définis selon leur applicabilité et n'effacent jamais une donnée qu'une obligation légale impose encore de conserver.

Les environnements hors production n'utilisent pas de données personnelles réelles sauf procédure explicitement autorisée. Les exports et sauvegardes bénéficient des mêmes règles d'accès que les données sources.

**RES-04 — À valider avant mise en exploitation :** les règles `RM-LEG-01` à `RM-LEG-05`, la matrice définitive des traitements et de conservation, les obligations de vente et de facturation, la rétractation selon les catégories de vente, les territoires et acquéreurs admis, les responsabilités de traitement, les contrats de sous-traitance et les transferts internationaux.

## 17. Performance et accessibilité

### 17.1 Performance

Pour satisfaire `ENF-PERF-01` à `ENF-PERF-04` :

- le rendu public est produit côté serveur ;
- les images utilisent des dimensions et variantes adaptées ;
- le contenu textuel essentiel n'attend pas le chargement des médias lourds ;
- le JavaScript client est limité aux interactions nécessaires ;
- la diffusion publique utilise CDN et cache invalidable ;
- les mesures reproductibles couvrent au minimum accueil, collection et fiche œuvre.

Les budgets précis de poids, latence et métriques Web Vitals seront définis et automatisés au Sprint de fondations techniques, en conservant le seuil produit de 2,5 secondes.

### 17.2 Accessibilité

WCAG 2.2 AA est une contrainte de conception et de livraison. L'architecture impose HTML sémantique, navigation clavier, gestion du focus, alternatives textuelles, états non fondés sur la seule couleur et contrôles automatisés complétés par une revue manuelle.

La préférence système de réduction des mouvements est respectée globalement. Les parallaxes, déplacements importants, animations automatiques et effets susceptibles de gêner sont désactivés ou remplacés par une transition non spatiale adaptée. Aucun contenu, état ou contrôle essentiel ne dépend de l'exécution d'une animation.

### 17.3 Budget d'animation

Motion est chargé uniquement dans les frontières clientes qui l'utilisent. Les fonctionnalités nécessaires sont importées de manière ciblée ou différée afin de préserver le rendu serveur et le budget JavaScript initial. Les animations privilégient les propriétés qui n'imposent pas de recalcul de mise en page continu et font l'objet de mesures sur les appareils mobiles de référence.

## 18. Disponibilité, sauvegarde et restauration

### OPS-01 — Dégradation honnête

La galerie publique peut continuer à présenter des contenus déjà valides lorsque paiement ou notification sont indisponibles. Une acquisition ne peut toutefois pas être présentée comme réussie sans confirmation déterminable.

### OPS-02 — Sauvegardes

Les sauvegardes gérées de PostgreSQL sont complétées par :

- la vérification de leur disponibilité selon l'offre souscrite ;
- une sauvegarde distincte des objets Storage ;
- la conservation du code, des migrations et configurations non secrètes dans Git ;
- un inventaire des configurations externes nécessaires à la reconstruction.

Pour les données transactionnelles critiques, les sauvegardes quotidiennes seules ne satisfont pas le RPO retenu. L'environnement de production doit donc activer Supabase PITR ou un dispositif équivalent démontrant un RPO inférieur ou égal à une heure. La documentation Supabase annonce pour PITR un RPO maximal de deux minutes.

Les objectifs retenus nécessitent une offre Supabase compatible avec PITR ou un dispositif équivalent. Le coût, les prérequis et les modalités commerciales de cette fonctionnalité doivent être vérifiés au moment de la souscription de l'environnement de production.

### OPS-03 — Restauration

Une restauration est testée avant production puis périodiquement. Elle vérifie base, objets privés, relations, politiques d'accès et reprise des traitements différés.

### OPS-04 — Objectifs de reprise

Les objectifs de reprise sont différenciés selon la criticité :

| Catégorie | Contenu principal | RPO cible | RTO cible |
|---|---|---:|---:|
| Données transactionnelles critiques | Acquisitions, réservations, paiements, ventes externes, remises, anomalies et événements d'audit | 1 heure maximum | 8 heures maximum |
| Médias et documents privés | Preuves de remise, photographies d'anomalies, éléments d'authenticité, originaux et documents privés | 24 heures maximum | 24 heures maximum |
| Contenus publics reproductibles | Projections et dérivés pouvant être reconstruits depuis la base ou les originaux | Reconstruction après les services critiques | Délai supérieur admis, sans perte définitive de la source |

Les événements conservés, les mécanismes idempotents et les données détenues par les prestataires externes sont utilisés pour rapprocher les opérations après incident. Ils complètent les sauvegardes sans s'y substituer.

Les fichiers irremplaçables bénéficient d'une copie indépendante du stockage Supabase principal. L'interface S3 compatible et les commandes de copie documentées par Supabase permettent d'automatiser cette sauvegarde vers une destination séparée. La restauration doit réunir objets et métadonnées cohérentes.

Le RTO Supabase n'étant pas contractuellement fixe et dépendant notamment du volume et de l'activité WAL, le respect des huit heures doit être démontré par des exercices de restauration représentatifs. Tout dépassement constaté impose une adaptation de l'offre ou de la procédure.

### OPS-05 — Objectif de disponibilité

L'objectif interne de disponibilité de la V1 est fixé à **99,5 % par mois**, hors maintenances annoncées et dépendances externes échappant directement au contrôle d'AZUREUM. Il guide les choix d'offres, la supervision, les alertes et les procédures de reprise. Il ne constitue pas une garantie contractuelle envers les utilisateurs.

La mesure distingue :

- la disponibilité de bout en bout réellement perçue ;
- la disponibilité des composants sous contrôle direct d'AZUREUM ;
- les interruptions attribuables à une dépendance externe ;
- les maintenances annoncées et leur durée.

Sur un mois de 30 jours, 99,5 % correspond à environ 3 heures et 36 minutes d'indisponibilité comptabilisée. Une alerte est déclenchée avant consommation complète de ce budget.

L'objectif interne de disponibilité doit être confronté aux engagements de service de Vercel, Supabase et des autres dépendances lors du choix définitif des offres de production. En l'absence d'engagement contractuel correspondant, son respect repose sur la mesure, les alertes et les procédures de reprise d'AZUREUM et ne peut être promis sur la seule base des capacités annoncées par les fournisseurs.

## 19. Observabilité et audit

Les requêtes importantes portent un identifiant de corrélation propagé dans les journaux, événements d'intégration et traitements différés.

L'observabilité est structurée en quatre couches :

| Couche | Contenu | Usage principal |
|---|---|---|
| Logs applicatifs | Événements structurés, niveau, module, environnement et identifiant de corrélation. | Diagnostiquer une exécution sans exposer de secret. |
| Remontée des erreurs | Exceptions regroupées, contexte technique nettoyé et version déployée. | Détecter et prioriser les défauts. |
| Supervision | Disponibilité des parcours critiques, files en retard, webhooks et tâches planifiées. | Alerter lorsqu'une intervention est nécessaire. |
| Performance | Latences serveur, temps des dépendances, métriques Web Vitals et tendances par version. | Vérifier les objectifs et détecter les régressions. |

Elle couvre notamment :

- erreurs serveur et client exploitables ;
- latence et taux d'échec des parcours critiques ;
- réservations expirées non traitées ;
- webhooks invalides, dupliqués ou en échec ;
- traitements différés en retard ;
- échecs d'authentification et refus d'autorisation significatifs ;
- utilisation et erreurs des intégrations.

Les alertes sont orientées vers une action. L'historique fonctionnel des acquisitions et anomalies reste distinct des traces techniques soumises à rotation.

Vercel peut exporter des traces OpenTelemetry ; le choix d'un outil de suivi d'erreurs ou d'APM supplémentaire sera fait lors des fondations après comparaison des besoins et coûts.

## 20. Environnements et configuration

Trois catégories d'environnement sont retenues :

| Environnement | Finalité | Données et intégrations |
|---|---|---|
| Local | Développement et tests rapides | Supabase local, données fictives, intégrations simulées ou sandbox. |
| Prévisualisation / validation | Revue, intégration et E2E | Projets non productifs isolés, comptes de test, aucune donnée réelle. |
| Production | Exploitation réelle | Projets, secrets, domaines et données exclusivement productifs. |

Chaque environnement utilise ses propres secrets, projets Supabase et configuration Stripe. Une prévisualisation ne pointe jamais vers la production.

La région applicative est placée au plus près de la région PostgreSQL retenue afin de limiter la latence. La région et les transferts de données sont confirmés lors de la revue de conformité.

## 21. Livraison et migrations

### 21.1 Intégration continue

Une proposition de changement doit réussir :

1. formatage et analyse statique ;
2. vérification TypeScript ;
3. tests unitaires ;
4. tests d'intégration avec base reconstruite depuis les migrations ;
5. tests de sécurité automatisables ;
6. tests de bout en bout critiques ;
7. construction de production.

### 21.2 Migrations

Toute évolution du schéma, des privilèges, des politiques RLS, fonctions ou déclencheurs est versionnée dans une migration relue. Aucun changement de production n'existe uniquement dans un tableau de bord distant.

Les migrations sont testées depuis une base vide et sur une copie représentative non sensible. En production, elles privilégient une évolution compatible en plusieurs étapes. Une migration destructive exige sauvegarde vérifiée, procédure de retour et autorisation explicite.

### 21.3 Déploiement

La promotion vers la production est reproductible. Les migrations compatibles sont appliquées selon une séquence documentée, puis l'application est déployée et soumise à des contrôles de santé. Un retour applicatif ne suppose jamais qu'une migration destructive puisse être annulée automatiquement.

## 22. Stratégie de tests

| Identifiant | Famille | Couverture attendue |
|---|---|---|
| TST-01 | Unitaire | Règles de calcul, décisions, transitions et validations sans dépendance externe. |
| TST-02 | Intégration PostgreSQL | Contraintes, RLS, migrations, transactions, concurrence et idempotence. |
| TST-03 | Contrat d'intégration | Stripe, e-mail et Storage au moyen de sandbox et de fixtures, avec mécanismes d'authentification valides ou invalides selon le fournisseur. |
| TST-04 | Bout en bout | Découverte, engagement, concurrence, paiement simulé, suivi, remise, anomalie, gestion et administration. |
| TST-05 | Accessibilité | Contrôles automatiques et revue manuelle des parcours essentiels. |
| TST-06 | Performance | Mesures reproductibles des vues publiques de référence et actions critiques. |
| TST-07 | Résilience | Doublons, événements désordonnés, dépendance indisponible, reprise et résultat tardif. |
| TST-08 | Sauvegarde | Restauration de base et d'objets, puis vérification des accès et traitements. |

Les scénarios de concurrence prouvent qu'un seul engagement gagne pour un exemplaire. Les scénarios de paiement prouvent qu'un doublon ou un événement tardif ne crée ni confirmation ni disponibilité contradictoire.

## 23. Traçabilité

### 23.1 Décisions structurantes

| Décision | Justification et rattachements principaux |
|---|---|
| DEC-01 | Architecture web requise par les espaces et parcours du Sprint 005-r1 ; documentation officielle Next.js. |
| DEC-02 | `PA-02` ; périmètre mono-artiste et équipe réduite de la V1. |
| DEC-03 | `DEC-01`, environnements et livraison décrits aux sections 20 et 21 ; documentation officielle Next.js et Vercel. |
| DEC-04 | `PA-03` à `PA-05` ; exigences de persistance, d'identité, de stockage et de confidentialité ; documentation officielle Supabase. |
| DEC-05 | `DAT-01` à `DAT-06` ; reproductibilité imposée par la gouvernance et la section 21. |
| DEC-06 | `PA-05` et `PA-08` ; usage direct des capacités PostgreSQL nécessaires aux invariants et aux politiques d'accès. |
| DEC-07 | `H-01`, `RM-COM-01` à `RM-COM-05`, `RM-RESP-09` à `RM-RESP-11`, documentation officielle Stripe et `RES-01`. |
| DEC-08 | `CAP-ACQ-06`, `EF-SUI-03`, `CT-03` et principe fonctionnel d'absence de compte acquéreur obligatoire. |
| DEC-09 | `PA-06`, exigences de fiabilité et de traçabilité, sections 10 et 14. |
| DEC-10 | Gouvernance Git du projet et contrôles de livraison définis en section 21 ; documentation officielle GitHub. |
| DEC-11 | Exigences vérifiables des Sprints 003-r1 à 005-r1 et stratégie de tests de la section 22 ; documentations officielles Vitest et Playwright. |
| DEC-12 | `PA-05`, `PA-06`, besoins de communication transactionnelle, documentation officielle Brevo et `RES-03`. |
| DEC-13 | `DEC-09`, contraintes d'une V1 sans service de file distinct et documentation officielle Vercel Cron. |
| DEC-14 | `ENF-FIA-01` à `ENF-FIA-05`, `OPS-02` à `OPS-04` et documentation officielle Supabase relative aux sauvegardes. |
| DEC-15 | `ENF-DIS-01` à `ENF-DIS-04` et méthode de mesure définie par `OPS-05`. |
| DEC-16 | Primauté de l'expérience artistique, exigences d'accessibilité et de performance, `PA-09` et documentation officielle Motion. |
| DEC-17 | `EF-REC-01` à `EF-REC-07`, exigences de sécurité et de confidentialité, `PA-04` à `PA-06` et documentation officielle Supabase Storage. |

### 23.2 Couverture des contrats amont

| Architecture | Contrats principaux couverts |
|---|---|
| PA-02, CMP-GAL, CMP-CAT, section 8 | CAP-ART-01 à CAP-ART-06 ; CAP-GES-01 à CAP-GES-05 ; PS-01 à PS-08 ; ESP-PUB, ESP-DAV |
| DAT-01 à DAT-06, section 10 | RM-ŒUV-01 à RM-ŒUV-14 ; RM-ACQ-01 à RM-ACQ-22 ; RM-CYC-01 à RM-CYC-10 ; INV-01 à INV-05, INV-11, INV-12, INV-14 |
| CMP-PAY, INT-PAY | CAP-ACQ-01 à CAP-ACQ-09 ; RM-ACQ-01 à RM-ACQ-22 ; RM-COM-01 à RM-COM-05 ; RM-ANN-01 à RM-ANN-06 ; RM-LEG-01 à RM-LEG-05 ; ENF-FIA-01 à ENF-FIA-05 |
| CMP-REM, CMP-AUT, CMP-REC | CAP-ACQ-06 à CAP-ACQ-09 ; RM-REM-01 à RM-REM-19 ; RM-AUT-01 à RM-AUT-06 et RM-AUT-08 à RM-AUT-17 ; RM-ANOM-01 à RM-ANOM-15 ; ESP-SUI |
| CMP-EXT | H-03 ; RM-EXT-01 à RM-EXT-05 ; INV-12 |
| CMP-IAM, section 11 | H-07 ; RM-RESP-01 à RM-RESP-14 ; INV-09, INV-13 ; ENF-SEC-01 à ENF-SEC-06 ; ENF-RGPD-01 à ENF-RGPD-08 |
| Sections 13 à 16 | EF-REC-01 à EF-REC-07 ; ENF-SEC-01 à ENF-SEC-06 ; ENF-RGPD-01 à ENF-RGPD-08 ; ENF-TRA-01 à ENF-TRA-04 |
| Sections 17 à 22 | ENF-ACC-01 à ENF-ACC-06 ; ENF-PERF-01 à ENF-PERF-04 ; ENF-FIA-01 à ENF-FIA-05 ; ENF-DIS-01 à ENF-DIS-04 ; ENF-COM-01 à ENF-COM-04 ; ENF-TRA-01 à ENF-TRA-04 |
| Ensemble des composants | ESP-PUB, ESP-ACQ, ESP-SUI, ESP-DAV, ESP-ADM et parcours associés |

## 24. Décisions restant à fermer

| Identifiant | Décision | Échéance maximale | Validation attendue |
|---|---|---|---|
| RES-01 | Configuration Stripe Connect et responsabilités financières | Avant implémentation du paiement | Juridique, fiscale, contractuelle et Product Owner |
| RES-03 | Conditions contractuelles de traitement des données par Brevo | Avant mise en service des e-mails | Contractuelle, confidentialité et Product Owner |
| RES-04 | Conformité des règles conditionnelles et matrice de conservation | Avant mise en exploitation | Juridique et Product Owner |

Ces réserves n'autorisent pas une hypothèse silencieuse. Le Sprint peut être validé si leur caractère différé, leur responsable et leur échéance sont explicitement acceptés.

## 25. Hors périmètre

Le présent document ne réalise ni ne définit en détail :

- le code, les composants et le design visuel ;
- les routes ou URL définitives ;
- le schéma SQL final ;
- les noms définitifs des tables, fonctions ou variables ;
- les contrats API détaillés ;
- la configuration exacte des comptes tiers ;
- les secrets ;
- les textes contractuels ou légaux ;
- les scènes 3D, WebGL, WebGPU, Three.js et React Three Fiber ;
- un audit de sécurité, un test d'intrusion ou une certification ;
- une capacité, règle métier ou structure produit nouvelle ;
- les enchères et autres éléments hors V1.

## 26. Critères d'acceptation

- [x] Les décisions techniques structurantes sont identifiées et motivées.
- [x] Les technologies et services tiers retenus sont vérifiés dans leur documentation officielle actuelle.
- [x] Le modèle conceptuel technique fixe les entités, relations et cardinalités structurantes sans anticiper le schéma SQL détaillé.
- [x] Chaque module définit ce qu'il possède, expose et consomme.
- [x] Les dépendances entre modules sont orientées et aucune dépendance circulaire d'implémentation n'est nécessaire.
- [x] Les frontières, validations et effets d'échec des transactions critiques sont explicites.
- [x] La frontière entre Server Components, Client Components, rendu prérendu et rendu dynamique est explicite.
- [x] Le découpage couvre tous les espaces et parcours de la V1.
- [x] Les invariants métier critiques disposent d'une garantie transactionnelle ou architecturale explicite.
- [x] La concurrence sur un exemplaire ne peut créer plusieurs réservations actives.
- [x] Les conditions acceptées restent immuables après engagement.
- [x] Les événements externes dupliqués, désordonnés ou tardifs sont traités sans incohérence.
- [x] L'accès acquéreur ne dépend pas d'un compte persistant obligatoire.
- [x] Les rôles Artiste et Administrateur peuvent être cumulés sans modifier l'identité de David.
- [x] Les profils Public, Acquéreur, Artiste et Administrateur disposent d'une synthèse d'accès non ambiguë.
- [x] Les données publiques, privées et sensibles sont séparées et protégées.
- [x] Aucune décision métier ou autorisation ne repose sur une donnée ou un secret contrôlé uniquement par le navigateur.
- [x] Les médias, preuves, déclarations et éléments d'authenticité disposent d'une stratégie d'accès et de sauvegarde.
- [x] Les exigences d'accessibilité et de performance sont traduites en mécanismes et contrôles.
- [x] La stratégie immersive privilégie CSS et Motion, respecte la réduction des mouvements et n'introduit aucun moteur 3D sans capacité validée.
- [x] Les environnements, migrations, déploiements, sauvegardes et restaurations sont définis.
- [x] Les objectifs RPO et RTO sont différenciés, vérifiables et compatibles avec le dispositif de sauvegarde retenu.
- [x] L'objectif interne mensuel de disponibilité et sa méthode de mesure sont explicitement définis.
- [x] L'observabilité distingue logs, erreurs, supervision et performance.
- [x] La stratégie de montée de version des dépendances est contrôlée et vérifiable.
- [x] La stratégie de tests couvre domaine, données, intégrations, parcours, accessibilité, performance et résilience.
- [x] Les réserves juridiques, fiscales, contractuelles et opérationnelles sont explicites et datées par une échéance.
- [x] La traçabilité avec les Sprints 003-r1, 004-r1 et 005-r1 est complète.
- [x] La référence rapide synthétise fidèlement les contrats sans devenir une source normative concurrente.
- [x] Aucune nouvelle capacité, règle métier ou décision UX n'est introduite.
- [x] Aucun détail d'implémentation prématuré n'est présenté comme une exigence produit.
- [x] Les choix de V1 sont isolés sans concevoir ni promettre les fonctionnalités hors périmètre.
- [x] L'audit final ne révèle aucune contradiction ni référence orpheline.
- [x] Le Product Owner valide le document et ses réserves explicites.

## 27. Validation

| Élément | Valeur |
|---|---|
| Statut documentaire | Validé |
| Verdict de la revue finale | Conforme |
| Réserves acceptées | `RES-01`, `RES-03` et `RES-04`, avec leurs échéances explicites |
| Décision du Product Owner | Validé |
| Date de validation | 2026-07-21 |
| Commit de clôture | À compléter |
| Tag Git | `sprint-006` |
