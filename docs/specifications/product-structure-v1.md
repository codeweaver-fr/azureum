# Structure fonctionnelle du produit — AZUREUM V1

| Métadonnée | Valeur |
|---|---|
| Statut | Validé |
| Version | V1 |
| Sprint d'origine | Sprint 005 |
| Référence fonctionnelle | `docs/specifications/functional-specification-v1.md` (`sprint-003-r1`) |
| Référence métier | `docs/specifications/business-rules-v1.md` (`sprint-004-r1`) |

## Référentiel des identifiants

| Préfixe | Signification | Exemple |
|---|---|---|
| `PS` | Principe structurel | `PS-03` |
| `ESP` | Espace fonctionnel | `ESP-PUB` |
| `V` | Vue ou page fonctionnelle | `V-PUB-04` |
| `PAR` | Parcours fonctionnel | `PAR-03` |

### Espaces

| Code | Signification |
|---|---|
| `PUB` | Galerie publique |
| `ACQ` | Parcours d'acquisition |
| `SUI` | Suivi d'acquisition |
| `DAV` | Gestion artistique de David |
| `ADM` | Supervision administrative |

### Vues

Les vues reprennent le code de leur espace :

- `V-PUB-*` : vues publiques ;
- `V-ACQ-*` : parcours d'acquisition ;
- `V-SUI-*` : suivi de l'acquéreur ;
- `V-DAV-*` : gestion artistique ;
- `V-ADM-*` : supervision.

### Traçabilité

Les références provenant d'autres sprints conservent leur signification :

| Préfixe | Provenance |
|---|---|
| `CAP` | Capacité fonctionnelle (Sprint 003-r1) |
| `CU` | Cas d'usage (Sprint 003-r1) |
| `CT` | Comportement transversal (Sprint 003-r1) |
| `RM` | Règle métier (Sprint 004-r1) |
| `INV` | Invariant métier (Sprint 004-r1) |
| `H` | Décision produit structurante (Sprint 004-r1) |
| `IF` | Interprétation fonctionnelle (Sprint 004-r1) |

## 1. Objectif

Le présent document définit comment AZUREUM organise ses espaces, ses informations et ses parcours afin de rendre utilisables les capacités de la V1.

Il transforme les capacités fonctionnelles et les règles métier validées en une structure de produit compréhensible, sans définir sa réalisation technique ni sa présentation graphique détaillée.

> **Question directrice : Comment AZUREUM organise-t-il ses espaces, ses informations et ses parcours afin de rendre utilisables les capacités de la V1 ?**

## 2. Règle de périmètre

Aucune décision du Sprint 005 ne peut modifier une capacité du Sprint 003-r1 ni une règle métier du Sprint 004-r1.

Toute contradiction détectée doit être signalée au Product Owner. Elle ne doit jamais être résolue implicitement par une décision de navigation, de présentation ou de parcours.

Le document définit uniquement :

- les espaces fonctionnels du produit ;
- les pages et vues nécessaires ;
- l'architecture de l'information ;
- les relations de navigation ;
- les parcours principaux ;
- les informations et actions perceptibles selon les acteurs ;
- les états perceptibles nécessaires à la compréhension des situations.

Il ne définit ni règle métier, ni modèle de données, ni technologie, ni composant, ni API, ni mécanisme d'authentification, ni maquette graphique détaillée.

## 3. Principes d'organisation

### PS-01 — Primauté de la démarche artistique

AZUREUM est avant tout une expérience artistique consacrée au travail et à la démarche de David. L'organisation de la galerie publique doit favoriser la découverte, la compréhension et la continuité de cette expérience.

L'acquisition s'y intègre lorsqu'elle est applicable, sans devenir l'axe principal de la présentation, de l'architecture de l'information ou de la navigation publique.

### PS-02 — Continuité entre œuvre et contexte

Une œuvre doit pouvoir être découverte avec les textes, expositions, installations, événements, ensembles et repères temporels qui la contextualisent.

### PS-03 — Continuité d'une acquisition

