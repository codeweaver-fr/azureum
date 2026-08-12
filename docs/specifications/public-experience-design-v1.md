# Conception de l'expérience publique V1

## 1. Statut

**Validé par le Product Owner, verrouillé, intégré dans `main` et canonique**

Les Incréments 2 à 8 sont validés par le Product Owner. Le document est verrouillé et
intégré dans `main` par la Pull Request nº 21 sous le tag officiel `sprint-018`.

Il constitue la référence canonique de la conception de l'expérience publique V1. Il ne
constitue ni une maquette ni une instruction d'implémentation. Aucun constat, aucune
limite et aucun risque consigné dans cet audit ne modifie le produit par lui-même.

## 2. Objet et portée

Le présent document rassemble la conception de l'expérience publique V1 produite par le
Sprint 018. Il couvre l'audit de l'existant, les intentions sensibles, les hiérarchies
d'attention, les compositions conceptuelles, les transformations responsive, la
présentation des médias, le mouvement, la continuité, les arbitrages consolidés et la
stratégie générale d'implémentation.

Il traduit le manifeste canonique en décisions de conception traçables sans modifier les
responsabilités fonctionnelles, le Design System ou le produit et sans constituer une
spécification d'implémentation.

### 2.1 Portée historique de l'Incrément 2

L'Incrément 2 établit la base factuelle sur laquelle les incréments suivants pourront
concevoir l'expérience publique d'AZUREUM.

Il couvre exactement :

1. l'accueil — `V-PUB-01` ;
2. David et sa démarche — `V-PUB-02` ;
3. les collections — `V-PUB-03` ;
4. la collection — `V-PUB-07` ;
5. l'œuvre — `V-PUB-04` ;
6. le contenu artistique — `V-PUB-05` ;
7. l'évolution dans le temps — `V-PUB-06` ;
8. le shell public.

Le présent incrément ne définit aucune intention sensible future, hiérarchie future,
composition, transformation responsive conceptuelle, règle de mouvement ou décision
de conception.

## 3. Références de l'audit

