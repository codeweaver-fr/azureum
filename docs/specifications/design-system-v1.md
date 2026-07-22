# Design System V1

## Statut

**En exploration**

---

# 1. Objectif

Le Design System V1 a pour objectif de définir de manière explicite, cohérente et vérifiable les fondations visuelles et ergonomiques d’AZUREUM.

Il constitue la référence de conception de l’interface utilisateur pour la première version du produit. Son rôle est de garantir une expérience homogène, accessible, performante et maintenable, transversalement aux fonctionnalités développées.

Le Design System décrit les principes, les règles et les éléments fondamentaux qui structurent l’interface, sans imposer les choix d’implémentation technique qui permettront de les appliquer.

Il couvre notamment l’identité visuelle, les design tokens, la mise en page, les états interactifs, l’accessibilité, le responsive et les composants fondamentaux. Les composants métier, les parcours utilisateurs et les règles fonctionnelles relèvent des spécifications fonctionnelles et sont exclus de son périmètre.

Toute évolution de ces fondations doit être documentée, discutée et validée avant son intégration afin de préserver la cohérence de l’ensemble du système de conception.

---

# 2. Principes de conception

Le Design System V1 repose sur un ensemble de principes destinés à guider toutes les décisions relatives à la conception de l’interface utilisateur d’AZUREUM. Ces principes s’appliquent à l’ensemble des écrans, composants et évolutions de la V1.

## 2.1 PC-01 — L’œuvre avant l’interface

AZUREUM est une galerie d’art numérique. L’interface constitue un support de présentation des œuvres et non une finalité. Les décisions de conception privilégient toujours la mise en valeur des créations artistiques, leur lisibilité et leur contemplation plutôt que les effets d’interface ou les mécanismes d’acquisition.

## 2.2 PC-02 — Cohérence

Les mêmes besoins produisent les mêmes réponses visuelles et interactives. Les règles définies par le Design System prévalent sur les décisions locales afin de garantir une expérience homogène dans l’ensemble du produit.

## 2.3 PC-03 — Simplicité

Chaque élément de l’interface répond à un besoin identifié. Les choix de conception privilégient la clarté, la lisibilité et la compréhension immédiate plutôt que la multiplication des effets visuels.

## 2.4 PC-04 — Accessibilité

Les exigences d’accessibilité sont prises en compte dès la conception. Elles font partie intégrante des fondations du produit et ne constituent pas une étape de correction ultérieure.

## 2.5 PC-05 — Modularité

Les éléments fondamentaux sont conçus pour être réutilisés de manière cohérente dans l’ensemble de l’application. Les nouveaux composants s’appuient sur les fondations existantes avant d’introduire de nouvelles règles.

## 2.6 PC-06 — Sobriété

L’identité visuelle privilégie une esthétique élégante, discrète et intemporelle. Les animations, effets graphiques et éléments décoratifs demeurent au service du contenu présenté.

## 2.7 PC-07 — Évolutivité

Les fondations du Design System sont conçues pour accompagner l’évolution du produit sans remettre en cause sa cohérence globale. Toute évolution s’inscrit dans le cadre défini par cette spécification et fait l’objet d’une validation préalable.

## 2.8 PC-08 — Performance et immersion

Les animations, transitions et effets visuels participent à l’expérience de consultation sans jamais compromettre les performances, l’accessibilité, la lisibilité ou la contemplation des œuvres. L’immersion reste proportionnée à la finalité du produit.

---

# 3. Référentiel des identifiants

Le Design System V1 établit un référentiel documentaire commun permettant d’identifier de manière stable, explicite et non ambiguë les éléments qu’il définit.

Ce référentiel garantit une terminologie cohérente, facilite la traçabilité des décisions et permet le référencement des éléments entre les spécifications, les contrats de sprint, les critères d’acceptation, les tests et l’implémentation lorsqu’ils existent.

Il concerne exclusivement les identifiants documentaires. Les conventions propres au code, aux fichiers, aux composants, aux variables CSS et aux autres éléments techniques relèvent de l’implémentation et sont définies dans les documents correspondants.

---

## 3.1 Familles documentaires

Le référentiel documentaire couvre les familles suivantes :

- principes de conception ;
- règles de conception ;
- catégories de design tokens ;
- règles de mise en page ;
- règles d’accessibilité ;
- règles de responsive ;
- états visuels et interactifs ;
- composants fondamentaux ;
- exceptions validées.

Tout élément appartenant à l'une de ces familles reçoit un identifiant documentaire lors de sa validation.

---

## 3.2 Règles d'attribution

Chaque identifiant documentaire est :

- unique ;
- attribué à un seul élément ;
- stable après validation ;
- indépendant de la position de l’élément dans le document.

Deux éléments distincts ne peuvent jamais partager un même identifiant.

Un même élément ne peut posséder qu'un seul identifiant documentaire actif.

Les identifiants documentaires constituent des références permanentes du Design System et peuvent être utilisés dans les autres documents du projet.

---

## 3.3 Cycle de vie

Un identifiant documentaire suit le cycle de vie de l’élément auquel il est associé.

Lorsqu’un élément est :

- modifié sans changement de nature, son identifiant est conservé ;
- remplacé par un nouvel élément, un nouvel identifiant est créé ;
- supprimé ou archivé, son identifiant devient inactif mais demeure réservé.