Une personne doit pouvoir passer de la découverte d'un exemplaire disponible à l'examen de ses conditions, puis suivre l'acquisition qui en résulte sans perdre l'identité de l'œuvre concernée.

### PS-04 — Séparation des identités, rôles et responsabilités

AZUREUM distingue l'identité artistique de David Prieur-Gélis, les utilisateurs, les rôles et les responsabilités opérationnelles. Les rôles Artiste et Administrateur portent des autorisations distinctes et peuvent être cumulés par un même utilisateur sans être confondus.

L'attribution d'un rôle ne modifie ni l'identité de l'artiste, ni l'attribution des œuvres, ni les qualités d'auteur, de propriétaire initial ou de vendeur exclusivement attachées à David Prieur-Gélis dans la V1.

### PS-05 — Accès légitime sans solution imposée

L'organisation prévoit l'accès de l'acquéreur au suivi de son acquisition sans imposer un compte persistant ni un mécanisme d'accès particulier.

### PS-06 — Résultat perceptible

Toute action sensible doit présenter un résultat compréhensible : réussite, attente, impossibilité, échec ou intervention nécessaire.

### PS-07 — Collections comme accès structurant

Toute œuvre appartient à exactement une collection. Cette collection constitue son accès principal dans l'exploration de la galerie publique, rassemble les œuvres selon une intention artistique définie et préserve les relations qui leur donnent sens.

Dans le présent document, une collection est la forme de présentation publique d'un ensemble artistique validé au sens du Sprint 003-r1. Elle n'introduit ni nouvelle catégorie métier ni regroupement commercial implicite.

### PS-08 — Découverte éditoriale

La découverte publique de la V1 repose sur la navigation, les collections et les relations contextuelles entre les contenus. Aucun dispositif fonctionnel de recherche ou de filtrage n'est exigé.

## 4. Inventaire des espaces

Un **espace** est un regroupement fonctionnel cohérent répondant aux objectifs et responsabilités d'un ou plusieurs acteurs. Il organise plusieurs destinations autour d'une même finalité générale.

Une **vue** est une destination ou une situation fonctionnelle identifiable au sein d'un espace. Elle porte une responsabilité principale plus précise et peut participer à un ou plusieurs parcours.

Cette distinction n'impose ni une page technique par vue, ni une interface séparée par espace.

| Identifiant | Espace | Acteurs principaux | Finalité |
|---|---|---|---|
| ESP-PUB | Galerie publique | Visiteur, acquéreur potentiel | Découvrir David, sa démarche, ses œuvres et leurs contextes ; identifier les possibilités d'acquisition sans réduire l'expérience à un catalogue. |
| ESP-ACQ | Parcours d'acquisition | Acquéreur | Examiner et accepter les conditions applicables, transmettre les informations nécessaires, effectuer le paiement et connaître son résultat. |
| ESP-SUI | Suivi d'acquisition | Acquéreur légitime | Consulter une acquisition, son état observable, les actions attendues, la remise, l'authenticité et les anomalies qui le concernent. |
| ESP-DAV | Gestion artistique | Utilisateur disposant du rôle Artiste | Maintenir l'univers artistique consacré à David, ses œuvres, leurs collections, leurs exemplaires, leurs contextes et leurs conditions d'acquisition ; suivre les acquisitions relevant de ce rôle. |
| ESP-ADM | Supervision | Utilisateur disposant du rôle Administrateur | Superviser les acquisitions et paiements, traiter les situations anormales, réaliser les opérations administratives autorisées et consulter leur traçabilité. |

Les espaces `ESP-DAV` et `ESP-ADM` restent fonctionnellement distincts, même lorsqu'un utilisateur cumule les rôles Artiste et Administrateur. Leur éventuel regroupement visuel relèvera d'une décision ultérieure.

## 5. Architecture de l'information

### 5.1 Organisation publique

La démarche de David constitue le point d'ancrage de l'information publique. Elle donne accès :

- aux collections ;
- aux œuvres ;
- aux textes ;
- aux expositions et événements ;
- aux installations et ensembles artistiques ;
- aux relations entre ces contenus ;
- à l'évolution du travail dans le temps.

