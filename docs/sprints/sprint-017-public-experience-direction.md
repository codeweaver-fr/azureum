# Sprint 017 — Direction artistique et expérience publique V1

## 1. Raison d'être et objectif

AZUREUM dispose désormais d'une expérience publique complète sur le plan fonctionnel.
Le Sprint 017 intervient à ce moment précis pour donner à cet ensemble une direction
d'expérience commune, capable de guider sa future évolution sans réécrire les
responsabilités déjà établies.

Son objectif est de définir la direction d'expérience publique d'AZUREUM V1 et de
produire le manifeste transversal qui permettra d'évaluer les futures propositions de
conception et d'implémentation.

Le Sprint ne conçoit ni une maquette, ni une interface de production. Il formalise les
raisons et les principes qui devront guider les futurs choix de présentation, de
composition, de mouvement et de continuité entre les vues publiques.

## 2. Pourquoi maintenant

Les Sprints 010 à 016 ont matérialisé les responsabilités publiques de la V1 :

- shell et navigation publics ;
- accueil ;
- présentation de David et de sa démarche ;
- collections et œuvres ;
- contenus artistiques ;
- évolution dans le temps.

L'ensemble est fonctionnel, responsive, accessible et couvert par les validations du
projet. Les responsabilités publiques étant désormais stabilisées, le projet peut
travailler sur la qualité de l'expérience sans remettre en cause les fonctions, les
parcours et les décisions déjà validés.

L'expérience reste toutefois principalement structurelle : les vues sont cohérentes par
leurs fondations, mais elles ne partagent pas encore une grammaire explicite de rythme,
de composition, de progression et de mise en scène.

La fiche d'œuvre possède la composition la plus affirmée. Les autres vues ne doivent
pas l'imiter artificiellement, mais doivent atteindre un niveau de finition et de
cohérence équivalent, adapté à leur responsabilité.

## 3. Catégorie et statut

**Contrat validé par le Product Owner et verrouillé avant rédaction du manifeste**

Le Sprint 017 est un Sprint de direction artistique au sens de
`docs/GOVERNANCE.md`. Il intervient sur une expérience publique fonctionnellement
stabilisée et reste exclusivement documentaire.

Ce caractère documentaire est une condition de sa responsabilité : le Sprint définit
le cadre qui permettra d'arbitrer les futures évolutions, mais n'en implémente aucune.
Aucun travail d'implémentation ne peut commencer dans son périmètre.

Les audits, orientations et propositions produits pendant sa préparation ne deviennent
normatifs qu'après arbitrage du Product Owner, mise à jour du document canonique
concerné, validation et verrouillage.

## 4. Références applicables

Le Sprint applique sans les redéfinir :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- les contrats des Sprints 008, 008-r1 et 009 relatifs au Design System ;
- les contrats des Sprints 010 à 016 relatifs aux vues publiques.

## 5. Décisions héritées

Le Sprint préserve notamment les décisions suivantes :

- les responsabilités `V-PUB-01` à `V-PUB-07` restent inchangées ;
- les collections constituent l'accès public structurant aux œuvres ;
- les œuvres et la démarche artistique priment sur l'interface ;
- la navigation principale, ses libellés et ses destinations restent inchangés ;
- le shell public reste la structure partagée de l'expérience ;
- le Design System existant demeure l'unique source des fondations, tokens, composants
  et règles transversales de conception ;
- l'expérience reste mobile-first, accessible et compatible avec le reflow ;
- le mouvement possède une finalité identifiable et respecte
  `prefers-reduced-motion` ;
- les œuvres ne subissent aucun recadrage destructif ;
- le thème clair demeure l'unique thème de la V1 ;
- les données, médias et contenus explicitement fictifs ou provisoires conservent leur
  statut actuel ;
- le master graphique du logo reste en finalisation.

## 6. Orientations Product Owner validées

### 6.1 Émotion initiale

Les dix premières secondes recherchent une expérience contemplative accompagnée d'une
tension intrigante légère. Elles ne recherchent ni énergie démonstrative, ni spectacle.

