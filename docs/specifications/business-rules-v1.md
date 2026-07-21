# Règles métier de la V1

| Métadonnée | Valeur |
|---|---|
| Statut | Validé |
| Version | V1 |
| Sprint d'origine | Sprint 004 |
| Autorité documentaire | Référence métier de la V1 |
| Référence fonctionnelle | `docs/specifications/functional-specification-v1.md` |
| Révision fonctionnelle applicable | `sprint-003-r1` |
| Commit de clôture | À compléter |
| Tag Git | À compléter |

---

## Référentiel des identifiants

Les identifiants permettent de retrouver la nature et le domaine de chaque élément documentaire sans dépendre de son emplacement dans le document.

### Préfixes documentaires

| Préfixe | Signification | Exemple |
|---|---|---|
| `H` | Décision produit structurante | `H-03` |
| `RM` | Règle métier | `RM-ANN-05` |
| `INV` | Invariant métier | `INV-11` |
| `IF` | Interprétation fonctionnelle validée | `IF-01` |
| `HP` | Élément explicitement hors périmètre | `HP-02` |
| `TRAC` | Règle de traçabilité documentaire | `TRAC-03` |
| `CA` | Critère d'acceptation | `CA-04` |

### Familles de règles métier

Un identifiant de la forme `RM-DOM-XX` désigne une règle métier du domaine `DOM`, suivie de son numéro dans cette famille.

| Code | Domaine | Exemple |
|---|---|---|
| `ŒUV` | Œuvres et exemplaires | `RM-ŒUV-10` |
| `ACQ` | Conditions et processus d'acquisition | `RM-ACQ-18` |
| `EXT` | Ventes réalisées hors d'AZUREUM | `RM-EXT-01` |
| `COM` | Commission de l'exploitant | `RM-COM-03` |
| `CYC` | Cycle de vie d'une acquisition | `RM-CYC-04` |
| `ANN` | Annulation et remboursement | `RM-ANN-05` |
| `REM` | Remise de l'œuvre | `RM-REM-13` |
| `AUT` | Authenticité | `RM-AUT-14` |
| `RESP` | Responsabilités métier | `RM-RESP-12` |
| `ANOM` | Situations anormales | `RM-ANOM-12` |
| `LEG` | Règles juridiques conditionnelles | `RM-LEG-01` |

### Identifiants fonctionnels hérités du Sprint 003-r1

Les identifiants suivants apparaissent dans la matrice de traçabilité et désignent des éléments définis dans le cahier des charges fonctionnel :

| Préfixe | Signification | Exemple |
|---|---|---|
| `BES` | Besoin d'un acteur | `BES-ACQ-06` |
| `CAP` | Capacité fonctionnelle | `CAP-ACQ-09` |
| `CU` | Cas d'usage | `CU-ACQ-04` |
| `EF` | Exigence fonctionnelle | `EF-REC-01` |

Ces identifiants conservent la signification définie dans `docs/specifications/functional-specification-v1.md`. Le présent référentiel en facilite uniquement la lecture et ne modifie ni leur contenu ni leur portée.

---

# 1. Objectif

Le présent document définit les règles métier qui gouvernent le fonctionnement d'AZUREUM dans sa première version.

Après validation, il constituera la référence métier officielle de la V1.

Son rôle est de transformer les comportements fonctionnels définis dans le cahier des charges en règles métier explicites, cohérentes et vérifiables.

Il précise notamment :

- les concepts manipulés par le domaine métier ;
- les relations entre ces concepts ;
- les règles qui gouvernent leur évolution ;
- les responsabilités des différents acteurs métier ;
- les situations normales et exceptionnelles pouvant être rencontrées.

Le document ne décrit ni l'interface utilisateur, ni l'architecture logicielle, ni les technologies qui permettront d'appliquer ces règles.

Il répond exclusivement à la question suivante :

> **Quelles règles métier gouvernent le fonctionnement d'AZUREUM V1 ?**

---

# 2. Position dans la documentation

Le présent document intervient après la validation du cahier des charges fonctionnel.

Le cahier des charges décrit **ce que le produit doit permettre**.

Le présent document décrit **les règles métier qui gouvernent ces comportements**.

Il constitue l'étape intermédiaire entre :

- le fonctionnel ;
- la conception technique.

Il ne peut ni modifier, ni étendre le périmètre fonctionnel déjà validé.

Toute règle nécessitant :

- une nouvelle capacité ;
- un nouvel acteur ;
- une nouvelle responsabilité fonctionnelle ;
- une modification du périmètre de la V1 ;

constitue une évolution du cahier des charges et devra être traitée comme telle.

---

# 3. Références

Le présent document s'appuie sur les décisions validées dans les documents suivants :

- `docs/specifications/functional-specification-v1.md`
- `PROJECT_STATE.md`
- `docs/GOVERNANCE.md`
- les décisions du Product Owner prises au cours des Sprints précédents.

La révision fonctionnelle applicable est identifiée par le tag `sprint-003-r1`.

En cas de contradiction :

1. les décisions du Product Owner prévalent ;
2. le cahier des charges fonctionnel fait autorité sur le périmètre ;
3. le présent document fait autorité sur les règles métier.

## 3.1 Décisions produit applicables

Les règles du présent document s'appuient sur les décisions produit suivantes :

| Décision | Contenu | État |
|---|---|---|
| H-01 | David est le vendeur des œuvres dans le cadre de son entreprise individuelle. Jérémie exploite AZUREUM dans le cadre de son entreprise individuelle et perçoit une commission sans acheter ni revendre les œuvres. Les flux financiers doivent être traités par un prestataire de services de paiement habilité. | Établie au niveau métier ; conformité contractuelle, fiscale et réglementaire à vérifier |
| H-02 | Une création artistique peut comporter un ou plusieurs exemplaires physiques. Chaque exemplaire acquérable possède sa propre identité, disponibilité, réservation, authenticité et histoire. | Établie |
| H-03 | Les ventes externes restent autorisées et peuvent être enregistrées dans AZUREUM sans être présentées comme des acquisitions conclues sur la plateforme. | Établie |
| H-04 | AZUREUM ne fixe aucune limitation géographique fonctionnelle prédéfinie. Toute restriction doit résulter de contraintes juridiques, fiscales ou logistiques vérifiées. | Orientation métier sous réserve de conformité |
| H-05 | AZUREUM ne limite pas fonctionnellement la qualité de l'acquéreur. Toute personne physique ou morale pouvant légalement conclure une acquisition peut utiliser le produit, sous réserve des contraintes applicables. | Orientation métier sous réserve de conformité |

---

# 4. Principes directeurs

Les règles métier définies dans ce document respectent les principes suivants.

## 4.1 Primauté de la démarche artistique

AZUREUM est avant tout une galerie d'art numérique.

L'expérience artistique structure le produit.

L'acquisition d'une œuvre constitue une conséquence possible de cette expérience, mais n'en devient jamais le principe organisateur.

---

## 4.2 Unicité de l'artiste

La V1 est entièrement consacrée à David Prieur-Gélis.

Toutes les œuvres présentées relèvent de sa démarche artistique.

La gestion de plusieurs artistes est hors périmètre.

---

## 4.3 Séparation des niveaux

Le présent document ne définit jamais :

- une interface ;
- une page ;
- un écran ;
- une route ;
- une API ;
- une base de données ;
- une technologie ;
- une architecture logicielle.

Ces décisions relèvent des Sprints ultérieurs.

---

## 4.4 Absence d'hypothèse implicite

Aucune règle métier ne doit être déduite d'une hypothèse non validée.

Toute décision restant ouverte est explicitement identifiée comme un arbitrage du Product Owner.

---

## 4.5 Évolution contrôlée

Une règle métier ne peut être modifiée que si cette modification reste compatible avec le cahier des charges fonctionnel.

Dans le cas contraire, une évolution du cahier des charges est nécessaire avant toute évolution métier.

---

# 5. Terminologie métier

Les définitions suivantes s'appliquent à l'ensemble de la documentation AZUREUM.

## 5.1 Œuvre

Création artistique de David Prieur-Gélis pouvant être présentée dans AZUREUM.

Une œuvre possède une identité propre qui demeure indépendante :

- de sa disponibilité ;
- de ses conditions d'acquisition ;
- de sa présentation publique.