Les collections constituent l'accès structurant aux œuvres. Toute œuvre étant rattachée à exactement une collection, aucune œuvre isolée ne peut être publiée dans la galerie publique.

Les informations d'acquisition sont rattachées à l'œuvre et à ses exemplaires acquérables. Elles ne constituent pas une arborescence commerciale autonome.

### 5.2 Organisation d'une œuvre

La consultation d'une œuvre rassemble ou rend directement accessibles :

- son identité et ses informations artistiques ;
- les contenus qui la contextualisent ;
- l'unique collection à laquelle elle appartient ;
- sa place éventuelle dans une édition ou un ensemble ;
- les exemplaires concernés ;
- leur disponibilité observable ;
- les conditions d'acquisition applicables lorsqu'un exemplaire peut être acquis.

### 5.3 Organisation d'une acquisition

Une acquisition constitue le point d'ancrage des informations non publiques qui la concernent :

- œuvre et exemplaire acquis ;
- conditions acceptées ;
- état observable ;
- résultat du paiement ;
- modalité et suivi de la remise ;
- éléments d'authenticité applicables ;
- déclaration à réception et compléments ;
- situations anormales et décisions visibles par l'acteur concerné.

### 5.4 Organisation de la gestion et de la supervision

La gestion artistique est organisée autour des collections, contenus et œuvres de David. La supervision est organisée autour des opérations nécessitant contrôle, intervention ou traçabilité. L'accès à ces fonctions dépend des rôles attribués à l'utilisateur, sans modifier l'identité artistique de David.

## 6. Inventaire des pages et vues

Chaque vue ci-dessous porte une responsabilité fonctionnelle distincte. Une vue n'est pas une simple section décorative : elle doit pouvoir être reconnue par son objectif, les informations qu'elle organise et le rôle qu'elle joue dans les parcours.

Plusieurs vues pourront ultérieurement être réunies dans une même page ou interface si leurs responsabilités restent identifiables. Inversement, une vue pourra nécessiter plusieurs présentations sans devenir plusieurs responsabilités fonctionnelles.

### 6.1 Galerie publique

| Identifiant | Page ou vue | Responsabilité fonctionnelle principale |
|---|---|---|
| V-PUB-01 | Entrée dans AZUREUM | Introduire immédiatement l'univers et la démarche de David, puis proposer les principales directions de découverte. |
| V-PUB-02 | David et sa démarche | Présenter David, les éléments biographiques utiles, sa démarche artistique et les repères nécessaires à la compréhension de son travail. |
| V-PUB-03 | Collections | Faire des collections l'accès public principal aux œuvres, sans organiser la consultation autour de leur disponibilité commerciale. |
| V-PUB-04 | Œuvre | Présenter une œuvre, ses informations fiables, ses contextes et, secondairement, ses possibilités d'acquisition. |
| V-PUB-05 | Contenu artistique | Présenter un texte, une exposition, une installation, un événement ou un ensemble et ses relations avec les œuvres. |
| V-PUB-06 | Évolution dans le temps | Permettre de découvrir les étapes datées du travail de David et d'accéder aux contenus concernés. |
| V-PUB-07 | Collection | Présenter l'intention d'une collection, toutes les œuvres qui la composent et les contenus qui la contextualisent ; donner accès à la fiche de chacune de ces œuvres. |

### 6.2 Parcours d'acquisition

| Identifiant | Page ou vue | Responsabilité fonctionnelle principale |
|---|---|---|
| V-ACQ-01 | Conditions de l'acquisition | Présenter l'exemplaire, le prix, les modalités de remise, les frais et toutes les conditions applicables avant l'engagement. |
| V-ACQ-02 | Informations nécessaires | Recueillir uniquement les informations nécessaires à l'acquisition, à la remise et aux obligations applicables. |
| V-ACQ-03 | Vérification avant engagement | Permettre à l'acquéreur de vérifier l'ensemble des conditions qu'il s'apprête à accepter. |
| V-ACQ-04 | Paiement en cours | Indiquer que le résultat définitif du paiement n'est pas encore connu et empêcher toute conclusion ambiguë. |
| V-ACQ-05 | Résultat de l'acquisition | Présenter explicitement la confirmation, l'interruption ou l'impossibilité de poursuivre ainsi que la suite applicable. |