### 6.2 Rôle de l'accueil

L'accueil introduit l'univers de David et donne immédiatement accès aux collections. Il
n'est ni un simple index, ni une séquence narrative longue retardant l'accès aux œuvres.

### 6.3 Niveau de singularité

L'expérience adopte un positionnement éditorial artistique distinctif : plus singulier
qu'une galerie institutionnelle conventionnelle, moins risqué qu'une expérience
expérimentale complète.

### 6.4 Rapport entre marque et œuvres

AZUREUM agit comme une marque éditoriale perceptible dans le rythme, la typographie, les
proportions et, ultérieurement, les transitions. Les œuvres restent dominantes.

### 6.5 Principe de composition

La composition s'adapte au contenu dans une grammaire commune. Une asymétrie maîtrisée
est autorisée lorsqu'elle sert la compréhension et préserve l'ordre sémantique.

### 6.6 Niveau de silence visuel

L'expérience est silencieuse à équilibrée : elle ménage une respiration importante tout
en conservant les repères nécessaires à la compréhension et à la navigation.

### 6.7 Continuité

La continuité repose sur la composition, les proportions, les médias, les reprises
visuelles et, dans de futurs Sprints autorisés, des transitions discrètes.

### 6.8 Mouvement

Le mouvement est discret, éditorial et utile. Les chorégraphies longues, parallaxes
importantes et effets spectaculaires sont exclus.

### 6.9 Définition du premium

Le caractère premium d'AZUREUM repose sur la précision, les proportions, l'espace, la
qualité typographique, la maîtrise du mouvement et l'exigence du détail. Il ne repose
jamais sur l'ornementation, l'ostentation ou les signes conventionnels du luxe.

## 7. Vision centrale

AZUREUM met en scène le travail de David dans une expérience contemporaine, premium et
éditoriale, où la précision des proportions, le silence, la lumière et le mouvement
maîtrisé rendent la marque immédiatement reconnaissable sans jamais détourner
l'attention des œuvres.

## 8. Responsabilité du Sprint

Le Sprint doit :

- consolider les décisions héritées et les orientations Product Owner ;
- formaliser les principes de l'expérience publique ;
- définir le ressenti, le rythme, la progression et la relation entre marque, artiste et
  œuvres ;
- préciser la responsabilité sensible des vues publiques ;
- définir des critères de rejet applicables aux futures propositions ;
- produire `docs/specifications/public-experience-manifest-v1.md` ;
- identifier les décisions différées aux futurs Sprints ;
- préparer la validation et le verrouillage du manifeste.

## 9. Périmètre inclus

Le Sprint peut :

- auditer et consolider l'expérience publique existante ;
- définir une vision et un principe directeur ;
- définir l'expérience émotionnelle recherchée ;
- définir des principes de composition, de hiérarchie et d'attention ;
- définir le rythme, la densité, la respiration et la progression ;
- préciser le rôle sensible de la palette et de la typographie existantes ;
- encadrer conceptuellement le mouvement dans les limites du Design System ;
- définir la continuité entre les vues ;
- définir les langages interdits et les critères de rejet ;
- documenter les conséquences possibles pour de futurs Sprints sans les autoriser.

## 10. Hors périmètre

Sont exclus :

- toute modification de l'application ;
- toute maquette finale ;
- tout CSS ou code de production ;
- tout nouveau composant, token, état ou variante ;
- toute modification du Design System ;
- toute modification de route, navigation ou responsabilité fonctionnelle ;
- toute création ou modification de média ;
- toute animation de production ;
- toute décision d'architecture technique ;
- toute intégration de contenu définitif non disponible ;
- toute anticipation des futurs Sprints d'implémentation.

## 11. Livrables

Les livrables sont exclusivement :

- le présent contrat validé et verrouillé ;
- `docs/specifications/public-experience-manifest-v1.md` ;
- la traçabilité des principes vers les documents canoniques existants ;
- l'inventaire des décisions différées.

Aucune maquette, planche d'ambiance, feuille de styles ou démonstration applicative n'est
requise pour terminer le Sprint.

