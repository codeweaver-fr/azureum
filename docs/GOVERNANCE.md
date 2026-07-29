# Gouvernance du projet AZUREUM

## Principe central

Aucun code n'est écrit tant que son objectif, son comportement et son périmètre ne sont pas définis.

## Règles des Sprints

Chaque Sprint doit posséder :

- un objectif unique ;
- un périmètre explicite ;
- des éléments hors périmètre ;
- des critères d'acceptation ;
- des validations adaptées ;
- une documentation mise à jour ;
- un état final propre et reproductible.

## Exécution incrémentale

Le nombre d'incréments dépend des responsabilités du Sprint et est déterminé par son
contrat. La gouvernance n'impose aucun nombre minimal ou maximal. Un Sprint peut ne pas
être découpé en incréments lorsque son périmètre ne le justifie pas.

Lorsqu'un Sprint est découpé en incréments, son contrat définit pour chacun :

- un objectif unique ;
- un périmètre borné ;
- les travaux autorisés ;
- les critères de validation ;
- les contrôles proportionnés à son périmètre ;
- le commit Git attendu.

Un incrément ne commence qu'après la revue, l'acceptation du résultat et l'enregistrement
du précédent dans un commit dédié. Chaque commit d'incrément porte une seule intention
et contient uniquement les fichiers nécessaires à cette intention.

Cette acceptation intermédiaire ne remplace pas la validation Product Owner finale du
Sprint prévue par la procédure de verrouillage.

Une non-conformité découverte pendant la revue est corrigée dans l'incrément concerné
avant son acceptation. Une idée, une amélioration ou un besoin appartenant à un
périmètre ultérieur est différé et ne peut pas être introduit implicitement.

Lorsque le contrat prévoit un incrément dédié à la clôture, celui-ci réalise
exclusivement l'audit transversal, les contrôles complets, la synchronisation
documentaire et la préparation du verrouillage. Il ne crée aucune fonctionnalité,
aucune API, aucun token ni aucune décision produit nouvelle. Une correction applicative
n'y est autorisée que lorsqu'elle répond à une non-conformité réelle et démontrée.

## Stabilité du canon

Les documents canoniques constituent la référence officielle du projet. Toute évolution
du canon doit être motivée, tracée, validée par le Product Owner et intégrée selon la
présente gouvernance.

## Catégories de Sprints

Les Sprints appartiennent à l'une des catégories suivantes. Leur catégorie précise leur
objectif principal sans modifier les exigences communes de validation, de traçabilité
et de verrouillage.

| Catégorie | Objectif |
|---|---|
| Fonctionnel | Ajouter ou faire évoluer une capacité du produit conformément aux spécifications validées. |
| Direction artistique | Faire évoluer l'expérience visuelle ou la mise en scène d'une capacité fonctionnelle déjà stabilisée. |
| Sécurité | Auditer ou renforcer la protection du produit, de ses données, de son infrastructure et de son exploitation. |
| Optimisation | Améliorer une qualité non fonctionnelle démontrée, notamment les performances, le SEO, l'accessibilité ou la dette technique. |
| Documentation | Corriger, synchroniser ou consolider le référentiel documentaire sans modifier implicitement le produit. |

Un Sprint peut produire une évolution des documents canoniques uniquement lorsque cette
évolution est explicitement identifiée, justifiée, arbitrée par le Product Owner et
validée avant l'implémentation qui en dépend.

Une catégorie ne permet jamais d'étendre implicitement le périmètre d'un Sprint. Un
besoin appartenant à une autre catégorie est différé ou fait l'objet d'un arbitrage
explicite.

## Statut des audits et propositions

Un audit, une maquette, une recommandation UX, une proposition de direction artistique,
un rapport de sécurité ou une mesure d'optimisation ne possède aucune valeur normative
par lui-même.

Ces éléments constituent des propositions tant qu'ils n'ont pas suivi la séquence
suivante :

```text
Proposition ou constat
→ Audit de conformité et de faisabilité
→ Arbitrage Product Owner
→ Mise à jour des documents canoniques concernés
→ Validation documentaire
→ Implémentation dans un Sprint autorisé
→ Contrôles et contre-audit
→ Verrouillage
```

Une proposition non retenue ne modifie ni le canon, ni le code de production, ni les
critères d'acceptation en vigueur.

La mise à jour documentaire doit cibler le document qui porte réellement la décision :

- les capacités et comportements relèvent des spécifications fonctionnelles ;
- les règles et invariants relèvent des règles métier ;
- les vues, parcours et responsabilités relèvent de la structure produit ;
- les contraintes transversales de conception relèvent du Design System ;
- les contraintes de construction, de sécurité technique et de déploiement relèvent de
  l'architecture technique ou des standards d'exploitation concernés ;
- une composition strictement locale peut relever du contrat du Sprint autorisé si
  elle ne crée aucune règle transversale.

## Référence officielle et évolution