### 6.3 Suivi de l'acquéreur

| Identifiant | Page ou vue | Responsabilité fonctionnelle principale |
|---|---|---|
| V-SUI-01 | Accès au suivi | Permettre d'établir l'accès légitime à une acquisition sans imposer le mécanisme utilisé. |
| V-SUI-02 | Détail et progression | Présenter l'identité de l'acquisition, son état observable, les informations importantes et les actions éventuellement attendues. |
| V-SUI-03 | Remise et authenticité | Présenter les informations disponibles concernant la remise et les éléments d'authenticité applicables. |
| V-SUI-04 | Déclaration à réception | Permettre de déclarer l'état apparent de l'œuvre reçue, de signaler une anomalie et de transmettre des compléments. |
| V-SUI-05 | Suivi d'une anomalie | Présenter la déclaration initiale, ses compléments, l'état de son traitement et sa clôture lorsqu'elle intervient. |

### 6.4 Gestion artistique

| Identifiant | Page ou vue | Responsabilité fonctionnelle principale |
|---|---|---|
| V-DAV-01 | Vue d'ensemble | Donner accès aux collections, contenus, œuvres et acquisitions nécessitant l'attention du rôle Artiste. |
| V-DAV-02 | Gestion des contenus artistiques | Maintenir les informations consacrées à David, les textes, expositions, installations, événements et collections. |
| V-DAV-03 | Gestion d'une œuvre | Créer une œuvre dans une collection, maintenir son identité, ses informations artistiques, ses relations contextuelles et sa présentation publique, ou l'archiver sans supprimer son histoire. |
| V-DAV-04 | Exemplaires et éditions | Maintenir les exemplaires, leur numérotation, leur disponibilité et les éléments d'authenticité applicables. |
| V-DAV-05 | Conditions d'acquisition | Définir les prix, modalités de remise, frais et autres conditions applicables avant toute acquisition. |
| V-DAV-06 | Acquisitions des œuvres | Consulter les acquisitions et informations relevant des responsabilités du rôle Artiste. |
| V-DAV-07 | Vente externe | Enregistrer une vente réalisée hors d'AZUREUM sans la présenter comme une acquisition conclue sur la plateforme. |

### 6.5 Supervision administrative

| Identifiant | Page ou vue | Responsabilité fonctionnelle principale |
|---|---|---|
| V-ADM-01 | Vue de supervision | Signaler les acquisitions, paiements et anomalies nécessitant une attention administrative. |
| V-ADM-02 | Liste des acquisitions | Rechercher et consulter les acquisitions relevant de la supervision. |
| V-ADM-03 | Supervision d'une acquisition | Comprendre son état observable, ses événements importants et les interventions autorisées. |
| V-ADM-04 | Liste des anomalies | Identifier les situations anormales ouvertes, leur nature et leur état de traitement. |
| V-ADM-05 | Traitement d'une anomalie | Consulter l'historique, enregistrer une intervention autorisée et clôturer administrativement la situation lorsque les conditions sont réunies. |
| V-ADM-06 | Traçabilité | Consulter les événements et résultats nécessaires à la compréhension d'une situation supervisée. |

## 7. Navigation fonctionnelle

### 7.1 Principes généraux

La navigation doit respecter les principes suivants :

- **continuité du parcours** : un changement de vue ne doit pas rompre sans raison la compréhension du sujet consulté ;
- **repérage** : une personne doit comprendre dans quel espace et dans quel contexte fonctionnel elle se trouve ;
- **retour vers l'œuvre** : depuis un contexte, une acquisition ou un suivi qui concerne une œuvre, un retour vers sa présentation doit rester possible lorsqu'il est compatible avec la confidentialité applicable ;
- **préservation du contexte** : le passage entre une collection, une œuvre et un contenu relié doit conserver une relation explicite entre eux ;
- **résultat explicite** : après une action sensible, la navigation doit conduire vers un état ou une vue qui en présente clairement le résultat ;
- **absence d'impasse injustifiée** : lorsqu'une suite fonctionnelle existe, elle doit rester identifiable sans imposer un chemin unique.

