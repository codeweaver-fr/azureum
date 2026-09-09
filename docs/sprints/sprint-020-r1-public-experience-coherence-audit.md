# Sprint 020-r1 — Audit de cohérence et frontières d'implémentation

## Statut

**Validé par le Product Owner — audit R1-4 verrouillé avant toute reprise d'implémentation**

## 1. Objet

Ce document audite la cohérence entre la direction d'expérience publique V2, les
fondations réelles du produit et l'exploration non validée de l'Accueil. Il détermine
les frontières qui pourront être soumises au Product Owner pour un futur contrat
d'implémentation centré sur `/`.

Il ne constitue ni une maquette, ni un wireframe, ni une décision de composition
finale, ni une autorisation d'implémenter. Les deux fichiers exploratoires existants
restent hors canon et hors commit :

- `src/app/(public)/page.tsx` ;
- `src/app/(public)/page.module.css`.

## 2. Références et état

### Références de direction verrouillées

- `docs/sprints/sprint-020-r1-public-experience-direction.md` ;
- `docs/specifications/public-experience-manifest-v2.md` ;
- `docs/specifications/public-experience-design-v2.md`.

### Références applicables relues

- `docs/GOVERNANCE.md` ;
- `docs/specifications/design-system-v1.md` ;
- responsabilités publiques et routes existantes ;
- primitives de mise en page, typographie, interaction et média présentes dans le
  code ;
- données locales du module `gallery` ;
- implémentations validées de Collections, Collection et Œuvre ;
- shell public ;
- exploration actuelle de l'Accueil.

### État de référence

R1-1, R1-2 et R1-3 sont verrouillés. La prochaine reprise ne peut ni modifier une
responsabilité fonctionnelle, ni rouvrir implicitement Collection, Œuvre ou le shell,
ni introduire une règle transversale sans insuffisance démontrée.

## 3. Audit du Design System réel

### 3.1 Capacités déjà disponibles

| Besoin V2 | Fondations existantes | Verdict |
| --- | --- | --- |
| Largeurs et respirations | `Container`, échelle d'espacement, règles responsive | Suffisant |
| Relations spatiales | `Grid`, `GridItem`, `Stack` et CSS Module local | Suffisant |
| Hiérarchie sémantique | `Heading` et `Text` | Suffisant |
| Accès aux destinations | `Link`, focus et règles d'accessibilité globales | Suffisant |
| Présence des œuvres | `ArtworkImage` intrinsèque ou `fill`, alternative et état indisponible | Suffisant |
| Ratios variables | Dimensions intrinsèques et conteneurs locaux | Suffisant |
| Recomposition responsive | grille 4/8/12 colonnes, media queries et styles locaux autorisés | Suffisant |

Les primitives permettent une composition forte sans imposer une grille uniforme.
Elles peuvent être combinées avec un CSS Module strictement local pour produire des
séquences, des changements d'échelle, des asymétries et des respirations propres à
l'Accueil.

### 3.2 Libertés pouvant rester locales

Peuvent relever de la composition locale de `/`, sous réserve du futur contrat :

- l'ordre perceptif de séquences dont l'ordre sémantique reste cohérent ;
- les rapports de présence entre médias existants ;
- les changements d'échelle entre séquences ;
- les asymétries propres au seuil artistique ;
- la distribution du vide ;
- les relations spatiales entre identité, promesse, œuvres et accès existants ;
- la recomposition entre mobile, tablette et bureau.

Ces libertés ne créent pas à elles seules un besoin système. Une composition
inhabituelle sur une seule vue ne justifie ni composant fondamental, ni token, ni
variante transversale.

### 3.3 Insuffisance transversale

Aucune insuffisance transversale et répétée n'est démontrée. Les limites éventuelles
de la grille ou des tailles typographiques peuvent être évitées ou composées avec les
fondations existantes sans altérer leur contrat. Elles devront être réévaluées
uniquement si l'implémentation démontre un blocage réel impossible à résoudre
localement et conformément au Design System.

> **Design System suffisant : OUI**

Aucune évolution du Design System n'est nécessaire avant la reprise de la homepage.

## 4. Audit du corpus média