---

## 5.2 Présentation

Ensemble des informations permettant au visiteur de découvrir une œuvre et de la replacer dans la démarche artistique de David.

La présentation poursuit une finalité culturelle avant toute finalité commerciale.

---

## 5.3 Disponibilité

État indiquant si une œuvre peut actuellement faire l'objet d'une acquisition selon les règles définies par David.

La disponibilité est indépendante de la publication.

Une œuvre peut être présentée sans être disponible.

---

## 5.4 Condition d'acquisition

Ensemble des règles qui encadrent l'acquisition d'une œuvre.

Ces conditions comprennent notamment les éléments nécessaires permettant à un acquéreur de prendre une décision éclairée.

---

## 5.5 Acquisition

Processus métier permettant à une personne de devenir légitimement acquéreur d'une œuvre.

Une acquisition ne se limite pas au paiement.

Elle s'achève uniquement lorsque toutes les obligations métier applicables ont été remplies.

---

## 5.6 Acquéreur

Personne engagée dans une acquisition ou ayant terminé celle-ci conformément aux règles métier.

---

## 5.7 Remise

Transmission effective de l'œuvre physique à son acquéreur.

La remise constitue un événement métier distinct de l'acquisition elle-même.

---

## 5.8 Élément d'authenticité

Information ou document permettant d'établir le lien entre :

- David ;
- l'œuvre ;
- l'acquisition concernée.

---

## 5.9 Situation anormale

Situation empêchant temporairement ou définitivement le déroulement normal d'une acquisition.

---

## 5.10 Réservation

Affectation temporaire et exclusive d'une œuvre disponible à une acquisition engagée.

Une réservation interdit tout autre engagement portant sur cette œuvre tant qu'elle demeure active.

---

## 5.11 Déclaration d'état à réception

Constat communiqué par l'acquéreur concernant l'état apparent de l'œuvre reçue.

Cette déclaration est distincte de la constatation de la remise et de la confirmation de réception.

---

## 5.12 Exemplaire

Objet physique individualisé par lequel une création artistique est matérialisée et peut être acquise.

Une création peut comporter un exemplaire unique ou plusieurs exemplaires, notamment dans le cadre d'une édition limitée.

---

## 5.13 Édition limitée

Ensemble déterminé d'exemplaires physiques rattachés à une même création artistique et identifiés individuellement par une numérotation lorsque celle-ci est applicable.

---

## 5.14 Vendeur

David, agissant dans le cadre de son entreprise individuelle, vend les exemplaires proposés à l'acquisition dans AZUREUM.

---

## 5.15 Exploitant

Jérémie exploite AZUREUM dans le cadre de son entreprise individuelle et perçoit une commission en contrepartie de ce service. Il n'achète pas les exemplaires, ne les revend pas et n'en devient pas propriétaire.

---

# 6. Concepts métier

Les concepts décrits ci-dessous constituent les objets fondamentaux manipulés par les règles métier.

Ils sont indépendants de toute implémentation technique.

## 6.1 Œuvre

Une œuvre représente l'entité centrale du domaine métier.

Toutes les autres règles s'articulent autour d'elle.

Une œuvre possède notamment :

- une identité stable ;
- un auteur ;
- une présentation ;
- un ou plusieurs exemplaires physiques.

Une œuvre peut être matérialisée par un exemplaire physique unique ou par plusieurs exemplaires individualisés appartenant à une édition limitée.

Chaque exemplaire physique demeure rattaché à une œuvre unique. Sa disponibilité et ses conditions d'acquisition lui sont propres ou résultent des règles applicables à l'œuvre ou à son édition.

---

## 6.2 Présentation artistique

La présentation artistique décrit la manière dont une œuvre est exposée au public.

Elle peut évoluer sans modifier l'identité de l'œuvre.

---

## 6.3 Offre d'acquisition

L'offre d'acquisition correspond à l'ensemble des conditions permettant à une œuvre d'être acquise à un instant donné.

Elle ne constitue pas une œuvre.

Elle constitue une propriété de celle-ci.

---

## 6.4 Acquisition

Une acquisition représente un processus métier autonome.

Elle possède :

- son propre cycle de vie ;
- ses propres règles ;
- ses propres états.

Chaque acquisition porte sur un unique exemplaire physique, lui-même rattaché à une œuvre unique.

---

## 6.5 Authenticité

L'authenticité représente l'ensemble des éléments permettant d'attester que l'œuvre remise correspond bien à celle acquise.

Les modalités précises de ces éléments seront définies dans les chapitres correspondants.

# 7. Règles relatives aux œuvres

Les règles du présent chapitre définissent les contraintes métier applicables aux œuvres présentées dans AZUREUM.

Elles gouvernent leur existence, leur présentation, leur disponibilité et leur acquisition.

---

## RM-ŒUV-01 — Identité stable

Chaque œuvre possède une identité métier unique.

Cette identité demeure inchangée indépendamment :

- de son état de publication ;
- de sa disponibilité ;
- de l'évolution de sa présentation ;
- de son historique d'acquisition.

Une œuvre ne change jamais d'identité au cours de son cycle de vie.

---

## RM-ŒUV-02 — Auteur

Toute œuvre présentée dans AZUREUM V1 est une création de David Prieur-Gélis.

La présence de plusieurs artistes est hors périmètre.

---

## RM-ŒUV-03 — Publication

Une œuvre peut être :

- publiée ;
- retirée de la publication.

Le retrait d'une œuvre de la présentation publique d'AZUREUM n'entraîne pas sa disparition métier.

Les informations nécessaires aux acquisitions déjà réalisées demeurent conservées.

---

## RM-ŒUV-04 — Présentation

La présentation d'une œuvre peut évoluer.

Ces évolutions peuvent notamment concerner :

- les textes ;
- les médias ;
- la contextualisation artistique.

Ces modifications n'altèrent jamais l'identité de l'œuvre.

---

## RM-ŒUV-05 — Disponibilité

La disponibilité est indépendante de la publication et s'applique à chaque exemplaire acquérable.

Un exemplaire peut être disponible, réservé ou indisponible indépendamment de la publication de l'œuvre à laquelle il appartient.

Un exemplaire indisponible ne peut pas faire l'objet d'une nouvelle acquisition.

---

## RM-ŒUV-06 — Conditions d'acquisition

Chaque exemplaire disponible possède des conditions d'acquisition explicitement définies, directement ou par rattachement aux conditions applicables à l'œuvre ou à son édition.

Ces conditions doivent permettre à un acquéreur de connaître les éléments nécessaires avant tout engagement.

---

## RM-ŒUV-07 — Modification

David peut modifier :

- la présentation ;
- la disponibilité ;
- les conditions d'acquisition ;

tant qu'aucune acquisition en cours ne rend cette modification incompatible avec les règles métier.

---

## RM-ŒUV-08 — Historique

L'historique d'une œuvre doit pouvoir être conservé conformément au cahier des charges.

Le présent document ne définit ni son niveau de détail ni son implémentation.

---

## RM-ŒUV-09 — Retrait

Le retrait d'une œuvre de la présentation publique :

- ne supprime pas son identité ;
- ne supprime pas son historique ;
- ne remet pas en cause les acquisitions déjà réalisées.

---

## RM-ŒUV-10 — Exemplaires

Une œuvre peut comporter un ou plusieurs exemplaires physiques.

Chaque exemplaire acquérable possède une identité métier propre et un historique distinct.

---

## RM-ŒUV-11 — Numérotation

Lorsqu'une œuvre appartient à une édition numérotée, chaque exemplaire possède une numérotation propre qui ne peut être attribuée à un autre exemplaire de la même édition.

---

## RM-ŒUV-12 — Indépendance des exemplaires

La disponibilité, la réservation, l'acquisition, la remise et les éléments d'authenticité d'un exemplaire ne modifient pas automatiquement ceux des autres exemplaires de la même œuvre.

# 8. Conditions d'acquisition

Les règles du présent chapitre définissent les conditions dans lesquelles une œuvre peut être acquise.

Elles déterminent les obligations applicables avant, pendant et après l'engagement d'un acquéreur.

Aucune règle du présent chapitre ne peut introduire un mécanisme d'enchères, de négociation ou de concurrence entre acquéreurs.