L'audit s'appuie sur :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/specifications/public-experience-manifest-v1.md` ;
- les contrats des Sprints 010 à 016 ;
- `docs/sprints/sprint-017-public-experience-direction.md` ;
- `docs/sprints/sprint-018-public-experience-design.md` ;
- les routes, composants, styles et tests publics réellement présents dans le dépôt.

Les responsabilités fonctionnelles et sensibles proviennent des documents canoniques.
Le code et les tests servent uniquement à décrire l'état réellement matérialisé.

## 4. Méthode et vocabulaire de l'audit

Chaque observation reçoit l'un des statuts suivants :

- **Fait observable** : élément directement établi par le code, les contenus ou les
  tests existants ;
- **Conformité démontrée** : fait relié à une exigence canonique ou à une validation
  contractuelle existante ;
- **Force observée** : qualité de l'existant démontrée par un fait et une référence ;
- **Limite observable** : caractéristique actuelle qui borne l'expression de la
  responsabilité sans constituer automatiquement une non-conformité ;
- **Risque éventuel** : conséquence possible à examiner ultérieurement, sans présumer
  qu'elle se produit ni autoriser une correction ;
- **Interprétation** : lecture explicitement signalée, soumise aux futurs arbitrages et
  dépourvue de valeur normative.

Une limite ou un risque n'est pas une proposition de correction. L'audit ne déduit
aucune solution et ne transforme aucune préférence en exigence.

### 4.1 Sources de preuve

Les preuves utilisées sont :

- la structure JSX et les composants appelés ;
- les styles locaux effectivement appliqués ;
- les données rendues et les relations résolues ;
- les tests Vitest et Playwright existants ;
- les contrats ayant verrouillé chaque responsabilité.

Aucune capture n'a été produite ou versionnée. Les sources et les tests fournissent des
preuves suffisantes pour cet audit factuel.

### 4.2 Limites de la méthode

L'audit ne mesure pas une réaction réelle de visiteurs et ne transforme pas une lecture
du code en certitude émotionnelle. Il ne juge pas si une future direction serait plus
belle, plus moderne ou plus premium.

Les contenus et médias de démonstration sont observés dans leur état actuel sans devenir
des références éditoriales ou artistiques définitives.

## 5. Inventaire transversal de l'existant

### 5.1 Structure commune

**Faits observables**

- les huit responsabilités utilisent l'App Router public ;
- le shell fournit un header, un landmark `main`, un footer et un lien d'évitement ;
- les pages utilisent majoritairement les primitives officielles `Container`, `Stack`,
  `Grid`, `GridItem`, `Heading`, `Text`, `Link` et `ArtworkImage` ;
- toutes les pages publiques restent des Server Components, à l'exception du contenu
  interactif du header nécessaire à la navigation mobile et à l'état actif ;
- les pages utilisent un unique `h1` et une structure de titres validée par les tests ;
- les routes publiques sont couvertes par des tests de rendu, de clavier, de reflow ou
  d'absence de débordement selon leur contrat d'origine.

**Conformité démontrée**

- l'existant respecte la séparation entre shell partagé et responsabilités locales ;
- les composants officiels du Design System portent l'essentiel de la mise en page ;
- les contrôles hérités démontrent la disponibilité au clavier, le responsive et le
  reflow des parcours publics ;
- aucune vue ne crée une route ou une navigation étrangère aux responsabilités
  validées.

**Force observée**

La base sémantique et fonctionnelle est homogène. Les vues peuvent être comparées à
partir de responsabilités stables plutôt qu'à partir de prototypes divergents.

**Limite observable**

La majorité des vues repose sur une succession verticale de primitives génériques. La
fiche d'œuvre est la seule vue publique disposant d'une composition locale et de styles
propres substantiels.

**Risque éventuel**

La stabilité des primitives communes peut rendre plusieurs responsabilités visuellement
proches malgré des contenus et des rôles différents. Ce constat ne démontre pas qu'une
divergence soit nécessaire.

**Interprétation**

L'expérience actuelle paraît davantage différenciée par le contenu et la structure
sémantique que par une mise en scène propre à chaque responsabilité. Cette lecture doit
être vérifiée dans les incréments de conception et ne constitue pas une décision.

### 5.2 Largeurs et adaptation

**Faits observables**

- l'accueil, les collections et les pages de collection utilisent principalement la
  largeur `main` ;
- David, l'œuvre, le contenu artistique et la chronologie utilisent principalement la
  largeur `reading` ;
- les grilles de collections et d'œuvres adaptent leurs spans entre compact, tablette
  et bureau ;
- le shell passe d'une navigation mobile repliable à une navigation horizontale à
  partir de la largeur bureau du Design System ;
- la fiche d'œuvre reste empilée et adapte la grille de ses caractéristiques à partir
  de la tablette.

**Conformité démontrée**

Les tests Playwright hérités couvrent le reflow, l'absence de débordement et l'accès au
clavier des principales routes. Les comportements observés utilisent les points de
rupture et primitives existants du Design System.

**Limite observable**

Les adaptations actuelles portent principalement sur le nombre de colonnes, la
navigation et quelques relations internes. L'audit ne relève pas d'autre transformation
de la structure éditoriale selon la largeur.

**Risque éventuel**

Une adaptation principalement structurelle peut préserver toutes les informations sans
nécessairement différencier leur progression selon l'espace disponible. Ce risque reste
à examiner sans présumer d'une correction.

## 6. Audit de l'accueil — V-PUB-01

### 6.1 Responsabilité canonique

L'accueil introduit immédiatement l'univers et la démarche de David, propose les
principales directions de découverte et donne accès aux collections sans retarder la
découverte.

### 6.2 État factuel

**Faits observables**

- la vue présente le titre `AZUREUM` comme unique `h1` ;
- un paragraphe introduit David, ses collections, sa démarche et l'évolution de son
  univers ;
- un lien principal mène à `/collections` ;
- une seconde section intitulée `Collections` présente exactement deux collections ;
- chaque collection associe une image, un titre, une intention et un lien vers sa page ;
- les deux aperçus sont organisés dans une grille à deux colonnes à partir de la
  tablette et du bureau ;
- aucun lien direct vers une œuvre n'est présent ;
- les deux images visibles au chargement sont préchargées.

**Conformité démontrée**

- la vue introduit l'univers et rend les collections immédiatement accessibles ;
- les collections restent l'accès structurant aux œuvres ;
- l'accueil ne devient ni un catalogue d'œuvres ni une séquence longue ;
- les tests vérifient l'unique `h1`, le lien principal, les deux collections, les médias
  contractuels, l'absence de lien direct vers une œuvre et la résilience des médias.

**Forces observées**

- la direction principale vers les collections est explicite avant les aperçus ;
- les médias et intentions permettent d'identifier les deux ensembles sans exposer une
  liste d'œuvres isolées ;
- la structure reste courte et immédiatement compréhensible.

**Limites observables**

- le titre, l'introduction et le lien sont regroupés dans un premier bloc vertical ;
- la section suivante répète l'accès aux collections au moyen de deux aperçus de poids
  égal ;
- la signature actuelle repose sur le nom, le texte introductif et les médias de
  démonstration, sans composition locale propre.

**Risques éventuels**

- la répétition entre le lien principal et la section de collections peut produire une
  progression courte mais peu différenciée ;
- des médias futurs de ratios ou de forces visuelles différents pourraient modifier
  l'équilibre actuel des deux aperçus.

**Interprétation**

L'accueil fonctionne actuellement comme une entrée éditoriale concise suivie d'un accès
visuel aux collections. L'audit ne détermine pas encore si cette articulation doit être
conservée ou transformée.

## 7. Audit de David et sa démarche — V-PUB-02

### 7.1 Responsabilité canonique

La vue présente David, les éléments biographiques utiles, sa démarche artistique et les
repères nécessaires à la compréhension de son travail. Sa responsabilité sensible est
d'installer une lecture éditoriale contemporaine et une proximité progressive, sans
inventer de contenu ou de média.

### 7.2 État factuel

**Faits observables**

- la vue utilise une largeur de lecture ;
- le nom de David constitue l'unique `h1` ;
- quatre sections successives structurent la présentation, les repères biographiques,
  la démarche artistique et les repères artistiques ;
- les sections comportent neuf paragraphes au total ;
- aucun portrait ni autre média n'est rendu ;
- le seul lien de la page mène aux collections à la fin du dernier bloc ;
- le contenu actuel est une version de travail acceptée par le Product Owner et non un
  corpus définitif validé par David.

**Conformité démontrée**

- la vue couvre les quatre dimensions prévues par sa responsabilité ;
- aucun média fictif représentant David n'est créé ;
- le parcours rejoint les collections sans nouvelle destination ;
- les tests vérifient la structure éditoriale, le contenu attendu, le rendu serveur, le
  reflow et l'accès au clavier.

**Forces observées**

- la hiérarchie des sections rend les dimensions du contenu identifiables ;
- la largeur de lecture et l'empilement conservent un ordre sémantique simple ;
- l'absence de média évite de substituer une représentation non validée à David.

**Limites observables**

- l'expérience repose presque exclusivement sur une lecture textuelle continue ;
- les quatre sections partagent la même structure et des espacements similaires ;
- l'accès aux collections intervient uniquement après l'ensemble du corpus.

**Risques éventuels**

- la densité et la longueur variables d'un futur corpus officiel pourraient modifier
  fortement le rythme de lecture actuel ;
- l'absence de média limite les preuves disponibles pour évaluer aujourd'hui la future
  relation entre présence de David et contenu éditorial.

**Interprétation**

La vue actuelle privilégie la clarté éditoriale et la continuité du texte. Elle ne
permet pas encore de conclure sur la forme que prendra une proximité sensible avec
David lorsque les contenus officiels seront disponibles.

## 8. Audit des collections — V-PUB-03

### 8.1 Responsabilité canonique

La vue fait des collections l'accès public principal aux œuvres. Elle permet de
découvrir des ensembles artistiques avant d'entrer dans l'intention propre à chacun,
sans organiser la consultation autour de la disponibilité commerciale.

### 8.2 État factuel

**Faits observables**

- la vue présente `Collections` comme unique `h1` ;
- exactement deux collections de démonstration sont rendues ;
- chaque entrée comporte une image d'aperçu, un titre, une intention et un lien vers la
  collection ;
- les entrées ont un poids structurel identique ;
- la grille affiche une colonne compacte puis deux colonnes sur tablette et bureau ;
- la première image est préchargée ;
- aucun contrôle de recherche, filtre, tri ou disponibilité commerciale n'est présent.

**Conformité démontrée**

- la vue organise la découverte par ensembles artistiques ;
- les œuvres ne sont pas accessibles directement depuis cet index ;
- aucune logique commerciale ne structure la présentation ;
- les tests valident les collections, leurs aperçus, leurs liens, le clavier, le
  responsive et le reflow.

**Forces observées**

- chaque ensemble est identifié par une combinaison cohérente d'image, de titre et
  d'intention ;
- l'égalité structurelle évite de créer une mise en avant métier non déclarée ;
- le parcours vers chaque collection est explicite.

**Limites observables**

- la vue reprend une structure très proche de la section Collections de l'accueil ;
- les deux collections sont présentées selon un modèle identique ;
- l'expérience actuelle dépend visuellement des deux images de démonstration.

**Risques éventuels**

- un nombre futur de collections différent pourrait modifier la densité et l'équilibre
  de cette grille ;
- des aperçus aux ratios ou intensités très différents pourraient rendre l'égalité
  structurelle moins perceptible.

**Interprétation**

La vue actuelle privilégie une comparaison directe et symétrique des ensembles. Cette
lecture ne décide pas si la symétrie doit devenir un principe futur.

## 9. Audit d'une collection — V-PUB-07

### 9.1 Responsabilité canonique

La vue présente l'intention d'une collection, les œuvres qui la composent et les
contenus qui la contextualisent, puis donne accès à la fiche de chaque œuvre.

### 9.2 État factuel

**Faits observables**

- la vue dynamique affiche le titre de la collection comme unique `h1` ;
- son intention est présentée dans un paragraphe introductif ;
- exactement trois œuvres de démonstration sont rendues pour chaque collection actuelle ;
- chaque œuvre comporte son média, son titre et un lien vers sa fiche ;
- la grille passe d'une colonne compacte à deux colonnes sur tablette puis trois sur
  bureau ;
- la première œuvre est préchargée ;
- aucune section de contenus artistiques contextualisant directement la collection
  n'est rendue ;
- une collection inconnue ou incohérente produit l'état absent.

**Conformité démontrée**

- l'intention et toutes les œuvres déclarées sont présentées ;
- chaque œuvre reste accessible dans le contexte de sa collection d'origine ;
- les routes canoniques et les états absents sont conservés ;
- les tests couvrent l'identité de la collection, ses œuvres, ses liens, le responsive,
  le clavier et les associations incohérentes.

**Forces observées**

- la relation collection–œuvres est explicite et stable ;
- l'introduction précède la grille d'œuvres ;
- les œuvres disposent d'un poids structurel identique sans hiérarchie inventée.

**Limites observables**

- la contextualisation actuelle repose sur l'intention de la collection et sur les
  œuvres ;
- aucun contenu artistique relié au niveau de la collection n'apparaît dans la vue ;
- les titres d'œuvres et leurs médias portent l'essentiel de la différenciation.

**Risques éventuels**

- une collection future plus longue ou plus courte modifierait fortement le rythme de
  la grille ;
- l'absence actuelle de contenus au niveau collection limite l'évaluation de cette
  partie de la responsabilité canonique.

**Interprétation**

La vue matérialise aujourd'hui principalement une introduction suivie d'un ensemble
d'œuvres. Le constat sur les contenus de collection doit rester distinct d'une demande
fonctionnelle ou d'une proposition de conception.

## 10. Audit d'une œuvre — V-PUB-04

### 10.1 Responsabilité canonique

La fiche présente une œuvre, ses informations fiables et ses contextes. L'œuvre domine ;
ses caractéristiques et contenus associés accompagnent sa compréhension sans rivaliser
avec elle.

### 10.2 État factuel

**Faits observables**

- la fiche utilise une largeur de lecture et un élément `article` ;
- le média de l'œuvre précède tout le contenu textuel et est préchargé ;
- le titre constitue l'unique `h1` ;
- la collection, les caractéristiques, la description, le texte artistique et les
  contenus associés éventuels sont présentés successivement ;
- un lien final retourne vers la collection d'origine ;
- les contenus associés utilisent leurs routes canoniques ;
- la vue possède un fichier de styles local dédié ;
- ces styles distinguent notamment le média, la collection, les caractéristiques, la
  description courte et le retour ;
- la composition reste empilée sur toutes les largeurs ; seule la présentation interne
  des caractéristiques devient composée de deux colonnes à partir de la tablette ;
- les médias indisponibles conservent l'accès aux informations essentielles.

**Conformité démontrée**

- l'œuvre reste présentée dans le contexte explicite de sa collection ;
- le média domine l'ordre de lecture sans masquer les informations ;
- les relations avec les contenus sont explicites et non déduites ;
- les tests couvrent les informations fiables, les dimensions, les contextes, le retour,
  les états absents, la résilience du média, le reflow et le clavier.

**Forces observées**

- la fiche possède la différenciation structurelle la plus affirmée des vues publiques ;
- les groupes d'information sont identifiables et hiérarchisés ;
- la relation entre œuvre, collection et contenus est directement consultable ;
- l'ordre reste stable et compréhensible sans dépendre du média.

**Limites observables**

- la composition générale reste une séquence verticale unique malgré les largeurs
  disponibles ;
- les contenus associés sont présentés comme une liste textuelle sans média ;
- le caractère de démonstration des données limite l'évaluation de contenus extrêmes.

**Risques éventuels**

- les ratios très variables des œuvres peuvent modifier la part du média visible avant
  les informations ;
- des textes artistiques ou listes de contenus plus longs peuvent accroître fortement
  la longueur de la fiche.

**Interprétation**

La fiche constitue actuellement le repère public le plus développé en matière de
composition locale. Ce constat n'en fait pas un modèle à reproduire sur les autres vues.

## 11. Audit d'un contenu artistique — V-PUB-05

### 11.1 Responsabilité canonique

La vue présente un texte, une exposition, une installation, un événement ou un ensemble
et ses relations avec les œuvres. Elle privilégie la lecture, la contextualisation et
les relations explicites.

### 11.2 État factuel

**Faits observables**

- la vue dynamique utilise une largeur de lecture et un élément `article` ;
- le type, le titre et le résumé forment le header ;
- un média d'œuvre peut être présenté lorsqu'il est explicitement déclaré ;
- les informations de période et de lieu sont rendues seulement lorsqu'elles existent ;
- le corps est une succession ordonnée de paragraphes ;
- les œuvres associées éventuelles sont listées avec leurs routes canoniques ;
- aucune section vide n'est rendue ;
- la page ne possède pas de style local ;
- un contenu inconnu produit l'état absent.

**Conformité démontrée**

- les cinq types de contenus contractuels utilisent la même responsabilité publique ;
- les relations avec les œuvres sont explicites et aucune œuvre non déclarée n'est
  ajoutée ;
- les informations absentes ne produisent pas de champ vide ;
- les tests couvrent chaque contenu, les informations conditionnelles, les relations,
  le rendu serveur, le média indisponible, le clavier, la sémantique et le reflow.

**Forces observées**

- l'ordre privilégie l'identité et le résumé avant le contexte détaillé ;
- les champs facultatifs et relations absentes sont gérés sans contenu artificiel ;
- la lecture reste disponible lorsqu'aucun média n'est associé.

**Limites observables**

- tous les types de contenus utilisent la même structure générale ;
- les informations contextuelles et les œuvres associées utilisent des listes natives
  sans différenciation locale ;
- la vue dépend principalement de la typographie et des espacements communs pour son
  rythme.

**Risques éventuels**

- des corps de longueur très différente peuvent produire des expériences de densité
  fortement variables ;
- les types de contenus futurs peuvent nécessiter des niveaux de contexte différents,
  sans que l'état actuel permette encore de les comparer.

**Interprétation**

La vue actuelle fournit une base éditoriale générique robuste. L'audit ne conclut pas si
les différents types doivent rester identiques ou recevoir une expression distincte.

## 12. Audit de l'évolution dans le temps — V-PUB-06

### 12.1 Responsabilité canonique

La chronologie permet de découvrir les étapes datées du travail de David et les
ressources concernées. Elle doit rendre le temps perceptible sans devenir une frise
décorative ni imposer un récit.

### 12.2 État factuel

**Faits observables**

- la vue utilise une largeur de lecture ;
- le titre `Évolution dans le temps` constitue l'unique `h1` ;
- une introduction signale explicitement le caractère fictif des repères ;
- trois repères sont rendus de 2023 à 2025 dans une liste ordonnée ;
- chaque repère présente année, période éventuelle, titre et résumé ;
- les œuvres et contenus explicitement associés sont regroupés sous des `h3` et reliés
  à leurs routes canoniques ;
- aucune section vide n'est rendue ;
- un état vide neutre existe ;
- la page ne possède pas de style local ni de représentation graphique du temps.

**Conformité démontrée**

- l'ordre chronologique appartient au module et non à la page ;
- les relations sont explicites, sans inférence depuis l'année ou le titre ;
- la liste ordonnée conserve une lecture sémantique du temps ;
- les tests couvrent les trois repères, l'ordre, la période absente, les liens, l'état
  vide, le rendu serveur, le clavier, le focus, l'état actif, la console et le reflow.

**Forces observées**

- l'ordre temporel reste accessible sans dépendre d'une représentation visuelle ;
- chaque repère relie directement temps, résumé et ressources ;
- les données fictives sont annoncées sans ambiguïté.

**Limites observables**

- le temps est exprimé par l'ordre de la liste et les années, sans autre relation
  visuelle entre les repères ;
- les trois repères utilisent la même structure et le même poids ;
- les ressources associées sont présentées sous forme de listes textuelles.

**Risques éventuels**

- un nombre futur de repères ou de ressources plus important peut accroître la longueur
  et la répétition de la liste ;
- une période ou un résumé sensiblement plus long peut modifier l'équilibre entre les
  repères.

**Interprétation**

La chronologie actuelle rend le temps compréhensible par la sémantique et le contenu,
mais ne lui attribue pas encore de mise en scène propre. Ce constat n'autorise aucune
forme de frise ou de mouvement.

## 13. Audit du shell public

### 13.1 Responsabilité canonique

Le shell fournit une présence stable, discrète et immédiatement utilisable. Il porte la
navigation commune et soutient la continuité sans prendre le pas sur le contenu.

### 13.2 État factuel

**Faits observables**

- le shell occupe au minimum la hauteur de l'écran et maintient le footer après le
  contenu ;
- un lien d'évitement mène au landmark principal ;
- le header présente le lien `AZUREUM` vers l'accueil ;
- la navigation principale contient `Collections`, `David` et `Évolution dans le
  temps` ;
- sur mobile, un bouton ouvre ou ferme la navigation et la touche Échap la referme en
  restaurant le focus ;
- sur bureau, les liens sont affichés horizontalement ;
- l'état actif utilise `aria-current="page"` et une accentuation typographique ;
- la détection de l'état actif repose sur l'égalité exacte entre le chemin courant et
  la destination du lien ;
- les routes imbriquées de collection et d'œuvre ne marquent donc pas `Collections`
  comme destination active ;
- le footer affiche uniquement `AZUREUM` ;
- le header et le footer sont séparés du contenu par une bordure subtile.

**Conformité démontrée**

- les landmarks, le lien d'évitement et les deux modes de navigation sont présents ;
- les libellés et destinations canoniques sont inchangés ;
- les tests couvrent l'ordre clavier, le lien d'évitement, l'état actif des destinations
  principales, le menu mobile, Échap et le reflow ;
- la route technique du Design System reste absente de la navigation publique.

**Forces observées**

- le shell fournit des repères constants et peu nombreux ;
- la navigation mobile possède un comportement clavier explicite ;
- le contenu principal reste séparé du header et du footer de façon stable.

**Limites observables**

- l'identité du shell repose principalement sur le nom AZUREUM, les espacements et les
  bordures ;
- l'état actif ne représente pas l'appartenance des routes imbriquées à la branche
  Collections ;
- le footer ne porte aucune autre information ou relation publique.

**Risques éventuels**

- l'absence d'état actif sur les routes imbriquées peut réduire le repère de section
  pendant la consultation d'une collection ou d'une œuvre ;
- toute augmentation future de la navigation modifierait l'équilibre actuellement fondé
  sur trois destinations.

**Interprétation**

Le shell est actuellement fonctionnel, discret et limité aux éléments rendus décrits
ci-dessus. L'audit ne permet pas de conclure sur l'intention à l'origine de cette
sobriété.

## 14. Continuités factuelles entre les vues

**Faits observables**

- l'accueil mène aux collections et aux deux collections présentées ;
- David mène aux collections ;
- l'index des collections mène à chaque collection ;
- une collection mène à ses œuvres ;
- une œuvre retourne à sa collection et peut mener à ses contenus associés ;
- un contenu artistique peut mener à ses œuvres associées ;
- la chronologie peut mener à des œuvres et à des contenus ;
- le shell permet de rejoindre l'accueil, les collections, David et la chronologie ;
- aucune navigation retour spécifique n'est présente depuis un contenu artistique ou la
  chronologie ;
- les parcours utilisent des liens ordinaires et restent utilisables au clavier.

**Conformité démontrée**

Les collections restent l'accès structurant aux œuvres. Les relations œuvre–contenu et
chronologie–ressource utilisent les associations explicites des modules privés. Aucune
destination nouvelle n'est introduite.

**Force observée**

Le graphe public permet plusieurs entrées vers une œuvre tout en conservant sa collection
d'origine dans son URL et sur sa fiche.

**Limite observable**

La continuité repose principalement sur des liens textuels et sur la stabilité du shell.
Elle ne comporte pas d'autre reprise visuelle ou contextuelle explicitement codée entre
les vues.

**Risque éventuel**

Les chemins transversaux vers les contenus et la chronologie peuvent produire des
changements de structure importants entre deux pages liées. L'audit ne détermine pas si
ce changement constitue une rupture vécue.

**Interprétation**

La continuité fonctionnelle est démontrée. Les seuls éléments observés ne permettent pas
d'établir l'existence d'une continuité sensible supplémentaire.

## 15. Matrices de traçabilité finales de l'Incrément 2

### 15.1 Responsabilités, références et preuves

| Responsabilité | Route ou portée | Source fonctionnelle | Source sensible | Preuves principales | État de l'audit |
|---|---|---|---|---|---|
| `V-PUB-01` — Accueil | `/` | `product-structure-v1.md`, Sprint 013 | Manifeste § 18.1 | `page.tsx`, tests publics accueil | Faits et conformité documentés |
| `V-PUB-02` — David | `/david` | `product-structure-v1.md`, Sprint 014 | Manifeste § 18.2 | `david/page.tsx`, tests publics David | Faits et conformité documentés |
| `V-PUB-03` — Collections | `/collections` | `product-structure-v1.md`, Sprint 011 | Manifeste § 18.3 | `collections/page.tsx`, tests galerie | Faits et conformité documentés |
| `V-PUB-07` — Collection | `/collections/[collectionSlug]` | `product-structure-v1.md`, Sprint 011 | Manifeste § 18.4 | page dynamique, tests galerie | Faits et conformité documentés |
| `V-PUB-04` — Œuvre | `/collections/[collectionSlug]/oeuvres/[artworkSlug]` | `product-structure-v1.md`, Sprints 011–012 | Manifeste § 18.5 | page et styles locaux, tests œuvre | Faits et conformité documentés |
| `V-PUB-05` — Contenu artistique | `/contenus/[contentSlug]` | `product-structure-v1.md`, Sprint 015 | Manifeste § 18.6 | page dynamique, tests contenus | Faits et conformité documentés |
| `V-PUB-06` — Évolution dans le temps | `/chronologie` | `product-structure-v1.md`, Sprint 016-r1 | Manifeste § 18.7 | page, tests timeline | Faits et conformité documentés |
| Shell public | portée publique partagée | Sprint 010 | Manifeste § 18.8 | layout, header, styles, tests foundation | Faits et conformité documentés |

### 15.2 Justification factuelle des limites et risques

| Responsabilité | Fait observable source | Limite reliée au fait | Risque éventuel relié au fait |
|---|---|---|---|
| Accueil | Deux blocs successifs donnent accès aux collections : un lien principal puis deux aperçus de poids égal. | La progression actuelle repose sur cette succession courte et sur les deux médias de démonstration. | Des médias futurs de ratios ou de forces visuelles différents peuvent modifier l'équilibre des deux aperçus. |
| David | Quatre sections de même structure rassemblent neuf paragraphes, sans média, avec un lien final vers les collections. | L'expérience actuelle est principalement une lecture textuelle continue et l'accès aux collections intervient après le corpus. | La longueur d'un corpus officiel ou l'arrivée de médias validés peut modifier le rythme actuellement observable. |
| Collections | Deux entrées utilisent la même structure et un poids égal dans une grille. | La vue reprend un modèle identique pour les deux ensembles et proche de celui utilisé sur l'accueil. | Un nombre de collections différent ou des aperçus hétérogènes peut modifier la densité et l'équilibre observés. |
| Collection | L'intention précède une grille de trois œuvres ; aucun contenu artistique de collection n'est rendu. | La contextualisation observable repose sur l'intention et les œuvres, sans contenu directement relié au niveau collection. | Les données actuelles ne permettent pas d'évaluer cette partie de la responsabilité ni le rythme d'une collection de longueur différente. |
| Œuvre | Le média précède une séquence verticale de groupes textuels ; seule la grille interne des caractéristiques change à partir de la tablette. | La composition générale reste empilée et les contenus associés restent une liste textuelle. | Des ratios, textes ou listes plus importants peuvent déplacer fortement la part respective du média et des informations. |
| Contenu artistique | Les cinq types partagent une structure de lecture commune ; média, contexte et œuvres sont conditionnels. | Les types ne disposent pas de différenciation locale observable et le rythme repose sur les primitives communes. | Des corps ou contextes de longueurs très différentes peuvent produire des densités fortement variables. |
| Évolution dans le temps | Trois repères de même structure sont rendus dans une liste ordonnée, sans style local ni représentation graphique. | Le temps est exprimé par l'ordre, les années et les contenus ; les ressources restent des listes textuelles. | Un nombre accru de repères, de ressources ou des résumés plus longs peut augmenter la répétition et la longueur de la liste. |
| Shell public | Le header contient quatre accès stables ; l'état actif compare exactement le chemin courant à trois destinations principales. | Les routes imbriquées sous `/collections` ne donnent pas d'état actif à `Collections` et le footer ne contient que le nom de la marque. | Le repère de section peut être absent sur les routes imbriquées ; une navigation future plus longue modifierait l'équilibre actuel. |
| Continuités | Les passages entre vues utilisent des liens textuels et un shell stable ; aucune autre reprise inter-vues n'est explicitement codée. | La continuité démontrable est principalement fonctionnelle et textuelle. | Deux pages liées peuvent présenter des structures sensiblement différentes sans que l'audit permette d'établir l'effet vécu de ce changement. |

Chaque ligne relie une limite et un risque à un fait préalablement observé. Elle ne
qualifie ni leur gravité, ni leur priorité, ni la nécessité d'une intervention.

### 15.3 Constats importants et références applicables

| Constat important | Statut | Responsabilités concernées | Preuve principale | Référence applicable |
|---|---|---|---|---|
| Les huit responsabilités sont matérialisées par des routes ou une portée partagée. | Fait observable | Toutes | Routes publiques et layout | `product-structure-v1.md`, § 6.1 ; manifeste § 18 |
| Les collections restent l'accès structurant aux œuvres. | Conformité démontrée | Accueil, Collections, Collection, Œuvre | Destinations et URLs publiques | `PS-07`, `PAR-01`, `PAR-02` |
| Les pages reposent majoritairement sur les primitives officielles du Design System. | Fait et conformité | Toutes | Imports des pages publiques | `design-system-v1.md`, contrats 010–016 |
| La fiche d'œuvre est la seule vue avec une composition locale et des styles propres substantiels. | Différence observable | Œuvre face aux autres vues | `page.module.css` de la fiche | Manifeste § 18.5, Sprint 012 |
| Les vues Accueil, Collections et Collection utilisent des grilles de médias. | Caractéristique commune partielle | Accueil, Collections, Collection | `Grid`, `GridItem`, `ArtworkImage` | Design System, sections mise en page et média |
| David, Œuvre, Contenu et Chronologie utilisent une largeur de lecture. | Caractéristique commune partielle | David, Œuvre, Contenu, Chronologie | `Container width="reading"` | Design System, primitives de mise en page |
| Les relations œuvre–contenu et chronologie–ressource sont explicites. | Conformité démontrée | Œuvre, Contenu, Chronologie | Queries et liens rendus | `PS-02`, `EF-ART-04`, Sprints 015–016 |
| La continuité inter-vues observable repose sur les liens et le shell. | Limite observable | Toutes | Graphe des liens et layout partagé | Manifeste §§ 17–18 |
| Aucun contenu artistique contextualisant directement une collection n'est rendu. | Limite observable | Collection | Page de collection actuelle | Responsabilité `V-PUB-07` |
| L'état actif du shell ne couvre pas les routes imbriquées de Collections. | Limite observable | Shell, Collection, Œuvre | Comparaison stricte dans `PublicHeaderContent` | Manifeste § 18.8, Sprint 010 |
| Les contenus et médias courants sont fictifs ou provisoires. | Décision héritée | Toutes les vues alimentées par ces données | Modules de démonstration et textes publics | Sprints 011, 014–016 |

## 16. Synthèse factuelle de l'Incrément 2

### 16.1 Éléments solidement établis

- les huit responsabilités sont réellement matérialisées ;
- les routes, relations et destinations correspondent aux contrats hérités ;
- la base sémantique et l'ordre de lecture sont explicites ;
- les pages utilisent principalement le Design System officiel ;
- les parcours essentiels sont couverts au clavier et en reflow ;
- les contenus absents, médias indisponibles et routes inconnues disposent de
  comportements validés ;
- les relations entre collections, œuvres, contenus et repères temporels restent
  explicites.

### 16.2 Caractéristiques communes observables

- chaque vue possède un unique `h1` et un ordre sémantique explicite ;
- toutes les vues utilisent le shell public partagé ;
- les primitives officielles du Design System portent la structure principale ;
- les contenus sont organisés selon un ordre vertical stable avant toute adaptation en
  colonnes ;
- les actions publiques observées sont des liens textuels utilisant les routes
  canoniques ;
- les informations ou relations facultatives ne produisent pas de section vide ;
- les données fictives ou provisoires conservent un statut explicite dans leurs contrats
  d'origine.

### 16.3 Différences observables entre les vues

| Domaine observable | Vues concernées | Différence établie |
|---|---|---|
| Largeur principale | Accueil, Collections, Collection | Utilisation de la largeur `main`. |
| Largeur de lecture | David, Œuvre, Contenu, Chronologie | Utilisation de la largeur `reading`. |
| Présence de médias | Accueil, Collections, Collection, Œuvre, certains Contenus | Média rendu dans la structure principale ou conditionnelle. |
| Absence de média | David, Chronologie, certains Contenus | Expérience entièrement textuelle dans les données actuelles. |
| Grille de ressources | Accueil, Collections, Collection | Usage de `Grid` et `GridItem` avec adaptation du nombre de colonnes. |
| Composition locale dédiée | Œuvre | Seule vue disposant d'un fichier de styles local substantiel. |
| Structure temporelle | Chronologie | Liste ordonnée de repères et groupes de ressources. |
| Structure éditoriale longue | David, Contenu | Succession de sections ou paragraphes en largeur de lecture. |
| Relations transversales | Œuvre, Contenu, Chronologie | Liens explicites vers des ressources associées. |
| Interactivité cliente | Shell | Menu mobile, état ouvert, touche Échap et état actif. |

### 16.4 Limites transversales démontrables

- la plupart des vues reposent sur une composition verticale et des primitives
  génériques communes ;
- la fiche d'œuvre concentre l'essentiel de la différenciation locale existante ;
- la continuité est principalement fonctionnelle et textuelle ;
- les contenus de démonstration ne permettent pas d'évaluer toutes les variations
  futures de longueur, quantité et ratio ;
- certaines parties de responsabilités canoniques ne sont pas observables dans les
  données actuelles, notamment les contenus contextualisant directement une collection.

Ces limites sont rattachées aux faits détaillés dans la matrice 15.2. Elles ne
constituent pas un jugement sur la qualité de l'expérience.

### 16.5 Risques éventuels transmis sans résolution

- répétition structurelle entre des responsabilités différentes ;
- variation forte de densité avec les contenus futurs ;
- équilibre dépendant des ratios et intensités des médias de démonstration ;
- continuité sensible non démontrée par les seuls liens fonctionnels ;
- repère de navigation actif absent sur les routes imbriquées de la branche Collections.

Ces risques ne sont ni des défauts établis, ni des décisions de conception, ni une liste
de corrections autorisées.

## 17. Éléments explicitement différés

Les sujets suivants ne sont pas traités dans l'Incrément 2 :

- intentions sensibles futures ;
- premières directions d'attention futures ;
- compositions et hiérarchies futures ;
- schémas et wireframes conceptuels ;
- transformations responsive conceptuelles ;
- présentation future des médias ;
- mouvement et continuité sensible ;
- variantes de conception ;
- arbitrages Product Owner de conception ;
- besoins éventuels d'évolution du Design System ;
- cartographie des dépendances d'implémentation ;
- stratégie des futurs Sprints.

Leur absence est volontaire et protège la responsabilité unique de l'Incrément 2.

## 18. Cadre des intentions sensibles — Incrément 3

L'intention sensible décrit la contribution recherchée d'une vue à l'expérience
globale. Elle ne garantit aucune émotion individuelle et n'impose ni composition, ni
position, ni taille, ni couleur, ni mouvement.

La hiérarchie conceptuelle précise l'ordre relatif d'importance entre le sujet
principal, son contexte, les textes, les actions déjà validées et la navigation. Elle
ne prescrit pas leur disposition future.

Les niveaux de silence, de densité et de tension sont relatifs à l'ensemble de
l'expérience publique :

- **silence élevé** : peu de sollicitations concurrentes autour du sujet principal ;
- **silence équilibré** : présence de plusieurs repères sans concurrence avec le sujet ;
- **densité faible, modérée ou soutenue** : quantité relative de contenus à appréhender,
  sans préjuger de leur disposition ;
- **tension légère, modérée ou affirmée** : intensité relative de l'invitation à
  poursuivre ou à s'attarder, sans désigner un effet visuel.

Ces qualifications servent à comparer les responsabilités entre elles. Elles ne créent
aucune nouvelle échelle dans le Design System.

## 19. Intention sensible de l'accueil — V-PUB-01

### 19.1 Contribution recherchée

L'accueil ouvre la rencontre avec l'univers de David par une présence artistique
immédiate, calme et maîtrisée. Il éveille une curiosité légère, rend la destination
AZUREUM compréhensible et permet de rejoindre les collections sans détour.

Il ne cherche ni à résumer tout le travail de David, ni à imposer un récit préalable à
la découverte.

### 19.2 Rôle dans la rencontre

La vue établit le premier lien entre la marque éditoriale AZUREUM, David et les ensembles
d'œuvres. Elle donne au visiteur suffisamment de contexte pour comprendre où il entre,
puis laisse la découverte des œuvres se poursuivre par les collections.

### 19.3 Premier point d'attention — décision Product Owner

L'univers artistique constitue le premier foyer d'attention. L'identité éditoriale et
la promesse d'AZUREUM permettent au visiteur de comprendre rapidement où il se trouve
et ce qu'il peut explorer, mais elles soutiennent l'entrée dans l'univers de David sans
devenir le sujet principal.

Cette décision fixe uniquement la hiérarchie d'attention. Elle ne prescrit ni
composition, ni média dominant, ni proportion, ni dispositif visuel.

### 19.4 Hiérarchie conceptuelle

1. univers artistique ;
2. identité et contexte nécessaires à la compréhension d'AZUREUM ;
3. accès existant aux collections ;
4. intentions des collections présentées ;
5. navigation globale.

Les aperçus de collections appartiennent au sujet artistique et non à une fonction
promotionnelle autonome.

### 19.5 Silence, densité et tension

- silence : élevé à équilibré ;
- densité : faible à modérée ;
- tension : légère, concentrée sur l'invitation à découvrir.

### 19.6 Risques à maîtriser

- surcharge : multiplier les messages avant l'accès aux collections ;
- banalisation : réduire l'accueil à un index ou à une répétition indifférenciée de la
  vue Collections ;
- confusion : rendre la destination ou la direction principale ambiguë ;
- démonstration : faire de l'entrée un spectacle retardant les œuvres.

### 19.7 Justification canonique

La proposition applique le principe directeur, l'expérience des dix premières secondes,
la hiérarchie générale, la respiration et la responsabilité sensible de l'accueil.

## 20. Intention sensible de David et sa démarche — V-PUB-02

### 20.1 Contribution recherchée

La vue favorise une proximité progressive avec David par une lecture éditoriale calme,
incarnée par les contenus validés et attentive à la continuité de sa démarche. Elle
permet de comprendre l'artiste sans fabriquer une présence ou une émotion artificielle.

### 20.2 Rôle dans la rencontre

Elle apporte l'auteur, la démarche et les repères qui donnent sens aux œuvres. Elle
relie la personne de David à son travail sans transformer la page en biographie
exhaustive ni en manifeste autonome.

### 20.3 Premier point d'attention

David et l'entrée dans sa démarche constituent le premier point d'attention. Le canon
rend cette direction suffisamment explicite ; aucune variante n'est nécessaire.

### 20.4 Hiérarchie conceptuelle

1. David et l'intention éditoriale de la vue ;
2. démarche artistique ;
3. repères biographiques et artistiques utiles ;
4. accès existant aux collections ;
5. navigation globale.

Le texte sert la compréhension de David ; il ne devient pas une masse éditoriale
indépendante de sa démarche.

### 20.5 Silence, densité et tension

- silence : élevé ;
- densité : modérée à soutenue selon le corpus validé ;
- tension : faible, portée par la progression de la compréhension.

### 20.6 Risques à maîtriser

- surcharge : accumuler des repères sans contribution à la compréhension ;
- banalisation : produire une présentation biographique générique détachée des œuvres ;
- confusion : confondre faits validés, contenu de travail et interprétation ;
- démonstration : construire une présence de David à partir d'un média ou d'un procédé
  non validé.

### 20.7 Justification canonique

La proposition applique la relation entre David, AZUREUM et les œuvres, la typographie
éditoriale, la progression libre et la responsabilité sensible de la page David.

## 21. Intention sensible des collections — V-PUB-03

### 21.1 Contribution recherchée

La vue favorise l'exploration et permet d'embrasser la diversité du travail de David par
ensembles artistiques. Elle rend chaque collection identifiable par son intention sans
transformer leur présentation en catalogue répétitif ou en classement commercial.

### 21.2 Rôle dans la rencontre

Elle constitue le seuil structurant entre la découverte générale de David et l'entrée
dans des ensembles d'œuvres. Elle permet de choisir une direction de découverte sans
hiérarchie artistique inventée entre les collections.

### 21.3 Premier point d'attention

La diversité des ensembles et leur identité artistique commune constituent le premier
point d'attention. Aucun aperçu isolé ne devient une mise en avant canonique sans
décision distincte.

### 21.4 Hiérarchie conceptuelle

1. ensembles artistiques et diversité perceptible ;
2. identité et intention de chaque collection ;
3. accès existant à chaque collection ;
4. contexte introductif de la vue lorsqu'il existe ;
5. navigation globale.

### 21.5 Silence, densité et tension

- silence : équilibré ;
- densité : modérée, dépendante du nombre réel de collections ;
- tension : légère à modérée, portée par le choix d'un ensemble à explorer.

### 21.6 Risques à maîtriser

- surcharge : rendre les collections difficiles à distinguer lorsque leur nombre varie ;
- banalisation : reprendre le vocabulaire répétitif d'un catalogue ou d'une interface
  SaaS ;
- confusion : créer une hiérarchie implicite non fondée entre les ensembles ;
- démonstration : faire du système de présentation le sujet principal.

### 21.7 Justification canonique

La proposition applique les collections comme accès structurant, la grammaire commune
non uniforme, la hiérarchie de l'attention et la responsabilité sensible de la vue
Collections.

## 22. Intention sensible d'une collection — V-PUB-07

### 22.1 Contribution recherchée

La vue fait percevoir une intention commune et permet de regarder les œuvres qui la
matérialisent comme un ensemble, tout en préservant leur singularité. Elle favorise la
comparaison sans uniformiser les œuvres ni réduire la collection à une grille.

### 22.2 Rôle dans la rencontre

Elle donne le contexte nécessaire avant ou pendant l'exploration des œuvres et conserve
la relation entre l'ensemble, chaque œuvre et les contenus qui le contextualisent
lorsqu'ils sont disponibles.

### 22.3 Premier point d'attention — décision Product Owner

L'ensemble des œuvres constitue le premier foyer d'attention. L'intention de la
collection conserve sa responsabilité de contextualisation et permet de comprendre ce
qui relie les œuvres lorsqu'un contenu correspondant existe. Elle ne devient pas un
préalable éditorial faisant passer le discours avant leur rencontre.

Cette décision fixe uniquement la hiérarchie conceptuelle. Elle ne prescrit ni la
position ou la longueur du texte, ni la composition de la vue, ni la présentation des
œuvres.

### 22.4 Hiérarchie conceptuelle

1. ensemble des œuvres ;
2. intention commune et contexte nécessaire à leur relation ;
3. singularité et identification de chaque œuvre ;
4. contenus contextualisant la collection lorsqu'ils existent ;
5. accès existants aux fiches d'œuvre ;
6. navigation globale.

### 22.5 Silence, densité et tension

- silence : équilibré, avec une respiration autour des œuvres ;
- densité : modérée à soutenue selon le nombre d'œuvres et de contextes ;
- tension : modérée, portée par le passage de l'ensemble à une œuvre.

### 22.6 Risques à maîtriser

- surcharge : juxtaposer intention, œuvres et contextes sans hiérarchie lisible ;
- banalisation : réduire la collection à une grille répétitive ;
- confusion : rendre la relation entre l'intention et les œuvres difficile à comprendre ;
- démonstration : uniformiser ou encadrer les œuvres pour produire un effet de système.

### 22.7 Justification canonique

La proposition applique `PS-07`, la primauté des œuvres, la respiration, la présentation
non destructive et la responsabilité sensible de la collection.

## 23. Intention sensible d'une œuvre — V-PUB-04

### 23.1 Contribution recherchée

La fiche crée le moment de contemplation le plus concentré de l'expérience publique.
Elle donne à l'œuvre les conditions nécessaires pour être regardée, identifiée et située
dans la démarche de David, tandis que ses informations accompagnent sa compréhension.

### 23.2 Rôle dans la rencontre

Elle constitue la rencontre la plus directe avec une œuvre singulière. Elle relie cette
œuvre à sa collection, à ses caractéristiques et à ses contextes sans réduire la
consultation à des données descriptives.

### 23.3 Premier point d'attention

L'œuvre constitue sans ambiguïté le premier point d'attention. Le manifeste et la
responsabilité sensible excluent une variante concurrente.

### 23.4 Hiérarchie conceptuelle

1. œuvre ;
2. titre et collection d'origine ;
3. description et texte artistique ;
4. caractéristiques fiables ;
5. contenus associés ;
6. retour existant à la collection ;
7. navigation globale.

Les informations peuvent conserver leur nécessité sans acquérir une intensité égale à
l'œuvre.

### 23.5 Silence, densité et tension

- silence : élevé autour de l'œuvre ;
- densité : modérée à soutenue dans les informations qui l'accompagnent ;
- tension : modérée et concentrée sur le passage du regard à la compréhension.

### 23.6 Risques à maîtriser

- surcharge : faire rivaliser les caractéristiques ou contextes avec l'œuvre ;
- banalisation : traiter la fiche comme une fiche produit ou une fiche technique ;
- confusion : détacher l'œuvre de sa collection ou de ses contextes explicites ;
- démonstration : utiliser la composition affirmée comme spectacle d'interface.

### 23.7 Justification canonique

La proposition applique le principe directeur, la primauté et l'intégrité des œuvres,
la hiérarchie générale et la responsabilité sensible de la fiche d'œuvre.

## 24. Intention sensible d'un contenu artistique — V-PUB-05

### 24.1 Contribution recherchée

La vue ouvre un temps de lecture et de contextualisation qui approfondit la compréhension
du travail de David. Elle rend perceptible la nature du contenu et ses relations avec
les œuvres sans subordonner celles-ci à un discours autonome.

### 24.2 Rôle dans la rencontre

Elle relie les œuvres à des textes, expositions, installations, événements ou ensembles.
Elle donne au visiteur un contexte supplémentaire et lui permet de revenir vers les
œuvres explicitement concernées.

### 24.3 Premier point d'attention

Le contenu artistique identifié par sa nature, son titre et son propos principal
constitue le premier point d'attention. Les œuvres associées prolongent cette lecture ;
elles ne servent pas d'illustrations génériques.

### 24.4 Hiérarchie conceptuelle

1. propos principal et identité du contenu ;
2. contexte nécessaire, notamment type, période ou lieu lorsqu'ils existent ;
3. corps éditorial ;
4. média explicitement associé lorsqu'il existe ;
5. œuvres explicitement associées ;
6. navigation globale.

Cette hiérarchie reste conceptuelle : elle ne fixe pas la position du média par rapport
au corps.

### 24.5 Silence, densité et tension

- silence : élevé à équilibré ;
- densité : variable selon la nature et la longueur du contenu ;
- tension : faible, portée par l'approfondissement et les relations éditoriales.

### 24.6 Risques à maîtriser

- surcharge : accumuler contexte, corps, média et relations sans priorité intelligible ;
- banalisation : traiter tous les types comme des articles indifférenciés ;
- confusion : rendre incertaine la relation entre le contenu et les œuvres ;
- démonstration : utiliser un média ou une forme éditoriale sans finalité contextuelle.

### 24.7 Justification canonique

La proposition applique la lecture éditoriale, la contextualisation, les relations
explicites, la typographie éditoriale et la responsabilité sensible du contenu
artistique.

## 25. Intention sensible de l'évolution dans le temps — V-PUB-06

### 25.1 Contribution recherchée

La vue rend perceptibles les étapes et la progression du travail de David sans les
transformer en récit imposé. Elle favorise la compréhension du temps, puis permet
d'explorer les œuvres et contenus explicitement liés à chaque repère.

### 25.2 Rôle dans la rencontre

Elle relie des moments datés à des expressions concrètes du travail. Elle donne une
continuité temporelle à la découverte tout en laissant chaque ressource consultable dans
son propre contexte.

### 25.3 Premier point d'attention

La progression temporelle et les repères qui la rendent compréhensible constituent le
premier point d'attention. Aucun repère isolé ne reçoit de mise en avant non déclarée.

### 25.4 Hiérarchie conceptuelle

1. progression temporelle ;
2. année, période et intention de chaque repère ;
3. résumé nécessaire à sa compréhension ;
4. œuvres et contenus explicitement associés ;
5. navigation globale.

### 25.5 Silence, densité et tension

- silence : équilibré ;
- densité : modérée à soutenue selon le nombre de repères et de relations ;
- tension : modérée, portée par la progression et l'envie de poursuivre entre les
  repères.

### 25.6 Risques à maîtriser

- surcharge : multiplier les repères et ressources sans relation temporelle lisible ;
- banalisation : réduire la vue à une frise décorative conventionnelle ;
- confusion : faire prendre l'ordre temporel pour un récit exhaustif ou obligatoire ;
- démonstration : rendre le dispositif temporel plus visible que les contenus reliés.

### 25.7 Justification canonique

La proposition applique la progression libre, la continuité, la contextualisation et la
responsabilité sensible de l'évolution dans le temps.

## 26. Intention sensible du shell public

### 26.1 Contribution recherchée

Le shell maintient une présence stable, discrète et immédiatement utilisable. Il donne
les repères nécessaires pour comprendre où l'on se trouve et poursuivre la découverte,
sans réclamer une attention comparable à celle des contenus.

### 26.2 Rôle dans la rencontre

Il relie les responsabilités publiques, porte l'identité AZUREUM et rend les parcours
prévisibles. Il agit comme médiateur constant entre les vues sans devenir une vue ou un
récit autonome.

### 26.3 Premier point d'attention

Le contenu propre à la vue reste le premier point d'attention. Dans le shell, l'identité
et la navigation doivent être disponibles et compréhensibles sans devenir le foyer
principal.

### 26.4 Hiérarchie conceptuelle

1. contenu principal de la vue ;
2. identité AZUREUM comme repère stable ;
3. navigation principale et état de localisation disponible ;
4. utilitaires d'accessibilité et informations du footer.

Cette hiérarchie ne modifie ni les destinations ni les libellés existants.

### 26.5 Silence, densité et tension

- silence : élevé ;
- densité : faible ;
- tension : très faible, limitée à la lisibilité des actions et du contexte courant.

### 26.6 Risques à maîtriser

- surcharge : ajouter des repères ou informations sans nécessité fonctionnelle validée ;
- banalisation : rendre le shell indistinct au point d'affaiblir l'identité et les
  repères ;
- confusion : ne pas rendre la localisation ou les destinations compréhensibles ;
- démonstration : donner au header, au menu ou au footer une présence supérieure au
  contenu.

### 26.7 Justification canonique

La proposition applique le rôle de médiateur discret d'AZUREUM, la hiérarchie générale,
la continuité et la responsabilité sensible du shell.

## 27. Matrice des intentions sensibles — Incrément 3

| Responsabilité | Contribution recherchée | Premier point d'attention | Hiérarchie conceptuelle résumée | Silence | Densité | Tension | Statut d'arbitrage |
|---|---|---|---|---|---|---|---|
| Accueil — `V-PUB-01` | Ouvrir l'univers de David et donner accès aux collections sans détour. | Univers artistique. | Univers artistique → contexte AZUREUM → collections → navigation. | Élevé à équilibré | Faible à modérée | Légère | Non — décision PO |
| David — `V-PUB-02` | Favoriser une proximité progressive par la compréhension de la démarche. | David et l'entrée dans sa démarche. | David → démarche → repères → collections → navigation. | Élevé | Modérée à soutenue | Faible | Non |
| Collections — `V-PUB-03` | Faire percevoir la diversité des ensembles et inviter à en choisir un. | Diversité et identité des ensembles. | Ensembles → intentions → accès → contexte → navigation. | Équilibré | Modérée | Légère à modérée | Non |
| Collection — `V-PUB-07` | Relier une intention commune aux œuvres sans les uniformiser. | Ensemble des œuvres. | Œuvres → intention et contexte → accès → navigation. | Équilibré | Modérée à soutenue | Modérée | Non — décision PO |
| Œuvre — `V-PUB-04` | Concentrer la contemplation et situer l'œuvre dans sa démarche. | Œuvre. | Œuvre → identité et collection → textes → caractéristiques → contextes → retour. | Élevé | Modérée à soutenue | Modérée | Non |
| Contenu — `V-PUB-05` | Approfondir la compréhension par la lecture et la contextualisation. | Propos principal et identité du contenu. | Propos → contexte → corps → média éventuel → œuvres → navigation. | Élevé à équilibré | Variable | Faible | Non |
| Évolution — `V-PUB-06` | Rendre le temps perceptible sans imposer un récit. | Progression temporelle. | Progression → repères → résumés → ressources → navigation. | Équilibré | Modérée à soutenue | Modérée | Non |
| Shell public | Maintenir identité, localisation et continuité sans concurrencer les vues. | Contenu propre à la vue. | Contenu → identité → navigation → utilitaires et footer. | Élevé | Faible | Très faible | Non |

## 28. Arbitrages Product Owner de l'Incrément 3

### 28.1 Accueil

**Décision :** l'univers artistique constitue le premier foyer d'attention. L'identité
éditoriale et la promesse d'AZUREUM soutiennent sa compréhension sans devenir le sujet
principal.

### 28.2 Collection

**Décision :** l'ensemble des œuvres constitue le premier foyer d'attention. L'intention
de la collection contextualise ce qui les relie sans devenir un écran éditorial
préalable.

Aucun arbitrage ne reste ouvert dans l'Incrément 3. Pour les six autres responsabilités,
le manifeste et les responsabilités existantes donnent une direction suffisamment
explicite pour ne pas fabriquer de variante.

### 28.3 Progression conceptuelle confirmée

```text
Accueil
→ entrée dans l'univers artistique