### 4.1 Inventaire

| Fichier | Collection | Œuvre | Ratio | Dimensions | Rôle actuel |
| --- | --- | --- | --- | --- | --- |
| `/gallery/study-01.webp` | Collection Alpha | Étude fictive 01 | Portrait 2:3 | 1024 × 1536 | Aperçu Alpha et présence principale de l'exploration Accueil |
| `/gallery/study-02.webp` | Collection Alpha | Étude fictive 02 | Paysage 3:2 | 1536 × 1024 | Œuvre de Collection Alpha |
| `/gallery/study-03.webp` | Collection Alpha | Étude fictive 03 | Carré 1:1 | 1254 × 1254 | Œuvre de Collection Alpha |
| `/gallery/composition-a.webp` | Collection Bêta | Composition fictive A | Paysage 3:2 | 1536 × 1024 | Aperçu Bêta et présence secondaire de l'exploration Accueil |
| `/gallery/composition-b.webp` | Collection Bêta | Composition fictive B | Portrait 2:3 | 1024 × 1536 | Œuvre de Collection Bêta |
| `/gallery/composition-c.webp` | Collection Bêta | Composition fictive C | Carré 1:1 | 1254 × 1254 | Œuvre de Collection Bêta |

### 4.2 Aptitudes et contraintes

- `study-01.webp` peut soutenir une présence verticale forte. Sa largeur source de
  1024 pixels invite toutefois à contrôler une éventuelle présence très large sur
  écran dense.
- `study-02.webp` et `composition-a.webp` disposent d'une définition adaptée à une
  présence horizontale ample dans une composition web courante. Une occupation
  ultra-large à forte densité de pixels n'est pas démontrée.
- Les carrés peuvent jouer un rôle de stabilisation ou de tension entre formats sans
  qu'une hiérarchie artistique leur soit attribuée.
- Les portraits, paysages et carrés peuvent dialoguer grâce à leurs géométries
  complémentaires. Le corpus est cohérent sur le plan chromatique et abstrait.
- Les six fichiers sont des sources WebP d'environ 1,6 à 1,84 Mo. `ArtworkImage`, via
  `next/image`, permet leur diffusion optimisée, mais le nombre de médias simultanés
  et le choix du média prioritaire doivent rester maîtrisés.
- Le corpus est limité à six œuvres et deux Collections fictives. La répétition des
  mêmes aperçus sur l'Accueil, `/collections`, Collection et Œuvre peut affaiblir la
  sensation de découverte si leur usage n'est pas différencié par la composition.
- Aucun recadrage, dérivé, détail, vidéo, texture ou nouveau média n'est disponible ni
  validé.

### 4.3 Verdict médias

Le corpus actuel suffit pour implémenter et vérifier une homepage V2 statique. Il
permet des présences principales et secondaires ainsi que des relations entre ratios.
Il ne garantit pas à lui seul une identité de mise en scène : celle-ci doit provenir
de la composition. Les fichiers restent démonstratifs et ne doivent pas devenir une
contrainte éditoriale définitive.

> **Médias existants suffisants pour la prochaine homepage : OUI, avec vigilance sur
> la répétition, le nombre d'images prioritaires et les très grandes présences.**

## 5. Audit de l'Accueil exploratoire

### 5.1 État observable

L'exploration conserve l'identité AZUREUM, la promesse existante et l'accès à
`/collections`, puis présente les deux Collections dans une grille. Elle donne à
Collection Alpha une présence supérieure à Collection Bêta et utilise respectivement
`study-01` et `composition-a` comme aperçus. Elle exige exactement deux Collections et
les slugs actuels. Les deux médias sont préchargés.

### 5.2 Grille d'évaluation V2