Une implémentation validée et verrouillée constitue la référence officielle du produit à
la date de sa clôture. Elle n'est ni provisoire, ni inachevée au motif qu'une évolution
artistique, fonctionnelle, sécuritaire ou technique pourra être décidée ultérieurement.

Une évolution future constitue une nouvelle décision du produit. Elle doit être motivée
par un objectif validé ou un problème observé et suivre la gouvernance applicable. Une
simple préférence ou une exploration non arbitrée ne justifie pas la modification d'une
référence verrouillée.

## Contrôles continus et Sprints spécialisés

La création d'un Sprint spécialisé ne reporte pas les obligations courantes des autres
Sprints.

Chaque Sprint continue d'appliquer les contrôles proportionnés à son périmètre,
notamment :

- qualité et reproductibilité ;
- accessibilité ;
- contrôle des dépendances ;
- absence de secrets versionnés ;
- sécurité courante des changements introduits ;
- performance et absence de régression ;
- cohérence documentaire.

Un Sprint de sécurité ou d'optimisation intervient lorsqu'un audit transversal, une
préparation au déploiement ou un besoin démontré nécessite un périmètre dédié. Il ne
remplace jamais les contrôles continus.

## Brouillons de contrats

Un contrat de Sprint en préparation constitue un travail en cours sans valeur normative
tant qu'il n'a pas été explicitement validé par le Product Owner et verrouillé selon la
présente gouvernance.

Avant son verrouillage, un brouillon peut être déplacé, reformulé, complété ou réécrit
sans procédure de migration documentaire. Il ne peut autoriser aucune implémentation et
ne prévaut sur aucun document canonique.

La présence d'un brouillon dans une branche ou dans l'historique Git de cette branche ne
constitue ni l'ouverture de l'implémentation, ni la validation du Sprint, ni son
intégration au canon.

## Interdictions

- aucun développement hors Sprint ;
- aucune décision métier implicite ;
- aucune modification distante non versionnée ;
- aucune table créée sans migration ;
- aucune règle de sécurité créée uniquement depuis une interface distante ;
- aucun secret ajouté à Git ;
- aucun Sprint suivant tant que le Sprint courant n'est pas validé ;
- aucune dépendance ajoutée sans justification.

## Statuts documentaires

- À définir
- En exploration
- Validé
- Implémenté
- Archivé

## Git

- `main` doit toujours rester stable ;
- chaque Sprint utilise une branche dédiée ;
- aucune modification n'est intégrée directement dans `main` ;
- toute intégration dans `main` s'effectue par Pull Request après validation Product
  Owner ;
- chaque commit décrit une seule intention ;
- chaque Sprint validé reçoit un tag ;
- aucun fichier généré ou secret ne doit être versionné.

## Validation d'un Sprint

Un Sprint est verrouillable uniquement si :

- tous ses critères d'acceptation sont satisfaits ;
- la documentation est cohérente ;
- les validations prévues réussissent ;
- le dépôt est propre ;
- aucune modification hors périmètre n'est présente.

## Procédure de validation et de verrouillage des Sprints

Cette procédure s'applique à partir du Sprint 006.

Le travail documentaire, les corrections, les audits et la préparation du diff peuvent être réalisés sans autorisation intermédiaire.

Lorsque la revue finale est terminée, le Product Owner prononce une validation unique :

> Je valide et j'autorise le verrouillage complet du Sprint XXX.

Cette autorisation couvre l'ensemble des opérations nécessaires à la clôture :

- application des statuts définitifs ;
- staging nominatif ;
- vérification du staging ;
- création des commits ;
- création du tag ;
- push de la branche et du tag ;
- fusion dans `main` ;
- push de `main` ;
- nettoyage de la branche après vérification.

Aucune autorisation supplémentaire n'est requise entre ces opérations.

L'exécution doit toutefois être interrompue en cas de fichier inattendu, conflit, échec de contrôle, historique divergent, tag existant à déplacer ou opération destructive.

Les opérations `push --force`, `reset --hard`, déplacement de tag publié et réécriture d'historique restent interdites sans autorisation spécifique du Product Owner.

## Révision contrôlée d'un Sprint validé

Un Sprint validé constitue une référence documentaire stable. Il peut toutefois faire l'objet d'une révision ultérieure afin de corriger une omission, d'intégrer une décision de périmètre, de préserver la cohérence documentaire ou d'améliorer le référentiel fonctionnel ou métier.

Toute révision doit :

- être explicitement autorisée par le Product Owner ;
- être documentée et versionnée ;
- conserver l'historique des décisions et validations antérieures ;
- être relue et validée avant de devenir la nouvelle référence.

Une correction strictement documentaire reçoit un commit dédié et suit la procédure
d'intégration par Pull Request. Elle ne nécessite pas automatiquement un nouveau tag
lorsqu'elle ne crée pas une nouvelle référence officielle du Sprint.

Une révision qui modifie le contrat validé, le périmètre, les décisions normatives ou la
référence officielle du Sprint reçoit un commit et un tag distincts de ceux de la
validation initiale.

Le tag d'une validation antérieure ne doit jamais être déplacé ou remplacé.