### 7.2 Navigation publique

La navigation publique conceptuelle donne accès aux destinations structurantes suivantes :

- l'entrée dans AZUREUM ;
- David et sa démarche artistique ;
- les collections, puis les œuvres qu'elles réunissent ;
- les contenus artistiques, expositions, événements et repères temporels disponibles ;
- les informations institutionnelles, contractuelles et légales applicables.

Cette liste définit des destinations fonctionnelles. Elle ne prescrit ni leurs libellés définitifs, ni leur ordre visuel, ni leur regroupement dans un menu particulier.

Depuis toute consultation publique pertinente, une personne doit pouvoir :

- revenir à l'entrée de la galerie ;
- poursuivre la découverte de la démarche ;
- explorer les collections ;
- explorer les œuvres au travers de leurs collections ;
- accéder aux contenus contextuels explicitement reliés ;
- rejoindre une œuvre depuis l'un de ses contextes ;
- examiner une possibilité d'acquisition depuis l'œuvre concernée lorsqu'elle existe.

La découverte publique ne dépend d'aucune fonction de recherche ou de filtrage dans la V1. Les intitulés, la position et la forme visuelle de ces accès seront décidés ultérieurement.

### 7.3 Passage vers l'acquisition

Le parcours d'acquisition commence depuis un exemplaire effectivement disponible. Il conserve une relation explicite avec l'œuvre et permet de revenir à sa présentation avant l'engagement.

Après engagement, la navigation ne doit pas laisser croire que les conditions acceptées peuvent être silencieusement remplacées par les informations publiques courantes.

### 7.4 Accès au suivi

Le résultat d'une acquisition confirmée doit conduire vers son suivi. Un acquéreur doit également pouvoir retrouver ce suivi ultérieurement par un accès légitime, sans que ce document impose un compte persistant.

### 7.5 Navigation de gestion et de supervision

L'utilisateur disposant du rôle Artiste navigue prioritairement depuis les collections, contenus et œuvres vers leurs exemplaires, conditions et acquisitions. L'utilisateur disposant du rôle Administrateur navigue prioritairement depuis les opérations nécessitant une supervision vers leur détail, leur historique et les interventions autorisées.

Les espaces de gestion artistique, de suivi d'acquisition et de supervision administrative ne participent jamais à la navigation publique. Leur accès reste réservé aux personnes légitimement concernées ou aux utilisateurs disposant des rôles appropriés.

## 8. Parcours principaux

### PAR-01 — Découvrir la démarche de David

`V-PUB-01 → V-PUB-03 → V-PUB-07 → V-PUB-04`

Le parcours peut commencer par plusieurs expressions du travail de David. La découverte des œuvres passe par leurs collections et doit toujours permettre de comprendre leur relation avec sa démarche.

### PAR-02 — Découvrir une œuvre dans son contexte

`V-PUB-03 → V-PUB-07 → V-PUB-04 → contenus contextuels reliés`

Une œuvre peut rester consultable individuellement par sa fiche, mais son unique collection demeure explicitement identifiable et accessible. L'absence d'un autre contexte particulier ne doit pas empêcher la consultation des informations publiques fiables.

### PAR-03 — Acquérir un exemplaire disponible

`V-PUB-04 → V-ACQ-01 → V-ACQ-02 → V-ACQ-03 → V-ACQ-04 → V-ACQ-05`

Le parcours présente les conditions avant leur acceptation, rend perceptible l'attente du paiement et aboutit à un résultat explicite.

### PAR-04 — Suivre une acquisition

`V-SUI-01 → V-SUI-02 → V-SUI-03`

La vue de détail constitue le point d'ancrage des informations et actions disponibles jusqu'à l'achèvement.

### PAR-05 — Déclarer l'état à réception