| Domaine | État | Justification |
| --- | --- | --- |
| Responsabilité | Partiellement conforme | L'identité, la promesse et l'accès aux Collections sont préservés, mais le seuil artistique V2 n'est pas pleinement matérialisé. |
| Foyer | Non conforme | Le bloc introductif précède perceptuellement l'univers artistique ; les œuvres ne constituent pas immédiatement le premier foyer. |
| Présence | Partiellement conforme | Les médias ont une présence réelle, mais restent contenus dans une section de Collections conventionnelle. |
| Échelle | Partiellement conforme | Les spans 7/5 créent une différence, sans changement d'échelle suffisamment franc entre les temps de l'expérience. |
| Asymétrie | Partiellement conforme | L'asymétrie existe, mais se réduit essentiellement à deux largeurs dans une même grille. |
| Équité | Non conforme | Alpha reçoit une domination fixe sans séquence ultérieure permettant à Bêta d'acquérir une présence comparable ; la justification éditoriale n'est pas démontrée. |
| Vide | Partiellement conforme | La respiration est propre, mais le vide sépare surtout des blocs au lieu de structurer une tension ou une progression. |
| Rythme | Non conforme | La succession introduction, titre de section et grille reste linéaire et prévisible. |
| Séquences | Non conforme | La page ne construit pas encore plusieurs temps perceptifs formant un seuil d'exposition. |
| Typographie | Partiellement conforme | La hiérarchie sémantique est correcte, mais la typographie n'agit pas encore comme matière spatiale. |
| Profondeur | Partiellement conforme | Aucune profondeur artificielle n'est ajoutée, mais aucune relation de plans utile à la présence V2 n'est matérialisée. |
| Continuité | Partiellement conforme | Les destinations et identités sont cohérentes ; la continuité perceptive vers l'univers puis les Collections reste conventionnelle. |
| Signature | Non conforme | La structure pourrait appartenir à de nombreuses galeries ou portfolios et n'est pas reconnaissable comme AZUREUM sans son nom. |
| Qualité statique | Partiellement conforme | La page fonctionne sans mouvement, mais sa composition statique n'atteint pas encore l'intensité autorisée par la V2. |
| Responsive | Partiellement conforme | La grille se réduit proprement, mais la logique relève davantage d'une adaptation de spans que d'une recomposition perceptive. |
| Robustesse | Non conforme | Le rendu dépend exactement de deux Collections, de leurs slugs et d'un aperçu Alpha précis ; une variation des données provoque une erreur. |
| Originalité | Non conforme | Le schéma introduction puis grille d'aperçus reste générique. |
| Place de l'interface | Partiellement conforme | L'interface est sobre et ne décore pas les œuvres, mais le discours introductif garde la priorité initiale. |

### 5.3 Conclusion sur l'exploration

L'exploration démontre que les primitives, données, médias et destinations peuvent
être assemblés sans évolution système. Elle ne constitue toutefois pas une base de
composition suffisamment proche du seuil artistique V2 pour être simplement
intensifiée.

> **Verdict : C — abandonner la composition, avec réutilisation éventuelle de certains
> éléments.**

Peuvent être réutilisés :

- les contenus textuels existants ;
- la résolution serveur des Collections et des aperçus ;
- les identités, intentions, alternatives et dimensions des médias ;
- les destinations existantes ;
- l'emploi des primitives canoniques ;
- les fragments de validation qui protègent la cohérence des données, à condition de
  supprimer la dépendance arbitraire à exactement deux Collections et à leur ordre.

Doivent pouvoir être abandonnés :

- la composition introduction puis section `Collections` en une rangée ;
- la hiérarchie fixe Alpha dominante / Bêta secondaire ;
- les spans 7/5 comme réponse principale ;
- la progression strictement linéaire ;
- le préchargement indifférencié des deux aperçus ;
- les assertions qui figent le nombre, l'ordre et les slugs pour servir la mise en
  page exploratoire.

## 6. Responsabilités publiques protégées

### 6.1 Périmètres à ne pas modifier

Le prochain contrat centré sur `/` doit exclure explicitement :

- `/collections` ;
- `/collections/[collectionSlug]` ;
- `/collections/[collectionSlug]/oeuvres/[artworkSlug]` ;
- le shell public, ses libellés, ses destinations et son responsive ;
- David et sa démarche ;
- les contenus artistiques ;
- la chronologie ;
- le module métier `gallery`, ses types, requêtes et données ;
- le Design System ;
- toute responsabilité, route, destination ou action nouvelle.

### 6.2 Éléments pouvant être lus ou consommés

La homepage peut consommer sans les modifier :