## 12. Méthode d'élaboration du manifeste

La rédaction suit l'ordre suivant :

1. consolider les décisions héritées ;
2. intégrer les arbitrages Product Owner validés ;
3. formuler des principes indépendants de toute technologie ;
4. vérifier leur compatibilité avec les spécifications existantes ;
5. distinguer les principes normatifs des décisions différées ;
6. soumettre le manifeste à la revue Product Owner ;
7. intégrer uniquement les remarques validées ;
8. verrouiller le document conformément à la gouvernance.

Une proposition, une préférence ou un audit ne possède aucune valeur normative avant
la fin de cette séquence.

## 13. Relation avec le Design System

Le manifeste orchestre les fondations existantes sans les recopier ni les modifier. Il
référence les principes, tokens, règles et composants du Design System lorsque
nécessaire.

Sa portée normative concerne l'intention et les critères de l'expérience publique.
Toute évolution des fondations reste sous la responsabilité du Design System et de sa
propre gouvernance.

Tout besoin transversal non couvert est uniquement signalé. Il ne peut devenir une
évolution du Design System qu'après arbitrage Product Owner et procédure documentaire
dédiée.

Le Sprint ne définit aucune valeur, API, propriété CSS, animation ou solution
technique.

## 14. Responsabilités publiques concernées

Le manifeste couvre l'expérience sensible des vues et structures suivantes sans
modifier leur responsabilité fonctionnelle :

- accueil ;
- David et sa démarche ;
- collections ;
- consultation d'une collection ;
- consultation d'une œuvre ;
- contenu artistique ;
- évolution dans le temps ;
- shell public.

## 15. Critères d'acceptation

Le Sprint est acceptable si :

- les neuf arbitrages Product Owner sont explicitement couverts ;
- la définition du premium et le principe directeur sont explicites ;
- le ressenti et la progression émotionnelle sont définis ;
- la relation entre David, AZUREUM et les œuvres est non ambiguë ;
- chaque vue possède une responsabilité sensible sans réécriture fonctionnelle ;
- les règles de composition, de rythme, de palette et de mouvement restent
  indépendantes de toute implémentation ;
- les langages interdits et les critères de rejet sont vérifiables ;
- le manifeste ne crée aucune règle technique ;
- aucune valeur ni API du Design System n'est dupliquée ou remplacée ;
- accessibilité, responsive et performance restent non négociables ;
- les décisions différées sont identifiées ;
- la traçabilité vers les documents canoniques est complète ;
- aucun travail hors périmètre n'est introduit.

## 16. Validations obligatoires

La clôture exige :

- une revue de cohérence avec `docs/GOVERNANCE.md` ;
- une revue des cinq spécifications canoniques existantes ;
- une revue de cohérence avec les contrats des Sprints 010 à 016 ;
- une vérification de l'absence de duplication normative ;
- une vérification de l'absence de prescription technique ;
- la conformité Prettier ;
- la conformité de `git diff --check` ;
- la validation Product Owner finale.

## 17. Zones autorisées

Pendant la rédaction :

```text
docs/sprints/sprint-017-public-experience-direction.md
docs/specifications/public-experience-manifest-v1.md
```

À la clôture uniquement :

```text
PROJECT_STATE.md
CHANGELOG.md
```

Tout autre fichier est hors périmètre.

## 18. Découpage incrémental proposé

### Incrément 1 — Contrat

L'objectif est de valider et verrouiller le présent contrat avant toute rédaction
normative du manifeste. Le périmètre se limite au contrat du Sprint 017 ; seuls sa
revue, les corrections validées par le Product Owner et son verrouillage sont autorisés.
L'incrément est validé si le contrat est cohérent avec le référentiel, complet et ne
contient plus aucun arbitrage ouvert. Les contrôles portent sur la cohérence
documentaire, Prettier et `git diff --check`. Le commit attendu est :

```text
docs(sprint-017): lock public experience direction contract
```

### Incrément 2 — Vision et expérience émotionnelle