---

## RM-ACQ-01 — Définition des conditions

Pour chaque œuvre disponible, David définit les conditions d'acquisition applicables.

Ces conditions constituent la référence officielle de l'acquisition.

---

## RM-ACQ-02 — Conditions connues avant engagement

Toutes les informations nécessaires à la décision de l'acquéreur doivent être connues avant son engagement.

Aucune condition essentielle ne peut être ajoutée après celui-ci.

---

## RM-ACQ-03 — Prix

Chaque acquisition est réalisée selon un prix déterminé à l'avance.

Le prix applicable est celui défini pour l'œuvre au moment où l'acquisition devient effective.

La V1 ne prévoit aucun mécanisme permettant à l'acquéreur de proposer un prix différent.

---

## RM-ACQ-04 — Stabilité des conditions

Une modification ultérieure des conditions d'acquisition d'une œuvre n'affecte pas automatiquement les acquisitions déjà engagées.

Chaque acquisition conserve les conditions qui lui étaient applicables lors de son engagement.

---

## RM-ACQ-05 — Disponibilité

Une acquisition ne peut être engagée que si l'exemplaire concerné est disponible.

Un exemplaire indisponible ne peut faire l'objet d'aucun nouvel engagement.

---

## RM-ACQ-06 — Informations nécessaires

L'acquéreur fournit uniquement les informations nécessaires au bon déroulement de l'acquisition.

Aucune information sans utilité métier ne doit être exigée.

---

## RM-ACQ-07 — Modalité de remise

Toute acquisition est associée à une modalité de remise déterminée.

Cette modalité fait partie intégrante des conditions d'acquisition.

---

## RM-ACQ-08 — Authenticité

Lorsque des éléments d'authenticité sont applicables à une œuvre, leur remise fait partie intégrante de l'acquisition.

---

## RM-ACQ-09 — Absence d'enchères

La V1 repose exclusivement sur l'acquisition à prix fixe.

Les mécanismes suivants sont hors périmètre :

- enchères ;
- surenchères ;
- contre-offres ;
- négociation de prix ;
- enchères automatiques.

---

## RM-ACQ-10 — Évolutions du périmètre

Toute nouvelle condition d'acquisition qui nécessiterait :

- un nouvel acteur ;
- une nouvelle responsabilité fonctionnelle ;
- une nouvelle capacité métier ;

constitue une évolution du cahier des charges et ne peut être introduite par le présent document.

---

## RM-ACQ-11 — Engagement

Une acquisition devient engagée lorsque l'acquéreur accepte explicitement les conditions d'acquisition applicables.

Une intention d'acquisition ne constitue pas un engagement.

---

## RM-ACQ-12 — Réservation exclusive

L'engagement crée une réservation active et exclusive de l'exemplaire concerné au bénéfice de l'acquéreur.

Parmi plusieurs tentatives concurrentes portant sur un même exemplaire disponible, un seul engagement peut être reconnu comme valablement établi. L'ordre de reconnaissance doit être déterminable et vérifiable sans dépendre d'une solution technique particulière.

---

## RM-ACQ-13 — Modalités autorisées

Pour chaque œuvre proposée à l'acquisition, David définit les modalités de remise autorisées.

Lorsque plusieurs modalités sont autorisées, l'acquéreur choisit avant son engagement. La modalité retenue devient une condition de cette acquisition et ne peut plus être modifiée unilatéralement.

---

## RM-ACQ-14 — Frais et montant total

Pour chaque modalité autorisée, les conditions d'acquisition précisent l'existence des frais de remise, leur montant ou leur méthode de détermination, ainsi que l'acteur qui doit les supporter.

Avant son engagement, l'acquéreur doit connaître le prix de l'œuvre, les frais applicables et le montant total attendu. Aucun frais obligatoire ne peut être ajouté après l'engagement.

Si l'exécution des conditions financières acceptées devient impossible, l'acquisition est traitée conformément aux règles d'interruption applicables. Toute poursuite éventuelle nécessite une nouvelle acquisition fondée sur des conditions explicitement acceptées.

---

## RM-ACQ-15 — Vente externe

Une vente conclue hors d'AZUREUM peut être enregistrée afin de préserver l'identité de l'exemplaire, sa disponibilité, son historique et ses éléments d'authenticité.

Elle doit être identifiée comme externe et ne peut pas être présentée comme une acquisition conclue ou payée dans AZUREUM. Son enregistrement rend l'exemplaire concerné indisponible et met fin à toute possibilité de nouvel engagement sur celui-ci.

---

## RM-ACQ-16 — Absence de limitation géographique prédéfinie

AZUREUM ne fixe aucune limitation géographique fonctionnelle prédéfinie.

Une restriction géographique ne peut résulter que d'une contrainte juridique, fiscale ou logistique applicable et vérifiée.

---

## RM-ACQ-17 — Qualité de l'acquéreur

AZUREUM ne limite pas fonctionnellement la qualité de l'acquéreur.

Toute personne physique ou morale pouvant légalement conclure une acquisition peut acquérir un exemplaire, sous réserve des contraintes juridiques, fiscales et opérationnelles applicables.

---

## RM-ACQ-18 — Durée de la réservation

Une réservation commence lors de l'engagement de l'acquisition. Elle demeure active jusqu'à la confirmation du paiement, l'interruption de l'acquisition, son abandon explicite ou l'expiration du délai applicable.

Le délai maximal de réservation doit être déterminé avant l'ouverture des acquisitions. Sa valeur exacte constitue un paramètre d'exploitation et non une règle métier structurante.

---

## RM-ACQ-19 — Expiration

L'expiration de la réservation interrompt l'acquisition et libère l'exemplaire.

L'exemplaire redevient disponible, sauf si une autre décision métier conforme aux règles applicables justifie son indisponibilité.

---

## RM-ACQ-20 — Paiement en attente

Tant que le résultat du paiement n'est pas définitivement établi, l'acquisition reste engagée et l'exemplaire demeure réservé dans la limite du délai applicable.

Un résultat indéterminé, différé ou encore en cours de traitement ne doit être assimilé ni à une confirmation ni à un refus définitif.

---

## RM-ACQ-21 — Résultat tardif

Lorsqu'un résultat définitif est reçu après l'expiration ou l'interruption de l'acquisition, AZUREUM ne doit pas modifier automatiquement l'état de l'acquisition ni la disponibilité de l'exemplaire.

La situation devient anormale et relève de la supervision de l'Administrateur.

---

## RM-ACQ-22 — Nouvelle tentative

Une acquisition interrompue ne peut pas être reprise.

L'acquéreur qui souhaite renouveler sa tentative doit engager une nouvelle acquisition fondée sur les conditions alors applicables.

---

## RM-EXT-01 — Enregistrement d'une vente externe

Une vente conclue hors d'AZUREUM peut être enregistrée afin de préserver l'identité de l'exemplaire, sa disponibilité, son historique et ses éléments d'authenticité.

Elle doit rester explicitement identifiée comme une vente externe.

---

## RM-EXT-02 — Distinction

Une vente externe ne doit jamais être présentée comme une acquisition conclue ou payée dans AZUREUM.

Aucun paiement traité par AZUREUM ne doit lui être attribué lorsqu'il n'a pas eu lieu.

---

## RM-EXT-03 — Disponibilité

L'enregistrement d'une vente externe rend l'exemplaire concerné indisponible pour toute nouvelle acquisition.

---

## RM-EXT-04 — Conflit avec une réservation

Une vente externe ne doit pas être enregistrée comme définitivement conclue lorsqu'une réservation active existe déjà sur le même exemplaire sans déclencher une situation anormale.

L'Administrateur doit déterminer la situation réelle, préserver les droits des acteurs concernés et appliquer une décision traçable.

---

## RM-EXT-05 — Informations disponibles

Seules les informations effectivement connues concernant une vente externe doivent être enregistrées.

Une information inconnue ne doit être ni inventée ni présentée comme vérifiée.

---

## RM-COM-01 — Principe de commission

Jérémie perçoit une commission en contrepartie du service d'exploitation d'AZUREUM.

Cette commission ne lui transfère ni la propriété de l'exemplaire ni la qualité de vendeur.

---

## RM-COM-02 — Détermination