- les requêtes publiques de `gallery` ;
- les Collections, œuvres, titres, intentions, médias, alternatives et dimensions ;
- les routes canoniques existantes ;
- les composants fondamentaux existants ;
- les règles du shell et les implémentations déjà verrouillées comme références de
  continuité.

### 6.3 Dépendances réelles

Les dépendances démontrées sont limitées à la disponibilité des données de galerie,
des médias, des primitives et des destinations existantes. La composition de `/` peut
être remplacée indépendamment des autres vues. Aucun changement de Collection, Œuvre,
shell, David, Contenus artistiques ou Chronologie n'est requis.

## 7. Données et contenus

L'identité AZUREUM, la promesse, les titres et intentions des Collections, les six
œuvres, leurs médias, leurs alternatives et les liens existants permettent de produire
une homepage V2 sans enrichissement éditorial ni modèle supplémentaire.

Le futur contrat devra interdire la duplication locale des données et maintenir leur
statut démonstratif. Il pourra autoriser une présentation différente des informations
existantes, sans en modifier le sens ni créer une relation fonctionnelle nouvelle.

> **Nouveau contenu requis : NON**

> **Nouvelle donnée requise : NON**

Une décision Product Owner reste nécessaire sur l'étendue du corpus utilisable à
l'Accueil : seulement les deux œuvres d'aperçu des Collections, ou toute œuvre déjà
rattachée aux Collections existantes. Cette décision concerne la mise en scène, pas le
modèle de données.

## 8. Responsive

Les primitives actuelles et le CSS local permettent :

- sur bureau, des relations plus franches, des écarts d'échelle et des asymétries ;
- sur tablette, une recomposition plutôt qu'une réduction homothétique ;
- sur mobile, le maintien d'un foyer artistique fort dans un flux lisible.

### Risques à contrôler

- dissocier l'ordre visuel de l'ordre DOM ;
- dépendre d'une superposition qui devient illisible sans largeur disponible ;
- laisser un média intrinsèque déborder de son conteneur ;
- transformer de grands écarts desktop en vides sans fonction sur mobile ;
- produire des textes trop étroits ou des mesures excessives ;
- recadrer implicitement un média pour préserver une composition ;
- perdre l'équité éditoriale lorsque les séquences se replient ;
- supposer un nombre fixe de Collections ou un ordre immuable.

La preuve responsive devra porter sur la continuité du foyer, de la hiérarchie, des
destinations et de l'ordre de lecture, pas seulement sur l'absence de débordement.

## 9. Accessibilité

La V2 est compatible avec les fondations d'accessibilité existantes : structure
sémantique, skip link du shell, composants de lien, alternatives des œuvres, focus,
zoom, reflow et expérience complète sans mouvement.

### Risques d'une composition plus libre

- ordre CSS ou placement visuel contredisant l'ordre sémantique ;
- liens superposés, masqués ou dont la zone interactive devient ambiguë ;
- texte posé sur un média sans contraste robuste ;
- focus peu visible sur une zone visuellement dense ;
- contenu compréhensible uniquement par proximité spatiale ;
- perte d'information lorsque CSS, image ou superposition n'est pas disponible ;
- reflow à 200 % reproduisant une scène desktop devenue inutilisable.

Le document et l'implémentation devront rester compréhensibles dans l'ordre DOM et sans
dépendre d'un effet visuel, d'un survol ou d'un mouvement.

## 10. Performance

Les risques plausibles sont :

- plusieurs sources WebP relativement lourdes visibles dès le premier écran ;
- plusieurs images déclarées prioritaires alors qu'une seule peut constituer le LCP ;
- un mauvais attribut `sizes` en mode `fill` ;
- une présence surdimensionnée au-delà de la définition utile du fichier source ;
- un décalage de mise en page si le ratio n'est pas réservé ;
- la répétition inutile d'images en haute définition dans plusieurs séquences.

`ArtworkImage` et `next/image` fournissent déjà les mécanismes nécessaires. Le futur
contrat devra demander une vérification du LCP, du layout shift, des dimensions et du
nombre d'images prioritaires, sans imposer d'optimisation prématurée ni de nouveau
pipeline média.