Un identifiant documentaire retiré ne peut jamais être réattribué à un autre élément.

Cette règle garantit la traçabilité historique des décisions du Design System.

---

## 3.4 Format des identifiants documentaires

Chaque identifiant documentaire respecte le format suivant :

`<PRÉFIXE>-<NUMÉRO>`

Le numéro est attribué de manière séquentielle au sein de chaque famille documentaire.

Le premier identifiant d'une famille porte le numéro `01`.

| Préfixe | Famille documentaire | Exemple |
|---|---|---|
| PC | Principe de conception | PC-01 |
| RC | Règle de conception | RC-01 |
| DT | Catégorie de design tokens | DT-01 |
| MEP | Règle de mise en page | MEP-01 |
| ACC | Règle d’accessibilité | ACC-01 |
| RSP | Règle de responsive | RSP-01 |
| ETAT | État visuel ou interactif | ETAT-01 |
| CMP | Composant fondamental | CMP-01 |
| EXC | Exception validée | EXC-01 |

La numérotation est indépendante pour chaque famille documentaire.

Un identifiant documentaire n'est jamais réutilisé, même si l'élément auquel il était associé est supprimé, remplacé ou archivé.

---

## 3.5 Règle de cohérence

Toute nouvelle appellation introduite dans le Design System doit être vérifiée afin d’éviter les doublons et les ambiguïtés.

Toute création, modification ou suppression d’un identifiant documentaire constitue une décision documentaire qui doit être validée avant son utilisation.

Toute modification d’un élément identifié doit être répercutée dans les documents qui le référencent afin de préserver la cohérence et la traçabilité du Design System.

---

# 4. Identité visuelle

## 4.1 Signature visuelle

**RC-01 — Présence éditoriale.** AZUREUM adopte une expression visuelle silencieuse, éditoriale et contemporaine. L'interface crée de l'espace autour des œuvres, hiérarchise l'information avec précision et évite toute décoration sans fonction.

**RC-02 — Primauté de l'œuvre.** Une œuvre constitue toujours le point de contraste et d'attention principal de sa présentation. La marque, les actions et les informations complémentaires ne doivent ni la concurrencer ni l'enfermer dans un décor imposé.

**RC-03 — Caractère premium.** Le positionnement premium repose sur la qualité des proportions, de la typographie, des médias et des transitions. Il ne repose pas sur une accumulation d'effets, de dorures, de textures ou de signes luxueux conventionnels.

**RC-04 — Respiration.** Les compositions utilisent volontairement l'espace vide. La densité augmente uniquement dans les espaces de gestion, lorsque la rapidité de lecture prime sur la contemplation.

## 4.2 Couleurs

L'identité visuelle d'AZUREUM repose sur une palette sobre et intemporelle destinée à mettre les œuvres au premier plan.

Elle s'articule autour de trois couleurs identitaires :

| Nom | Rôle |
|---|---|
| Noir minéral | Texte principal, éléments fortement contrastés et éventuels fonds sombres |
| Bleu AZUREUM | Couleur d'identité de la marque, accents principaux et actions prioritaires |
| Or fumé | Valorisation discrète, éléments premium et détails éditoriaux |

La palette est complétée par des couleurs neutres destinées aux fonds, surfaces, séparateurs et textes secondaires.

La terre cuite peut être employée exceptionnellement comme accent éditorial ponctuel lorsque son usage améliore la hiérarchie visuelle sans concurrencer l'identité principale.

### Règles d'utilisation

- le noir minéral constitue la couleur de référence pour le texte et les contrastes forts ; il n'a pas vocation à devenir systématiquement la couleur de fond de l'interface ;
- le bleu AZUREUM représente l'identité visuelle de la marque ; ses déclinaisons d'état sont définies avec les Design Tokens ;
- l'or fumé et la terre cuite sont réservés aux accents visuels et aux éléments de valorisation ; ils ne sont pas employés comme couleurs de texte tant que leur conformité aux exigences d'accessibilité n'a pas été démontrée ;
- les couleurs fonctionnelles de succès, d'avertissement, d'erreur et d'information constituent une palette indépendante et ne participent pas à l'identité graphique de la marque ;
- une couleur ne constitue jamais l'unique moyen de transmettre une information.

Les œuvres demeurent toujours l'élément visuel dominant de l'interface. Les couleurs de l'identité graphique accompagnent leur présentation sans entrer en concurrence avec elles.

## 4.3 Typographies

Deux registres typographiques structurent l'identité :

- une serif éditoriale pour les titres expressifs, les citations et les introductions ;
- une sans-serif très lisible pour le corps, la navigation, les actions, les données et les espaces privés.

La direction proposée pour la V1 associe **Cormorant Garamond** pour l'expression éditoriale et **Inter** pour l'interface. Leur licence, leur mode de distribution et leurs fichiers exacts devront être vérifiés avant implémentation. Une pile de polices système doit garantir une lecture correcte en cas d'indisponibilité.

La serif n'est jamais utilisée pour les petits textes fonctionnels, les contrôles, les messages d'erreur ou les données nécessitant une lecture rapide.

## 4.4 Iconographie