`V-SUI-02 ou V-SUI-03 → V-SUI-04 → V-SUI-02 ou V-SUI-05`

La déclaration reste rattachée à l'acquisition. Une anomalie signalée devient consultable sans rendre publique la déclaration.

### PAR-06 — Maintenir le travail artistique

`V-DAV-01 → V-DAV-02 ou V-DAV-03 → V-DAV-04 ou V-DAV-05`

Le rôle Artiste permet de faire évoluer les collections, les contenus et leurs relations tout en distinguant la présentation artistique des conditions d'acquisition.

### PAR-07 — Enregistrer une vente externe

`V-DAV-01 ou V-DAV-04 → V-DAV-07 → V-DAV-04`

Le résultat rend l'exemplaire indisponible et conserve le caractère externe de la vente.

### PAR-08 — Superviser une acquisition

`V-ADM-01 ou V-ADM-02 → V-ADM-03 → V-ADM-06 si nécessaire`

Le rôle Administrateur donne accès aux informations utiles à la compréhension de la situation sans proposer d'intervention non autorisée.

### PAR-09 — Traiter une anomalie

`V-ADM-01 ou V-ADM-04 → V-ADM-05 → V-ADM-06`

Le parcours distingue la déclaration historique, les compléments, les interventions et la clôture administrative.

## 9. Informations et actions par acteur

| Acteur | Informations visibles | Actions principales |
|---|---|---|
| Visiteur | Contenus publics, œuvres, contextes, évolution, disponibilité et conditions publiques | Découvrir, explorer, examiner une possibilité d'acquisition |
| Acquéreur | Informations publiques puis conditions proposées ; après accès légitime, acquisition, remise, authenticité et anomalies le concernant | Accepter les conditions, transmettre les informations nécessaires, payer, suivre, déclarer la réception, compléter une déclaration |
| Utilisateur avec rôle Artiste | Collections, contenus et œuvres de David ; exemplaires et conditions ; acquisitions, remises et anomalies relevant de ce rôle | Maintenir l'univers artistique, définir les conditions, publier ou archiver les œuvres, suivre les exemplaires, enregistrer une vente externe, contribuer au traitement prévu par ce rôle |
| Utilisateur avec rôle Administrateur | Acquisitions, paiements, événements et anomalies nécessaires à la supervision ; éléments concernés par une opération administrative exceptionnelle | Superviser, effectuer les interventions autorisées, motiver et tracer ses décisions, clôturer administrativement une anomalie, réaliser une suppression définitive exceptionnelle |

Cette répartition décrit la visibilité fonctionnelle. Elle ne définit aucun mécanisme d'autorisation. Un même utilisateur peut cumuler les deux rôles. Dans tous les cas, David Prieur-Gélis demeure l'unique artiste présenté et l'unique auteur des œuvres dans AZUREUM V1.

## 10. États perceptibles

Ce chapitre décrit des **états fonctionnels perceptibles** : il précise ce qu'une personne doit pouvoir comprendre d'une situation. Il ne prescrit ni apparence graphique, ni couleur, ni icône, ni animation, ni composant d'interface.

| Situation | Perception attendue |
|---|---|
| Contenu absent | L'absence est explicite et ne crée ni information inventée ni rupture injustifiée de la consultation disponible. |
| Liste vide | L'acteur comprend qu'aucun élément ne correspond à la vue et, lorsqu'une action relève de sa responsabilité, comment poursuivre. |
| Exemplaire indisponible | L'impossibilité d'engager une acquisition est non ambiguë ; la découverte artistique demeure possible. |
| Opération en attente | Aucun résultat définitif n'est affirmé ; l'acteur comprend que le traitement n'est pas terminé. |
| Opération réussie | Le résultat et ses conséquences observables sont explicitement présentés. |
| Opération impossible ou échouée | L'échec n'est pas présenté comme une réussite et la suite éventuelle autorisée est compréhensible. |
| Accès non légitime | Aucune information non publique n'est révélée. |
| Situation anormale | La situation est identifiable, son effet observable est présenté et aucune résolution arbitraire n'est suggérée. |
| Information incohérente | L'information ne doit pas être présentée comme validée ; les espaces autorisés indiquent qu'une intervention est nécessaire. |