Le taux, le montant ou la méthode de calcul de la commission doit être déterminé avant l'ouverture de l'acquisition concernée.

Une modification ultérieure ne doit pas affecter rétroactivement une acquisition déjà engagée.

---

## RM-COM-03 — Exigibilité

La commission ne devient définitivement acquise que lorsque les conditions définies pour sa rémunération sont satisfaites.

Ces conditions doivent être compatibles avec les règles applicables à la confirmation, à l'annulation, au remboursement et à la rétractation.

---

## RM-COM-04 — Traitement des fonds

Le traitement du paiement et la répartition des fonds entre David et Jérémie doivent être assurés par un prestataire de services de paiement habilité.

AZUREUM ne doit pas conduire Jérémie à encaisser personnellement le prix des œuvres pour le reverser ensuite à David en dehors d'un cadre juridiquement conforme.

---

## RM-COM-05 — Traçabilité

Le prix de l'exemplaire, les frais applicables, la commission et les montants revenant aux acteurs concernés doivent rester déterminables et traçables pour chaque acquisition.

# 9. Cycle de vie d'une acquisition

Le présent chapitre définit les états métier qu'une acquisition peut traverser ainsi que les règles gouvernant les transitions entre ces états.

Le cycle de vie décrit ici est indépendant de toute implémentation technique.

Il constitue la référence métier de la V1.

---

## 9.1 Principes

Une acquisition évolue progressivement au cours de son existence.

À tout instant :

- une acquisition possède un état métier unique ;
- toute transition doit être autorisée par une règle métier explicite ;
- une acquisition ne peut jamais revenir implicitement à un état antérieur.

Les états définis ci-dessous décrivent une situation métier, et non un traitement informatique.

---

## 9.2 États métier

### Acquisition initiée

L'acquéreur a exprimé une intention d'acquisition.

Les conditions applicables sont déterminées, mais l'acquisition n'est pas encore considérée comme engagée.

---

### Acquisition engagée

L'acquéreur a explicitement accepté les conditions applicables.

L'exemplaire est réservé exclusivement à cette acquisition dans l'attente du résultat définitif du paiement.

---

### Acquisition confirmée

Le paiement est définitivement confirmé et l'acquéreur dispose d'un droit acquis sur l'œuvre.

L'exemplaire devient indisponible et la réservation temporaire prend fin.

---

### Remise en préparation

L'acquisition est confirmée.

Les opérations nécessaires à la remise de l'œuvre peuvent être préparées.

---

### Remise en cours

La remise de l'œuvre est effectivement engagée selon la modalité retenue.

La remise n'est toutefois pas encore constatée.

---

### Exemplaire remis

La transmission effective de l'œuvre à l'acquéreur est constatée.

---

### Acquisition achevée

Toutes les obligations métier applicables sont satisfaites.

L'acquisition est définitivement terminée.

---

### Acquisition interrompue

L'acquisition ne peut plus poursuivre son cycle normal.

Aucune transition ultérieure n'est possible.

---

### Acquisition annulée

Une acquisition précédemment confirmée a fait l'objet d'une annulation exceptionnelle prononcée par l'Administrateur.

Aucune transition ultérieure n'est possible.

---

## 9.3 Transitions autorisées

Les transitions suivantes constituent le modèle métier de référence.

| État d'origine | État cible |
|---|---|
| Acquisition initiée | Acquisition engagée |
| Acquisition initiée | Acquisition interrompue |
| Acquisition engagée | Acquisition confirmée |
| Acquisition engagée | Acquisition interrompue |
| Acquisition confirmée | Remise en préparation |
| Acquisition confirmée | Acquisition annulée |
| Remise en préparation | Remise en cours |
| Remise en préparation | Exemplaire remis |
| Remise en préparation | Acquisition annulée |
| Remise en cours | Exemplaire remis |
| Remise en cours | Acquisition annulée |
| Exemplaire remis | Acquisition achevée |

Toute autre transition est interdite tant qu'elle n'a pas été explicitement validée.

---

## RM-CYC-01 — État unique

Une acquisition possède un unique état métier courant.

---

## RM-CYC-02 — Transition autorisée

Toute transition doit être justifiée par une règle métier.

Aucune évolution implicite n'est admise.

---

## RM-CYC-03 — Progression

Une acquisition ne peut progresser que vers un état compatible avec son état actuel.

---

## RM-CYC-04 — Achèvement

Une acquisition n'est considérée comme achevée que lorsque :

- la remise de l'œuvre est constatée ;
- les éléments d'authenticité applicables ont été transmis ;
- aucune situation anormale ouverte ne bloque son achèvement ;
- aucune obligation métier applicable ne reste à accomplir ;
- les éventuels délais légaux applicables sont respectés.

---

## RM-CYC-05 — Interruption

Une acquisition interrompue cesse de suivre son cycle normal.

Les conditions permettant une interruption seront définies dans le chapitre consacré aux situations anormales.

---

## RM-CYC-06 — Suivi

L'acquéreur légitime doit pouvoir connaître l'état de son acquisition.

Le présent document ne définit pas le mécanisme permettant cet accès.

---

## RM-CYC-07 — Disponibilité de l'œuvre

À l'engagement, l'exemplaire devient réservé et aucun nouvel engagement ne peut être reconnu pour cet exemplaire.

Après confirmation du paiement, l'exemplaire devient indisponible.

Lorsque le résultat du paiement est définitivement connu comme refusé, annulé, abandonné ou expiré, l'acquisition est interrompue et la réservation prend fin. L'exemplaire redevient disponible, sauf si une autre décision métier conforme aux présentes règles justifie son indisponibilité.

---

## RM-CYC-08 — Confirmation

Une acquisition confirmée ne peut pas revenir à l'état engagée.

---

## RM-CYC-09 — Nouvelle tentative après interruption

Une acquisition interrompue est terminale et ne peut revenir dans son cycle normal.

---

## RM-CYC-10 — Annulation exceptionnelle

La transition vers l'état annulé n'est autorisée qu'à partir des états explicitement prévus dans la table de transitions et conformément aux règles RM-ANN-01 à RM-ANN-06.

---

## RM-ANN-01 — Annulation après confirmation

Une acquisition confirmée ne peut être annulée que par l'Administrateur pour un motif justifié. Dans AZUREUM V1, cette responsabilité est exercée exclusivement par Jérémie.

---

## RM-ANN-02 — État terminal

Une acquisition annulée constitue un état terminal. Elle ne peut ni reprendre son cycle normal ni redevenir confirmée.

---

## RM-ANN-03 — Remboursement

Lorsqu'une annulation implique un remboursement, son montant et son résultat doivent être déterminables et traçables.

Une acquisition ne doit pas être présentée comme remboursée tant que le résultat du remboursement n'est pas confirmé.

---

## RM-ANN-04 — Commission après annulation

Les conséquences d'une annulation ou d'un remboursement sur la commission doivent respecter les conditions de rémunération applicables à l'acquisition.

Aucun montant ne doit être conservé ou réattribué sans fondement contractuel ou juridique applicable.

---

## RM-ANN-05 — Retour à la disponibilité

Un exemplaire précédemment acquis ne peut redevenir disponible qu'après décision explicite de David, prise après vérification de sa situation, de son état physique, de sa localisation et des éléments d'authenticité concernés.

---

## RM-ANN-06 — Nouvelle acquisition

Toute nouvelle acquisition d'un exemplaire précédemment concerné par une acquisition annulée constitue un processus distinct avec une nouvelle référence, de nouvelles conditions et un historique propre.

# 10. Remise de l'œuvre

Le présent chapitre définit les règles métier applicables à la remise d'une œuvre après son acquisition.

La remise constitue l'exécution des obligations associées à l'acquisition envers l'acquéreur.

Le présent document ne définit ni les modalités logistiques ni les solutions techniques permettant cette remise.

---

## RM-REM-01 — Obligation de remise

Toute acquisition confirmée doit donner lieu à la remise de l'œuvre concernée conformément aux conditions d'acquisition applicables.

La remise précède nécessairement l'achèvement de l'acquisition.

---

## RM-REM-02 — Modalité définie

La modalité de remise est déterminée dans les conditions d'acquisition.

Elle est connue de l'acquéreur avant son engagement.

---

## RM-REM-03 — Unicité de la remise