**RC-05 — Style iconographique.** Les icônes utilisent un dessin linéaire simple, une épaisseur cohérente et des formes immédiatement reconnaissables. Elles évitent les détails décoratifs et les mélanges de familles.

Une icône accompagnant une action complète le libellé mais ne le remplace pas lorsque sa signification n'est pas universelle. Une icône seule possède toujours un nom accessible.

Les tailles de référence sont 16, 20 et 24 pixels. Les icônes héritent de la couleur du texte, sauf lorsqu'une couleur sémantique est nécessaire. Le choix d'une bibliothèque ou la création d'icônes propriétaires relève de l'implémentation.

## 4.5 Logo

**RC-06 — Identité de marque.** Le logo d'AZUREUM repose sur deux éléments complémentaires :

- un symbole représentant une cigale géométrique stylisée ;
- un mot-symbole typographique « AZUREUM ».

Ils constituent ensemble la signature principale de la marque. Le symbole peut toutefois être utilisé seul dans les variantes prévues lorsque le format ne permet pas l'emploi de la signature complète.

### Direction retenue

La cigale géométrique constitue l'identité visuelle officielle de la marque.

Elle est conçue comme un symbole contemporain, minimaliste et intemporel. Son dessin privilégie une silhouette immédiatement reconnaissable avant la représentation détaillée de l'insecte.

L'objectif n'est pas de produire une illustration naturaliste, mais un emblème capable de fonctionner comme une signature de marque sur l'ensemble des supports.

### Décision de conception

La direction graphique du symbole est définitivement validée.

Les évolutions futures porteront exclusivement sur son raffinement graphique afin d'améliorer :

- la symétrie générale ;
- les proportions ;
- l'élégance des ailes ;
- la simplification de la tête ;
- l'équilibre des épaisseurs ;
- la lisibilité aux très petites tailles.

Ces ajustements devront préserver l'identité générale et la silhouette caractéristique du symbole.

**Principe de stabilité du symbole.** Toute évolution du symbole préserve sa silhouette générale et vise exclusivement à améliorer sa cohérence géométrique, sa lisibilité et sa reproductibilité. Aucun raffinement ne peut augmenter sa complexité visuelle ni introduire de nouvelle ligne, facette ou décoration.

Aucune nouvelle piste conceptuelle ne sera explorée.

### Mot-symbole

Le mot-symbole utilise une composition typographique élégante, sobre et éditoriale.

Son espacement, ses proportions et son caractère premium participent à l'identité d'AZUREUM et complètent le symbole sans lui faire concurrence.

### Variantes

**État : en finalisation.** La direction graphique est validée et la recherche créative est terminée. Le logo est fonctionnellement validé ; les travaux restants relèvent exclusivement de sa production graphique.

| Variante | Statut | Usage |
|---|---|---|
| 02 — Équilibrée | Candidate officielle | Logo principal |
| 01 — Fine | Validée | Édition, grands formats et communication premium |
| 03 — Icône | Validée | Favicon, application et très petites tailles |

Les trois versions constituent une même famille graphique et doivent dériver d'un tracé directeur unique. Elles devront être déclinées en monochrome noir, monochrome blanc et or fumé, sans effet, texture ni ombre.

### Travaux de production restants

Avant le verrouillage définitif du logo, il reste uniquement à :

- réaliser un master vectoriel au format SVG ;
- construire le symbole sur une grille géométrique cohérente ;
- garantir sa symétrie ;
- harmoniser les épaisseurs de traits ;
- contrôler les espaces négatifs ;
- tester sa lisibilité à 16, 24 et 32 pixels ;
- vérifier ses versions monochromes sans effet, texture ni ombre ;
- définir sa zone de protection, ses dimensions minimales et ses usages interdits dans le guide de marque.

Ces travaux ne peuvent remettre en cause l'identité visuelle ni rouvrir la recherche conceptuelle.

---

# 5. Design Tokens

Les Design Tokens définissent les propriétés visuelles fondamentales utilisées par l'ensemble d'AZUREUM.

Ils constituent la source de référence unique des couleurs, de la typographie, des espacements, des dimensions, des bordures, des rayons, des ombres, des profondeurs, des mouvements et des règles responsive.

Les composants utilisent exclusivement ces tokens. Toute nouvelle valeur nécessite une validation préalable du Design System.

---

## 5.1 Couleurs

**DT-01 — Système colorimétrique**

Le système colorimétrique distingue quatre familles de couleurs :

- identitaires ;
- neutres ;
- fonctionnelles ;
- système.

Chaque couleur appartient à une seule famille et possède un rôle clairement défini.

### Palette identitaire

| Nom | Valeur | Usage principal |
|---|---:|---|
| Noir minéral | `#0F0F11` | Texte principal, contrastes forts et éventuels fonds sombres |
| Bleu AZUREUM | `#2E5CFF` | Identité de marque, actions principales et éléments interactifs |
| Or fumé | `#D2C7A3` | Valorisation discrète et éléments premium |
| Terre cuite | `#C87D57` | Accent éditorial ponctuel |

### Palette neutre

| Nom | Valeur | Usage principal |
|---|---:|---|
| Blanc galerie | `#FAF9F7` | Fond principal |
| Ivoire | `#F3EFE9` | Surfaces secondaires |
| Gris pierre | `#E8E5E1` | Cartes et séparateurs |
| Gris doux | `#CFCBC6` | Bordures |
| Gris graphite | `#5A5D66` | Texte secondaire |
| Noir minéral | `#0F0F11` | Texte principal |