L'objectif est d'établir le socle d'intention du manifeste. Le périmètre couvre le
préambule, la vision, le principe directeur, la définition du premium et l'expérience
émotionnelle recherchée ; seule leur rédaction dans le manifeste est autorisée.
L'incrément est validé si ces éléments traduisent les arbitrages Product Owner sans
prescription visuelle ou technique. Les contrôles portent sur leur traçabilité, leur
cohérence mutuelle et l'absence de duplication normative. Le commit attendu est :

```text
docs(experience): define public vision and emotional intent
```

### Incrément 3 — Grammaire de l'expérience

L'objectif est de définir la grammaire commune de l'expérience publique. Le périmètre
couvre les principes d'expérience, la composition, la hiérarchie, le rythme, la
palette, la typographie et la présentation et révélation des œuvres ; seule leur
rédaction dans le manifeste est autorisée. L'incrément est validé si cette grammaire
reste indépendante de toute maquette, valeur, API ou solution technique. Les contrôles
portent sur sa conformité au Design System, l'absence de duplication et son caractère
vérifiable. Le commit attendu est :

```text
docs(experience): define the public experience grammar
```

### Incrément 4 — Mouvement, continuité et responsabilités

L'objectif est de définir la continuité de l'expérience entre les vues. Le périmètre
couvre les principes de mouvement, la progression inter-pages et les responsabilités
sensibles des vues ; seule leur rédaction dans le manifeste est autorisée. L'incrément
est validé si aucune responsabilité fonctionnelle n'est modifiée et si le mouvement
reste justifié, accessible et respectueux de `prefers-reduced-motion`. Les contrôles
portent sur la cohérence avec les contrats publics, le Design System et les exigences
d'accessibilité. Le commit attendu est :

```text
docs(experience): define movement and public continuity
```

### Incrément 5 — Contraintes et critères d'arbitrage

L'objectif est de rendre les futurs arbitrages d'expérience explicites et vérifiables.
Le périmètre couvre les exigences transversales, les langages interdits, les critères de
rejet et les décisions différées ; seule leur rédaction dans le manifeste est
autorisée. L'incrément est validé si les critères permettent d'accepter ou de rejeter
une proposition sans créer de règle technique ni modifier le Design System. Les
contrôles portent sur leur objectivité, leur traçabilité et la séparation entre
décisions présentes et différées. Le commit attendu est :

```text
docs(experience): define constraints and rejection criteria
```

### Incrément 6 — Audit et clôture documentaire

L'objectif est d'auditer et de préparer le verrouillage documentaire du Sprint. Le
périmètre couvre le manifeste et, uniquement pour leur synchronisation, `PROJECT_STATE.md`
et `CHANGELOG.md` ; seuls l'audit, les corrections de conformité démontrées et cette
synchronisation sont autorisés. L'incrément est validé si le manifeste est cohérent avec
tout le référentiel, sans duplication, prescription technique ni décision non validée.
Les contrôles sont ceux de la section 16, complétés par la vérification du diff final et
des seuls fichiers autorisés. Le commit attendu est :

```text
docs(sprint-017): finalize public experience direction
```

Chaque incrément fait l'objet d'une revue, de l'acceptation de son résultat et d'un
commit documentaire dédié avant le suivant.

## 19. Décisions différées

Le Sprint ne décide pas :

- les compositions exactes des pages ;
- les maquettes ;
- les valeurs CSS ;
- les composants ou tokens nécessaires ;
- les scénarios détaillés d'animation ;
- les médias futurs ;
- la stratégie ou l'ordre d'implémentation ;
- le découpage des futurs Sprints visuels.

## 20. Séquence de revue et de verrouillage

```text
Contrat
→ Revue Product Owner
→ Verrouillage du contrat
→ Rédaction incrémentale du manifeste
→ Revue de conformité
→ Validation Product Owner finale
→ Synchronisation documentaire
→ Commit de clôture
→ Tag Sprint
→ Pull Request
→ Fusion dans main
→ Vérification et nettoyage
```

Le manifeste ne devient canonique qu'après validation Product Owner, verrouillage et
intégration conforme à `docs/GOVERNANCE.md`.