Une acquisition ne peut donner lieu qu'à une seule remise de l'œuvre acquise.

---

## RM-REM-04 — Conformité

L'œuvre remise doit correspondre à l'œuvre acquise.

Aucune substitution ne peut intervenir sans décision explicite de David et accord de l'acquéreur lorsque celui-ci est nécessaire.

---

## RM-REM-05 — Intégrité

La remise doit préserver l'intégrité de l'œuvre.

Toute anomalie constatée avant la remise doit être traitée avant l'achèvement de l'acquisition.

---

## RM-REM-06 — Traçabilité

AZUREUM doit permettre de constater que la remise de l'œuvre a été effectuée.

Le présent document ne définit pas les moyens utilisés pour établir cette constatation.

---

## RM-REM-07 — Achèvement

La remise de l'œuvre constitue une étape nécessaire du cycle de vie d'une acquisition.

L'acquisition ne peut être considérée comme achevée tant que la remise n'est pas constatée.

---

## RM-REM-08 — Responsabilité

Les obligations associées à la remise prennent fin conformément aux conditions d'acquisition et à la réglementation applicable.

Le présent document ne précise pas les dispositions juridiques applicables.

---

## RM-REM-09 — Constatation vérifiable

La remise ne peut être considérée comme constatée que lorsqu'un élément de constatation vérifiable permet d'établir que l'œuvre a été transmise à l'acquéreur ou à un tiers qu'il a valablement désigné, conformément aux conditions d'acquisition applicables.

L'absence de déclaration de l'acquéreur n'empêche pas cette constatation lorsqu'un autre élément vérifiable existe.

---

## RM-REM-10 — Faits distincts

La remise constatée, la réception confirmée par l'acquéreur et l'état déclaré à réception constituent trois faits métier distincts.

Une anomalie relative à l'état de l'œuvre ne remet pas en cause, à elle seule, la constatation de sa remise.

---

## RM-REM-11 — Déclaration à réception

L'acquéreur peut déclarer l'état apparent de l'œuvre reçue et signaler une anomalie.

Sa déclaration initiale constitue un fait historique qui ne peut pas être réécrit. Des informations complémentaires peuvent lui être ajoutées ultérieurement sans remplacer son contenu initial.

---

## RM-REM-12 — Éléments complémentaires

La fourniture d'une photographie reste facultative. Elle est fortement recommandée lorsqu'une anomalie est déclarée.

L'absence de photographie ne peut empêcher l'enregistrement de la déclaration. L'Administrateur peut demander tout élément complémentaire utile à son instruction.

---

## RM-REM-13 — Éléments de constatation

Les éléments permettant de constater la remise dépendent de la modalité applicable.

Ils doivent permettre d'établir de manière vérifiable que l'exemplaire a été remis à l'acquéreur ou à un tiers qu'il a valablement désigné.

---

## RM-REM-14 — Remise en main propre

Une remise en main propre est constatée lorsqu'un élément vérifiable permet d'établir que l'exemplaire a été transmis à l'acquéreur ou à son représentant valablement désigné.

---

## RM-REM-15 — Expédition ou livraison

Une remise par expédition ou livraison est constatée lorsqu'un élément vérifiable permet d'établir la transmission de l'exemplaire conformément aux conditions d'acquisition applicables.

---

## RM-REM-16 — Absence de constat suffisant

En l'absence d'un élément de constatation suffisant, la remise ne peut pas être considérée comme établie et l'acquisition ne peut pas progresser vers son achèvement.

---

## RM-REM-17 — Impossibilité de remise

Lorsqu'une remise devient temporairement impossible, l'acquisition est placée dans une situation anormale.

Lorsqu'elle devient définitivement impossible après confirmation, l'Administrateur doit déterminer si l'acquisition doit être annulée conformément aux règles applicables.

---

## RM-REM-18 — Contestation

Une contestation de la remise ne supprime ni ne modifie automatiquement le constat existant.

Elle ouvre une situation anormale dont l'instruction doit préserver les éléments disponibles et produire une décision motivée et traçable.

---

## RM-REM-19 — Responsabilité

Les responsabilités de David, de l'exploitant et des éventuels intervenants dans la remise doivent être déterminées par les conditions applicables et le cadre juridique retenu.

Elles ne peuvent pas être transférées implicitement par une règle technique.

# 11. Authenticité

Le présent chapitre définit les règles métier relatives à l'authenticité des œuvres acquises.

L'authenticité constitue une caractéristique de l'œuvre et de son acquisition. Elle est indépendante des moyens techniques utilisés pour l'établir.

---

## RM-AUT-01 — Principe d'authenticité

Une œuvre peut être accompagnée d'un ou plusieurs éléments attestant de son authenticité.

Les éléments applicables sont définis par David.

---

## RM-AUT-02 — Définition

Les éléments d'authenticité peuvent notamment comprendre :

- un certificat d'authenticité ;
- une signature ;
- une numérotation ;
- tout autre élément retenu par l'artiste.

Le présent document ne limite pas cette liste.

---

## RM-AUT-03 — Cohérence

Les éléments d'authenticité remis à l'acquéreur doivent correspondre à l'œuvre et à l'exemplaire acquis.

Ils ne peuvent être associés à une autre œuvre ni à un autre exemplaire.

---

## RM-AUT-04 — Unicité

Un élément d'authenticité ne peut attester que de l'œuvre et, lorsqu'il est individualisé, de l'exemplaire pour lesquels il a été établi.

---

## RM-AUT-05 — Remise

Lorsque des éléments d'authenticité sont prévus, ils sont remis dans le cadre de l'acquisition.

Leur remise fait partie intégrante de l'exécution de celle-ci.

---

## RM-AUT-06 — Conservation

AZUREUM doit permettre de conserver les informations nécessaires au suivi des éléments d'authenticité conformément au périmètre de la V1.

Le présent document ne définit ni leur durée de conservation ni leur mode de stockage.

---

## RM-AUT-08 — Modification

Une modification de la présentation publique d'une œuvre n'affecte pas les éléments d'authenticité déjà établis pour les acquisitions réalisées.

---

## RM-AUT-09 — Traçabilité

Chaque élément d'authenticité doit pouvoir être rattaché sans ambiguïté :

- à une œuvre ;
- à l'exemplaire concerné lorsqu'il existe plusieurs exemplaires ;
- à une acquisition ;
- à son acquéreur lorsque cette information est applicable.

---

## RM-AUT-10 — Détermination

David détermine les éléments d'authenticité applicables à chaque œuvre ou édition.

Une œuvre ou un exemplaire ne doit pas être présenté comme accompagné d'un élément d'authenticité qui n'a pas été prévu ou établi.

---

## RM-AUT-11 — Individualisation

Lorsqu'une œuvre comporte plusieurs exemplaires, les éléments d'authenticité individualisés doivent identifier l'exemplaire concerné et sa numérotation lorsqu'elle est applicable.

---

## RM-AUT-12 — Moment de production

Les éléments d'authenticité doivent être produits au plus tard avant leur remise à l'acquéreur.

Ils ne doivent être présentés comme définitifs que lorsque les informations nécessaires à leur établissement sont validées.

---

## RM-AUT-13 — Moment de remise

Les éléments d'authenticité sont remis lorsque les conditions applicables sont satisfaites.

Leur remise constitue une condition de l'achèvement lorsqu'ils sont requis.

---

## RM-AUT-14 — Correction

Une erreur affectant un élément d'authenticité ne doit pas être corrigée par réécriture silencieuse.

La correction doit préserver la version antérieure, le motif, la date et le lien avec l'élément corrigé.

---

## RM-AUT-15 — Remplacement

Un élément d'authenticité remplacé ne doit plus être présenté comme l'élément de référence.

Son remplacement doit rester traçable et rattaché au même exemplaire et à la même acquisition.

---

## RM-AUT-16 — Annulation ou retour

L'annulation ou le retour d'un exemplaire ne supprime pas les éléments d'authenticité déjà produits.

Leur statut et leur éventuelle invalidation doivent être déterminés et conservés de manière traçable avant toute nouvelle acquisition.

---

## RM-AUT-17 — Forme des éléments d'authenticité

Les éléments d'authenticité peuvent être physiques, numériques ou associer les deux formes, selon la décision de David.