Collections
→ perception et exploration de la diversité des ensembles

Collection
→ rencontre avec les œuvres comme ensemble cohérent

Œuvre
→ concentration sur une œuvre individuelle
```

Cette progression exprime une relation d'attention entre les responsabilités. Elle ne
crée ni parcours fonctionnel, ni navigation, ni destination, ni prescription de
composition.

## 29. Ambiguïtés héritées conservées

### 29.1 Contenus au niveau de la collection

La responsabilité `V-PUB-07` mentionne les contenus qui contextualisent une collection,
alors que l'état actuel n'en rend aucun directement. L'intention sensible les inclut
uniquement lorsqu'ils existent. Elle ne crée ni contenu, ni relation, ni obligation
fonctionnelle nouvelle.

### 29.2 État actif des routes imbriquées

Le shell actuel ne marque pas `Collections` comme actif sur les routes de collection et
d'œuvre. L'intention sensible exige seulement un état de localisation disponible et
compréhensible conformément au manifeste. Elle ne décide aucune modification du shell
ni du comportement de navigation.

### 29.3 Contenus et médias provisoires

Les niveaux de densité sont exprimés comme des relations attendues, non comme des
mesures fondées sur la longueur, le nombre ou le ratio exact des contenus actuels.

## 30. Éléments explicitement différés après l'Incrément 3

L'Incrément 3 ne définit pas :

- les compositions détaillées ;
- les schémas ou wireframes ;
- les positions, dimensions ou rapports de masses ;
- les transformations responsive ;
- la présentation future des médias ;
- les mouvements ou transitions ;
- les valeurs techniques ;
- les besoins d'évolution du Design System ;
- les dépendances ou la stratégie d'implémentation.

Les intentions et hiérarchies du présent incrément sont validées et verrouillées. Elles
ne deviennent pas pour autant des instructions d'implémentation.

## 31. Cadre de conception de l'Incrément 4

L'Incrément 4 traduit les intentions sensibles validées en relations spatiales
compréhensibles. Il ne produit ni maquette finale, ni système de mise en page, ni
instruction d'implémentation.

Les rapports de masses employés ci-dessous sont exclusivement qualitatifs :

- **dominant** : foyer d'attention principal de la vue ;
- **structurant** : ensemble nécessaire à la compréhension et au rythme ;
- **d'accompagnement** : information ou action utile qui soutient le sujet principal ;
- **discret** : présence nécessaire qui ne doit pas concurrencer le contenu ;
- **respiration** : espace relationnel qui sépare, rapproche ou temporise les ensembles.

Les schémas textuels sont des wireframes conceptuels non exécutables. Ils montrent un
ordre, des rapports et des zones, mais ne fixent ni dimensions, ni grille, ni position
de production. Les libellés désignent des responsabilités existantes, pas de nouveaux
composants.

```text
[SHELL DISCRET]