### Palette fonctionnelle

| Rôle | Valeur | Usage |
|---|---:|---|
| Succès | `#5F8F73` | Confirmation |
| Avertissement | `#D8A34A` | Vigilance |
| Erreur | `#B85C52` | Échec et suppression |
| Information | `#4D7CFF` | Information contextuelle |

### Tokens sémantiques

Les composants utilisent des rôles sémantiques plutôt que des couleurs directes.

Exemples :

- Background
- Surface
- Surface Elevated
- Surface Inverse
- Border Subtle
- Border Default
- Border Strong
- Divider
- Focus Ring
- Overlay
- Backdrop
- Selection
- Skeleton
- Placeholder

### États interactifs

Toute couleur interactive définit au minimum les états suivants :

- Default
- Hover
- Active
- Focus
- Disabled

Selon les besoins, peuvent également être définis :

- Selected
- Loading

### Règles

- les couleurs identitaires ne représentent jamais un état fonctionnel ;
- les couleurs fonctionnelles ne participent jamais à l'identité de marque ;
- une information essentielle ne repose jamais uniquement sur la couleur ;
- les composants utilisent exclusivement des tokens sémantiques ;
- toute nouvelle couleur doit être validée avant son intégration.

### Accessibilité

Les contrastes sont vérifiés avant toute validation du Design System.

Aucune couleur ne peut être utilisée si elle ne respecte pas les exigences d'accessibilité définies au chapitre correspondant.

---

## 5.2 Typographies

**DT-02 — Système typographique**

Le système typographique définit les familles de caractères, la hiérarchie des textes et les règles de lecture.

### Familles

| Famille | Usage |
|---|---|
| Cormorant Garamond | Titres éditoriaux |
| Inter | Interface, navigation et texte courant |

### Échelle

| Niveau | Taille | Interligne | Usage |
|---|---:|---:|---|
| Très petit | `0.75rem` | `1.4` | Mentions secondaires |
| Petit | `0.875rem` | `1.5` | Métadonnées |
| Corps | `1rem` | `1.6` | Texte courant |
| Corps large | `1.125rem` | `1.6` | Introduction |
| Titre 3 | `1.5rem` | `1.3` | Sous-section |
| Titre 2 | `2rem` | `1.2` | Section |
| Titre 1 | `clamp(2.5rem,6vw,5rem)` | `1.05` | Titre principal |

### Poids

- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

### Règles

- la hiérarchie repose d'abord sur la taille puis sur le poids ;
- les textes sont alignés à gauche ;
- la justification est interdite ;
- les lignes de lecture visent 45 à 75 caractères ;
- les tailles hors échelle sont interdites.

---

## 5.3 Espacements

**DT-03 — Échelle d'espacement**

L'unité de base est de **4 pixels**.

Échelle officielle :