Aucune de ces formes n'est obligatoire par principe ; seules les formes définies pour l'œuvre ou l'édition concernée sont applicables.

# 12. Responsabilités métier

Le présent chapitre définit les responsabilités des différents acteurs intervenant dans le cycle de vie d'une acquisition.

Il précise les responsabilités fonctionnelles sans préjuger de leur mise en œuvre technique ou organisationnelle.

---

## 12.1 Principes

Chaque responsabilité métier est attribuée à un acteur clairement identifié.

Une même responsabilité ne peut être assumée simultanément par plusieurs acteurs sans règle explicite.

---

## 12.2 David

David est responsable :

- de la création des œuvres ;
- de la définition des conditions d'acquisition ;
- de la présentation artistique des œuvres ;
- de la décision de publier ou de retirer une œuvre ;
- de la définition des éléments d'authenticité associés à chaque œuvre.

---

## 12.3 AZUREUM et l'Administrateur

AZUREUM porte les comportements fonctionnels nécessaires :

- à la présentation publique des œuvres ;
- à la prise en compte et au suivi des acquisitions ;
- à la conservation des informations nécessaires au fonctionnement de la V1 ;
- au suivi de la remise des œuvres conformément aux conditions définies.

L'Administrateur est responsable :

- de la supervision des opérations relevant de ses responsabilités ;
- du traitement administratif des situations anormales ;
- des interventions qui lui sont explicitement autorisées par les règles métier.

---

## 12.4 L'acquéreur

L'acquéreur est responsable :

- de fournir les informations nécessaires à son acquisition ;
- de communiquer des informations exactes ;
- de respecter les conditions d'acquisition applicables.

---

## RM-RESP-01 — Attribution

Toute responsabilité métier doit être attribuée à un acteur identifié.

---

## RM-RESP-02 — Limitation

Un acteur ne peut exercer que les responsabilités prévues par le périmètre fonctionnel de la V1.

---

## RM-RESP-03 — Création

Seul David peut créer une nouvelle œuvre destinée à être présentée dans AZUREUM V1.

---

## RM-RESP-04 — Publication

Seul David peut décider de publier ou de retirer une œuvre.

AZUREUM doit refléter cette décision dans la présentation publique de l'œuvre.

---

## RM-RESP-05 — Acquisition

L'acquéreur est seul responsable de son engagement dans une acquisition.

Cet engagement ne peut être réalisé par un tiers sans autorisation prévue par les règles métier.

---

## RM-RESP-06 — Authenticité

La définition des éléments d'authenticité relève exclusivement de David.

AZUREUM doit permettre leur gestion conformément aux règles métier.

---

## RM-RESP-07 — Conservation

AZUREUM doit permettre la conservation des informations nécessaires au suivi des acquisitions et des éléments d'authenticité.

Le présent document ne définit ni les mécanismes de sauvegarde ni les durées de conservation.

---

## RM-RESP-08 — Évolution

Toute responsabilité impliquant un nouvel acteur constitue une évolution du modèle métier.

Elle ne peut être introduite sans modification du présent document.

---

## RM-RESP-09 — Vendeur

David est le vendeur juridique des exemplaires acquis dans AZUREUM. Il demeure propriétaire de chaque exemplaire jusqu'à son acquisition et assume les obligations attachées à sa vente.

---

## RM-RESP-10 — Exploitant et commission

Jérémie exploite AZUREUM et perçoit une commission en contrepartie du service fourni.

Il n'achète pas les exemplaires, ne les revend pas et n'en devient pas propriétaire.

---

## RM-RESP-11 — Traitement des paiements

Les flux financiers et la répartition des fonds doivent être traités par un prestataire de services de paiement habilité.

Le choix et l'intégration de ce prestataire ne relèvent pas du présent document.

---

## RM-RESP-12 — Responsabilités de David

David décide :

- de la création et de l'identité artistique des œuvres ;
- du nombre et de la numérotation des exemplaires ;
- de leur publication ;
- de leur disponibilité volontaire ;
- du prix et des conditions d'acquisition ;
- des modalités de remise autorisées ;
- des éléments d'authenticité applicables ;
- de la possibilité de proposer de nouveau un exemplaire après retour ou annulation.

---

## RM-RESP-13 — Responsabilités de l'Administrateur

L'Administrateur :

- supervise les acquisitions et paiements ;
- traite les situations anormales ;
- prononce les interruptions administratives autorisées ;
- peut annuler exceptionnellement une acquisition confirmée ;
- clôt les anomalies ;
- veille à la cohérence et à la traçabilité des interventions.

---

## RM-RESP-14 — Limites

David ne peut pas modifier rétroactivement les conditions d'une acquisition engagée.

L'Administrateur ne peut pas modifier une décision artistique relevant de David.

Aucun des deux acteurs ne peut exercer une opération qui ne lui est pas attribuée par les règles métier applicables.

# 13. Situations anormales

Le présent chapitre définit les principes applicables lorsque le déroulement normal d'une acquisition ne peut être poursuivi.

Il ne décrit pas les procédures opérationnelles de traitement mais les règles métier qui doivent rester vraies quelles que soient les circonstances.

---

## RM-ANOM-01 — Détection

Toute situation empêchant le déroulement normal d'une acquisition constitue une situation anormale.

---

## RM-ANOM-02 — Préservation des informations

Une situation anormale ne doit jamais entraîner la perte des informations relatives :

- à l'œuvre ;
- à l'acquisition ;
- à l'acquéreur ;
- aux éléments d'authenticité déjà établis.

---

## RM-ANOM-03 — Suspension

Lorsqu'une situation anormale survient, l'acquisition peut être suspendue jusqu'à la résolution de celle-ci.

La suspension ne constitue pas un nouvel état métier.

---

## RM-ANOM-04 — Interruption

Avant sa confirmation, une acquisition dont la poursuite devient impossible peut être interrompue conformément au cycle de vie défini au chapitre 9.

Après sa confirmation, sa sortie exceptionnelle du cycle normal constitue une annulation relevant exclusivement de l'Administrateur.

---

## RM-ANOM-05 — Traçabilité

Toute interruption d'une acquisition doit pouvoir être justifiée.

Le motif de cette interruption doit être conservé.

---

## RM-ANOM-06 — Cohérence

La résolution d'une situation anormale ne peut conduire à un état incompatible avec les règles métier du présent document.

---

## RM-ANOM-07 — Protection des acquisitions

Une situation anormale concernant une acquisition ne doit pas affecter les autres acquisitions sans règle métier explicite.

---

## RM-ANOM-08 — Décision

Les décisions exceptionnelles relèvent de David ou de l'Administrateur selon les responsabilités définies au chapitre 12. La clôture administrative d'une anomalie relève exclusivement de l'Administrateur.

---

## RM-ANOM-09 — Clôture

L'Administrateur peut clôturer une situation anormale lorsque les éléments disponibles permettent de prendre une décision conforme aux règles métier applicables.

La clôture est motivée, traçable et portée à la connaissance de l'acquéreur et de David. Elle clôt une procédure administrative sans réécrire la déclaration initiale ni déterminer rétroactivement la réalité de son contenu.

---

## RM-ANOM-10 — Nouvelle anomalie

Une anomalie clôturée n'est pas rouverte. Un fait nouveau donne lieu à une nouvelle anomalie qui peut être reliée à la précédente.

---

## RM-ANOM-11 — Effet sur l'achèvement

Une anomalie ouverte empêche la progression automatique de l'acquisition vers son achèvement tant que ses effets métier n'ont pas été déterminés.

---

## Exemples de situations anormales

À titre d'exemple, une situation anormale peut notamment résulter :

- d'informations incomplètes ;
- d'une impossibilité de remise ;
- d'un incident affectant une acquisition ;
- d'une impossibilité de poursuivre le cycle normal.

Cette liste est illustrative et ne constitue pas une énumération exhaustive.

---

## RM-ANOM-12 — Traitement automatique

Une situation peut être traitée automatiquement uniquement lorsque son résultat découle sans ambiguïté d'une règle métier explicite et ne nécessite aucune appréciation humaine.

L'expiration d'une réservation, le refus définitif d'un paiement avant confirmation et l'abandon explicite avant confirmation peuvent relever de ce traitement lorsqu'aucune autre anomalie n'est détectée.