[SUJET DOMINANT]

       respiration

[CONTEXTE STRUCTURANT]
[TEXTE ET ACTIONS EXISTANTES]

[FIN DE PAGE DISCRÈTE]
```

Cette légende n'impose pas une composition commune aux huit responsabilités. Elle rend
leurs descriptions comparables.

## 32. Accueil — `V-PUB-01`

### 32.1 Composition conceptuelle

L'univers artistique forme la masse dominante. L'identité éditoriale d'AZUREUM et sa
promesse constituent un seuil de compréhension structurant, mais elles ne précèdent
pas la rencontre au point d'en devenir le sujet. Les accès existants aux collections
prolongent cette entrée par une exploration concrète.

```text
[SHELL DISCRET]

[UNIVERS ARTISTIQUE — DOMINANT]
[IDENTITÉ ET PROMESSE — STRUCTURANTES]

       respiration ample

[ACCÈS EXISTANT AUX COLLECTIONS]
[APERÇUS DES ENSEMBLES]
```

La hiérarchie spatiale recherchée est : univers artistique, compréhension d'AZUREUM,
exploration des collections, navigation. La respiration sépare l'entrée sensible de
l'exploration sans créer un écran introductif autonome.

### 32.2 Transformations selon la largeur

- **Mobile :** l'univers, la promesse et les accès se succèdent dans un flux unique.
  L'œuvre ou le média existant reste le premier foyer ; le contexte conserve une
  proximité suffisante pour éviter une entrée énigmatique.
- **Tablette :** l'univers et la promesse peuvent former un seuil commun, suivi d'un
  champ d'exploration plus ouvert. Les aperçus restent identifiables comme un ensemble.
- **Bureau :** le rapport de masses peut rendre simultanément perceptibles l'univers
  artistique et la possibilité d'explorer, sans donner aux éléments éditoriaux ou au
  shell une présence équivalente au foyer artistique.

### 32.3 Médias et robustesse

Le média principal et les aperçus de collections existants gardent leurs ratios. Leur
remplacement futur par des contenus validés ne doit pas inverser la hiérarchie. Une
promesse plus longue augmente le flux éditorial sans recouvrir le foyer artistique ;
un nombre différent de collections étend le champ d'exploration sans transformer
l'accueil en galerie exhaustive.

**Traçabilité :** intention sensible de l'accueil ; manifeste, sections 2, 3, 9, 11,
12, 13 et 14 ; responsabilité `V-PUB-01`.

## 33. David et sa démarche — `V-PUB-02`

### 33.1 Composition conceptuelle

Le propos consacré à David forme la masse structurante. L'ouverture éditoriale donne
une présence identifiable, puis la démarche se déploie par séquences lisibles. Les
repères utiles accompagnent la lecture ; l'accès existant aux collections en constitue
un prolongement et non une interruption.

```text
[SHELL DISCRET]

[DAVID — OUVERTURE STRUCTURANTE]
[DÉMARCHE — CORPS ÉDITORIAL]

       respirations de lecture

[REPÈRES UTILES]
[ACCÈS EXISTANT AUX COLLECTIONS]
```

La hiérarchie spatiale recherchée est : David, démarche, repères utiles, prolongement
vers les œuvres, navigation. Le texte conserve une largeur de lecture perceptivement
maîtrisée sans qu'une valeur de production soit définie.

### 33.2 Transformations selon la largeur

- **Mobile :** les séquences éditoriales forment une lecture continue, scandée par des
  respirations nettes. Aucun bloc secondaire ne coupe la relation entre l'ouverture et
  la démarche.
- **Tablette :** l'ouverture et les repères peuvent gagner en présence relative tandis
  que le corps conserve une progression stable.
- **Bureau :** la composition peut ménager un dialogue entre ouverture, texte et
  repères, sans fragmenter le propos en panneaux indépendants ni évoquer un tableau de
  bord.

### 33.3 Médias et robustesse

Aucun média nouveau n'est présumé. Si les médias existants ou ultérieurement validés
évoluent, ils accompagnent le propos sans devenir une preuve biographique ni repousser
la démarche hors du premier ensemble lisible. Une variation de longueur du corpus
étend les séquences et leurs respirations sans changer leur ordre conceptuel.

**Traçabilité :** intention sensible de David ; manifeste, sections 5, 8, 11, 12, 13,
14 et 16 ; responsabilité `V-PUB-02`.

## 34. Collections — `V-PUB-03`

### 34.1 Composition conceptuelle

Les ensembles artistiques composent une masse plurielle dominante. Le titre et le
contexte donnent le cadre nécessaire, puis chaque collection associe une identité
perceptible, son intention disponible et son accès existant.

```text
[SHELL DISCRET]

[TITRE ET CONTEXTE — STRUCTURANTS]

[COLLECTION]   [COLLECTION]   […]
 identité       identité
 intention      intention
 accès          accès

       respiration entre ensembles
```

La hiérarchie spatiale recherchée est : diversité des ensembles, identité de chacun,
intention disponible, accès, navigation. Les collections appartiennent au même champ
sans être réduites à des cartes interchangeables.

### 34.2 Transformations selon la largeur

- **Mobile :** les collections se découvrent séquentiellement. Chaque ensemble reste
  complet et distinct avant le suivant.
- **Tablette :** plusieurs ensembles peuvent entrer en relation tout en conservant une
  lecture non ambiguë de leur identité et de leur accès.
- **Bureau :** le champ peut rendre la diversité perceptible plus largement, sans
  uniformiser les ratios ni faire de la densité le sujet principal.

### 34.3 Médias et robustesse

Les aperçus existants conservent leur ratio et ne sont pas recadrés pour fabriquer une
uniformité artificielle. L'ajout, le retrait ou le remplacement futur d'une collection
étend ou contracte le champ sans produire de place vide réservée. Les intentions plus
longues restent secondaires par rapport à l'identité de l'ensemble.

**Traçabilité :** intention sensible des collections ; manifeste, sections 3, 9, 11,
12, 13, 14 et 16 ; responsabilité `V-PUB-03`.

## 35. Collection — `V-PUB-07`

### 35.1 Socle commun

L'ensemble des œuvres forme la masse dominante. L'intention de la collection explique
ce qui les relie lorsqu'elle existe, mais ne devient pas un écran éditorial préalable.
Les contenus associés éventuels restent contextuels et n'introduisent aucune nouvelle
relation.

```text
[SHELL DISCRET]