## 11. Motion

Le Manifeste V2 et la Conception V2 exigent d'abord une présence statique forte. La
composition, l'échelle, le rythme, les séquences et le vide suffisent à matérialiser la
prochaine homepage. Aucun sens, accès ou continuité ne doit dépendre du mouvement.

> **Motion nécessaire à la prochaine homepage : NON**

Le motion reste hors périmètre. Son absence n'est ni une version diminuée ni un état
provisoire de l'expérience.

## 12. Frontières proposées pour le prochain contrat d'implémentation

### 12.1 Responsabilité unique proposée

Matérialiser sur `/` un seuil artistique statique, identifiable comme AZUREUM, où
l'univers de David constitue le premier foyer et où l'identité, la promesse et les
accès existants soutiennent l'entrée dans son travail sans devenir le sujet principal.

### 12.2 Périmètre recommandé

Le contrat peut autoriser uniquement :

- `src/app/(public)/page.tsx` ;
- `src/app/(public)/page.module.css` ;
- les tests directement associés à `/` ;
- la réutilisation des contenus, données, médias et destinations existants ;
- une composition locale forte ;
- une nouvelle hiérarchie visuelle conforme à la V2 ;
- des séquences perceptives statiques ;
- asymétrie, changements d'échelle, relations de plans et vide intentionnel ;
- une recomposition mobile, tablette et bureau ;
- l'abandon ou la réutilisation partielle explicite de l'exploration actuelle ;
- des vérifications ciblées d'accessibilité, responsive, robustesse et performance.

### 12.3 Hors périmètre recommandé

Le contrat doit exclure :

- toute autre page ou responsabilité publique ;
- toute modification du shell ;
- toute modification de Collection ou Œuvre ;
- toute modification de `/collections` ;
- toute modification fonctionnelle, route, destination, action ou parcours ;
- tout nouveau contenu, média ou modèle de données ;
- toute modification des données `gallery` ;
- toute évolution du Design System sans insuffisance transversale démontrée et nouvel
  arbitrage Product Owner ;
- tout composant fondamental, token, breakpoint ou primitive nouvelle ;
- tout motion, animation, transition ou technologie associée ;
- tout recadrage destructif ;
- toute dépendance nouvelle ;
- toute anticipation de l'implémentation de `/collections` ou d'un autre continuum.

### 12.4 Critères minimaux à porter par le futur contrat

- l'univers artistique est le premier foyer perceptible ;
- l'Accueil est distinct de `/collections` et ne se réduit pas à une introduction
  suivie d'une liste ;
- la présence est forte sans transformer l'interface en spectacle autonome ;
- l'identité, la promesse et les destinations existantes restent présentes et
  compréhensibles ;
- l'équité éditoriale globale ne dépend pas d'une symétrie graphique ni d'une
  hiérarchie artistique arbitraire ;
- le résultat possède une signature perceptible sans dépendre du logo seul ;
- la composition reste complète sans mouvement ;
- mobile, tablette, bureau, zoom et reflow conservent foyer, sens et accès ;
- les ratios, alternatives, ordre sémantique, clavier, focus et destinations sont
  préservés ;
- les données restent démonstratives et aucune quantité fixe n'est transformée en
  règle métier ;
- les risques LCP, chargement d'images et layout shift sont contrôlés de manière
  proportionnée.

## 13. Décisions soumises au Product Owner par l'audit

L'audit a soumis les décisions suivantes au Product Owner. Elles sont conservées ici
pour tracer les questions examinées ; leurs arbitrages définitifs sont consignés à la
section 14 :

1. **Forme du premier foyer statique** : une œuvre dominante, une relation entre
   plusieurs œuvres, ou une relation plus étroite entre œuvre et identité. La V2 borne
   la qualité recherchée mais ne fixe pas cette composition.
2. **Corpus média autorisé sur `/`** : seulement les aperçus des deux Collections ou
   toute œuvre existante du corpus, sans créer de relation fonctionnelle nouvelle.
3. **Équité entre Collections sur l'Accueil** : manière d'assurer une présence globale
   équitable sans imposer une symétrie ni une priorité fixe à Alpha.