---

## RM-ANOM-13 — Intervention humaine

Toute situation nécessitant une appréciation, une preuve complémentaire, une décision exceptionnelle ou un effet après confirmation doit être soumise à l'Administrateur.

---

## RM-ANOM-14 — Effets limités

Le traitement d'une anomalie ne doit produire que les effets explicitement autorisés par les règles applicables.

Il ne doit pas modifier silencieusement une acquisition, un exemplaire, un paiement, une remise ou un élément d'authenticité.

---

## RM-ANOM-15 — Information des acteurs

Toute décision affectant significativement une acquisition doit être portée à la connaissance des acteurs concernés dans les limites de leurs responsabilités et droits d'accès.

# 14. Règles juridiques conditionnelles

Les règles du présent chapitre restent soumises à une validation juridique adaptée. Elles définissent les comportements attendus lorsque les obligations concernées sont applicables, sans déterminer elles-mêmes le droit applicable.

## RM-LEG-01 — Applicabilité

AZUREUM applique le droit de rétractation et les autres obligations légales lorsqu'ils sont applicables à l'acquisition concernée.

Aucune règle générale ne doit présenter une exception ou une obligation comme applicable sans vérification du cadre juridique.

---

## RM-LEG-02 — Information préalable

Lorsque le droit de rétractation est applicable, ses conditions, son délai et ses modalités d'exercice doivent être portés à la connaissance de l'acquéreur avant son engagement.

---

## RM-LEG-03 — Exercice

L'exercice valable d'un droit de rétractation ouvre une situation métier distincte et traçable.

Il ne doit pas être assimilé à un échec de paiement, à une interruption avant confirmation ou à une annulation administrative.

---

## RM-LEG-04 — Effets

Les effets d'une rétractation sur le retour, le remboursement, la commission, l'authenticité et la disponibilité doivent respecter le cadre juridique applicable.

---

## RM-LEG-05 — Achèvement

Une acquisition soumise à un délai légal empêchant sa clôture ne peut être présentée comme achevée avant l'expiration de ce délai ou la satisfaction des conditions permettant légalement son achèvement.

# 15. Invariants métier

Le présent chapitre définit les propriétés fondamentales du domaine métier.

Les invariants constituent des règles permanentes. Ils doivent demeurer vrais en toute circonstance et prévalent sur toute autre règle du présent document.

Toute évolution future d'AZUREUM devra respecter ces invariants ou conduire à leur révision explicite.

---

## INV-01 — Identité de l'œuvre

Chaque œuvre possède une identité métier unique.

Cette identité ne peut être modifiée au cours de son cycle de vie.

---

## INV-02 — Auteur

Toutes les œuvres présentées dans AZUREUM V1 sont créées par David Prieur-Gélis.

La gestion de plusieurs artistes est hors périmètre de la V1.

---

## INV-03 — Cohérence des acquisitions

Toute acquisition est rattachée à une unique œuvre et à un unique exemplaire physique.

Une acquisition ne peut concerner plusieurs œuvres ou plusieurs exemplaires simultanément.

---

## INV-04 — État métier unique

Une acquisition possède à tout instant un unique état métier.

Deux états simultanés sont interdits.

---

## INV-05 — Respect du cycle de vie

Une acquisition ne peut évoluer qu'au moyen des transitions autorisées par le chapitre 9.

---

## INV-06 — Traçabilité

Toute acquisition demeure traçable pendant toute son existence.

Son historique ne peut être supprimé par une opération métier courante.

---

## INV-07 — Authenticité

Les éléments d'authenticité établis pour une œuvre ne peuvent être rattachés à une autre œuvre.

---

## INV-08 — Intégrité

Les informations métier relatives à une acquisition doivent rester cohérentes entre elles.

Aucune règle ne peut conduire à une contradiction du modèle métier.

---

## INV-09 — Responsabilités

Chaque responsabilité métier appartient à un acteur clairement identifié.

Une responsabilité ne peut être exercée par un autre acteur sans modification explicite des règles métier.

---

## INV-10 — Primauté du présent document

En cas de contradiction entre plusieurs documents fonctionnels de la V1, les règles définies dans la présente spécification métier prévalent pour toute question relative aux règles métier.

Les autres documents devront être mis en cohérence.

---

## INV-11 — Unicité de la réservation

Un exemplaire ne peut être lié simultanément qu'à une seule réservation active.

Deux acquisitions ne peuvent jamais disposer en même temps d'une réservation active portant sur le même exemplaire.

---

## INV-12 — Identité de l'exemplaire

Chaque exemplaire acquérable possède une identité propre qui demeure distincte de celle de l'œuvre et des autres exemplaires de la même édition.

---

## INV-13 — Qualité du vendeur

David demeure le vendeur des exemplaires acquis dans AZUREUM. La commission due à l'exploitant ne lui transfère ni la propriété des exemplaires ni la qualité de vendeur.

---

## Vérification

Les invariants devront pouvoir être vérifiés lors :

- de la conception ;
- du développement ;
- des tests ;
- des évolutions futures du produit.

Aucune fonctionnalité ne pourra être validée si elle viole un invariant du présent chapitre.

# 16. Hors périmètre

Le présent chapitre recense les fonctionnalités explicitement exclues de la première version d'AZUREUM.

Toute fonctionnalité mentionnée ci-dessous ne pourra être introduite qu'au travers d'une évolution du cahier des charges et des règles métier.

---

## HP-01 — Multi-artistes

La V1 est exclusivement dédiée aux œuvres de David Prieur-Gélis.

La gestion de plusieurs artistes est exclue.

---

## HP-02 — Enchères

La V1 ne comprend aucun mécanisme d'enchères.

Sont notamment exclus :

- les enchères publiques ;
- les enchères privées ;
- les surenchères automatiques ;
- les prolongations d'enchères ;
- les enchères en temps réel.

---

## HP-03 — Négociation

Aucun mécanisme de négociation n'est prévu entre David et un acquéreur dans AZUREUM.

Le prix d'acquisition est déterminé à l'avance.

---

## HP-04 — Vente entre collectionneurs

La V1 ne permet pas :

- la revente d'une œuvre ;
- la cession entre collectionneurs ;
- un marché secondaire.

---

## HP-05 — Espaces communautaires

La V1 ne comprend pas :

- de commentaires publics ;
- de forum ;
- de messagerie entre utilisateurs ;
- de réseau social.

---

## Principe

L'absence d'une fonctionnalité dans la présente documentation ne constitue pas une omission.

Elle signifie que cette fonctionnalité ne fait pas partie du périmètre validé de la V1.

# 17. Traçabilité

Le présent chapitre définit les règles de traçabilité applicables à la spécification métier de la V1.

Son objectif est de garantir que chaque règle métier puisse être reliée aux autres documents du projet ainsi qu'à son implémentation.

---

## TRAC-01 — Identification

Chaque règle métier est identifiée par un identifiant unique.

Les identifiants utilisés dans le présent document sont notamment :

- RM-ŒUV ;
- RM-ACQ ;
- RM-CYC ;
- RM-REM ;
- RM-AUT ;
- RM-RESP ;
- RM-ANOM ;
- INV.

---

## TRAC-02 — Référencement

Une règle métier peut être référencée par :

- le cahier des charges fonctionnel ;
- les spécifications techniques ;
- les tests ;
- la documentation utilisateur.

Les références doivent utiliser l'identifiant officiel de la règle.

---

## TRAC-03 — Évolution

Toute modification d'une règle métier doit permettre d'identifier :

- la règle concernée ;
- la nature de la modification ;
- les impacts éventuels sur les autres documents.

---

## TRAC-04 — Cohérence documentaire

Les documents produits dans le cadre d'AZUREUM doivent rester cohérents avec la présente spécification métier.

En cas de divergence, une révision documentaire est nécessaire.

---

## TRAC-05 — Vérification

Chaque règle métier doit pouvoir être vérifiée au moyen :

- d'une revue documentaire ;
- d'un ou plusieurs scénarios de test ;
- d'une validation fonctionnelle.

---

## Matrice de traçabilité

### Interprétations fonctionnelles validées

#### IF-01 — Œuvres et exemplaires