[IDENTITÉ DE LA COLLECTION]
[CONTEXTE D'ACCOMPAGNEMENT]

       respiration

[ENSEMBLE DES ŒUVRES — DOMINANT]
[CONTEXTES ASSOCIÉS ÉVENTUELS]
```

La hiérarchie spatiale commune est : ensemble des œuvres, intention et contexte,
identité de chaque œuvre, contenus associés éventuels, actions existantes, navigation.

### 35.2 Composition retenue — Champ éditorial à rythme maîtrisé

Les œuvres conservent une cohérence d'ensemble tout en occupant des présences relatives
différenciées selon leurs ratios et leurs relations. Le rythme provient des œuvres ; il
ne constitue ni une mise en scène autonome, ni une signature graphique imposée.

- **Avantages :** respecte davantage la singularité des œuvres et donne un rythme
  propre à la collection.
- **Limites :** la comparaison immédiate peut être moins régulière.
- **Risques :** transformer l'asymétrie en démonstration ou créer une hiérarchie non
  fondée entre les œuvres.
- **Principes servis :** asymétrie maîtrisée, protection des ratios, rythme éditorial,
  primauté des œuvres.

```text
[CONTEXTE]

[    ŒUVRE    ]   [ŒUVRE]

       [ŒUVRE]   [    ŒUVRE    ]
```

La composition préserve la lisibilité et l'accès à chaque œuvre, leurs ratios, l'ordre
sémantique et sa robustesse face à des quantités ou ratios différents. Elle ne peut
devenir le sujet principal de la vue.

**Proposition non retenue :** le champ comparatif stable. Sa régularité favorisait la
comparaison immédiate, mais risquait d'uniformiser la présence des œuvres et de faire
percevoir la collection comme un inventaire.

### 35.3 Transformations selon la largeur

- **Mobile :** les œuvres forment une séquence complète et lisible. Le rythme demeure
  perceptible sans tronquer une œuvre ni perturber l'ordre sémantique.
- **Tablette :** les relations entre œuvres deviennent perceptibles dans une variation
  encore retenue, issue de leurs présences et de leurs ratios.
- **Bureau :** le champ éditorial peut exprimer plus largement son rythme, tout en
  maintenant le contexte dans un rôle d'accompagnement et la composition hors du foyer
  principal.

### 35.4 Médias et robustesse

Chaque œuvre conserve son ratio. La composition n'autorise ni recadrage destructif, ni
taille de production fixe, ni hiérarchie inventée depuis les médias temporaires. Elle
accepte un nombre différent d'œuvres, des ratios hétérogènes, un contexte absent et des
contenus associés absents sans produire de zone vide obligatoire.

**Traçabilité :** intention sensible de la collection et arbitrage Product Owner de
l'Incrément 3 ; manifeste, sections 3, 9, 11, 12, 13, 14, 16 et 17 ; responsabilité
`V-PUB-07` ; arbitrage Product Owner de l'Incrément 4.

## 36. Œuvre — `V-PUB-04`

### 36.1 Socle commun

L'œuvre forme la masse dominante et bénéficie de la respiration la plus protectrice.
Son identité, son contexte, ses caractéristiques et ses relations existantes
l'accompagnent selon leur importance sans rivaliser avec elle.

```text
[SHELL DISCRET]

[ŒUVRE — DOMINANTE]

       respiration protectrice

[IDENTITÉ ET CONTEXTE]
[CARACTÉRISTIQUES]
[RELATIONS ET ACTIONS EXISTANTES]
```

La hiérarchie spatiale commune est : œuvre, titre et collection, description,
caractéristiques, contenu associé éventuel, retour existant, navigation.

### 36.2 Composition retenue — Révélation puis contextualisation

L'œuvre occupe d'abord seule le champ principal ; son identité et son contexte suivent
dans une masse distincte. Cette séquence fixe une hiérarchie d'attention, pas un
empilement spatial littéral.

- **Avantages :** concentration maximale ; séparation très nette entre œuvre et
  interface.
- **Limites :** le contexte immédiat est moins simultané.
- **Risques :** créer une attente ou une distance excessive lorsque le média est peu
  explicite.
- **Principes servis :** contemplation, primauté de l'œuvre, silence, révélation.

```text
[        ŒUVRE        ]

       respiration

[IDENTITÉ ET CONTEXTE]
```

Sur tablette ou bureau, certains éléments peuvent demeurer perceptibles simultanément
si la primauté de l'œuvre reste démontrable. Le contexte ne devient jamais une masse
concurrente.

**Proposition non retenue :** le dialogue protégé entre œuvre et contexte. Sa
simultanéité favorisait l'orientation immédiate, mais réduisait potentiellement la
respiration nécessaire à la première rencontre avec l'œuvre.

### 36.3 Transformations selon la largeur

- **Mobile :** l'œuvre précède son contexte dans un flux unique ; son ratio et sa
  lisibilité restent intacts.
- **Tablette :** une perception simultanée peut apparaître si elle ne réduit pas la
  présence de l'œuvre ; sinon, la révélation séquentielle demeure.
- **Bureau :** deux temps d'attention restent perceptibles. Une présence simultanée du
  contexte ne peut effacer la séquence œuvre, respiration, identité et contexte.

### 36.4 Médias et robustesse

Le média est présenté dans son intégrité, sans recadrage destructif ni décor qui en
modifie la lecture. La composition accepte des ratios portrait, paysage ou plus
atypiques, une description plus longue et l'absence de contenu associé. La quantité de
texte ne peut réduire l'œuvre à une illustration du contexte.

**Traçabilité :** intention sensible de l'œuvre ; manifeste, sections 2, 3, 9, 11, 12,
13, 14, 16 et 17 ; responsabilité `V-PUB-04` ; arbitrage Product Owner de l'Incrément
4.

## 37. Contenu artistique — `V-PUB-05`

### 37.1 Composition conceptuelle

Le propos principal et l'identité du contenu forment la masse structurante. Le corps
éditorial établit le rythme de lecture ; le média éventuel et les œuvres associées
prolongent le sens sans être confondus avec une galerie autonome.

```text
[SHELL DISCRET]

[IDENTITÉ ET PROPOS PRINCIPAL]
[CONTEXTE]

[CORPS ÉDITORIAL — STRUCTURANT]

       respirations de lecture

[MÉDIA ÉVENTUEL]
[ŒUVRES ASSOCIÉES]
```

La hiérarchie spatiale recherchée est : propos, contexte, corps, média éventuel, œuvres
associées, actions existantes, navigation.

### 37.2 Transformations selon la largeur

- **Mobile :** contexte, lecture, média éventuel et relations se succèdent clairement ;
  les œuvres associées ne fragmentent pas le corps du texte.
- **Tablette :** le contexte peut accompagner plus étroitement l'ouverture, tandis que
  le corps conserve une continuité éditoriale.
- **Bureau :** la lecture peut dialoguer avec une masse contextuelle ou médiatique
  secondaire, sans perdre son axe ni devenir une juxtaposition de panneaux.

### 37.3 Médias et robustesse

Le média optionnel n'occupe aucune place réservée lorsqu'il est absent. Son ratio est
préservé. Une variation de longueur du corps étend le rythme de lecture ; une variation
du nombre d'œuvres associées étend la relation finale sans modifier la responsabilité
du contenu.

**Traçabilité :** intention sensible du contenu artistique ; manifeste, sections 3, 8,
11, 12, 13, 14 et 16 ; responsabilité `V-PUB-05`.

## 38. Évolution dans le temps — `V-PUB-06`

### 38.1 Composition conceptuelle

La progression temporelle forme la structure dominante. Les repères datés constituent
une séquence ordonnée ; leurs résumés et ressources donnent du contexte sans convertir
la vue en frise décorative ni imposer un récit causal.

```text
[SHELL DISCRET]

[INTRODUCTION]

[REPÈRE TEMPOREL]
  [RÉSUMÉ]
  [RESSOURCES EXISTANTES]

       respiration de progression

[REPÈRE TEMPOREL]
  [RÉSUMÉ]
  [RESSOURCES EXISTANTES]
```

La hiérarchie spatiale recherchée est : progression, année et période éventuelle,
repère, résumé, ressources liées, navigation.

### 38.2 Transformations selon la largeur

- **Mobile :** la séquence reste strictement lisible dans son ordre ; résumé et
  ressources restent attachés au bon repère.
- **Tablette :** l'intervalle entre les repères peut rendre la progression plus
  perceptible, sans créer un axe graphique autonome.
- **Bureau :** dates, propos et ressources peuvent entretenir une relation spatiale plus
  ample, mais l'ordre ancien vers récent demeure la source de compréhension.

### 38.3 Médias et robustesse

Aucun média nouveau n'est introduit. Les liens vers œuvres et contenus restent des
ressources d'accompagnement. Un nombre différent de repères, une période absente, un
résumé plus long ou un repère sans ressource étendent ou réduisent la séquence sans
laisser de groupe vide ni rompre l'ordre.

**Traçabilité :** intention sensible de l'évolution dans le temps ; manifeste, sections
3, 8, 11, 12, 13, 14 et 16 ; responsabilité `V-PUB-06`.

## 39. Shell public

### 39.1 Composition conceptuelle

Le shell encadre toutes les vues par une présence stable et discrète. L'identité, la
navigation, le skip link et le footer restent disponibles sans constituer une masse
équivalente au contenu propre à la page.

```text
[SKIP LINK DISPONIBLE]
[IDENTITÉ + NAVIGATION — DISCRÈTES]

[CONTENU PROPRE À LA VUE — DOMINANT]

[FOOTER — FIN DE PARCOURS DISCRÈTE]
```

La hiérarchie spatiale recherchée est : contenu de la vue, identité AZUREUM,
localisation et destinations existantes, utilitaires d'accessibilité, footer.

### 39.2 Transformations selon la largeur

- **Mobile :** l'identité et les destinations existantes restent accessibles dans une
  présence contenue. Leur transformation ne peut masquer le contenu ni créer de
  destination nouvelle.
- **Tablette :** le shell conserve une relation stable avec des compositions plus
  ouvertes, sans devenir une colonne ou un panneau dominant.
- **Bureau :** l'identité et la navigation peuvent être perçues simultanément avec le
  contenu, mais restent une infrastructure visuelle secondaire.

### 39.3 Médias et robustesse

Le shell ne porte aucun média artistique propre. Il doit encadrer des vues de densité,
de longueur et de ratios différents sans changer leur premier foyer d'attention. Une
variation de libellé ne doit pas transformer la navigation en masse dominante.

**Traçabilité :** intention sensible du shell ; manifeste, sections 7, 10, 11, 12, 15,
16 et 17 ; responsabilité canonique du shell public.

## 40. Matrice des compositions conceptuelles

| Responsabilité | Masse dominante ou structurante | Contexte et texte | Actions et navigation | Respiration | Composition retenue |
| --- | --- | --- | --- | --- | --- |
| Accueil — `V-PUB-01` | Univers artistique | Identité et promesse soutiennent la compréhension | Accès aux collections, puis shell | Ample entre entrée et exploration | Entrée artistique puis exploration |
| David — `V-PUB-02` | Propos consacré à David et à sa démarche | Séquences éditoriales et repères utiles | Accès aux collections, puis shell | Élevée, au service de la lecture | Progression éditoriale |
| Collections — `V-PUB-03` | Champ pluriel des ensembles | Identité et intention de chaque collection | Accès à chaque collection, puis shell | Entre ensembles, sans uniformité | Champ pluriel distinct |
| Collection — `V-PUB-07` | Ensemble des œuvres | Intention, contexte et contenus éventuels accompagnent | Accès aux œuvres, puis shell | Protège l'ensemble et chaque œuvre | Champ éditorial à rythme maîtrisé |
| Œuvre — `V-PUB-04` | Œuvre individuelle | Identité, contexte, caractéristiques et relations accompagnent | Retour et liens existants, puis shell | La plus protectrice | Révélation puis contextualisation |
| Contenu — `V-PUB-05` | Propos et corps éditorial | Contexte, média éventuel et œuvres associées | Liens existants, puis shell | Scande la lecture | Continuité éditoriale |
| Évolution — `V-PUB-06` | Progression temporelle | Repères, résumés et ressources | Liens existants, puis shell | Rend la progression perceptible | Séquence temporelle ordonnée |
| Shell public | Contenu propre à la vue | Identité et localisation accompagnent | Destinations existantes et skip link | Sépare infrastructure et contenu | Encadrement stable et discret |

## 41. Matrice des transformations responsive conceptuelles

| Responsabilité | Mobile | Tablette | Bureau | Invariant |
| --- | --- | --- | --- | --- |
| Accueil | Flux unique, univers en premier | Seuil commun puis champ plus ouvert | Univers et exploration perceptibles sans concurrence | Univers artistique premier |
| David | Lecture continue scandée | Ouverture et repères plus présents | Dialogue éditorial sans panneaux indépendants | Démarche structurante |
| Collections | Ensembles complets successifs | Relations entre plusieurs ensembles | Diversité plus largement perceptible | Identité distincte de chaque ensemble |
| Collection | Œuvres successives et intactes | Rythme retenu issu des relations entre œuvres | Champ éditorial plus ample sans mise en scène autonome | Ensemble des œuvres dominant |
| Œuvre | Œuvre puis contexte | Simultanéité seulement si l'œuvre reste dominante | Deux temps d'attention, même en présence simultanée | Ratio et primauté de l'œuvre |
| Contenu | Lecture et relations successives | Contexte rapproché de l'ouverture | Dialogue avec une masse secondaire | Continuité du propos |
| Évolution | Séquence ordonnée | Progression plus espacée | Relation ample entre dates, propos et ressources | Ordre chronologique |
| Shell public | Présence contenue et accessible | Encadrement stable | Infrastructure secondaire simultanément disponible | Contenu de la vue prioritaire |

Ces transformations ne définissent aucun breakpoint, aucune valeur, aucune grille et
aucun comportement technique. Une largeur différente ne produit pas une version
diminuée de l'expérience.

## 42. Wireframes conceptuels produits

L'Incrément 4 produit uniquement les schémas textuels intégrés au présent document :

1. une légende commune de lecture ;
2. un schéma conceptuel pour l'accueil ;
3. un schéma conceptuel pour David ;
4. un schéma conceptuel pour les collections ;
5. un socle, la composition retenue et la trace de la proposition non retenue pour la
   collection ;
6. un socle, la composition retenue et la trace de la proposition non retenue pour
   l'œuvre ;
7. un schéma conceptuel pour le contenu artistique ;
8. un schéma conceptuel pour l'évolution dans le temps ;
9. un schéma conceptuel pour le shell public.

Aucun fichier visuel séparé ni aucune capture n'est nécessaire : les schémas textuels
suffisent à exposer les zones, les rapports de masses et les relations spatiales sans
induire une maquette de production.

## 43. Arbitrages Product Owner de l'Incrément 4

### 43.1 Collection — `V-PUB-07`

**Décision :** le champ éditorial à rythme maîtrisé est retenu. Son rythme provient des
œuvres et de leurs relations, protège leur lisibilité, leurs ratios, leur accès et
l'ordre sémantique. Il reste un moyen au service de la collection, sans devenir une
signature graphique ni une mise en scène autonome.

### 43.2 Œuvre — `V-PUB-04`

**Décision :** la révélation puis contextualisation est retenue. La séquence d'attention
est : œuvre, respiration, identité et contexte, relations et actions existantes. Elle
n'impose pas un empilement spatial littéral ; une présence simultanée reste possible si
la primauté perceptive de l'œuvre est démontrable.

### 43.3 Progression conceptuelle préservée

```text
Accueil
→ entrée dans l'univers artistique

Collections
→ perception et exploration de la diversité des ensembles

Collection
→ rencontre avec les œuvres comme ensemble cohérent

Œuvre
→ concentration sur une œuvre individuelle
```

Le rythme de la collection organise la pluralité des œuvres ; la révélation de la fiche
œuvre réduit cette pluralité pour concentrer l'attention sur une œuvre particulière.
Cette relation d'attention ne crée ni navigation, ni parcours, ni composition de
production.

Aucun arbitrage ne reste ouvert dans l'Incrément 4. Pour les six autres responsabilités,
les intentions validées, le manifeste et les contraintes de robustesse donnent une
direction suffisamment explicite.

## 44. Besoins éventuels du Design System

Aucun besoin d'évolution du Design System n'est démontré à ce stade conceptuel. Les
compositions décrivent des relations d'expérience que les fondations existantes
devront d'abord être évaluées à matérialiser lors d'un futur Sprint autorisé.

Deux points restent à observer ultérieurement sans constituer une demande :

- la capacité des fondations existantes à préserver des ratios hétérogènes dans un
  champ d'œuvres comparatif ou éditorial ;
- la capacité des fondations existantes à maintenir une hiérarchie nettement
  asymétrique entre une œuvre et son contexte sur plusieurs largeurs.

Si une évolution devient nécessaire, elle devra être instruite séparément par la
gouvernance du Design System. L'Incrément 4 ne crée ni token, ni composant, ni état, ni
variante.

## 45. Robustesse transversale

Les huit compositions doivent conserver leur hiérarchie lorsque :

- un texte devient plus court ou plus long ;
- une liste contient davantage ou moins d'éléments ;
- un média change de ratio ;
- un média ou un groupe facultatif est absent ;
- les contenus temporaires sont remplacés par des contenus validés ;
- la largeur modifie les relations spatiales disponibles.

La robustesse n'autorise ni troncature destructrice, ni place vide obligatoire, ni
ordre visuel contraire à l'ordre de lecture, ni contenu inventé pour remplir une zone.

## 46. Éléments explicitement différés après l'Incrément 4

L'Incrément 4 ne définit pas :

- les mouvements, transitions ou continuités animées ;
- les déclencheurs ou comportements d'interaction ;
- les technologies ou contraintes d'implémentation ;
- les dimensions, breakpoints, valeurs ou grilles de production ;
- les composants, tokens, états ou variantes du Design System ;
- les nouveaux médias ou contenus ;
- le découpage des futurs Sprints d'implémentation.

Les deux arbitrages de composition sont validés et verrouillés. Ils ne deviennent pas
pour autant des instructions d'implémentation.

## 47. Cadre de conception de l'Incrément 5

La continuité repose d'abord sur la stabilité du shell, la permanence des identités,
les relations éditoriales existantes, les compositions et les variations de densité.
Le mouvement n'intervient que s'il remplit une fonction démontrable que ces fondations
ne rendent pas déjà suffisamment perceptible.

Un mouvement éventuel ne peut servir qu'à :

- clarifier une relation ;
- orienter sans imposer un parcours ;
- confirmer un changement déjà compréhensible ;
- maintenir une continuité entre deux états ou vues existants ;
- accompagner la contemplation sans la déclencher ni la retarder.

L'immobilité est la décision correcte lorsque la composition, la hiérarchie et le
rythme suffisent. Aucun contenu, ordre de lecture, repère, action ou relation ne dépend
du mouvement.

L'expérience équivalente sans mouvement conserve toujours :

- le même sujet principal ;
- le même ordre sémantique ;
- les mêmes informations et actions ;
- la même localisation ;
- les mêmes relations entre ressources ;
- une confirmation perceptible des changements.

Le présent incrément ne définit ni animation, ni déclencheur, ni paramètre de
production.

## 48. Accueil — `V-PUB-01`

### 48.1 Stabilité et progression

L'univers artistique reste immédiatement présent et constitue le foyer stable. La
promesse d'AZUREUM, les accès aux collections et le shell conservent leur rôle et leur
ordre d'attention. La progression peut accompagner le passage de l'entrée artistique à
l'exploration des ensembles, sans retarder leur disponibilité.

### 48.2 Mouvement et immobilité

Un mouvement n'est recevable que s'il rend plus lisible la relation entre le foyer
artistique et les collections déjà accessibles. Sa finalité serait la continuité ou
l'orientation. Il est inutile lorsque la composition rend déjà cette relation
évidente.

Le média principal, les textes nécessaires à la compréhension, les accès et la
navigation ne doivent pas dépendre d'une révélation. Une entrée spectaculaire, une
attente artificielle ou une chorégraphie imposée contredirait la fonction des dix
premières secondes.

Sans mouvement, les rapports de masses, la proximité éditoriale et l'ordre de lecture
assurent intégralement l'entrée dans l'univers puis l'accès aux collections.

**Traçabilité :** composition de l'accueil ; manifeste, sections 4, 8, 16, 17, 18.1,
20, 21 et 23 ; responsabilité `V-PUB-01`.

## 49. David et sa démarche — `V-PUB-02`

### 49.1 Stabilité et progression

L'ouverture, le corps éditorial, les repères et l'accès aux collections restent une
progression de lecture stable. La continuité naît d'abord de la typographie, des
respirations et du rapprochement progressif entre David, sa démarche et les œuvres.

### 49.2 Mouvement et immobilité

Aucun mouvement n'est nécessaire à la lecture. Un accompagnement éventuel ne serait
recevable que s'il aide à identifier le passage entre deux séquences éditoriales sans
fragmenter le propos. Sa finalité serait l'orientation.

Le texte, les repères et les actions existantes restent immobiles lorsqu'un mouvement
risquerait d'interrompre la lecture, de produire une attente ou de transformer la page
en récit imposé. Aucun média ne peut être animé pour compenser son absence ou son
caractère provisoire.

Sans mouvement, la progression des titres, des paragraphes et des respirations conserve
la proximité progressive recherchée.

**Traçabilité :** composition de David ; manifeste, sections 4, 5, 7, 16, 17, 18.2, 20
et 23 ; responsabilité `V-PUB-02`.

## 50. Collections — `V-PUB-03`

### 50.1 Stabilité et progression

La diversité des ensembles, leur identité et leur accès restent simultanément
compréhensibles. La continuité avec l'accueil repose sur la reprise des collections et
de leur univers, non sur la reproduction de sa composition.

### 50.2 Mouvement et immobilité

Une réponse de mouvement peut uniquement confirmer qu'un ensemble existant devient le
foyer d'une interaction ou accompagner l'orientation vers son accès. Elle ne doit ni
hiérarchiser arbitrairement les collections, ni faire apparaître leur diversité par une
séquence imposée.

Les aperçus et leurs identités restent perceptibles sans mouvement. Un mouvement
répétitif appliqué à chaque ensemble, une cascade décorative ou une réaction qui attire
plus que les œuvres doit rester absent.

Sans mouvement, la distinction des ensembles, leurs rapports de masses et les états
interactifs canoniques assurent la compréhension et la confirmation.

**Traçabilité :** composition des collections ; manifeste, sections 4, 9, 16, 17,
18.3, 20, 21 et 23 ; responsabilité `V-PUB-03`.

## 51. Collection — `V-PUB-07`

### 51.1 Stabilité et progression

Le champ éditorial à rythme maîtrisé reste fondé sur les œuvres, leurs ratios et leurs
relations. La continuité depuis les collections reprend l'identité de l'ensemble et son
contexte ; la continuité vers une œuvre particulière réduit progressivement la
pluralité sans modifier les accès existants.

### 51.2 Mouvement et immobilité

Un mouvement peut être envisagé uniquement s'il aide à maintenir la relation perceptive
entre une œuvre choisie dans l'ensemble et sa fiche. Sa finalité serait la continuité et
l'orientation. Il ne peut réordonner les œuvres, créer leur rythme, masquer un
chargement ou imposer la sélection d'une œuvre.

Le champ des œuvres reste stable pendant la consultation. Son rythme provient de la
composition et non d'une animation. Les ratios, les identités et les accès ne dépendent
jamais d'un mouvement.

Sans mouvement, la reprise du même média, de son identité et du contexte de collection
assure la relation avec la fiche œuvre. Cette continuité statique constitue le socle,
qu'un mouvement éventuel ne ferait que renforcer.

**Traçabilité :** composition retenue de la collection ; manifeste, sections 4, 10,
14, 16, 17, 18.4, 20, 21 et 23 ; responsabilité `V-PUB-07`.

## 52. Œuvre — `V-PUB-04`

### 52.1 Stabilité et progression

La séquence d'attention reste : œuvre, respiration, identité et contexte, relations et
actions existantes. La continuité depuis la collection peut conserver l'identité de
l'œuvre et son appartenance, mais la fiche réduit la pluralité pour protéger la
contemplation individuelle.

### 52.2 Mouvement et immobilité

Le mouvement n'est pas nécessaire à la révélation. Un accompagnement éventuel n'est
recevable que s'il confirme la continuité avec l'œuvre précédemment choisie, sans
retarder sa présence complète. Sa finalité serait la continuité ou l'accompagnement de
la contemplation.

L'œuvre elle-même reste immobile lorsque son animation, son déplacement ou sa révélation
progressive ferait de l'interface le sujet. Le contexte ne doit pas entrer en scène de
façon concurrente. Les informations et actions restent disponibles indépendamment de
tout mouvement.

Sans mouvement, la reprise du média, la respiration protectrice et la hiérarchie
œuvre-contexte réalisent entièrement la révélation puis contextualisation.

**Traçabilité :** composition retenue de l'œuvre ; manifeste, sections 4, 14, 15, 16,
17, 18.5, 20, 21 et 23 ; responsabilité `V-PUB-04`.

## 53. Contenu artistique — `V-PUB-05`

### 53.1 Stabilité et progression

L'identité du contenu, son propos, son corps éditorial, le média éventuel et les œuvres
associées conservent une progression de lecture stable. La continuité avec les œuvres
repose sur les relations éditoriales explicites et les ressources déjà liées.

### 53.2 Mouvement et immobilité

Aucun mouvement n'est nécessaire au corps éditorial. Un accompagnement éventuel ne
serait recevable que pour clarifier le passage entre le propos et une ressource associée
sans interrompre la lecture. Sa finalité serait la compréhension ou la continuité.

Le texte, les médias et les relations restent immobiles lorsque leur mouvement créerait
une distraction, une attente ou une hiérarchie étrangère au contenu. Un média
facultatif n'acquiert pas une importance supérieure par son mouvement.

Sans mouvement, les titres, les respirations, les reprises d'identité et les liens
explicites conservent intégralement le sens et la relation avec les œuvres.

**Traçabilité :** composition du contenu artistique ; manifeste, sections 4, 7, 16,
17, 18.6, 20, 21 et 23 ; responsabilité `V-PUB-05`.

## 54. Évolution dans le temps — `V-PUB-06`

### 54.1 Stabilité et progression

L'ordre ancien vers récent, les repères, leurs résumés et leurs ressources restent la
source stable de la progression. La continuité temporelle repose sur leur séquence et
leur espacement, sans transformer la vue en récit imposé.

### 54.2 Mouvement et immobilité

Un mouvement ne serait recevable que s'il aide à confirmer le passage d'un repère au
suivant ou à maintenir l'association entre un repère et ses ressources. Sa finalité
serait l'orientation ou la compréhension. Il ne peut simuler le passage du temps,
fabriquer une causalité ou animer la chronologie comme un dispositif décoratif.

Les années, périodes, résumés et liens restent immédiatement lisibles. Une apparition
successive obligatoire, un défilement contraint ou une progression spectaculaire doit
rester absent.

Sans mouvement, l'ordre sémantique, les respirations et le rattachement explicite des
ressources rendent entièrement la progression perceptible.

**Traçabilité :** composition de l'évolution dans le temps ; manifeste, sections 4,
12, 16, 17, 18.7, 20, 21 et 23 ; responsabilité `V-PUB-06`.

## 55. Shell public

### 55.1 Stabilité et progression

L'identité AZUREUM, les destinations existantes, la localisation, le skip link et le
footer constituent l'infrastructure stable entre les vues. Le shell ne reproduit pas
la personnalité de chaque composition ; il leur offre un cadre continu et discret.

### 55.2 Mouvement et immobilité

Un mouvement peut uniquement confirmer un changement d'état déjà compréhensible ou
accompagner la modification de présence de la navigation selon la largeur. Sa finalité
serait la confirmation ou l'orientation. Il ne peut masquer une destination, retarder
le contenu ou devenir une signature plus forte que les vues.

L'identité, la localisation, les destinations, le focus et le skip link restent
fonctionnels et perceptibles sans mouvement. Les changements de page ne nécessitent
aucune transition animée pour être compris.

Sans mouvement, la stabilité des emplacements conceptuels, les libellés, les états
canoniques et la hiérarchie du shell assurent toute la continuité nécessaire.

**Traçabilité :** composition du shell ; manifeste, sections 4, 7, 16, 17, 18.8, 20,
21 et 23 ; responsabilité canonique du shell public.

## 56. Matrice mouvement et immobilité

| Responsabilité | Stable | Progression possible | Mouvement éventuellement recevable | Finalité admissible | Doit rester immobile ou complet sans mouvement |
| --- | --- | --- | --- | --- | --- |
| Accueil — `V-PUB-01` | Univers, promesse, accès, shell | Entrée artistique vers exploration | Relation entre foyer artistique et collections | Orientation, continuité | Média, compréhension, accès et navigation |
| David — `V-PUB-02` | Ouverture, lecture, repères, accès | Proximité progressive avec David et les œuvres | Passage entre séquences si nécessaire | Orientation | Texte, repères, actions et sens du propos |
| Collections — `V-PUB-03` | Identités, diversité, accès | D'un ensemble perçu à un ensemble consulté | Confirmation d'un foyer interactif | Confirmation, orientation | Aperçus, identités et diversité complète |
| Collection — `V-PUB-07` | Champ, ratios, ordre, accès | Pluralité vers œuvre choisie | Maintien de la relation collection-œuvre | Continuité, orientation | Rythme du champ, œuvres et accès |
| Œuvre — `V-PUB-04` | Œuvre, respiration, contexte, actions | Concentration puis contextualisation | Confirmation de l'œuvre précédemment choisie | Continuité, contemplation | Présence complète de l'œuvre et informations |
| Contenu — `V-PUB-05` | Propos, corps, média éventuel, relations | Lecture vers ressources associées | Clarification d'une relation explicite | Compréhension, continuité | Corps éditorial, médias et liens |
| Évolution — `V-PUB-06` | Ordre, repères, résumés, ressources | D'un repère au suivant | Confirmation d'une association temporelle | Orientation, compréhension | Chronologie complète et liens |
| Shell public | Identité, destinations, localisation, accessibilité | Continuité entre vues | Confirmation d'un changement d'état | Confirmation, orientation | Navigation, focus, skip link et contenu |

La colonne « mouvement éventuellement recevable » n'autorise aucune animation. Elle
identifie seulement les situations dans lesquelles une proposition future pourrait
être évaluée. L'absence de proposition laisse l'expérience complète.

## 57. Principes de continuité entre les vues

### 57.1 Socle commun

La continuité est d'abord portée par :

- le shell stable ;
- les titres, identités et médias déjà associés aux ressources ;
- les relations éditoriales et destinations existantes ;
- la conservation du sujet principal lors d'un changement de contexte ;
- les variations maîtrisées de densité et de respiration ;
- la permanence des ordres de lecture et des actions.

Elle ne dépend jamais d'une transition animée.

### 57.2 Accueil, collections, collection et œuvre

```text
Accueil
→ univers artistique et possibilité d'explorer

Collections
→ diversité des ensembles et identité de chacun

Collection
→ pluralité rythmée d'œuvres reliées

Œuvre
→ concentration puis contextualisation individuelle
```

La progression passe d'une ouverture large à une concentration précise. Les reprises
d'identité, de contexte et de média peuvent rendre cette relation perceptible. Elles ne
créent ni ordre obligatoire de consultation, ni retour automatique, ni destination
nouvelle.

### 57.3 David et les œuvres

La page David établit la démarche et la proximité ; les collections et les œuvres en
montrent les expressions sans prétendre illustrer mécaniquement chaque passage du
texte. La continuité repose sur le ton éditorial, les accès existants et la cohérence de
présentation.

### 57.4 Contenus artistiques et œuvres

Les contenus et les œuvres restent reliés par leurs associations explicites. Une reprise
de titre, d'identité ou de média peut maintenir le contexte ; aucun mouvement ne peut
inventer une relation ou remplacer son libellé compréhensible.

### 57.5 Évolution dans le temps et ressources

Les repères temporels conduisent vers les œuvres et contenus déjà associés. Leur année,
leur propos et l'identité de la ressource assurent la continuité. La consultation reste
libre et ne devient pas une histoire imposée.

## 58. Expérience avec mouvement réduit ou supprimé

La réduction ou la suppression du mouvement ne constitue pas une version diminuée. Sur
les huit responsabilités et entre toutes les vues :

- les contenus sont présents sans attente ;
- l'ordre de lecture est inchangé ;
- les actions et destinations restent disponibles ;
- les états sont confirmés par des signes persistants ;
- le contexte est maintenu par les identités, titres, médias et relations explicites ;
- le rythme résulte des compositions et des respirations ;
- aucun espace vide ne dépend de la fin d'un mouvement.

Le respect de `prefers-reduced-motion` est ici un principe d'équivalence complète. Le
présent document ne prescrit aucun mécanisme technique permettant de l'obtenir.

## 59. Risques et critères de rejet propres au mouvement

Une proposition future de mouvement est rejetée si elle :

- retarde l'accès à une œuvre, un texte, une action ou une destination ;
- modifie l'ordre de lecture ou la compréhension lorsqu'elle est supprimée ;
- détourne l'attention du sujet principal ;
- crée le rythme à la place de la composition ;
- produit une répétition, une cascade ou une chorégraphie sans fonction ;
- simule une relation fonctionnelle ou temporelle inexistante ;
- masque une instabilité, un chargement ou une faiblesse de hiérarchie ;
- impose un ordre ou une vitesse de consultation ;
- dépend d'un média provisoire ;
- transforme la technologie ou l'interface en démonstration.

La qualité esthétique d'un mouvement ne suffit jamais à le justifier.

## 60. Arbitrages Product Owner de l'Incrément 5

Aucun arbitrage Product Owner n'est ouvert à ce stade. Les principes canoniques donnent
une réponse commune : continuité statique complète, immobilité par défaut et mouvement
éventuel uniquement après démonstration d'une fonction.

Les situations éventuellement recevables de la matrice ne constituent ni des options
retenues, ni une liste d'animations futures, ni une priorité d'implémentation.

## 61. Besoins éventuels du Design System

Aucun besoin d'évolution du Design System n'est démontré par l'Incrément 5. Les états,
le focus, la navigation et les principes de réduction du mouvement restent sous la
responsabilité des fondations canoniques existantes.

Une future proposition qui ne pourrait être exprimée avec ces fondations devrait
signaler séparément son besoin et suivre la gouvernance du Design System. Le présent
incrément ne crée ni composant, ni état, ni variante, ni règle de mouvement.

Les deux capacités à observer signalées à l'Incrément 4 restent inchangées et ne
deviennent pas des besoins validés.

## 62. Éléments explicitement différés après l'Incrément 5

L'Incrément 5 ne définit pas :

- les animations ou transitions à réaliser ;
- les paramètres, déclencheurs ou comportements de production ;
- les technologies ou bibliothèques ;
- les évolutions du Design System ;
- les prototypes ;
- les priorités ou lots d'implémentation ;
- le découpage des futurs Sprints.

Les principes de mouvement et de continuité sont validés et verrouillés. Ils ne
constituent aucune autorisation d'implémenter un mouvement.

## 63. Cadre de consolidation de l'Incrément 6

La présente consolidation ne crée aucune conception. Elle réunit les constats,
intentions, compositions et principes validés afin d'expliciter leur cohérence, leur
statut et leur traçabilité.

Les sections précédentes conservent la chronologie documentaire du Sprint. Ainsi, un
sujet indiqué comme différé à la fin d'un incrément peut avoir été traité dans un
incrément ultérieur. Le registre ci-dessous établit son statut actuel sans réécrire cet
historique.

Les statuts consolidés sont :

- **validé** : décision acceptée par le Product Owner et verrouillée dans un incrément ;
- **non retenu** : proposition comparée puis explicitement rejetée ;
- **ambiguïté héritée** : limite de l'existant qui ne peut être résolue sans autorisation
  distincte ;
- **différé** : sujet volontairement laissé à un incrément ou Sprint ultérieur ;
- **à observer** : capacité à évaluer ultérieurement, sans besoin du Design System
  validé.

## 64. Matrice consolidée des huit responsabilités

| Responsabilité | Base factuelle préservée | Intention et premier foyer validés | Composition et responsive validés | Médias | Mouvement et continuité | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| Accueil — `V-PUB-01` | Introduction, accès aux collections et médias de démonstration existants | Entrer dans l'univers de David ; univers artistique en premier | Entrée artistique puis exploration ; flux unique mobile, champ plus ouvert tablette et bureau | Ratios préservés ; remplacement futur sans inversion de hiérarchie | Relation univers-collections éventuellement accompagnée ; contenu et accès complets sans mouvement | Validé |
| David — `V-PUB-02` | Corpus éditorial de travail et accès aux collections existants | Favoriser une proximité progressive ; David et sa démarche en premier | Progression éditoriale ; lecture continue mobile, dialogue plus ouvert sur les grandes largeurs | Aucun média nouveau présumé ; tout média reste subordonné au propos | Orientation entre séquences seulement si utile ; lecture intégralement immobile | Validé |
| Collections — `V-PUB-03` | Ensembles, intentions, aperçus et accès existants | Faire percevoir la diversité ; identité des ensembles en premier | Champ pluriel distinct ; séquentiel mobile, relations plus larges ensuite | Ratios hétérogènes protégés ; aucune uniformité par recadrage | Confirmation éventuelle d'un foyer interactif ; diversité immédiatement présente | Validé |
| Collection — `V-PUB-07` | Intention et œuvres existantes ; contenu de collection non observable | Relier les œuvres sans les uniformiser ; ensemble des œuvres en premier | Champ éditorial à rythme maîtrisé ; séquence mobile, rythme relationnel plus ample ensuite | Rythme issu des œuvres et de leurs ratios ; aucun recadrage destructif | Continuité éventuelle vers l'œuvre choisie ; champ et accès complets sans mouvement | Validé |
| Œuvre — `V-PUB-04` | Média, identité, caractéristiques, relations et retour existants | Concentrer la contemplation ; œuvre individuelle en premier | Révélation puis contextualisation ; séquentielle mobile, simultanéité possible si subordonnée | Œuvre intégrale, ratio protégé, contexte non concurrent | Confirmation éventuelle de l'œuvre choisie ; œuvre immédiatement complète et immobile | Validé |
| Contenu — `V-PUB-05` | Propos, corps, média et relations conditionnels existants | Approfondir par la lecture ; propos principal en premier | Continuité éditoriale ; lecture séquentielle puis dialogue secondaire possible | Aucun emplacement vide si le média est absent ; ratio préservé | Clarification éventuelle d'une relation ; lecture et liens complets sans mouvement | Validé |
| Évolution — `V-PUB-06` | Trois repères fictifs ordonnés et ressources explicites existants | Rendre la progression perceptible ; ordre temporel en premier | Séquence temporelle ordonnée ; relations spatiales plus amples selon la largeur | Aucun média nouveau ; ressources d'accompagnement uniquement | Orientation éventuelle entre repères ; ordre et associations intégralement statiques | Validé |
| Shell public | Header, navigation, skip link, `main` et footer existants | Maintenir identité et localisation ; contenu de chaque vue en premier | Encadrement stable et discret sur toutes les largeurs | Aucun média artistique propre | Confirmation éventuelle d'un état ; navigation, focus et localisation complets sans mouvement | Validé |

La matrice confirme une grammaire commune sans uniformisation : sujet principal
identifiable, contexte subordonné, actions existantes disponibles, shell discret,
respiration adaptée et ordre sémantique préservé. Les différences de densité et de
composition proviennent de la responsabilité propre à chaque vue.

## 65. Cohérence de la progression conceptuelle

```text
Accueil
→ entrée dans l'univers artistique

Collections
→ perception et exploration de la diversité des ensembles

Collection
→ rencontre avec les œuvres comme ensemble cohérent

Œuvre
→ concentration sur une œuvre individuelle
```

Cette progression passe d'une ouverture large à une attention concentrée. Elle est
cohérente avec :

- l'univers artistique premier sur l'accueil ;
- la pluralité perceptible des collections ;
- le rythme relationnel du champ d'œuvres de la collection ;
- la révélation puis contextualisation d'une œuvre individuelle.

Elle décrit une relation d'attention. Elle ne crée ni route, ni navigation, ni ordre
obligatoire, ni stratégie d'implémentation.

Les autres responsabilités s'y articulent sans être insérées dans un parcours imposé :
David apporte la démarche, les contenus approfondissent le contexte, l'évolution rend
le temps perceptible et le shell maintient une continuité discrète.

## 66. Registre consolidé des décisions Product Owner

| Incrément | Domaine | Décision validée | Conséquence actuelle |
| --- | --- | --- | --- |
| 2 | Méthode d'audit | Distinguer faits, conformités, forces, limites, risques et interprétations | Les constats ne deviennent ni défauts ni recommandations |
| 2 | Périmètre | Auditer les sept responsabilités `V-PUB` et le shell | Les huit responsabilités constituent le périmètre consolidé |
| 2 | Preuves | Ne produire aucune capture lorsqu'elle n'apporte pas de preuve utile | L'audit repose sur le dépôt, les tests et les références |
| 2 | Ambiguïtés | Transmettre les ambiguïtés sans autoriser leur résolution | Elles restent séparées dans le registre actuel |
| 3 | Intentions | Valider l'intention sensible et la hiérarchie d'attention des huit responsabilités | Chaque vue possède une contribution propre sans modification fonctionnelle |
| 3 | Accueil | L'univers artistique constitue le premier foyer d'attention | L'identité et la promesse soutiennent l'entrée sans devenir le sujet |
| 3 | Collection | L'ensemble des œuvres constitue le premier foyer d'attention | Le contexte ne devient pas un écran préalable |
| 3 | Progression | Valider la relation Accueil → Collections → Collection → Œuvre | Cette relation reste conceptuelle et non fonctionnelle |
| 4 | Compositions | Valider les huit compositions et leurs transformations mobile, tablette et bureau | Les hiérarchies restent complètes sur toutes les largeurs |
| 4 | Médias | Protéger ratios, lisibilité et remplacement futur des médias | Aucun recadrage destructif ni média nouveau n'est autorisé |
| 4 | Collection | Retenir le champ éditorial à rythme maîtrisé | Le rythme provient des œuvres et ne devient pas une mise en scène autonome |
| 4 | Œuvre | Retenir la révélation puis contextualisation | L'œuvre précède perceptivement le contexte sans imposer un empilement littéral |
| 4 | Design System | Garder deux capacités comme points à observer seulement | Aucun besoin, token, composant, état ou variante n'est validé |
| 5 | Mouvement | Le mouvement est facultatif et exige une fonction démontrable | L'immobilité est correcte lorsque la composition suffit |
| 5 | Équivalence | Préserver une expérience complète lorsque le mouvement est réduit ou supprimé | Sens, ordre, actions, contexte et continuité ne dépendent jamais du mouvement |
| 5 | Continuité | Utiliser uniquement les relations et destinations existantes | Aucun parcours, ordre de consultation ou lien nouveau n'est créé |
| 5 | Design System | Ne valider aucun besoin supplémentaire | Les capacités à observer de l'Incrément 4 restent inchangées |

Aucune de ces décisions n'est contredite par une section ultérieure du document.

## 67. Propositions non retenues

Deux propositions ont été comparées puis non retenues :

1. **Collection — champ comparatif stable.** Sa régularité facilitait la comparaison,
   mais pouvait uniformiser les œuvres et rapprocher la collection d'un inventaire.
2. **Œuvre — dialogue protégé entre œuvre et contexte.** Sa simultanéité facilitait
   l'orientation immédiate, mais pouvait réduire la respiration de la première rencontre
   avec l'œuvre.

Elles sont conservées uniquement pour la traçabilité des arbitrages. Elles ne sont ni
des variantes ouvertes, ni des solutions de repli, ni des autorisations futures.

## 68. Ambiguïtés héritées non résolues

### 68.1 Contenus au niveau de la collection

`V-PUB-07` prévoit la contextualisation éventuelle d'une collection par des contenus,
mais l'existant audité n'en rend aucun directement. La conception accepte leur présence
ou leur absence sans créer de contenu, de relation ni d'obligation nouvelle.

### 68.2 Localisation dans les routes imbriquées

Le shell audité ne marque pas `Collections` comme actif sur les routes de collection et
d'œuvre. La conception exige une localisation compréhensible mais n'autorise aucune
modification de ce comportement.

### 68.3 Contenus et médias de démonstration

Les longueurs, quantités, ratios et intensités observés ne constituent pas des références
définitives. Les compositions sont conçues pour leur remplacement sans inventer les
contenus futurs.

### 68.4 Réception réelle par les visiteurs

L'audit du dépôt ne mesure aucune réaction utilisateur. Les intentions sensibles
décrivent une contribution recherchée et non une émotion garantie.

Ces ambiguïtés ne constituent ni des non-conformités démontrées, ni un périmètre de
correction autorisé par le Sprint 018.

## 69. Décisions actuellement différées

Restent volontairement hors de la conception consolidée :

- les valeurs, dimensions, grilles, breakpoints et comportements de production ;
- les composants, tokens, états, variantes et APIs ;
- les technologies et modalités d'implémentation ;
- les animations, transitions, déclencheurs et paramètres de production ;
- les prototypes et maquettes finales directement implémentables ;
- les contenus et médias définitifs non encore validés ;
- toute nouvelle route, action, destination ou relation fonctionnelle ;
- toute évolution du Design System ;
- la cartographie des dépendances d'implémentation ;
- le regroupement, l'ordre et le découpage des futurs Sprints.

Les quatre derniers sujets relevant de la stratégie ou d'une évolution canonique ne
peuvent être déduits de la présente consolidation. Les dépendances et la stratégie
générale seront examinées exclusivement dans l'Incrément 7.

## 70. Capacités du Design System à observer

Aucun besoin d'évolution du Design System n'est validé. Deux capacités seulement
restent à observer lors d'un futur Sprint autorisé :

1. préserver des ratios hétérogènes dans un champ d'œuvres à rythme éditorial ;
2. maintenir une hiérarchie perceptivement asymétrique entre une œuvre dominante et son
   contexte sur plusieurs largeurs.

Ces observations ne présument ni une insuffisance des fondations actuelles, ni une
solution, ni une priorité. Toute évolution éventuelle devra être démontrée et suivre la
gouvernance propre du Design System.

## 71. Matrice consolidée de traçabilité

| Décision consolidée | Responsabilités concernées | Manifeste canonique | Arbitrage Product Owner | Statut |
| --- | --- | --- | --- | --- |
| Sujet principal prioritaire et interface médiatrice | Toutes | Sections 4, 7 et 11 | Intentions des huit responsabilités | Validé |
| Univers artistique premier sur l'accueil | `V-PUB-01` | Sections 8 et 18.1 | Incrément 3 — Accueil | Validé |
| Diversité des ensembles perceptible | `V-PUB-03` | Sections 9, 11 et 18.3 | Intentions de l'Incrément 3 | Validé |
| Ensemble des œuvres premier dans la collection | `V-PUB-07` | Sections 11, 14 et 18.4 | Incrément 3 — Collection | Validé |
| Champ éditorial à rythme maîtrisé | `V-PUB-07` | Sections 10, 12, 14 et 18.4 | Incrément 4 — Collection | Validé |
| Œuvre individuelle première | `V-PUB-04` | Sections 4, 14, 15 et 18.5 | Intention de l'Incrément 3 | Validé |
| Révélation puis contextualisation | `V-PUB-04` | Sections 11, 14 et 15 | Incrément 4 — Œuvre | Validé |
| Lecture et contextualisation prioritaires | `V-PUB-02`, `V-PUB-05` | Sections 5, 7, 12, 18.2 et 18.6 | Intentions de l'Incrément 3 | Validé |
| Temps perceptible sans récit imposé | `V-PUB-06` | Sections 12, 17 et 18.7 | Intention de l'Incrément 3 | Validé |
| Shell stable et discret | Shell public | Sections 7, 17 et 18.8 | Intention de l'Incrément 3 | Validé |
| Transformations responsive complètes | Toutes | Sections 10, 11, 19 et 20 | Validation de l'Incrément 4 | Validé |
| Ratios et lisibilité des œuvres protégés | Vues portant des médias | Sections 14, 15, 19 et 23 | Validation de l'Incrément 4 | Validé |
| Immobilité complète et mouvement fonctionnel seulement | Toutes | Sections 16, 20, 21 et 23 | Validation de l'Incrément 5 | Validé |
| Continuité sans nouveau parcours | Toutes | Section 17 | Validation de l'Incrément 5 | Validé |
| Capacités du Design System seulement observées | Collection, Œuvre | Sections 19, 20 et 24 | Validations des Incréments 4 et 5 | À observer |

Les responsabilités fonctionnelles restent celles des spécifications et contrats
canoniques. Le manifeste fournit les principes d'expérience ; les arbitrages Product
Owner fixent les choix propres au Sprint 018. Aucun niveau ne remplace ni ne réécrit le
précédent.

## 72. Contrôle de cohérence consolidé

La consolidation établit que :

- les huit responsabilités conservent leur fonction et leur contenu existants ;
- leurs intentions, compositions et principes de mouvement partagent une grammaire
  commune sans les uniformiser ;
- les hiérarchies d'attention restent identiques en mobile, tablette et bureau ;
- les médias restent protégés et remplaçables ;
- les deux arbitrages de composition retenus sont appliqués partout ;
- les deux propositions non retenues ne sont plus ouvertes ;
- la continuité ne crée aucun parcours ni destination ;
- le mouvement reste facultatif et supprimable sans perte ;
- aucune capacité du Design System n'est devenue un besoin validé ;
- aucune décision différée n'est implicitement anticipée.

Aucune contradiction ne nécessite un nouvel arbitrage Product Owner. La conception
consolidée est validée et verrouillée.

## 73. Éléments explicitement différés après l'Incrément 6

L'Incrément 6 ne définit ni dépendance d'implémentation, ni regroupement de vues, ni
ordre de réalisation, ni futur contrat de Sprint. Ces sujets relèvent exclusivement de
l'Incrément 7.

Il ne modifie aucune décision des Incréments 2 à 5 et n'autorise aucune implémentation.

## 74. Cadre de la stratégie générale

La présente stratégie organise des dépendances et regroupements candidats. Elle ne crée
ni contrat, ni numéro de Sprint, ni engagement de réalisation.

Les statuts employés sont :

- **dépendance démontrée** : relation imposée par une fondation partagée, une continuité
  validée ou une décision de conception commune ;
- **dépendance conditionnelle à vérifier** : capacité dont l'évaluation est préalable à
  une décision, sans besoin du Design System déjà établi ;
- **préférence de séquençage** : ordre recommandé pour réduire un risque ou une
  duplication, mais qui n'est pas imposé par le canon ;
- **sujet différé** : décision qui nécessite un futur contrat ou une autorisation
  distincte.

Une dépendance entre deux vues ne signifie pas qu'elles doivent nécessairement être
implémentées dans le même Sprint. Elle signifie que leur conception et leurs contrôles
ne peuvent être évalués indépendamment sans risque identifié.

## 75. Fondations communes

### 75.1 Shell public

Le shell est une dépendance démontrée des sept responsabilités `V-PUB`. Il porte
l'identité, la navigation, la localisation, le skip link, le landmark principal et le
footer. Sa stabilité conditionne la continuité de toutes les vues.

Une éventuelle évolution du shell doit être évaluée avant ou avec les premières vues
implémentées, puis rester stable pendant les lots suivants. Cette relation ne présume
pas qu'une modification soit nécessaire.

### 75.2 Fondations du Design System

Toutes les vues reposent sur les primitives, tokens, règles responsive, états et
fondations d'accessibilité canoniques. Leur disponibilité constitue une dépendance
démontrée ; leur évolution ne l'est pas.

Avant toute composition locale, un futur Sprint devra vérifier que les fondations
existantes permettent de matérialiser la conception retenue. Toute insuffisance
démontrée suivra ensuite la gouvernance du Design System.

### 75.3 Grammaire transversale

Les hiérarchies d'attention, la respiration, la protection des médias, l'ordre
sémantique, l'expérience responsive complète et l'équivalence sans mouvement sont des
dépendances démontrées communes. Les implémenter séparément sans référence partagée
créerait un risque de duplication et de divergence.

Cette grammaire n'autorise pas la création d'un composant unique ou d'une composition
uniforme pour toutes les vues.

### 75.4 Contenus et médias

Les contenus et médias existants permettent de construire et tester les vues, mais ne
constituent pas une dépendance à des données finales. La robustesse à leur remplacement
est démontrée comme exigence de conception.

La disponibilité de médias définitifs reste un sujet différé. Elle ne bloque pas une
implémentation conceptuellement robuste et ne justifie aucun média nouveau.

## 76. Cartographie des dépendances entre responsabilités

| Source ou ensemble | Responsabilité liée | Nature | Démonstration | Conséquence stratégique |
| --- | --- | --- | --- | --- |
| Shell public | Toutes les vues | Dépendance démontrée | Identité, localisation, navigation et accessibilité communes | Stabiliser le cadre transversal avant de multiplier les adaptations locales |
| Accueil — `V-PUB-01` | Collections — `V-PUB-03` | Dépendance démontrée | L'accueil introduit l'univers et donne accès aux mêmes ensembles | Maintenir une continuité d'identité et d'aperçus entre entrée et exploration |
| Collections — `V-PUB-03` | Collection — `V-PUB-07` | Dépendance démontrée | L'identité d'un ensemble mène à ses œuvres et à son intention | Préserver l'ensemble choisi et son contexte lors du changement de vue |
| Collection — `V-PUB-07` | Œuvre — `V-PUB-04` | Dépendance démontrée forte | Passage validé de la pluralité rythmée à la concentration individuelle | Concevoir et vérifier conjointement ratios, continuité média et hiérarchie œuvre-contexte |
| David — `V-PUB-02` | Collections et œuvres | Dépendance éditoriale démontrée | La démarche contextualise le travail et possède un accès existant aux collections | Préserver le ton et les relations sans fabriquer d'illustration mécanique |
| Contenu — `V-PUB-05` | Œuvre — `V-PUB-04` | Dépendance démontrée | Relations explicites entre contenus et œuvres | Stabiliser l'identité des ressources et les reprises contextuelles |
| Évolution — `V-PUB-06` | Œuvres et contenus | Dépendance démontrée | Les repères résolvent des ressources existantes | Préserver titres, destinations et contexte des ressources liées |
| Collection et Œuvre | Design System | Dépendance conditionnelle à vérifier | Deux capacités restent à observer pour les ratios et la hiérarchie asymétrique | Évaluer les fondations avant de figer leur matérialisation locale |
| Toutes les vues | Responsive et accessibilité | Dépendance démontrée | Même contenu, hiérarchie et usages sur toutes les largeurs et sans mouvement | Employer des critères communs dans chaque futur lot |

```text
                         [SHELL + FONDATIONS]
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
         [ACCUEIL]            [DAVID]          [ÉVOLUTION]
              │                   │                   │
        [COLLECTIONS]       [CONTENUS] ───────────────┤
              │                   │                   │
         [COLLECTION] ──────── [ŒUVRE] ◀──────────────┘
              │                   │
              └──── capacités Design System à observer ┘
```

Le schéma représente des relations de conception et de vérification. Il ne prescrit ni
navigation, ni architecture technique, ni ordre de livraison.

## 77. Vues susceptibles d'évoluer ensemble

### 77.1 Collection et Œuvre — regroupement fortement recommandé

Ce regroupement est le plus directement fondé par la conception.

- **Avantages :** protège la continuité du média ; vérifie ensemble le champ éditorial
  et la révélation individuelle ; évite deux réponses divergentes aux ratios ; concentre
  l'évaluation des deux capacités Design System.
- **Limites :** réunit deux compositions sensibles qui exigent chacune une validation
  complète.
- **Risques :** un lot trop large pourrait confondre la logique plurielle de la
  collection avec la concentration de la fiche œuvre.
- **Dépendances préalables :** grammaire commune disponible ; évaluation des fondations
  pour les ratios et la hiérarchie asymétrique ; shell suffisamment stable.

La dépendance est démontrée. Le choix de les placer dans un même futur Sprint reste une
recommandation, pas une obligation contractuelle.

### 77.2 Accueil et Collections — regroupement recommandé

Les deux vues organisent l'entrée dans l'univers artistique et l'exploration des
ensembles.

- **Avantages :** évite de dupliquer la présentation des collections ; maintient une
  progression cohérente entre promesse et diversité ; facilite la robustesse des mêmes
  aperçus.
- **Limites :** l'accueil doit conserver une identité plus introductive que la vue
  Collections.
- **Risques :** leur rapprochement pourrait produire deux compositions identiques ou
  donner aux collections le même poids sur les deux vues.
- **Dépendances préalables :** langage média cohérent ; identité des collections stable ;
  shell disponible.

La relation entre les vues est démontrée. Leur regroupement constitue une préférence de
séquençage fondée sur la réduction des duplications.

### 77.3 David et Contenu artistique — regroupement plausible

Ces vues partagent une priorité éditoriale, une largeur de lecture et des enjeux de
densité variables.

- **Avantages :** mutualise l'évaluation du rythme de lecture, des contextes et des
  relations vers les œuvres ; maintient une expression éditoriale cohérente.
- **Limites :** la page David construit une proximité avec l'artiste tandis qu'un
  contenu possède plusieurs types et finalités.
- **Risques :** uniformiser les deux lectures ou transformer David en contenu générique.
- **Dépendances préalables :** grammaire typographique et de respiration disponible ;
  identité des relations vers les œuvres stabilisée.

Le partage d'enjeux est démontré. Le regroupement lui-même reste une préférence de
séquençage.

### 77.4 Évolution dans le temps — lot distinct recommandé

La chronologie consomme des identités et destinations d'œuvres et de contenus, mais sa
responsabilité temporelle et son ordre propre sont singuliers.

- **Avantages :** permet de vérifier la continuité vers des ressources déjà stabilisées
  sans imposer son modèle temporel aux autres vues.
- **Limites :** son traitement plus tardif reporte la validation globale des relations
  temporelles.
- **Risques :** une réalisation trop isolée pourrait produire une frise décorative ou
  une présentation étrangère à la grammaire commune.
- **Dépendances préalables :** identités et relations des œuvres et contenus stables ;
  shell et grammaire transversale disponibles.

La dépendance aux ressources est démontrée. Le traitement distinct et tardif est une
préférence de séquençage.

## 78. Regroupements candidats comparés

### 78.1 Candidat A — Progression du parcours — non retenu

```text
Fondations et shell
→ Accueil + Collections
→ Collection + Œuvre
→ David + Contenu
→ Évolution dans le temps
→ Contrôle transversal
```

- **Avantages :** suit la progression de découverte ; rend rapidement cohérente
  l'entrée publique ; facilite une revue par parcours perceptible.
- **Limites :** reporte l'évaluation du couple Collection–Œuvre, qui concentre les
  compositions les plus affirmées.
- **Risques :** construire le langage des aperçus avant d'avoir vérifié les deux
  capacités Design System les plus sensibles ; devoir ajuster ensuite des choix déjà
  propagés.
- **Dépendances préalables :** fondations et shell évalués ; médias de démonstration
  utilisables sans devenir canoniques.

Le Product Owner conserve cette stratégie comme approche étudiée mais non retenue.

### 78.2 Candidat B — Réduction des risques structurels — retenu

```text
Fondations et shell
→ évaluation des capacités à observer
→ Collection + Œuvre
→ Accueil + Collections
→ David + Contenu
→ Évolution dans le temps
→ Contrôle transversal
```

- **Avantages :** traite d'abord la continuité et les compositions les plus sensibles ;
  vérifie tôt les fondations avant leur répétition ; réduit le risque de réponses média
  divergentes ; fournit ensuite une référence éprouvée aux vues de découverte.
- **Limites :** la première évolution visible ne suit pas l'entrée naturelle du
  visiteur ; le shell doit rester assez neutre pour ne pas anticiper les vues suivantes.
- **Risques :** surdimensionner les fondations communes à partir des besoins du seul
  couple Collection–Œuvre.
- **Dépendances préalables :** évaluation limitée des fondations existantes ; séparation
  stricte entre besoin démontré et préférence locale.

Le Product Owner retient cette stratégie parce qu'elle traite les incertitudes du
continuum Collection–Œuvre avant de propager les choix aux autres vues.

### 78.3 Candidat C — Vue par vue sans regroupement — non recommandé

```text
Une responsabilité
→ validation
→ responsabilité suivante
```

- **Avantages :** périmètres locaux réduits ; historique simple pour chaque vue.
- **Limites :** continuités évaluées tardivement ; contrôles transversaux répétés.
- **Risques :** duplication, divergence des médias et de la respiration, correction
  répétée des mêmes fondations.
- **Dépendances préalables :** conventions transversales extrêmement stables avant la
  première vue.

Ce candidat reste plausible sur le plan organisationnel, mais il répond moins bien aux
dépendances démontrées par la conception.

## 79. Ordre général recommandé

Le **Candidat B — Réduction des risques structurels** est retenu comme stratégie
générale.

### Étape générale 1 — Vérifier les fondations applicables et le shell

Les futurs Sprints d'implémentation devront d'abord évaluer les primitives existantes,
les règles responsive et accessibles, la protection des médias, l'équivalence sans
mouvement et la discrétion du shell.

Cette étape stratégique ne constitue aucune autorisation de modifier le shell ou le
Design System dans le Sprint 018. Elle ne présume ni insuffisance, ni évolution des
fondations.

### Étape générale 2 — Matérialiser le continuum Collection–Œuvre

Traiter le passage de la pluralité au sujet individuel et évaluer les deux capacités du
Design System seulement observées. Ce continuum concentre les risques de ratios,
hiérarchie et continuité média.

### Étape générale 3 — Matérialiser l'entrée Accueil–Collections

Construire l'entrée dans l'univers et la perception de la diversité à partir d'une
grammaire média déjà éprouvée, sans reproduire les compositions du continuum
Collection–Œuvre.

### Étape générale 4 — Matérialiser les lectures David–Contenu

Appliquer les principes éditoriaux, les respirations et les relations vers les œuvres
avec une grammaire transversale déjà stabilisée, tout en conservant leurs responsabilités
distinctes.

### Étape générale 5 — Matérialiser l'évolution dans le temps

Relier des œuvres et contenus dont les identités, destinations et présentations sont
déjà stables, sans transformer l'ordre temporel en dispositif décoratif.

### Étape générale 6 — Contrôler l'expérience publique complète

Vérifier transversalement continuité, responsive, accessibilité, médias, shell,
immobilité complète et absence d'uniformisation.

Cet ordre réduit les risques parce qu'il :

- vérifie les fondations avant leur multiplication ;
- traite tôt les deux compositions les plus sensibles ;
- évite de définir plusieurs fois les mêmes réponses média ;
- stabilise les ressources avant les vues qui les relient ;
- réserve un contrôle global après les singularités locales.

Il fixe uniquement un ordre général recommandé fondé sur les dépendances et les risques
démontrés. Il ne fixe ni nombre, ni numéro, ni périmètre, ni ordre contractuel des futurs
Sprints.

## 80. Distinction entre faits, dépendances, préférences et sujets différés

### 80.1 Faits établis

- les huit responsabilités existent et sont fonctionnellement stabilisées ;
- elles utilisent un shell et des fondations communs ;
- l'accueil donne accès aux collections ;
- les collections donnent accès aux collections individuelles ;
- les collections individuelles donnent accès aux œuvres ;
- les contenus et la chronologie relient des ressources existantes ;
- les contenus et médias actuels restent remplaçables.

### 80.2 Dépendances démontrées

- shell et fondations vers toutes les vues ;
- continuité Accueil–Collections–Collection–Œuvre ;
- continuité média et hiérarchique renforcée entre Collection et Œuvre ;
- relations explicites Contenu–Œuvre et Évolution–Ressources ;
- critères responsive, accessibilité, médias et mouvement communs.

### 80.3 Dépendances conditionnelles à vérifier

- capacité des fondations à préserver les ratios hétérogènes du champ éditorial ;
- capacité des fondations à maintenir l'asymétrie œuvre-contexte selon la largeur.

Leur vérification n'établit pas à elle seule un besoin d'évolution du Design System.

### 80.4 Préférences de séquençage

- regrouper Collection et Œuvre ;
- regrouper Accueil et Collections ;
- rapprocher David et Contenu sans les uniformiser ;
- traiter la chronologie après la stabilisation des ressources liées ;
- retenir une stratégie de réduction des risques plutôt qu'un ordre strictement fondé
  sur le parcours.

### 80.5 Sujets différés

- contrats, numéros et périmètres détaillés des futurs Sprints ;
- estimations, dates, engagements et roadmap ;
- technologies et architecture d'implémentation ;
- décisions d'évolution du Design System ;
- contenus et médias définitifs ;
- mouvements ou transitions de production.

## 81. Arbitrage Product Owner de l'Incrément 7

**Décision :** le Candidat B — réduction des risques structurels — est retenu.

La stratégie générale validée est :

1. vérifier les fondations applicables et le shell avant propagation ;
2. traiter le continuum Collection–Œuvre ;
3. traiter l'entrée Accueil–Collections ;
4. traiter les expériences éditoriales David–Contenu artistique ;
5. traiter Évolution dans le temps ;
6. terminer par un contrôle transversal de l'expérience publique complète.

Le Candidat A reste une stratégie étudiée mais non retenue. Le Candidat C reste non
recommandé en raison des risques de duplication et de divergence.

Aucun arbitrage ne reste ouvert dans l'Incrément 7. Cette décision n'ouvre aucun Sprint,
ne rend aucun regroupement contractuel et n'autorise aucune implémentation.

## 82. Capacités du Design System dans la stratégie

Les deux capacités à observer influencent uniquement l'ordre retenu : leur
évaluation précède le continuum Collection–Œuvre afin d'éviter de propager une réponse
non vérifiée.

Elles ne sont ni des besoins validés, ni des demandes d'évolution, ni des obstacles
établis. Aucun autre besoin du Design System n'est introduit par la stratégie.

## 83. Éléments explicitement différés après l'Incrément 7

L'Incrément 7 ne crée aucun contrat, numéro, calendrier, estimation, technologie ou lot
définitif. La stratégie retenue reste générale et ne devient pas une planification
contractuelle.

L'audit final, la synchronisation documentaire et la clôture du Sprint 018 relèvent
exclusivement de l'Incrément 8.

## 84. Version et évolution

La présente version consolide les Incréments 2 à 8 validés par le Product Owner. Elle est
verrouillée, intégrée dans `main` par la Pull Request nº 21 au commit de fusion
`8ea6d3d4b1c9141b474857596d1813ea869fd461` et publiée sous le tag officiel
`sprint-018`. Elle constitue la référence canonique de la conception de l'expérience
publique V1.

Son acquisition du statut canonique suit la séquence :

```text
Validation Product Owner finale — réalisée
→ verrouillage documentaire — réalisé
→ intégration dans main — réalisée
→ acquisition du statut canonique conformément à docs/GOVERNANCE.md — réalisée
```

Après son intégration, toute évolution devra être motivée, tracée, validée et intégrée
conformément à la gouvernance applicable. Aucune proposition ou implémentation future ne
pourra modifier implicitement les décisions du présent document.
