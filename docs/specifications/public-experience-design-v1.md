# Conception de l'expérience publique V1

## 1. Statut

**Brouillon non normatif — Incrément 2 en cours de revue Product Owner**

Le présent document est créé dans le cadre du Sprint 018. Dans son état actuel, il
contient exclusivement l'audit de l'expérience publique existante.

Il ne constitue encore ni une conception validée, ni une maquette, ni une instruction
d'implémentation. Aucun constat, aucune limite et aucun risque consigné dans cet audit
ne modifie le canon ou le produit par lui-même.

## 2. Objet et portée de l'Incrément 2

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