4. **Traitement de l'exploration actuelle** : confirmation du verdict C autorisant le
   remplacement de sa composition et la conservation sélective de ses contenus,
   requêtes et destinations.
5. **Mode d'arbitrage visuel** : implémentation directe d'une direction choisie par le
   Product Owner ou comparaison bornée de deux directions statiques réellement
   crédibles. Cette comparaison ne doit pas devenir une nouvelle phase documentaire.

Ne sont pas des décisions ouvertes : l'ajout de contenu ou de données, l'évolution du
Design System, le motion, la modification du shell, de `/collections`, de Collection ou
d'Œuvre. Ces sujets sont hors périmètre en l'absence d'un nouveau constat et d'une
autorisation explicite.

## 14. Décisions Product Owner

Le Product Owner valide les conclusions de l'audit et arrête les décisions suivantes :

1. **Premier foyer statique.** Une œuvre dominante, en relation étroite avec
   l'identité AZUREUM, constitue le premier foyer. La première perception est
   artistique avant d'être structurelle. AZUREUM est intégré à cette présence et ne
   devient pas un titre de site suivi d'une introduction. Le choix exact de l'œuvre
   reste différé à la matérialisation selon son impact, son ratio, sa définition et la
   composition responsive.
2. **Corpus média.** Les six œuvres existantes sont éligibles sur `/`, sans obligation
   de les afficher intégralement ni autorisation de les répéter artificiellement. Leur
   présentation ne crée aucune nouvelle relation métier.
3. **Équité entre Collections.** L'équité éditoriale s'apprécie sur l'ensemble de
   l'Accueil : `équité globale → intensités locales différentes`. Elle n'impose ni
   partage 50/50, ni dimensions identiques, ni présence simultanée équivalente. Une
   Collection peut dominer une séquence si l'autre acquiert ailleurs une présence
   propre et significative. Aucune priorité artistique permanente n'est accordée.
4. **Exploration actuelle.** Le verdict C est confirmé. La composition peut être
   abandonnée. Les contenus, résolutions serveur, données, alternatives, dimensions,
   destinations, primitives et validations utiles peuvent être conservés
   sélectivement. La structure introduction puis Collections, la grille actuelle, les
   spans 7/5, la domination fixe Alpha/Bêta, la progression linéaire, le double
   préchargement et la dépendance au nombre, à l'ordre ou aux slugs ne doivent pas être
   conservés par inertie.
5. **Mode d'arbitrage visuel.** Une seule direction statique ambitieuse sera
   implémentée directement après verrouillage du futur contrat. Elle sera vérifiée
   dans le navigateur, revue par le Product Owner sur desktop et mobile, puis ajustée
   si nécessaire avant verrouillage. Aucune comparaison A/B de deux homepages n'est
   autorisée.

Ces décisions alimentent R1-5 et le futur contrat d'implémentation. Elles n'autorisent
pas encore la reprise du code.

## 15. Recommandations Product Owner acquises

- Appliquer le verdict C aux fichiers exploratoires dans le futur contrat.
- Matérialiser le premier foyer statique validé sans nouvelle phase de conception.
- Utiliser le corpus existant dans les limites arrêtées par le Product Owner.
- Exiger une équité éditoriale appréciée sur l'ensemble de la page, pas œuvre par œuvre
  ni Collection par Collection.
- Conserver le futur contrat court, applicatif et limité à `/`.
- Refuser toute nouvelle primitive tant qu'une insuffisance transversale répétée n'est
  pas démontrée.
- Valider d'abord la force de la composition statique, puis sa robustesse responsive,
  accessible et performante.

## 16. Verdict de l'audit

La direction V2 est compatible avec les fondations, les médias, les données et les
responsabilités publiques actuelles. Elle peut être matérialisée sur `/` sans nouveau
contenu, nouvelle donnée, motion ni évolution préalable du Design System.

L'exploration actuelle apporte des fragments réutilisables mais sa composition ne
constitue pas une base conforme à intensifier. La prochaine reprise doit être régie par
un contrat d'implémentation centré sur `/`, intégrant les arbitrages Product Owner
énoncés ci-dessus.