`0 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

### Règles

- les espacements rapprochent ou éloignent les éléments selon leur relation logique ;
- les espacements proviennent exclusivement de cette échelle ;
- aucune valeur intermédiaire n'est autorisée sans validation.

---

## 5.4 Dimensions

**DT-04 — Dimensions fonctionnelles**

| Élément | Valeur |
|---|---:|
| Contrôle compact | `36px` |
| Contrôle standard | `44px` |
| Contrôle confortable | `52px` |
| Icônes | `16 / 20 / 24px` |
| Lecture étroite | `560px` |
| Largeur de lecture | `720px` |
| Conteneur principal | `1440px` |

Les dimensions peuvent être fluides à condition que leurs limites restent explicites.

---

## 5.5 Bordures

**DT-05 — Bordures**

| Élément | Valeur |
|---|---:|
| Standard | `1px` |
| Renforcée | `2px` |

La bordure renforcée est réservée au focus, à la sélection et aux séparations nécessitant davantage de contraste.

Les bordures décoratives sont interdites.

---

## 5.6 Rayons

**DT-06 — Rayons**

Échelle officielle :

`0 · 2 · 4 · 9999`

Les œuvres privilégient un rayon nul.

Le rayon maximal est réservé aux éléments circulaires.

Deux composants remplissant une même fonction utilisent toujours le même rayon.

---

## 5.7 Ombres

**DT-07 — Ombres**

Trois niveaux sont autorisés :

- légère ;
- moyenne ;
- forte.

Les ombres servent exclusivement à exprimer une hiérarchie de surfaces.

Elles ne remplacent jamais une bordure, un contraste ou un espacement.

Les œuvres ne reçoivent pas d'ombre décorative systématique.

---

## 5.8 Profondeurs (z-index)

**DT-08 — Profondeurs**

| Niveau | Valeur | Usage |
|---|---:|---|
| Base | `0` | Contenu normal |
| Élevé | `10` | Surface locale |
| Navigation | `20` | Navigation persistante |
| Menu | `30` | Menus |
| Overlay | `40` | Fond des dialogues |
| Dialogue | `50` | Fenêtre modale |
| Notification | `60` | Messages prioritaires |

Toute valeur hors échelle nécessite une justification documentaire.

---

## 5.9 Mouvement

**DT-09 — Mouvement**

| Durée | Valeur | Usage |
|---|---:|---|
| Immédiate | `0ms` | Réduction des mouvements |
| Rapide | `120ms` | Retour visuel |
| Standard | `200ms` | États interactifs |
| Posée | `320ms` | Transitions de surface |
| Éditoriale | `600ms` | Animations contemplatives |

Les animations accompagnent les interactions sans détourner l'attention.

Lorsque l'utilisateur demande une réduction des mouvements, elles sont supprimées ou remplacées par des transitions instantanées.

---

## 5.10 Points de rupture

**DT-10 — Points de rupture**

Le Design System adopte une approche **mobile-first**.

| Nom | Largeur |
|---|---:|
| Compact | `0–479px` |
| Mobile large | `≥480px` |
| Tablette | `≥768px` |
| Bureau | `≥1024px` |
| Bureau large | `≥1280px` |
| Exposition | `≥1600px` |

Les composants privilégient leur adaptation intrinsèque.

Les points de rupture servent uniquement à modifier la composition de l'interface, jamais son comportement fonctionnel.

# 6. Mouvement

## 6.1 Principes

**RC-07 — Mouvement utile.** Tout mouvement explique une relation, confirme une action, guide l'attention ou accompagne la contemplation. Une animation sans finalité identifiable est supprimée.

Le mouvement reste discret, interruptible et compatible avec les performances définies au Sprint 006. Aucune fonctionnalité ne dépend de la fin d'une animation.

## 6.2 Transitions

Les transitions d'état utilisent en priorité l'opacité et les transformations qui ne provoquent pas de recalcul continu de la mise en page. Les changements de couleur et de bordure restent suffisamment rapides pour conserver un retour immédiat.

## 6.3 Apparitions et disparitions

Une apparition peut associer une variation légère d'opacité et de position. L'amplitude reste faible afin de ne pas détourner l'attention de l'œuvre. Une disparition est plus courte et ne retarde jamais l'action suivante.

Les listes ne déclenchent pas de longues animations séquentielles. Le contenu essentiel devient disponible sans attendre une chorégraphie.

## 6.4 Réduction des mouvements

Lorsque l'utilisateur demande une réduction des mouvements, les translations, effets de parallaxe et transitions éditoriales sont supprimés ou remplacés par un changement d'opacité bref. Le contenu, l'ordre de lecture et les actions restent identiques.

## 6.5 Usages interdits

Sont interdits en V1 :

- mouvement permanent sans action utilisateur ;
- parallaxe importante ;
- clignotement ou pulsation répétée ;
- défilement forcé ;
- animation bloquant la navigation ;
- zoom automatique sur une œuvre ;
- son déclenché automatiquement ;
- effet 3D ou WebGL non prévu par une capacité validée.

---

# 7. Grille et mise en page

## 7.1 Conteneurs

**MEP-01 — Conteneurs.** Le contenu public utilise un conteneur fluide centré, limité à 1440 pixels. Les textes longs utilisent une largeur maximale de 720 pixels. Les contenus nécessitant une concentration renforcée peuvent utiliser une largeur de 560 pixels.

Les œuvres peuvent dépasser la largeur de lecture tout en respectant les marges de sécurité et leur ratio.

## 7.2 Colonnes

**MEP-02 — Grille.** La grille de référence utilise 4 colonnes en mobile, 8 en tablette et 12 sur bureau. Elle guide l'alignement mais ne force pas toutes les compositions à remplir chaque colonne.

## 7.3 Marges et gouttières

**MEP-03 — Marges.** Les marges latérales minimales sont 16 pixels en compact, 24 pixels en mobile large et tablette, puis 32 à 64 pixels sur bureau selon la largeur disponible. Les gouttières utilisent 16, 24 ou 32 pixels.

## 7.4 Largeurs de lecture

**MEP-04 — Lisibilité.** Une ligne de texte courant vise environ 45 à 75 caractères. Les textes éditoriaux ne sont pas étirés sur toute la largeur d'un grand écran. Les données courtes et les libellés fonctionnels peuvent utiliser une largeur intrinsèque.

## 7.5 Rythme et densité visuelle

**MEP-05 — Densité.** La galerie publique utilise une densité aérée. Les espaces privés peuvent adopter une densité plus compacte sans réduire les cibles interactives ni la lisibilité. Une même vue ne mélange pas plusieurs densités sans hiérarchie explicite.

---

# 8. Médias et œuvres

## 8.1 Formats et ratios

**RC-08 — Fidélité des médias.** Les formats visuels autorisés par l'architecture sont JPEG, PNG, WebP et AVIF. Le ratio original d'une œuvre est conservé sur sa fiche et dans toute vue destinée à la contemplation.

Les aperçus éditoriaux peuvent utiliser des ratios cohérents lorsque le contexte l'exige, sans modifier l'original ni masquer une partie significative de l'œuvre.

## 8.2 Recadrage

Le recadrage automatique d'une œuvre est interdit sur sa présentation principale. Un recadrage d'aperçu nécessite une zone focale définie ou une validation éditoriale. L'utilisateur doit toujours pouvoir accéder à une représentation complète.

## 8.3 Qualité et résolution

La résolution servie est adaptée à la taille d'affichage et à la densité de l'écran. Les originaux privés ne sont jamais exposés directement. La compression préserve les détails artistiques et évite les artefacts visibles dans les zones importantes.

## 8.4 Chargement progressif

L'espace nécessaire au média est réservé avant son chargement afin d'éviter les déplacements de mise en page. Un aperçu léger peut précéder la variante finale. Le chargement différé est utilisé hors de la zone visible initiale, sans retarder l'œuvre principale de la vue.

## 8.5 Images de remplacement

Une image indisponible est remplacée par une surface neutre indiquant clairement l'indisponibilité. Aucun visuel générique ne doit pouvoir être confondu avec l'œuvre réelle. L'absence d'image ne supprime pas le titre ni les informations essentielles.

## 8.6 Légendes et informations associées

Une légende reste visuellement secondaire mais lisible. Elle peut présenter le titre, l'année, la technique, les dimensions et l'état de disponibilité selon la vue et les règles fonctionnelles applicables. Elle ne doit pas être intégrée directement dans l'image.

---

# 9. Thèmes

## 9.1 Thème de référence

**RC-09 — Thème clair unique.** La V1 utilise un thème clair neutre comme thème de référence. Cette décision favorise une présentation éditoriale stable, limite la complexité initiale et garantit un contrôle précis du contraste autour des œuvres.

## 9.2 Thème alternatif éventuel

Aucun thème sombre ou alternatif n'est prévu en V1. Son introduction constituerait une évolution du Design System nécessitant des tokens sémantiques complets, des contrôles de contraste et une validation des médias dans les deux contextes.

## 9.3 Règles de contraste entre thèmes

Sans objet pour la V1. Les tokens conservent néanmoins des noms sémantiques afin de ne pas lier les composants à une couleur brute.

---

# 10. États visuels et interactifs

## 10.1 Par défaut

**ETAT-01 — Par défaut.** L'élément présente sa fonction, son libellé et son niveau de priorité sans dépendre d'une interaction préalable.

## 10.2 Survol

**ETAT-02 — Survol.** Sur un dispositif compatible, le survol fournit un retour discret par la couleur, la bordure, le soulignement ou une légère variation de surface. Il ne révèle jamais une information indispensable absente autrement.

## 10.3 Actif

**ETAT-03 — Actif.** Pendant l'activation, le contrôle produit un retour immédiat, plus marqué que le survol mais sans déplacement de mise en page.

## 10.4 Sélectionné

**ETAT-04 — Sélectionné.** Une sélection persistante est distinguée du survol et de l'activation par au moins un signe durable : fond, bordure, marque ou libellé accessible.

## 10.5 Focus

**ETAT-05 — Focus.** Le focus clavier est toujours visible au moyen d'un contour d'au moins 2 pixels offrant un contraste suffisant avec l'élément et son environnement. Il n'est jamais supprimé sans remplacement équivalent.

## 10.6 Désactivé

**ETAT-06 — Désactivé.** Un contrôle désactivé reste identifiable, ne répond pas aux interactions et expose son état aux technologies d'assistance. Lorsqu'une explication est nécessaire, elle reste accessible sans exiger l'activation du contrôle.

## 10.7 Chargement

**ETAT-07 — Chargement.** Le chargement conserve la structure de la vue, indique la progression lorsque sa durée est perceptible et empêche les activations multiples. Un squelette ne simule pas un contenu trompeur.

## 10.8 Succès

**ETAT-08 — Succès.** Une confirmation associe un message explicite à un signe visuel. Elle indique le résultat obtenu et, lorsque nécessaire, la prochaine action possible.

## 10.9 Avertissement

**ETAT-09 — Avertissement.** Un avertissement signale un risque ou une conséquence sans présenter l'action comme déjà échouée. Il ne repose jamais uniquement sur la couleur.

## 10.10 Erreur

**ETAT-10 — Erreur.** Une erreur est placée au plus près de son origine, explique ce qui doit être corrigé et conserve les données valides déjà fournies. Une erreur globale est annoncée et permet de retrouver les éléments concernés.

## 10.11 Vide

**ETAT-11 — Vide.** Un état vide distingue l'absence normale de contenu d'une erreur de chargement. Il explique la situation et propose une action uniquement lorsqu'elle est réellement disponible pour l'acteur concerné.

---

# 11. Accessibilité

AZUREUM vise le niveau **WCAG 2.2 AA** pour les vues et composants de la V1.

**ACC-01 — Contrastes.** Les textes courants atteignent un contraste minimal de 4,5:1 et les grands textes 3:1. Les composants, contours de focus et informations graphiques nécessaires atteignent au moins 3:1 avec leur environnement pertinent.

**ACC-02 — Navigation clavier.** Toute action réalisable au pointeur est réalisable au clavier. L'ordre de focus suit l'ordre logique du contenu et aucun piège clavier n'est introduit.

**ACC-03 — Focus visible.** Le focus reste visible, cohérent et non masqué par un élément persistant. Les dialogues gèrent l'entrée, la sortie et le retour du focus.

**ACC-04 — Structure.** Chaque vue possède un titre principal identifiable. Les niveaux de titres suivent la structure du contenu sans être choisis pour leur apparence.

**ACC-05 — Cibles.** Les actions principales offrent une cible d'au moins 44 × 44 pixels. Les actions compactes restent suffisamment espacées pour éviter les activations accidentelles.

**ACC-06 — Alternatives.** Toute image informative possède une alternative adaptée à sa fonction. Une œuvre reçoit une description utile et contextualisée ; une image purement décorative est ignorée par les technologies d'assistance.

**ACC-07 — Agrandissement.** Le contenu reste utilisable avec un zoom important et une augmentation de la taille du texte. Aucun texte essentiel n'est intégré dans une image.

**ACC-08 — Mouvement.** La préférence de réduction des mouvements est respectée conformément à la section 6.4. Aucune animation ne clignote à une fréquence susceptible de provoquer un risque.

**ACC-09 — Information.** La couleur, la position, la forme ou le son ne constituent jamais seuls le moyen de transmettre une information essentielle.

---

# 12. Responsive

**RSP-01 — Mobile-first.** La structure essentielle est conçue pour les espaces compacts avant d'être enrichie sur les écrans plus larges.

**RSP-02 — Continuité.** Le contenu, les actions et les états restent disponibles quelle que soit la largeur. Une adaptation peut modifier la composition mais jamais supprimer une capacité nécessaire.

**RSP-03 — Mobile.** Les contenus s'organisent principalement sur une colonne. Les actions prioritaires restent accessibles sans précision excessive et les médias respectent la largeur disponible.

**RSP-04 — Tablette.** La mise en page peut introduire plusieurs colonnes lorsque la lisibilité et les ratios des œuvres le permettent. La navigation reste adaptée aux usages tactiles.

**RSP-05 — Bureau.** Les grands écrans augmentent la respiration et les possibilités de composition sans étirer les textes ni agrandir artificiellement toutes les interfaces.

**RSP-06 — Contenu extrême.** Les composants supportent les libellés longs, les traductions futures, les médias verticaux ou panoramiques et les données absentes sans débordement ni perte d'information.

**RSP-07 — Entrées.** Les comportements ne dépendent pas du seul survol. Les dispositifs tactiles, le clavier et les pointeurs précis bénéficient d'interactions équivalentes.

---

# 13. Composants fondamentaux

Les composants fondamentaux fournissent uniquement des primitives transversales. Ils n'expriment aucune règle métier.

## 13.1 CMP-01 — Conteneur

Limite et centre la largeur d'un contenu tout en appliquant les marges latérales responsive. Il propose les largeurs principale, lecture et étroite définies par les tokens.

## 13.2 CMP-02 — Empilement

Organise verticalement ou horizontalement des éléments avec un espacement issu de l'échelle. Il ne détermine ni le contenu ni sa priorité fonctionnelle.

## 13.3 CMP-03 — Grille

Organise les contenus selon la grille responsive et permet aux éléments de s'étendre sur plusieurs colonnes. Elle ne présume pas du nombre d'œuvres ou d'éléments métier.

## 13.4 CMP-04 — Texte et titre

Applique les familles, niveaux, interlignes et largeurs de lecture. Le niveau visuel et le niveau sémantique restent distinguables afin de préserver la structure des titres.

## 13.5 CMP-05 — Bouton

Déclenche une action. Ses variantes expriment une priorité principale, secondaire, discrète ou destructive. Il couvre les états de focus, chargement et désactivation sans changer de largeur de manière inattendue.

## 13.6 CMP-06 — Lien

Conduit vers une destination. Il reste identifiable hors du seul contexte colorimétrique et ne doit pas être utilisé pour simuler une action applicative.

## 13.7 CMP-07 — Image d'œuvre

Présente une œuvre en préservant son ratio, son alternative, ses états de chargement et d'indisponibilité. Elle distingue clairement aperçu recadrable et représentation complète.

## 13.8 CMP-08 — Icône

Normalise la taille, l'alignement et l'accessibilité des pictogrammes. Une icône décorative est masquée aux technologies d'assistance ; une icône interactive reçoit un nom accessible par son contrôle.

---

# 14. Évolution du Design System

## 14.1 Source de vérité

Le présent document est la source normative des décisions de conception de la V1. L'implémentation matérialise ces décisions sans devenir une source concurrente.

## 14.2 Ajout d'un token

Un token est ajouté uniquement lorsqu'une valeur possède un rôle transversal et réutilisable. L'ajout précise son besoin, son rôle, ses relations avec l'échelle existante et ses conséquences d'accessibilité.

## 14.3 Ajout d'un composant

Un composant fondamental est ajouté lorsqu'un besoin transversal ne peut être satisfait clairement par composition des primitives existantes. Un composant propre à un domaine reste dans son module et ne rejoint pas automatiquement le Design System.

## 14.4 Dépréciation

Un élément déprécié conserve son identifiant documentaire, indique son remplacement et reste traçable jusqu'à la migration de ses usages. Un identifiant retiré n'est jamais réattribué.

---

# 15. Hors périmètre

Le Design System V1 ne définit pas :

- les règles métier et invariants ;
- les parcours et capacités fonctionnelles ;
- les contenus éditoriaux définitifs ;
- le modèle de données ;
- les contrats d'API ;
- les conventions techniques détaillées du code ;
- une bibliothèque UI tierce ;
- un thème sombre ;
- des scènes 3D ou effets WebGL ;
- les composants propres à une seule fonctionnalité ;
- les maquettes finales de chaque vue.

---

# 16. Traçabilité

Le Design System traduit visuellement les décisions des documents validés sans les modifier :

| Référence | Apport au Design System |
|---|---|
| Sprint 003-r1 | Capacités et exigences fonctionnelles à rendre utilisables |
| Sprint 004-r1 | États, invariants et règles métier à représenter sans les redéfinir |
| Sprint 005-r1 | Espaces, vues, navigation, parcours et états perceptibles |
| Sprint 006 | Rendu serveur, performance, accessibilité, médias et immersion proportionnée |
| Sprint 007 | Fondations techniques, qualité, tests et environnement de développement |

Les identifiants du présent document permettent aux critères de sprint, tests et composants futurs de référencer une décision sans la recopier.

---

# 17. Compléments au Design System

Les éléments de ce chapitre complètent les fondations du Design System sans modifier les règles précédemment définies. Ils précisent les conventions communes destinées à garantir une implémentation homogène de l'ensemble des composants.

---

## 17.1 Tokens sémantiques

Les composants utilisent exclusivement des tokens sémantiques.

Les couleurs, espacements, dimensions ou autres valeurs brutes ne sont jamais référencés directement dans les composants.

Les principaux tokens utilisés par la V1 sont notamment :

- Background
- Surface
- Surface Elevated
- Surface Inverse
- Border Subtle
- Border Default
- Border Strong
- Divider
- Text Primary
- Text Secondary
- Focus Ring
- Overlay
- Backdrop
- Selection
- Skeleton
- Placeholder

Leur implémentation exacte relève des variables CSS définies par le projet.

---

## 17.2 Convention de nommage

Les Design Tokens utilisent une convention de nommage unique afin de garantir leur cohérence et leur lisibilité.

Exemples :

```text
--color-background
--color-surface
--color-border-default

