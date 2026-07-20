# Cahier des charges fonctionnel — AZUREUM V1

## Statut

- **Statut documentaire : Validé**
- **Statut du Sprint 003 : Verrouillé**

## Table des matières

1. [Objectif](#1-objectif)
2. [Références et décisions héritées](#2-références-et-décisions-héritées)
3. [Périmètre fonctionnel de la V1](#3-périmètre-fonctionnel-de-la-v1)
4. [Acteurs](#4-acteurs)
5. [Besoins des acteurs](#5-besoins-des-acteurs)
6. [Spécifications fonctionnelles](#6-spécifications-fonctionnelles)
7. [Exigences non fonctionnelles](#7-exigences-non-fonctionnelles)
8. [Priorisation](#8-priorisation)
9. [Hors périmètre](#9-hors-périmètre)
10. [Critères d’acceptation](#10-critères-dacceptation)
11. [Validation](#11-validation)

## 1. Objectif

Le Sprint 003 a pour objectif de définir, de manière explicite, priorisée et vérifiable, ce qu’AZUREUM doit permettre dans sa première version.

Son livrable est le cahier des charges fonctionnel de la V1. Il constitue la référence fonctionnelle du produit pour cette version. Il décrit les résultats attendus, les comportements observables et les limites du périmètre, sans concevoir les solutions qui permettront de les atteindre.

Le cahier des charges fonctionnel doit fournir un cadre de référence permettant aux sprints suivants de concevoir le produit, son modèle métier et son architecture, sans introduire implicitement de nouveaux besoins ni remettre en cause les décisions validées lors des sprints précédents.

> **Question directrice : Que doit permettre AZUREUM en V1 ?**

## 2. Références et décisions héritées

Le cahier des charges fonctionnel de la V1 s’inscrit dans les décisions déjà validées. Il ne les redéfinit pas et ne devient pas une seconde source de vérité pour ces informations.

### 2.1 Documents de référence

| Document | Autorité pour le Sprint 003 |
|---|---|
| `docs/sprints/SPRINT_002_PRODUCT_VISION.md` | Raison d’être, expérience recherchée et principes d’arbitrage du produit |
| `docs/product/ROADMAP.md` | Périmètres actuellement attribués à la V1 et à la V2 |
| `docs/GOVERNANCE.md` | Règles documentaires, validation et verrouillage des Sprints |
| `PROJECT_STATE.md` | État courant du projet et décisions déjà enregistrées |
| `docs/glossary/GLOSSARY.md` | Termes du projet et définitions validées lorsqu’elles existent |

En cas d’écart, le cahier des charges doit être corrigé ou la décision concernée doit suivre le processus d’évolution approprié. Il ne peut pas modifier implicitement un document déjà verrouillé.

### 2.2 Décisions héritées

Le Sprint 003 doit respecter les décisions suivantes :

- AZUREUM est une galerie d’art numérique premium consacrée durablement à David Prieur-Gélis ;
- David est l’unique artiste permanent présenté par le produit ;
- AZUREUM n’est pas destiné à devenir une marketplace multi-artistes ;
- la démarche artistique de David constitue le principe organisateur du produit ;
- l’acquisition des œuvres fait partie de l’expérience sans la définir ;
- en cas de conflit, la fidélité à la démarche artistique prime sur l’optimisation commerciale ;
- la V1 doit permettre de présenter et d’acquérir les œuvres de David ;
- les enchères sont exclues de la V1 et relèvent d’une version ultérieure ;
- aucune décision fonctionnelle du Sprint 003 ne doit imposer une architecture, une technologie ou une solution d’implémentation.

Ces décisions constituent des contraintes d’entrée. Le Sprint 003 doit en déterminer les conséquences fonctionnelles sans les remettre en discussion.

## 3. Périmètre fonctionnel de la V1

La V1 d’AZUREUM doit constituer une version cohérente, exploitable et autonome du produit. Elle doit permettre de présenter la démarche artistique de David Prieur-Gélis, de découvrir ses œuvres dans leur contexte et d’en permettre l’acquisition à prix fixe.

Son périmètre fonctionnel couvre quatre responsabilités principales.

### 3.1 Présenter la démarche artistique

AZUREUM doit permettre de présenter le travail de David au-delà d’une succession d’œuvres isolées.

La V1 doit pouvoir restituer :

- les œuvres ;
- les textes qui accompagnent son travail ;
- les ensembles auxquels les œuvres participent ;
- les expositions et événements qui contribuent à sa démarche ;
- l’évolution de son travail dans le temps.

### 3.2 Permettre la découverte des œuvres

La V1 doit permettre de découvrir les œuvres de David et d’accéder aux informations nécessaires pour les identifier, les situer dans sa démarche et connaître leur disponibilité.

Cette découverte doit rester organisée par la logique artistique du produit et non par la seule intention d’acquisition.

### 3.3 Permettre l’acquisition à prix fixe

La V1 doit permettre l’acquisition des œuvres proposées à la vente selon un prix défini.

Elle doit couvrir fonctionnellement :

- la connaissance du prix et de la disponibilité ;
- l’engagement dans une acquisition ;
- le paiement sécurisé ;
- la confirmation de l’opération ;
- le suivi de l’acquisition jusqu’à la remise physique de l’œuvre ;
- la remise des éléments attestant l’authenticité de l’œuvre lorsque ceux-ci sont requis.

Une acquisition est considérée comme achevée lorsque l’œuvre a été remise à l’acquéreur et que les éléments d’authenticité requis ont été remis lorsqu’ils sont applicables. Les modalités de cette remise — expédition, retrait, livraison ou autre — relèveront du Sprint consacré au modèle métier.

Les modalités métier détaillées de ces opérations seront définies dans le Sprint consacré au modèle métier.

### 3.4 Permettre l’exploitation du produit

La V1 doit permettre aux acteurs autorisés de maintenir les informations présentées et de superviser le fonctionnement courant du produit.

Elle doit notamment permettre :

- la gestion des contenus consacrés à la démarche artistique ;
- la gestion des œuvres et de leur disponibilité ;
- le suivi des acquisitions ;
- la supervision des opérations nécessitant un contrôle.

Cette responsabilité fonctionnelle ne préjuge ni des espaces, ni des interfaces, ni du modèle d’autorisation qui seront conçus ultérieurement.

### 3.5 Limite du périmètre

Le présent cahier des charges fonctionnel définit les capacités nécessaires à ces quatre responsabilités. Il ne définit pas encore leur organisation en pages, leurs parcours détaillés, leurs règles métier internes ou leur mise en œuvre technique.

Les exclusions précises de la V1 sont consolidées dans la section consacrée au hors périmètre.

## 4. Acteurs

Un acteur représente un rôle fonctionnel exercé par une personne qui interagit avec AZUREUM pour atteindre un objectif. Les acteurs décrivent des responsabilités fonctionnelles ; ils ne présupposent ni l’existence d’un compte, ni des permissions détaillées, ni une organisation particulière des interfaces.

Une même personne peut correspondre à plusieurs acteurs selon le contexte.

### ACT-01 — Visiteur

Personne qui accède à AZUREUM pour découvrir David Prieur-Gélis, sa démarche artistique, ses œuvres, ses textes, ses expositions et les autres éléments publics de son univers.

Le visiteur n’a pas nécessairement l’intention d’acquérir une œuvre.

### ACT-02 — Acquéreur

Personne qui manifeste l’intention d’acquérir une œuvre et réalise ou suit les opérations nécessaires à cette acquisition.

Un acquéreur peut également agir comme visiteur lorsqu’il découvre le travail de David.

La V1 ne doit pas imposer de compte persistant pour acquérir ou suivre une œuvre. Elle doit néanmoins permettre d’établir la légitimité de l’accès aux informations non publiques, sans prescrire le mécanisme correspondant.

### ACT-03 — David Prieur-Gélis

Artiste permanent auquel AZUREUM est consacré.

David intervient dans le produit afin que sa démarche artistique, ses œuvres et les contenus qui les accompagnent puissent être présentés et maintenus conformément à ses intentions.

Cette définition ne détermine pas encore son niveau d’autonomie ni les opérations qu’il peut réaliser directement.

### ACT-04 — Administrateur

Personne autorisée à superviser le fonctionnement courant d’AZUREUM et les opérations nécessitant un contrôle particulier.

L’administrateur veille à la cohérence des informations, au traitement des opérations sensibles et au bon fonctionnement du produit.

David et l’administrateur peuvent être une même personne, mais leurs responsabilités fonctionnelles restent distinctes.

### Distinctions importantes

- Le Product Owner et les personnes participant au développement ne sont pas des acteurs fonctionnels d’AZUREUM.
- Le terme « membre » n’est pas retenu comme acteur à ce stade : disposer d’un compte éventuel décrit une modalité d’accès, pas un objectif autonome.
- Aucun acteur supplémentaire ne doit être introduit sans besoin fonctionnel identifié.

## 5. Besoins des acteurs

Les besoins décrivent les résultats recherchés par chaque acteur. Ils ne présupposent ni fonctionnalité particulière, ni interface, ni organisation technique.

### 5.1 Besoins du visiteur

#### BES-VIS-01 — Découvrir la démarche artistique

Le visiteur a besoin d’appréhender le travail de David comme une démarche artistique, et non comme une simple succession d’œuvres isolées.

#### BES-VIS-02 — Explorer les différentes expressions du travail

Le visiteur a besoin de découvrir les œuvres, textes, expositions, installations, événements et autres éléments qui participent à l’univers artistique de David.

#### BES-VIS-03 — Comprendre le contexte d’une œuvre

Le visiteur a besoin d’accéder aux éléments qui permettent de situer une œuvre dans la démarche, les ensembles, les expositions ou l’évolution du travail de David.

#### BES-VIS-04 — Disposer d’informations fiables

Le visiteur a besoin de consulter des informations compréhensibles, cohérentes et à jour sur les œuvres et leur contexte.

#### BES-VIS-05 — Identifier les possibilités d’acquisition

Le visiteur a besoin de savoir si une œuvre peut être acquise, sans que cette information domine sa découverte artistique.

### 5.2 Besoins de l’acquéreur

#### BES-ACQ-01 — Évaluer une acquisition

L’acquéreur a besoin de disposer d’informations fiables sur l’œuvre, son prix, sa disponibilité et les conditions applicables avant de prendre une décision.

#### BES-ACQ-02 — Acquérir une œuvre avec confiance

L’acquéreur a besoin de réaliser l’acquisition dans un cadre compréhensible, sécurisé et prévisible.

#### BES-ACQ-03 — Connaître le résultat de l’opération

L’acquéreur a besoin de savoir si son acquisition et son paiement ont abouti, échoué ou nécessitent une action complémentaire.

#### BES-ACQ-04 — Suivre son acquisition

L’acquéreur a besoin de retrouver les informations importantes et de connaître l’avancement de son acquisition jusqu’à son achèvement.

#### BES-ACQ-05 — Disposer d’éléments d’authenticité

L’acquéreur a besoin de recevoir les éléments permettant d’attester l’authenticité de l’œuvre acquise lorsque ceux-ci sont requis.

### 5.3 Besoins de David Prieur-Gélis

#### BES-DAV-01 — Préserver la fidélité de la présentation

David a besoin que son travail soit présenté conformément à sa démarche artistique et à ses intentions.

#### BES-DAV-02 — Maintenir son univers artistique

David a besoin que les œuvres et les contenus qui les contextualisent puissent être ajoutés, actualisés et que leur présentation puisse évoluer lorsque cela est nécessaire.

#### BES-DAV-03 — Maîtriser la disponibilité des œuvres

David a besoin de déterminer quelles œuvres peuvent être acquises, à quel prix et selon quelles conditions fonctionnelles elles sont proposées.

#### BES-DAV-04 — Suivre les acquisitions

David a besoin de connaître les acquisitions qui concernent ses œuvres et leur état d’avancement.

#### BES-DAV-05 — Préserver la priorité artistique

David a besoin que les mécanismes commerciaux restent intégrés à la présentation de son travail sans en devenir le principe organisateur.

### 5.4 Besoins de l’administrateur

#### BES-ADM-01 — Maintenir la cohérence des informations

L’administrateur a besoin de contrôler et, lorsque cela est nécessaire, de corriger les informations présentées par AZUREUM.

#### BES-ADM-02 — Superviser les opérations sensibles

L’administrateur a besoin de contrôler les acquisitions, paiements et autres opérations nécessitant une vigilance particulière.

#### BES-ADM-03 — Traiter les situations anormales

L’administrateur a besoin d’identifier les opérations incomplètes, incohérentes ou en échec et de pouvoir intervenir selon les règles qui seront définies ultérieurement.

#### BES-ADM-04 — Disposer d’une traçabilité suffisante

L’administrateur a besoin de comprendre les événements importants ayant affecté les œuvres, leur disponibilité et les acquisitions.

#### BES-ADM-05 — Préserver l’intégrité fonctionnelle du produit

L’administrateur a besoin de s’assurer que les informations et opérations visibles dans AZUREUM restent cohérentes avec l’état réel du produit.

## 6. Spécifications fonctionnelles

### 6.1 Capacités fonctionnelles

Une capacité fonctionnelle décrit ce qu’AZUREUM doit permettre, sans déterminer l’interface, les règles métier détaillées ou la solution technique correspondante.

Chaque capacité doit répondre à au moins un besoin validé dans la section précédente.

#### Présentation de la démarche artistique

| Identifiant | Capacité | Besoins couverts |
|---|---|---|
| CAP-ART-01 | Présenter David Prieur-Gélis et les éléments permettant d’appréhender sa démarche artistique. | BES-VIS-01, BES-DAV-01 |
| CAP-ART-02 | Présenter chaque œuvre avec les informations artistiques et descriptives nécessaires à sa découverte. | BES-VIS-03, BES-VIS-04, BES-DAV-01 |
| CAP-ART-03 | Présenter les textes, expositions, installations, événements et ensembles qui participent à l’univers artistique de David. | BES-VIS-02, BES-DAV-02 |
| CAP-ART-04 | Établir des relations explicites entre les œuvres et les éléments qui les contextualisent. | BES-VIS-01, BES-VIS-03, BES-DAV-01 |
| CAP-ART-05 | Permettre de découvrir l’évolution du travail de David dans le temps. | BES-VIS-02, BES-VIS-03, BES-DAV-02 |
| CAP-ART-06 | Fournir des informations publiques cohérentes et à jour sur les œuvres et leur contexte. | BES-VIS-04, BES-DAV-02, BES-ADM-01 |

#### Découverte et acquisition des œuvres

| Identifiant | Capacité | Besoins couverts |
|---|---|---|
| CAP-ACQ-01 | Indiquer si une œuvre peut être acquise sans faire de cette information le principe organisateur de sa présentation. | BES-VIS-05, BES-DAV-05 |
| CAP-ACQ-02 | Présenter les informations nécessaires à l’évaluation d’une acquisition, notamment le prix, la disponibilité et les conditions applicables. | BES-ACQ-01, BES-DAV-03 |
| CAP-ACQ-03 | Permettre d’engager l’acquisition à prix fixe d’une œuvre disponible. | BES-ACQ-02 |
| CAP-ACQ-04 | Permettre le traitement sécurisé du paiement associé à une acquisition. | BES-ACQ-02, BES-ADM-02 |
| CAP-ACQ-05 | Informer l’acquéreur du résultat de son acquisition et des éventuelles actions attendues. | BES-ACQ-03 |
| CAP-ACQ-06 | Permettre à l’acquéreur de consulter les informations et l’avancement de son acquisition jusqu’à son achèvement. | BES-ACQ-04 |
| CAP-ACQ-07 | Permettre la remise des éléments attestant l’authenticité d’une œuvre acquise lorsqu’ils sont requis. | BES-ACQ-05 |
| CAP-ACQ-08 | Permettre de suivre et de constater la remise physique de l’œuvre à l’acquéreur. | BES-ACQ-04, BES-DAV-04, BES-ADM-02 |

#### Maintien du contenu et des œuvres

| Identifiant | Capacité | Besoins couverts |
|---|---|---|
| CAP-GES-01 | Permettre aux acteurs autorisés de maintenir les informations consacrées à David et à sa démarche artistique. | BES-DAV-01, BES-DAV-02, BES-ADM-01 |
| CAP-GES-02 | Permettre aux acteurs autorisés de maintenir les œuvres et les contenus qui les contextualisent. | BES-DAV-02, BES-ADM-01 |
| CAP-GES-03 | Permettre aux acteurs autorisés d’organiser les relations entre les œuvres, les textes, les ensembles, les expositions et les événements. | BES-DAV-02, BES-ADM-01 |
| CAP-GES-04 | Permettre aux acteurs autorisés de définir et de maintenir le prix, la disponibilité et les conditions fonctionnelles applicables aux œuvres proposées à l’acquisition. | BES-DAV-03, BES-ADM-01 |
| CAP-GES-05 | Permettre que la présentation des œuvres et des contenus évolue sans compromettre la cohérence des informations déjà publiées. | BES-DAV-02, BES-ADM-01, BES-ADM-05 |

#### Supervision fonctionnelle

| Identifiant | Capacité | Besoins couverts |
|---|---|---|
| CAP-SUP-01 | Permettre aux acteurs autorisés de consulter et de superviser les acquisitions concernant les œuvres de David. | BES-DAV-04, BES-ADM-02 |
| CAP-SUP-02 | Permettre d’identifier les acquisitions et paiements incomplets, incohérents ou en échec. | BES-ADM-02, BES-ADM-03 |
| CAP-SUP-03 | Permettre aux acteurs autorisés d’intervenir sur une situation anormale selon les règles qui seront définies ultérieurement. | BES-ADM-03 |
| CAP-SUP-04 | Conserver une trace exploitable des événements importants affectant les œuvres, leur disponibilité et les acquisitions. | BES-ADM-04, BES-ADM-05 |
| CAP-SUP-05 | Permettre de restreindre l’accès aux informations et opérations non publiques aux seuls acteurs autorisés. | BES-ACQ-02, BES-ACQ-04, BES-ADM-02, BES-ADM-05 |

Ces capacités définissent les responsabilités fonctionnelles générales de la V1. Elles ne déterminent ni leur priorité, ni leur organisation en interfaces, ni les règles métier détaillées nécessaires à leur réalisation.

### 6.2 Principaux cas d’usage

Un cas d’usage décrit une situation fonctionnelle dans laquelle un acteur mobilise une ou plusieurs capacités afin d’obtenir un résultat. Il ne décrit ni navigation, ni succession d’écrans, ni traitement métier interne.

#### CU-VIS-01 — Découvrir la démarche artistique de David

- **Acteur principal :** visiteur
- **Objectif :** appréhender le travail de David comme une démarche artistique.
- **Condition préalable :** les contenus concernés sont accessibles publiquement.
- **Déclencheur :** le visiteur commence à découvrir le travail de David dans AZUREUM.
- **Résultat attendu :** le visiteur accède à une présentation cohérente de David, de son univers et des différentes expressions de son travail.
- **Cas d’impossibilité principal :** certains contenus sont indisponibles ; la découverte reste possible sans présenter d’informations incohérentes.
- **Capacités associées :** CAP-ART-01, CAP-ART-03, CAP-ART-05, CAP-ART-06.

#### CU-VIS-02 — Découvrir une œuvre dans son contexte

- **Acteur principal :** visiteur
- **Objectif :** découvrir une œuvre et comprendre sa place dans la démarche artistique de David.
- **Condition préalable :** l’œuvre est accessible publiquement.
- **Déclencheur :** le visiteur s’intéresse à une œuvre.
- **Résultat attendu :** il peut consulter ses informations et accéder aux éléments artistiques qui la contextualisent.
- **Cas d’impossibilité principal :** aucun contexte complémentaire n’est disponible ; l’œuvre reste présentée avec des informations fiables sans produire de relation artificielle.
- **Capacités associées :** CAP-ART-02, CAP-ART-04, CAP-ART-06.

#### CU-VIS-03 — Vérifier si une œuvre peut être acquise

- **Acteur principal :** visiteur
- **Objectif :** connaître la disponibilité commerciale d’une œuvre.
- **Condition préalable :** l’œuvre est accessible publiquement.
- **Déclencheur :** le visiteur consulte les possibilités d’acquisition.
- **Résultat attendu :** il connaît la disponibilité, le prix et les conditions fonctionnelles applicables, sans ambiguïté avec les informations artistiques.
- **Cas d’impossibilité principal :** l’œuvre n’est pas disponible ; aucune acquisition ne peut être engagée.
- **Capacités associées :** CAP-ACQ-01, CAP-ACQ-02.

#### CU-ACQ-01 — Acquérir une œuvre à prix fixe

- **Acteur principal :** acquéreur
- **Objectif :** réaliser l’acquisition d’une œuvre disponible.
- **Conditions préalables :** l’œuvre est proposée à l’acquisition, son prix est défini et les conditions applicables sont accessibles.
- **Déclencheur :** l’acquéreur confirme son intention d’acquérir l’œuvre.
- **Résultat attendu :** le paiement est traité et l’acquéreur reçoit un résultat explicite concernant son acquisition.
- **Cas d’impossibilité principal :** l’œuvre n’est plus disponible, le paiement échoue ou une condition nécessaire n’est pas remplie ; l’acquisition n’est pas confirmée et l’acquéreur est informé.
- **Capacités associées :** CAP-ACQ-02, CAP-ACQ-03, CAP-ACQ-04, CAP-ACQ-05.

#### CU-ACQ-02 — Suivre une acquisition

- **Acteur principal :** acquéreur
- **Objectif :** connaître l’état et les informations importantes d’une acquisition.
- **Conditions préalables :** une acquisition concernant l’acquéreur existe et son accès peut être légitimement établi.
- **Déclencheur :** l’acquéreur souhaite consulter son acquisition.
- **Résultat attendu :** il accède à son état, aux éventuelles actions attendues et aux informations disponibles jusqu’à la remise physique de l’œuvre et des éléments d’authenticité requis.
- **Cas d’impossibilité principal :** l’accès ne peut pas être légitimement établi ; aucune information non publique n’est communiquée.
- **Capacités associées :** CAP-ACQ-05, CAP-ACQ-06, CAP-ACQ-07, CAP-ACQ-08, CAP-SUP-05.

#### CU-ACQ-03 — Obtenir les éléments d’authenticité

- **Acteur principal :** acquéreur
- **Objectif :** disposer des éléments attestant l’authenticité de l’œuvre acquise.
- **Conditions préalables :** l’acquisition est suffisamment avancée et ces éléments sont requis.
- **Déclencheur :** les conditions de remise des éléments d’authenticité sont satisfaites.
- **Résultat attendu :** l’acquéreur peut obtenir les éléments correspondant à l’œuvre acquise.
- **Cas d’impossibilité principal :** les conditions ne sont pas encore remplies ; les éléments ne sont pas remis prématurément.
- **Capacités associées :** CAP-ACQ-07.

#### CU-DAV-01 — Faire évoluer la présentation du travail artistique

- **Acteur principal :** David Prieur-Gélis
- **Objectif :** maintenir la présentation de sa démarche artistique.
- **Condition préalable :** David est autorisé à intervenir sur les contenus concernés.
- **Déclencheur :** une œuvre, un texte, une exposition, un événement ou une relation entre ces éléments doit être ajouté ou actualisé.
- **Résultat attendu :** la présentation évolue conformément à son intention sans compromettre la cohérence des informations existantes.
- **Cas d’impossibilité principal :** l’évolution demandée créerait une incohérence ; elle n’est pas appliquée comme si elle avait réussi.
- **Capacités associées :** CAP-GES-01, CAP-GES-02, CAP-GES-03, CAP-GES-05.

#### CU-DAV-02 — Définir les conditions d’acquisition d’une œuvre

- **Acteur principal :** David Prieur-Gélis
- **Objectif :** déterminer si une œuvre peut être acquise, à quel prix et selon quelles conditions fonctionnelles.
- **Condition préalable :** l’œuvre existe dans AZUREUM et David est autorisé à intervenir.
- **Déclencheur :** le prix, la disponibilité ou une condition fonctionnelle applicable à l’œuvre doit être défini ou actualisé.
- **Résultat attendu :** les informations d’acquisition publiques correspondent à la décision enregistrée.
- **Cas d’impossibilité principal :** les informations nécessaires sont incohérentes ou incomplètes ; l’œuvre ne doit pas être présentée comme disponible sur cette base.
- **Capacités associées :** CAP-GES-04, CAP-ART-06, CAP-ACQ-01, CAP-ACQ-02.

#### CU-DAV-03 — Suivre les acquisitions de ses œuvres

- **Acteur principal :** David Prieur-Gélis
- **Objectif :** connaître les acquisitions concernant ses œuvres.
- **Condition préalable :** David est autorisé à consulter les informations concernées.
- **Déclencheur :** David souhaite connaître l’état d’une acquisition.
- **Résultat attendu :** il accède aux informations utiles à son suivi, dans les limites de ses responsabilités.
- **Cas d’impossibilité principal :** une information ne relève pas de ses responsabilités ; elle ne lui est pas communiquée.
- **Capacités associées :** CAP-SUP-01, CAP-SUP-05.

#### CU-ADM-01 — Superviser une acquisition

- **Acteur principal :** administrateur
- **Objectif :** contrôler le bon déroulement fonctionnel d’une acquisition.
- **Condition préalable :** l’administrateur est autorisé à superviser l’opération.
- **Déclencheur :** une acquisition nécessite une consultation ou un contrôle.
- **Résultat attendu :** l’administrateur accède aux informations utiles et peut déterminer si l’opération suit son déroulement attendu.
- **Cas d’impossibilité principal :** les informations sont insuffisantes ou incohérentes ; l’opération est identifiable comme nécessitant une intervention.
- **Capacités associées :** CAP-SUP-01, CAP-SUP-02, CAP-SUP-04, CAP-SUP-05.

#### CU-ADM-02 — Traiter une situation anormale

- **Acteur principal :** administrateur
- **Objectif :** intervenir sur une acquisition ou une opération incomplète, incohérente ou en échec.
- **Conditions préalables :** la situation est identifiable et l’administrateur est autorisé à intervenir.
- **Déclencheur :** une anomalie nécessite un traitement.
- **Résultat attendu :** l’administrateur peut appliquer une action autorisée et le résultat de son intervention est traçable.
- **Cas d’impossibilité principal :** aucune intervention autorisée n’est applicable ; la situation reste identifiable sans être modifiée arbitrairement.
- **Capacités associées :** CAP-SUP-02, CAP-SUP-03, CAP-SUP-04, CAP-SUP-05.

### 6.3 Exigences fonctionnelles

Une exigence fonctionnelle décrit un comportement observable qu’AZUREUM doit respecter. Elle doit pouvoir être vérifiée indépendamment de l’interface, du modèle métier et de la solution technique.

Les priorités sont attribuées dans la section 8. Les liens vers les cas d’usage assurent la traçabilité avec les capacités, besoins et acteurs déjà définis.

#### Présentation de la démarche artistique

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-ART-01 | AZUREUM doit permettre un accès public aux contenus destinés à présenter David et sa démarche artistique. | CU-VIS-01 |
| EF-ART-02 | AZUREUM doit permettre de présenter les informations nécessaires pour identifier et découvrir chaque œuvre rendue publique. | CU-VIS-02 |
| EF-ART-03 | AZUREUM doit permettre de présenter publiquement les textes, expositions, installations, événements et ensembles retenus pour contextualiser le travail de David. | CU-VIS-01, CU-VIS-02 |
| EF-ART-04 | AZUREUM doit permettre d’établir des relations explicites entre une œuvre et les contenus qui la contextualisent. | CU-VIS-02, CU-DAV-01 |
| EF-ART-05 | AZUREUM doit permettre de présenter l’évolution du travail de David dans le temps. | CU-VIS-01 |
| EF-ART-06 | AZUREUM doit présenter des informations cohérentes entre une œuvre et les différents contextes dans lesquels elle apparaît. | CU-VIS-01, CU-VIS-02 |
| EF-ART-07 | AZUREUM ne doit pas présenter comme établie une relation artistique ou contextuelle qui n’a pas été définie par un acteur autorisé. | CU-VIS-02, CU-DAV-01 |
| EF-ART-08 | L’indisponibilité d’un contenu contextuel ne doit pas empêcher la consultation des autres informations publiques disponibles sur une œuvre. | CU-VIS-01, CU-VIS-02 |

#### Information relative à l’acquisition

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-ACQ-01 | AZUREUM doit indiquer de manière non ambiguë si une œuvre est disponible à l’acquisition. | CU-VIS-03, CU-DAV-02 |
| EF-ACQ-02 | Lorsqu’une œuvre est disponible, AZUREUM doit présenter son prix et les informations nécessaires à l’évaluation de son acquisition. | CU-VIS-03, CU-ACQ-01 |
| EF-ACQ-03 | Lorsqu’une œuvre n’est pas disponible, AZUREUM ne doit pas permettre d’engager son acquisition. | CU-VIS-03, CU-ACQ-01 |
| EF-ACQ-04 | Les informations d’acquisition présentées publiquement doivent correspondre aux informations validées par un acteur autorisé. | CU-VIS-03, CU-DAV-02 |
| EF-ACQ-05 | La présentation de la disponibilité et du prix ne doit pas empêcher l’accès aux informations artistiques de l’œuvre. | CU-VIS-02, CU-VIS-03 |

#### Réalisation d’une acquisition

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-ACH-01 | AZUREUM doit permettre d’engager l’acquisition à prix fixe d’une œuvre disponible. | CU-ACQ-01 |
| EF-ACH-02 | Avant tout engagement définitif, AZUREUM doit permettre à l’acquéreur de connaître l’œuvre concernée, son prix et les conditions applicables. | CU-ACQ-01 |
| EF-ACH-03 | AZUREUM doit recueillir les informations nécessaires à la réalisation et au suivi de l’acquisition. | CU-ACQ-01, CU-ACQ-02 |
| EF-ACH-04 | AZUREUM doit permettre le traitement du paiement correspondant au montant attendu pour l’acquisition. | CU-ACQ-01 |
| EF-ACH-05 | AZUREUM ne doit confirmer une acquisition qu’après satisfaction des conditions nécessaires à cette confirmation. | CU-ACQ-01 |
| EF-ACH-06 | AZUREUM doit informer explicitement l’acquéreur de la confirmation, de l’échec ou de l’impossibilité de poursuivre l’acquisition. | CU-ACQ-01 |
| EF-ACH-07 | Un paiement échoué ou non confirmé ne doit pas être présenté comme une acquisition achevée. | CU-ACQ-01 |
| EF-ACH-08 | AZUREUM ne doit pas confirmer simultanément l’acquisition d’une même œuvre unique à plusieurs acquéreurs. | CU-ACQ-01 |
| EF-ACH-09 | Toute acquisition confirmée doit disposer d’une référence permettant de l’identifier et de la suivre. | CU-ACQ-01, CU-ACQ-02 |

#### Suivi d’une acquisition

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-SUI-01 | AZUREUM doit permettre à l’acquéreur de retrouver les informations relatives à une acquisition qui le concerne. | CU-ACQ-02 |
| EF-SUI-02 | AZUREUM doit présenter l’état observable de l’acquisition et les éventuelles actions attendues de l’acquéreur. | CU-ACQ-02 |
| EF-SUI-03 | Les informations non publiques d’une acquisition ne doivent être accessibles qu’après établissement d’un accès légitime. | CU-ACQ-02 |
| EF-SUI-04 | AZUREUM doit permettre de suivre l’acquisition jusqu’à la remise physique de l’œuvre et des éléments d’authenticité requis. | CU-ACQ-02 |
| EF-SUI-05 | Une évolution importante de l’acquisition doit être reflétée dans les informations accessibles aux acteurs concernés. | CU-ACQ-02, CU-DAV-03, CU-ADM-01 |
| EF-SUI-06 | AZUREUM doit permettre à l’acquéreur d’accéder légitimement au suivi de son acquisition sans lui imposer de compte persistant. | CU-ACQ-02 |
| EF-SUI-07 | AZUREUM ne doit présenter une acquisition comme achevée que lorsque l’œuvre a été remise à l’acquéreur et que les éléments d’authenticité requis ont été remis lorsqu’ils sont applicables. | CU-ACQ-02, CU-ACQ-03 |

#### Authenticité

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-AUT-01 | AZUREUM doit permettre d’associer à une œuvre acquise les éléments d’authenticité requis. | CU-ACQ-03 |
| EF-AUT-02 | Les éléments d’authenticité doivent correspondre à l’œuvre et à l’acquisition concernées. | CU-ACQ-03 |
| EF-AUT-03 | AZUREUM ne doit permettre leur remise que lorsque les conditions applicables sont satisfaites. | CU-ACQ-03 |
| EF-AUT-04 | L’acquéreur doit pouvoir obtenir les éléments d’authenticité qui lui sont destinés lorsqu’ils sont disponibles. | CU-ACQ-03 |

#### Maintien des contenus et des œuvres

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-GES-01 | AZUREUM doit permettre aux acteurs autorisés de maintenir les informations consacrées à David et à sa démarche artistique. | CU-DAV-01 |
| EF-GES-02 | AZUREUM doit permettre aux acteurs autorisés de maintenir les œuvres et les informations qui les décrivent. | CU-DAV-01 |
| EF-GES-03 | AZUREUM doit permettre aux acteurs autorisés de maintenir les textes, expositions, installations, événements et ensembles artistiques. | CU-DAV-01 |
| EF-GES-04 | AZUREUM doit permettre aux acteurs autorisés d’organiser les relations entre les œuvres et les contenus qui les contextualisent. | CU-DAV-01 |
| EF-GES-05 | Les modifications validées doivent être reflétées de manière cohérente dans les informations présentées par AZUREUM. | CU-DAV-01, CU-DAV-02 |
| EF-GES-06 | AZUREUM doit empêcher qu’une information incomplète ou incohérente soit présentée comme une information validée. | CU-DAV-01, CU-DAV-02 |
| EF-GES-07 | AZUREUM doit permettre aux acteurs autorisés de définir et d’actualiser le prix d’une œuvre. | CU-DAV-02 |
| EF-GES-08 | AZUREUM doit permettre aux acteurs autorisés de définir et d’actualiser la disponibilité d’une œuvre. | CU-DAV-02 |
| EF-GES-09 | Une œuvre ne doit pas être présentée comme disponible si les informations nécessaires à son acquisition sont insuffisantes ou incohérentes. | CU-DAV-02 |
| EF-GES-10 | AZUREUM doit permettre aux acteurs autorisés de définir et d’actualiser les conditions fonctionnelles applicables à l’acquisition d’une œuvre. | CU-DAV-02 |

#### Supervision fonctionnelle

| Identifiant | Exigence fonctionnelle | Cas d’usage associés |
|---|---|---|
| EF-SUP-01 | AZUREUM doit permettre aux acteurs autorisés de consulter les acquisitions relevant de leurs responsabilités. | CU-DAV-03, CU-ADM-01 |
| EF-SUP-02 | AZUREUM doit permettre d’identifier une acquisition ou un paiement incomplet, incohérent ou en échec. | CU-ADM-01, CU-ADM-02 |
| EF-SUP-03 | AZUREUM doit fournir les informations nécessaires pour comprendre la situation observable d’une opération supervisée. | CU-ADM-01, CU-ADM-02 |
| EF-SUP-04 | AZUREUM doit permettre à l’administrateur d’effectuer les interventions qui lui sont autorisées sur une situation anormale. | CU-ADM-02 |
| EF-SUP-05 | Une intervention qui n’a pas abouti ne doit pas être présentée comme appliquée avec succès. | CU-ADM-02 |
| EF-SUP-06 | AZUREUM doit conserver une trace des événements importants affectant les œuvres, leur disponibilité et les acquisitions. | CU-DAV-03, CU-ADM-01, CU-ADM-02 |
| EF-SUP-07 | AZUREUM doit conserver une trace du résultat des interventions administratives. | CU-ADM-02 |
| EF-SUP-08 | AZUREUM doit limiter l’accès aux informations et opérations non publiques aux acteurs autorisés. | CU-ACQ-02, CU-DAV-01, CU-DAV-02, CU-DAV-03, CU-ADM-01, CU-ADM-02 |
| EF-SUP-09 | Chaque acteur autorisé ne doit accéder qu’aux informations et opérations relevant de ses responsabilités. | CU-DAV-01, CU-DAV-02, CU-DAV-03, CU-ADM-01, CU-ADM-02 |

Ces exigences définissent les comportements fonctionnels attendus de la V1. Les concepts métier, conditions détaillées, états, transitions, autorisations et mécanismes techniques nécessaires à leur réalisation seront définis dans les Sprints appropriés.

### 6.4 Comportements transversaux

Les comportements transversaux s’appliquent à plusieurs capacités fonctionnelles. Ils consolident les exigences précédentes sans créer de nouvelles règles métier ni dupliquer leur source normative.

#### CT-01 — Cohérence des informations

Une même information doit être présentée de manière cohérente partout où elle produit un effet observable.

Une information ne doit pas être présentée de manière contradictoire selon le contexte dans lequel elle est consultée.

**Exigences associées :** EF-ART-06, EF-ACQ-04, EF-SUI-05, EF-GES-05, EF-GES-06, EF-GES-09.

#### CT-02 — Résultat explicite des opérations sensibles

Toute opération sensible engagée par un acteur doit produire un résultat observable et compréhensible.

AZUREUM ne doit jamais présenter comme confirmée ou réussie une opération qui a échoué, reste incomplète ou n’a pas satisfait ses conditions de confirmation.

**Exigences associées :** EF-ACH-05, EF-ACH-06, EF-ACH-07, EF-SUP-05.

#### CT-03 — Protection des informations non publiques

Les informations et opérations non publiques ne doivent être accessibles qu’aux acteurs dont l’accès est légitimement établi et dans les limites de leurs responsabilités.

Cette protection s’applique notamment aux acquisitions, aux informations personnelles et aux opérations de gestion ou de supervision.

**Exigences associées :** EF-SUI-03, EF-SUP-08, EF-SUP-09.

#### CT-04 — Continuité de la consultation publique

L’indisponibilité d’un contenu secondaire ou contextuel ne doit pas rendre indisponibles les autres informations publiques qui peuvent être présentées de manière fiable.

AZUREUM doit éviter qu’une absence partielle soit compensée par une information supposée, artificielle ou incohérente.

**Exigences associées :** EF-ART-07, EF-ART-08.

#### CT-05 — Intégrité de l’acquisition

Une œuvre unique ne doit pas être confirmée comme acquise simultanément par plusieurs acquéreurs.

Les informations publiques relatives à sa disponibilité doivent rester cohérentes avec les acquisitions confirmées et les décisions validées par les acteurs autorisés.

**Exigences associées :** EF-ACQ-01, EF-ACQ-03, EF-ACQ-04, EF-ACH-05, EF-ACH-08, EF-GES-08, EF-GES-09.

#### CT-06 — Traçabilité des événements importants

Les événements affectant les œuvres, leur disponibilité, les acquisitions et les interventions administratives doivent laisser une trace exploitable par les acteurs autorisés.

La traçabilité doit permettre de comprendre les événements ayant conduit à l’état observable du produit, sans définir encore le mécanisme technique de journalisation.

**Exigences associées :** EF-SUP-06, EF-SUP-07.

#### CT-07 — Primauté de la démarche artistique

Les informations et capacités liées à l’acquisition doivent s’intégrer à la présentation artistique sans empêcher l’accès aux œuvres et à leur contexte ni devenir le principe organisateur de l’expérience.

**Exigences associées :** EF-ACQ-05, EF-ART-01, EF-ART-02, EF-ART-03, EF-ART-04.

Ces comportements transversaux servent de grille de cohérence pour les capacités et exigences fonctionnelles. Leur mise en œuvre concrète sera définie dans les Sprints de conception, de métier et d’architecture appropriés.

## 7. Exigences non fonctionnelles

Les exigences non fonctionnelles définissent les qualités attendues d’AZUREUM V1. Elles décrivent des résultats vérifiables sans déterminer les solutions techniques permettant de les atteindre.

Les obligations relatives aux données personnelles devront être confirmées par une revue juridique adaptée. Les principes retenus s’appuient notamment sur les principes généraux du RGPD tels qu’interprétés par l’autorité compétente.

### 7.1 Référentiels applicables

- Règlement général sur la protection des données — Règlement (UE) 2016/679 ;
- CNIL — principes généraux relatifs à la protection des données personnelles ;
- W3C — Web Content Accessibility Guidelines, version 2.2, niveau AA.

### 7.2 Accessibilité

La cible produit est la conformité au niveau AA des WCAG 2.2, dont les critères sont formulés de manière vérifiable et indépendante des technologies.

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-ACC-01 | Les contenus et capacités essentiels de la V1 doivent respecter les critères applicables des WCAG 2.2 de niveau AA. |
| ENF-ACC-02 | Les capacités essentielles doivent pouvoir être utilisées sans dépendre exclusivement d’un dispositif de pointage. |
| ENF-ACC-03 | Une information ou un état ne doit pas être communiqué uniquement par une couleur, une position, un son ou une autre caractéristique sensorielle isolée. |
| ENF-ACC-04 | Les contenus non textuels nécessaires à la compréhension ou à l’utilisation du produit doivent disposer d’une alternative adaptée à leur fonction, sans prétendre remplacer l’expérience artistique de l’œuvre. |
| ENF-ACC-05 | Les opérations sensibles doivent fournir des indications permettant de comprendre et de corriger les erreurs qui empêchent leur réalisation. |
| ENF-ACC-06 | Les contenus et capacités essentiels doivent rester utilisables sur des formats d’affichage courants sans perte d’information ou de fonctionnalité indispensable. |

### 7.3 Protection des données personnelles et RGPD

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-RGPD-01 | AZUREUM ne doit collecter que les données personnelles nécessaires à des finalités explicites et légitimes. |
| ENF-RGPD-02 | Avant ou au moment de la collecte, la personne concernée doit pouvoir connaître les finalités du traitement, les données nécessaires, leur utilisation et les modalités d’exercice de ses droits. |
| ENF-RGPD-03 | Les données personnelles ne doivent pas être réutilisées pour une finalité incompatible avec celle annoncée lors de leur collecte. |
| ENF-RGPD-04 | La conservation des données personnelles doit être limitée à la durée nécessaire aux finalités concernées et aux obligations applicables. |
| ENF-RGPD-05 | AZUREUM doit permettre l’exercice des droits applicables aux personnes concernées, sans présumer que tous ces droits s’exercent de manière identique dans chaque situation. |
| ENF-RGPD-06 | Lorsqu’un traitement repose sur le consentement, son obtention et son retrait doivent être possibles dans des conditions conformes aux obligations applicables. |
| ENF-RGPD-07 | Les informations personnelles doivent être non publiques par défaut, sauf décision explicite et légitime contraire. |
| ENF-RGPD-08 | Les traitements de données personnelles nécessaires à AZUREUM devront pouvoir être recensés et justifiés avant la mise en service. |

### 7.4 Sécurité et confidentialité

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-SEC-01 | AZUREUM doit protéger les informations non publiques contre l’accès, la divulgation, l’altération et la perte non autorisés. |
| ENF-SEC-02 | L’accès à une opération sensible doit nécessiter l’établissement d’un accès légitime correspondant aux responsabilités de l’acteur. |
| ENF-SEC-03 | Une information sensible ne doit pas être révélée dans un message public, un retour d’erreur ou une réponse destinée à un acteur non autorisé. |
| ENF-SEC-04 | Les données nécessaires au paiement doivent être limitées à ce qui est requis pour réaliser et justifier l’opération. |
| ENF-SEC-05 | Une opération sensible ne doit pas pouvoir être considérée comme autorisée sur la seule base d’une information contrôlée par l’acteur qui la demande. |
| ENF-SEC-06 | Les incidents susceptibles d’affecter la confidentialité, l’intégrité ou la disponibilité des données doivent pouvoir être détectés et faire l’objet d’un traitement traçable. |

### 7.5 Performance perçue

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-PERF-01 | Dans les conditions de référence définies pour la validation, le contenu principal d’une consultation publique doit devenir perceptible en moins de 2,5 secondes. |
| ENF-PERF-02 | Toute action engagée par une personne doit produire un retour perceptible en moins d’une seconde ou présenter une indication explicite lorsque son traitement se poursuit. |
| ENF-PERF-03 | Le chargement de contenus artistiques volumineux ne doit pas empêcher l’accès aux informations essentielles déjà disponibles. |
| ENF-PERF-04 | Les conditions de mesure utilisées pour vérifier les performances doivent être documentées et reproductibles. |

### 7.6 Fiabilité et intégrité

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-FIA-01 | Une défaillance ne doit pas transformer une opération incomplète en opération présentée comme réussie. |
| ENF-FIA-02 | La répétition involontaire d’une même demande ne doit pas produire plusieurs acquisitions ou paiements confirmés pour une seule intention. |
| ENF-FIA-03 | Une interruption ne doit pas laisser les informations visibles dans un état contradictoire concernant une œuvre, sa disponibilité ou son acquisition. |
| ENF-FIA-04 | Après une défaillance, les acteurs autorisés doivent pouvoir déterminer l’état observable de l’opération concernée. |
| ENF-FIA-05 | Une donnée validée ne doit pas disparaître ou être altérée sans qu’une action autorisée ou un événement identifiable puisse l’expliquer. |

### 7.7 Disponibilité

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-DIS-01 | Les contenus publics et les capacités indispensables doivent être disponibles dans les conditions normales d’exploitation du produit. |
| ENF-DIS-02 | Une indisponibilité connue affectant une capacité essentielle doit être rendue compréhensible sans présenter de résultat trompeur. |
| ENF-DIS-03 | L’indisponibilité d’une dépendance externe ne doit pas être présentée comme une réussite de l’opération qui en dépend. |
| ENF-DIS-04 | Tout objectif chiffré de disponibilité devra être validé avant les choix d’architecture qu’il contraint. |

### 7.8 Compatibilité des usages

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-COM-01 | Les contenus et capacités essentiels de la V1 doivent être utilisables sur les formats mobiles et ordinateurs couramment employés. |
| ENF-COM-02 | Une matrice explicite des environnements pris en charge devra être validée avant le début du développement. |
| ENF-COM-03 | Une différence de format d’affichage ne doit pas modifier le sens d’une information ni empêcher une capacité indispensable. |
| ENF-COM-04 | La V1 ne doit pas exiger l’installation d’une application native pour accéder à ses capacités essentielles. |

### 7.9 Traçabilité

| Identifiant | Exigence non fonctionnelle |
|---|---|
| ENF-TRA-01 | Les traces fonctionnelles doivent permettre de relier les événements importants à l’œuvre, à l’acquisition ou à l’intervention concernée. |
| ENF-TRA-02 | Les traces contenant des informations non publiques ne doivent être accessibles qu’aux acteurs autorisés. |
| ENF-TRA-03 | La durée de disponibilité des traces doit être cohérente avec leur finalité et les obligations applicables. |
| ENF-TRA-04 | Les traces doivent permettre de distinguer un événement produit par une personne, par AZUREUM ou par une dépendance externe lorsque cette distinction est nécessaire à la compréhension de la situation. |

Les seuils et référentiels mentionnés dans cette section constituent des exigences produit. Leur traduction en mécanismes techniques, niveaux de service et protocoles de test relève des Sprints ultérieurs.

## 8. Priorisation

La priorisation détermine ce qui est nécessaire pour que la V1 remplisse sa finalité. Elle ne définit ni l’ordre de développement ni l’organisation des futurs lots d’implémentation.

### 8.1 Niveaux de priorité

#### Indispensable

Élément sans lequel la V1 ne satisfait pas un besoin essentiel, une décision verrouillée, une obligation applicable ou une condition nécessaire à son exploitation fiable.

Un élément indispensable ne peut être retiré de la V1 sans décision explicite du Product Owner et réévaluation du périmètre.

#### Souhaitable

Élément apportant une valeur réelle à la V1, mais dont le report n’empêche pas le produit de remplir sa finalité principale.

Son intégration dépendra des contraintes découvertes lors des Sprints suivants.

#### Futur

Élément exclu de la V1.

Cette qualification n’est pas un engagement de réalisation. Toute intégration future nécessitera une décision et un périmètre validés.

### 8.2 Priorité des capacités fonctionnelles

#### Capacités indispensables

- CAP-ART-01 — Présenter David et sa démarche artistique ;
- CAP-ART-02 — Présenter chaque œuvre ;
- CAP-ART-03 — Présenter les contenus qui participent à son univers ;
- CAP-ART-04 — Relier les œuvres à leur contexte ;
- CAP-ART-05 — Permettre de découvrir l’évolution du travail de David dans le temps ;
- CAP-ART-06 — Fournir des informations publiques cohérentes ;
- CAP-ACQ-01 à CAP-ACQ-08 — Permettre l’acquisition des œuvres, son suivi, leur remise physique et la remise des éléments d’authenticité lorsqu’ils sont requis ;
- CAP-GES-01 à CAP-GES-05 — Maintenir les contenus, œuvres et informations d’acquisition ;
- CAP-SUP-01 à CAP-SUP-05 — Superviser les opérations et protéger les accès.

Ces capacités couvrent directement la présentation de la démarche artistique, l’acquisition à prix fixe et l’exploitation fiable du produit.

#### Capacités souhaitables

Aucune capacité souhaitable n’est actuellement retenue. Toute capacité spécifiée dans la section 6.1 est indispensable à la V1.

#### Capacités futures

Aucune capacité future n’est incluse dans les spécifications fonctionnelles de la V1. Les capacités exclues sont recensées dans la section 9.

### 8.3 Priorité des exigences fonctionnelles

Toutes les exigences fonctionnelles de la section 6.3 sont **indispensables**.

### 8.4 Priorité des comportements transversaux

Tous les comportements transversaux CT-01 à CT-07 sont **indispensables**.

Ils garantissent :

- la cohérence des informations ;
- l’exactitude des résultats présentés ;
- la protection des informations non publiques ;
- la continuité de la consultation ;
- l’intégrité des acquisitions ;
- la traçabilité ;
- la primauté de la démarche artistique.

### 8.5 Priorité des exigences non fonctionnelles

Toutes les exigences non fonctionnelles de la section 7 sont **indispensables lorsqu’elles sont applicables à la capacité concernée**.

Ces exigences concernent notamment :

- l’accessibilité WCAG 2.2 AA ;
- la protection des données personnelles ;
- la sécurité et la confidentialité ;
- la performance perçue ;
- la fiabilité ;
- la disponibilité ;
- la compatibilité des usages ;
- la traçabilité.

Les exigences qui prévoient une décision ultérieure — objectif chiffré de disponibilité ou matrice des environnements pris en charge — imposent que cette décision soit prise avant l’étape qu’elles contraignent. Elles n’autorisent pas leur abandon implicite.

### 8.6 Règles d’arbitrage

- Une capacité souhaitable ne doit pas compromettre une capacité indispensable.
- Une contrainte de délai ou de complexité ne suffit pas à retirer implicitement une exigence indispensable.
- Toute impossibilité de satisfaire une exigence indispensable doit être remontée au Product Owner.
- Le report d’un élément souhaitable doit être explicite et documenté.
- Un élément futur ne peut entrer dans la V1 sans décision de changement de périmètre.
- La priorité artistique définie par la vision reste applicable à tous les arbitrages fonctionnels.

## 9. Hors périmètre

Cette section distingue les éléments exclus de la V1, les sujets nécessaires mais réservés à des Sprints ultérieurs et les évolutions déjà attribuées à une version future.

Une exclusion du Sprint 003 ne signifie pas nécessairement que le besoin est abandonné. Elle indique qu’il ne doit pas être défini dans le présent cahier des charges.

### 9.1 Hors périmètre de la V1

Les éléments suivants sont explicitement exclus de la V1 :

- l’accueil permanent de plusieurs artistes ;
- la transformation d’AZUREUM en marketplace ;
- les enchères, y compris les offres manuelles ou automatisées, les mécanismes de surenchère et les prolongations anti-snipe ;
- les fonctionnalités de réseau social ;
- les commentaires, mentions d’appréciation et systèmes de popularité sociale ;
- la messagerie entre utilisateurs ;
- les NFT ;
- les paiements en cryptomonnaies ;
- une application mobile native ;
- la création d’un produit générique permettant à des tiers de construire leur propre galerie.

Ces exclusions ne doivent pas empêcher AZUREUM de présenter durablement le travail de David ni de permettre l’acquisition à prix fixe de ses œuvres.

### 9.2 Hors périmètre du Sprint 003

Les sujets suivants pourront être nécessaires au produit, mais ne doivent pas être définis dans le cahier des charges fonctionnel :

#### Conception du produit

- les pages et écrans ;
- la navigation ;
- l’architecture de l’information ;
- les parcours détaillés ;
- les wireframes ;
- les interactions détaillées ;
- la direction visuelle ;
- les composants d’interface.

#### Modèle métier

- les concepts et objets métier ;
- leurs relations normatives ;
- les états et transitions ;
- les cycles de vie ;
- les invariants ;
- les règles détaillées de prix et de disponibilité ;
- les conditions détaillées de confirmation ou d’annulation d’une acquisition ;
- les règles de remise d’une œuvre ;
- les règles détaillées relatives aux éléments d’authenticité ;
- le modèle normatif des responsabilités et autorisations.

#### Architecture et technique

- l’architecture applicative ;
- les technologies ;
- le modèle de données ;
- la base de données ;
- les API ;
- les mécanismes d’authentification ;
- les mécanismes techniques d’autorisation ;
- le fournisseur et l’intégration du paiement ;
- l’hébergement ;
- l’infrastructure ;
- la supervision technique ;
- les dépendances logicielles.

#### Implémentation et validation technique

- le code ;
- les migrations ;
- les composants ;
- les scripts ;
- la configuration des services ;
- les tests automatisés ;
- les procédures de déploiement.

### 9.3 Éléments réservés à une version ultérieure

La roadmap attribue à une version ultérieure l’éventuelle introduction d’un moteur d’enchères.

Cela peut notamment concerner :

- les offres manuelles ;
- les enchères maximales automatisées ;
- les incréments ;
- l’historique des offres ;
- les prolongations anti-snipe ;
- les règles de clôture ;
- les notifications liées aux enchères ;
- les délais de paiement propres à ce mode d’acquisition.

Cette attribution ne constitue pas encore un cahier des charges de la V2. Son déclenchement, son périmètre et ses spécifications devront faire l’objet d’une décision et d’un Sprint dédiés.

### 9.4 Éléments non décidés

Tout élément absent des exigences validées ne doit pas être considéré comme implicitement inclus dans la V1.

Une idée nouvelle doit être :

1. reliée à un besoin identifié ;
2. évaluée au regard de la vision ;
3. qualifiée comme indispensable, souhaitable ou future ;
4. validée par le Product Owner ;
5. intégrée dans le document qui en constitue la référence.

Une nouvelle condition d’acquisition qui modifierait le périmètre, les acteurs ou les capacités du produit nécessiterait une évolution explicite du présent cahier des charges. Elle ne pourrait pas être introduite implicitement par le Sprint consacré au modèle métier.

## 10. Critères d’acceptation

Le Sprint 003 pourra être proposé au verrouillage uniquement lorsque tous les critères suivants seront satisfaits.

### 10.1 Couverture fonctionnelle

- [ ] La finalité fonctionnelle de la V1 est explicitement définie.
- [ ] Tous les acteurs nécessaires à la V1 sont identifiés.
- [ ] Chaque acteur possède au moins un besoin fonctionnel explicite.
- [ ] Chaque besoin retenu est couvert par au moins une capacité fonctionnelle.
- [ ] Chaque capacité indispensable est représentée dans au moins un cas d’usage.
- [ ] Chaque cas d’usage indispensable est couvert par des exigences fonctionnelles vérifiables.
- [ ] Les comportements transversaux nécessaires à la cohérence du produit sont définis.
- [ ] Les exigences non fonctionnelles applicables à la V1 sont explicitées.
- [ ] Les éléments d’acquisition, de suivi et d’authenticité nécessaires à la V1 sont couverts.
- [ ] Les capacités nécessaires à la présentation de la démarche artistique de David sont couvertes.

### 10.2 Traçabilité

- [ ] La chaîne de traçabilité principale peut être vérifiée dans les deux sens :

  > Vision → acteur → besoin → capacité → cas d’usage → exigence

- [ ] Lorsqu’un comportement transversal s’applique, son rattachement aux exigences concernées est vérifiable.
- [ ] Aucune exigence fonctionnelle n’existe sans besoin ou cas d’usage identifiable.
- [ ] Aucun besoin indispensable ne reste sans réponse fonctionnelle.
- [ ] Les exigences non fonctionnelles sont reliées aux qualités attendues du produit ou aux obligations applicables.

### 10.3 Priorisation et périmètre

- [ ] Toutes les capacités et exigences sont qualifiées comme indispensables, souhaitables ou futures.
- [ ] Les éléments indispensables permettent à la V1 de remplir sa finalité.
- [ ] Les éléments souhaitables peuvent être différés sans invalider la V1.
- [ ] Les éléments futurs ne sont pas présentés comme des engagements de réalisation.
- [ ] Le périmètre de la V1 est explicite.
- [ ] Les exclusions de la V1 sont explicites.
- [ ] Les sujets réservés aux Sprints de conception, de métier, d’architecture et d’implémentation sont clairement identifiés.
- [ ] Les enchères et leurs mécanismes associés sont explicitement exclus de la V1.

### 10.4 Respect des décisions héritées

- [ ] Le cahier des charges reste cohérent avec la vision verrouillée du Sprint 002.
- [ ] David Prieur-Gélis demeure l’unique artiste permanent concerné par le produit.
- [ ] La démarche artistique reste le principe organisateur d’AZUREUM.
- [ ] L’acquisition est intégrée à l’expérience sans la définir.
- [ ] Aucune exigence ne transforme AZUREUM en marketplace ou en produit générique multi-artistes.
- [ ] Aucune décision héritée n’est modifiée implicitement.

### 10.5 Respect du niveau fonctionnel

- [ ] Le cahier des charges ne définit aucune page ou aucun écran.
- [ ] Il ne définit ni navigation, ni architecture de l’information, ni wireframe.
- [ ] Il ne fixe aucune règle métier détaillée, aucun état interne ni aucune transition normative.
- [ ] Il ne définit aucune architecture technique.
- [ ] Il n’impose aucune technologie, base de données, API ou dépendance.
- [ ] Il ne contient aucun choix d’implémentation.
- [ ] Les exigences décrivent des résultats ou comportements observables et vérifiables.
- [ ] Aucune formulation fonctionnelle ne masque une décision métier ou technique implicite.

### 10.6 Qualité documentaire

- [ ] Les identifiants des besoins, capacités, cas d’usage et exigences sont uniques et cohérents.
- [ ] Les termes employés sont cohérents dans l’ensemble du document.
- [ ] Chaque information normative possède une source de vérité identifiable.
- [ ] Les références aux documents verrouillés sont correctes.
- [ ] Aucune hypothèse n’est présentée comme une décision validée.
- [ ] Toutes les questions structurantes relevant du Sprint 003 sont résolues.
- [ ] Le document peut être compris sans dépendre de l’historique des discussions.

### 10.7 Validation et clôture

- [ ] Une revue complète du cahier des charges a été effectuée.
- [ ] Les éventuelles contradictions détectées ont été corrigées ou explicitement arbitrées.
- [ ] La documentation de référence reflète l’état réel du projet.
- [ ] `git diff --check` réussit.
- [ ] Le dépôt ne contient aucune modification hors périmètre.
- [ ] Le Product Owner a validé le cahier des charges fonctionnel.
- [ ] Le Product Owner a prononcé le verrouillage du Sprint 003.
- [ ] Le livrable validé a été enregistré dans Git.
- [ ] Le Sprint verrouillé a reçu son tag Git conformément à la gouvernance.

## 11. Validation

Cette section consigne la revue finale et la décision de verrouillage du Sprint 003. Elle ne peut être complétée définitivement qu’après assemblage et audit du cahier des charges fonctionnel.

### 11.1 État de la rédaction

Les sections du cahier des charges ont été construites et validées individuellement par le Product Owner.

Le document a été relu dans son ensemble afin de vérifier :

- sa cohérence globale ;
- la couverture des besoins ;
- la traçabilité entre ses sections ;
- l’absence de contradiction ;
- le respect du périmètre fonctionnel ;
- la satisfaction des critères d’acceptation.

La validation individuelle des sections a été complétée par cette revue finale.

### 11.2 Revue finale

La revue finale doit produire l’un des verdicts suivants :

- **Aucun bloqueur détecté** : le document peut être soumis au verrouillage ;
- **Corrections indispensables** : seules les incohérences nécessaires à la validation doivent être corrigées ;
- **Décision du Product Owner requise** : une question fonctionnelle structurante reste à arbitrer.

Toute réserve acceptée par le Product Owner doit être explicitement consignée avant le verrouillage.

### 11.3 Décision du Product Owner

La décision finale doit enregistrer :

| Élément | Valeur |
|---|---|
| Statut documentaire | Validé |
| Verdict de la revue finale | Validé avec correction documentaire mineure effectuée |
| Réserves acceptées | Aucune |
| Décision du Product Owner | Cahier des charges fonctionnel V1 validé ; Sprint 003 verrouillé |
| Date de validation | 20 juillet 2026 |
| Commit de clôture | À compléter |
| Tag Git | À compléter |

La décision du Product Owner constitue la référence officielle du statut du Sprint 003.

À compter du verrouillage du Sprint 003, toute modification du cahier des charges fonctionnel devra suivre le processus de gouvernance applicable et faire l’objet d’une décision explicite du Product Owner.

### 11.4 Condition de verrouillage

Le Sprint 003 pourra être déclaré verrouillé uniquement lorsque :

- tous les critères d’acceptation applicables seront satisfaits ;
- aucune question structurante relevant du Sprint 003 ne restera ouverte ;
- la revue finale sera terminée ;
- le Product Owner aura validé le cahier des charges ;
- le document officiel et l’état du projet seront cohérents ;
- les modifications auront été enregistrées dans Git ;
- le tag du Sprint aura été créé conformément à la gouvernance.

Jusqu’à la réalisation de ces opérations, le Sprint 003 demeure **En cours** et le cahier des charges demeure **En exploration**.

Après la validation du Product Owner, le statut documentaire devra être mis à jour en **Validé** et le statut du Sprint en **Verrouillé** avant le commit et la création du tag de clôture. Le cahier des charges constituera alors la référence fonctionnelle officielle de la V1 d’AZUREUM jusqu’à l’adoption explicite d’une évolution conforme à la gouvernance.