Les capacités existantes de maintien des œuvres et de leurs informations couvrent la gestion métier d'un ou plusieurs exemplaires physiques rattachés à une œuvre, ainsi que leur numérotation, leur disponibilité et leurs conditions propres.

#### IF-02 — Ventes externes

Les capacités existantes de maintien de la disponibilité, de l'historique, de l'authenticité et de la traçabilité permettent l'enregistrement d'une vente externe sans lui attribuer les caractéristiques d'une acquisition conclue dans AZUREUM.

La matrice relie les besoins et spécifications du Sprint 003-r1 aux décisions produit, règles métier et invariants qui les précisent.

| Besoins | Capacités | Cas d'usage | Exigences | Décisions produit | Règles métier | Invariants |
|---|---|---|---|---|---|---|
| BES-VIS-01 à BES-VIS-05, BES-DAV-01, BES-DAV-02, BES-DAV-05 | CAP-ART-01 à CAP-ART-06 | CU-VIS-01 à CU-VIS-03, CU-DAV-01 | EF-ART-01 à EF-ART-08, EF-ACQ-01 à EF-ACQ-05 | H-02 | RM-ŒUV-01 à RM-ŒUV-12 | INV-01, INV-02, INV-12 |
| BES-ACQ-01 à BES-ACQ-03, BES-DAV-03, BES-ADM-02 | CAP-ACQ-01 à CAP-ACQ-05 | CU-ACQ-01, CU-DAV-02, CU-ADM-01 | EF-ACQ-01 à EF-ACQ-05, EF-ACH-01 à EF-ACH-09 | H-01, H-02, H-04, H-05 | RM-ACQ-01 à RM-ACQ-22, RM-COM-01 à RM-COM-05, RM-CYC-01 à RM-CYC-10, RM-ANN-01 à RM-ANN-06, RM-LEG-01 à RM-LEG-05 | INV-03 à INV-05, INV-11 à INV-13 |
| BES-ACQ-04, BES-DAV-04, BES-ADM-02, BES-ADM-04 | CAP-ACQ-05, CAP-ACQ-06, CAP-ACQ-08, CAP-SUP-01, CAP-SUP-04 | CU-ACQ-02, CU-DAV-03, CU-ADM-01 | EF-SUI-01 à EF-SUI-08, EF-SUP-01, EF-SUP-03, EF-SUP-06 | H-02, H-03 | RM-CYC-04 à RM-CYC-10, RM-ANN-01 à RM-ANN-06, RM-REM-01 à RM-REM-19, RM-EXT-01 à RM-EXT-05 | INV-03 à INV-06, INV-11, INV-12 |
| BES-ACQ-05 | CAP-ACQ-07 | CU-ACQ-03 | EF-AUT-01 à EF-AUT-04 | H-02, H-03 | RM-AUT-01 à RM-AUT-06, RM-AUT-08 à RM-AUT-17 | INV-07, INV-12 |
| BES-ACQ-06, BES-ADM-03, BES-ADM-04 | CAP-ACQ-09, CAP-SUP-03 à CAP-SUP-05 | CU-ACQ-04, CU-ADM-02 | EF-REC-01 à EF-REC-07, EF-SUP-03 à EF-SUP-09 | H-01, H-02 | RM-REM-09 à RM-REM-19, RM-ANOM-01 à RM-ANOM-15 | INV-06, INV-08, INV-09 |
| BES-DAV-01 à BES-DAV-03, BES-ADM-01, BES-ADM-05 | CAP-GES-01 à CAP-GES-05 | CU-DAV-01, CU-DAV-02 | EF-GES-01 à EF-GES-10 | H-02, H-03 | RM-ŒUV-03 à RM-ŒUV-12, RM-ACQ-01 à RM-ACQ-22, RM-EXT-01 à RM-EXT-05, RM-RESP-01 à RM-RESP-14 | INV-01, INV-02, INV-08, INV-09, INV-12, INV-13 |
| BES-ADM-02 à BES-ADM-05 | CAP-SUP-01 à CAP-SUP-05 | CU-ADM-01, CU-ADM-02 | EF-SUP-01 à EF-SUP-09 | H-01, H-03 | RM-RESP-01 à RM-RESP-14, RM-ANOM-01 à RM-ANOM-15 | INV-06, INV-08, INV-09, INV-13 |

Les spécifications techniques et les tests compléteront cette chaîne dans les sprints qui leur sont consacrés sans modifier les relations métier définies ici.

# 18. Critères d'acceptation

Le présent document est considéré comme validé lorsque l'ensemble des critères suivants sont satisfaits.

---

## CA-01 — Couverture métier

Toutes les règles métier nécessaires au fonctionnement de la V1 sont décrites.

Aucune règle essentielle ne demeure implicite.

---

## CA-02 — Cohérence interne

Les différents chapitres du présent document sont cohérents entre eux.

Aucune contradiction métier n'est identifiée.

---

## CA-03 — Cohérence documentaire

La présente spécification est cohérente avec :

- le Sprint 001 — Fondation et gouvernance ;
- le Sprint 002 — Vision produit ;
- le Sprint 003 — Cahier des charges fonctionnel, révision `sprint-003-r1`.

Toute divergence identifiée doit être résolue avant validation.

---

## CA-04 — Traçabilité

Toutes les règles métier disposent d'un identifiant unique.

Les invariants sont clairement identifiés.

---

## CA-05 — Vérifiabilité

Chaque règle métier peut être vérifiée au moyen :

- d'une revue documentaire ;
- d'une spécification technique ;
- d'un scénario de test.

---

## CA-06 — Indépendance technique

Le présent document ne dépend d'aucune technologie particulière.

Les règles décrites restent valables indépendamment des choix d'implémentation.

---

## CA-07 — Validation métier

Le Product Owner valide que les règles décrivent fidèlement le fonctionnement attendu d'AZUREUM V1.

---

## CA-08 — Préparation des sprints suivants

Les règles définies permettent d'engager la conception technique sans ambiguïté majeure.

Aucun blocage fonctionnel significatif ne subsiste.

---

## Résultat attendu

Lorsque l'ensemble des critères précédents est satisfait, la spécification métier constitue la référence officielle des règles métier de la V1.

Toute évolution ultérieure devra faire l'objet d'une révision explicite du présent document.

# 19. Validation

Le présent document constitue la spécification officielle des règles métier de la première version d'AZUREUM.

Il est produit dans le cadre du Sprint 004 et complète les documents de gouvernance, de vision produit et de cahier des charges fonctionnel.

---

## Statut

À l'issue de sa validation, le présent document acquiert le statut de référence métier pour la V1.

Il décrit les règles qui gouvernent le fonctionnement d'AZUREUM indépendamment de toute implémentation technique.

---

## Approbation

La validation du document relève du Product Owner.

Cette validation atteste que les règles décrites correspondent au fonctionnement attendu du produit.

Elle ne vaut pas validation de l'architecture technique, du modèle de données ou des choix d'implémentation.

Le 21 juillet 2026, le Product Owner a validé le contenu métier du Sprint 004 et déclaré le modèle métier de la V1 stabilisé.

Les règles `RM-LEG-01` à `RM-LEG-05` demeurent volontairement conditionnelles. Leur application effective reste subordonnée à une vérification juridique, fiscale et contractuelle adaptée avant toute mise en exploitation d'AZUREUM. Cette réserve, explicitement acceptée par le Product Owner, ne remet pas en cause la validation du présent document.

---

## Évolutions

Toute évolution des règles métier devra :

- être explicitement documentée ;
- préserver la cohérence de la présente spécification ;
- identifier les impacts sur les autres documents du projet.

Les modifications approuvées donneront lieu à une nouvelle version du document.

---

## Référence documentaire

Le présent document complète les références suivantes :

- Sprint 001 — Fondation et gouvernance ;
- Sprint 002 — Vision produit ;
- Sprint 003 — Cahier des charges fonctionnel, révision `sprint-003-r1`.

En cas de contradiction relative aux règles métier, la présente spécification fait autorité.

---

## Utilisation

La présente spécification constitue la référence métier pour :

- la conception technique ;
- la modélisation des données ;
- le développement ;
- les tests ;
- les évolutions futures du produit.

Toute décision ayant un impact sur les règles métier devra être évaluée au regard du présent document.

---

## Fin du document