--space-4
--space-8
--space-16

--radius-sm
--radius-md

--shadow-sm
--shadow-md
--shadow-lg

--duration-fast
--duration-standard
--duration-slow
```

Toute nouvelle variable respecte cette convention.

---

## 17.3 Valeurs d'implémentation

Les valeurs numériques exactes des ombres, des courbes d'animation et des autres paramètres propres au moteur de rendu ne constituent pas des décisions documentaires de la V1.

Elles sont définies lors de l'implémentation, sous réserve de respecter les principes, Design Tokens et règles établis par le présent document.

---

## 17.4 Terminologie

Le Design System utilise la terminologie suivante.

| Terme | Définition |
|---|---|
| Background | Fond général d'une vue |
| Surface | Zone accueillant du contenu |
| Surface Elevated | Surface visuellement surélevée |
| Container | Conteneur limitant la largeur d'un contenu |
| Section | Groupe logique de contenu |
| Overlay | Voile placé derrière un dialogue |
| Dialog | Fenêtre modale |
| Skeleton | Représentation temporaire d'un contenu pendant son chargement |

---

## 17.5 Évolutions futures

Les éléments suivants ne font pas partie du périmètre de la V1 mais pourront être introduits dans une version ultérieure :

- opacités documentées ;
- niveaux de flou ;
- thèmes alternatifs ;
- Design Tokens de grille avancés ;
- Design Tokens dédiés aux animations complexes.

Toute évolution suit la gouvernance documentaire du projet.

---

# 18. Critères d'acceptation

- [ ] Chaque principe, règle structurante, catégorie de Design Tokens, règle responsive, règle d'accessibilité, état et composant fondamental possède un identifiant documentaire unique.
- [ ] Les palettes et associations de couleurs satisfont les contrastes documentés.
- [ ] Les composants utilisent exclusivement les Design Tokens définis par cette spécification.
- [ ] Les échelles typographiques et d'espacement couvrent les usages publics et privés sans valeur locale non justifiée.
- [ ] Les règles de mouvement respectent la réduction des mouvements et les contraintes de performance.
- [ ] La grille et les composants restent utilisables en mobile, tablette et bureau.
- [ ] Les œuvres peuvent être présentées sans recadrage destructif ni exposition d'un original privé.
- [ ] Les états interactifs restent perceptibles au clavier et sans dépendre uniquement de la couleur.
- [ ] Aucun composant fondamental n'introduit une règle métier ou une capacité nouvelle.
- [ ] Aucun choix d'implémentation technique non nécessaire n'est imposé par la spécification.
- [ ] La traçabilité vers les Sprints 003-r1 à 007 est vérifiée.
- [ ] L'audit final ne révèle aucune contradiction interne ni dette de conception bloquant l'implémentation.

---

# 19. Validation

| Élément | Valeur |
|---|---|
| Statut documentaire | En exploration |
| Verdict de la revue finale | À compléter |
| Réserves acceptées | À compléter |
| Décision du Product Owner | À compléter |
| Date de validation | À compléter |
| Commit de clôture | À compléter |
| Tag Git | À compléter |

---

# 20. Version

La présente spécification décrit le Design System V1 d'AZUREUM.

Sa validation établit la première référence officielle de conception de l'interface utilisateur.

Toute évolution ultérieure suit la gouvernance documentaire du projet et conserve l'historique des décisions remplacées, dépréciées ou archivées.

---

# 21. Références

- `PROJECT_STATE.md` ;
- `docs/QUICK_REFERENCE.md` ;
- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/sprints/sprint-008-design-system.md`.