## 11. Traçabilité

| Élément du Sprint 005 | Références principales |
|---|---|
| `ESP-PUB`, `V-PUB-*`, `PAR-01`, `PAR-02` | CAP-ART-01 à CAP-ART-06 ; CU-VIS-01, CU-VIS-02 ; CT-04, CT-07 |
| `V-PUB-04`, `ESP-ACQ`, `V-ACQ-*`, `PAR-03` | CAP-ACQ-01 à CAP-ACQ-05 ; CU-VIS-03, CU-ACQ-01 ; RM-ACQ-* ; RM-CYC-* |
| `ESP-SUI`, `V-SUI-*`, `PAR-04`, `PAR-05` | CAP-ACQ-06 à CAP-ACQ-09 ; CU-ACQ-02 à CU-ACQ-04 ; RM-REM-* ; RM-AUT-* ; RM-ANOM-* |
| `ESP-DAV`, `V-DAV-*`, `PAR-06`, `PAR-07` | CAP-GES-01 à CAP-GES-05 ; CU-DAV-01 à CU-DAV-03 ; RM-ŒUV-* ; RM-EXT-* ; RM-RESP-* |
| `ESP-ADM`, `V-ADM-*`, `PAR-08`, `PAR-09` | CAP-SUP-01 à CAP-SUP-05 ; CU-ADM-01, CU-ADM-02 ; RM-RESP-* ; RM-ANOM-* |
| États perceptibles | CT-01 à CT-06 ; exigences fonctionnelles associées ; invariants du Sprint 004-r1 |

## 12. Hors périmètre

Le présent document ne détermine pas :

- la composition détaillée de chaque page ;
- les textes définitifs et libellés de navigation ;
- la mise en page, les styles ou animations ;
- les composants réutilisables ;
- les dimensions et adaptations graphiques ;
- les URL ou routes ;
- la persistance des données ;
- les API et intégrations ;
- le mécanisme d'identification ou d'autorisation ;
- l'architecture logicielle et les technologies.

## 13. Critères d'acceptation

Le document est validable lorsque :

- chaque acteur et chaque rôle disposent des espaces nécessaires à leurs capacités et responsabilités indispensables ;
- chaque cas d'usage principal est matérialisé par un parcours compréhensible ;
- chaque page ou vue possède une responsabilité distincte ;
- la navigation préserve la primauté de la démarche artistique ;
- la navigation publique conceptuelle donne accès aux destinations artistiques et aux informations institutionnelles applicables sans imposer leur représentation ;
- la découverte éditoriale fonctionne sans dépendre d'une recherche ni de filtres ;
- les espaces privés restent distincts de la navigation publique ;
- toute œuvre est créée, maintenue et présentée dans exactement une collection ;
- l'archivage d'une œuvre préserve son identité et son histoire, tandis que sa suppression définitive reste une opération administrative exceptionnelle ;
- le cumul des rôles n'altère jamais l'identité artistique ni les qualités exclusivement attachées à David Prieur-Gélis ;
- l'acquisition reste rattachée à l'œuvre et à l'exemplaire concernés ;
- les informations non publiques ne sont affectées qu'aux acteurs concernés ;
- les situations importantes produisent un état perceptible non ambigu ;
- la traçabilité avec les Sprints 003-r1 et 004-r1 est complète ;
- aucune capacité ni règle métier n'est modifiée ;
- aucune décision technique ou maquette détaillée n'est introduite ;
- toutes les décisions structurantes relevant du Sprint 005 sont validées par le Product Owner.

## 14. Validation

| Élément | Valeur |
|---|---|
| Statut documentaire | Validé |
| Verdict de la revue finale | Conforme |
| Réserves acceptées | Aucune |
| Décision du Product Owner | Validé |
| Date de validation | 2026-07-21 |
| Commit de clôture | À compléter après le commit |
| Tag Git | À compléter après la création du tag |
