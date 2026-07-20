# Vision produit — AZUREUM

## Statut

Première vision fondatrice du produit.

Ce document décrit la direction générale d’AZUREUM. Il ne constitue pas encore un cahier des charges fonctionnel détaillé.

## Raison d’être

AZUREUM est une galerie d’art numérique conçue pour présenter et commercialiser les œuvres d’un artiste dans un environnement élégant, clair, fiable et sécurisé.

Le projet doit offrir une expérience plus personnelle et plus valorisante qu’une boutique en ligne générique, tout en restant suffisamment simple pour être utilisé par un artiste qui ne possède pas nécessairement de compétences techniques.

## Problème identifié

Les solutions généralistes de vente en ligne permettent de vendre des produits, mais elles ne sont pas toujours adaptées à la présentation d’œuvres originales.

Elles peuvent notamment :

- banaliser les œuvres en les présentant comme de simples produits ;
- limiter la mise en scène artistique ;
- complexifier la gestion pour l’artiste ;
- manquer de transparence sur l’authenticité, la disponibilité et le parcours d’une œuvre ;
- produire une expérience d’achat impersonnelle.

AZUREUM doit répondre à ces limites avec un produit pensé spécifiquement pour l’art.

## Proposition de valeur

AZUREUM doit permettre :

- à un visiteur de découvrir un univers artistique cohérent ;
- à un acheteur de comprendre l’histoire, les caractéristiques et le statut d’une œuvre ;
- à un membre d’acheter une œuvre dans un cadre rassurant ;
- à l’artiste de gérer ses œuvres et leur disponibilité ;
- à l’administrateur de superviser le contenu, les ventes et le fonctionnement de la galerie.

## Positionnement initial

La première version d’AZUREUM est une galerie numérique premium consacrée à un seul artiste.

AZUREUM n’est pas, dans sa V1 :

- une marketplace ouverte ;
- un réseau social ;
- une plateforme NFT ;
- un site d’enchères ;
- un constructeur de boutiques généraliste.

## Publics principaux

### Visiteur

Une personne qui découvre l’artiste, consulte les œuvres et explore les collections sans être nécessairement inscrite.

### Acheteur potentiel

Une personne intéressée par une œuvre et qui cherche des informations précises avant de prendre une décision.

### Membre

Une personne disposant d’un compte lui permettant de réaliser et suivre ses achats.

### Artiste

La personne dont les œuvres sont présentées et commercialisées dans la galerie.

### Administrateur

La personne chargée de superviser la plateforme, les contenus, les utilisateurs et les opérations sensibles.

Les frontières exactes entre les rôles seront définies dans un Sprint ultérieur.

## Ambition de la V1

La V1 doit fournir une galerie mono-artiste stable et exploitable comprenant notamment :

- une galerie publique ;
- des collections ;
- des fiches détaillées pour les œuvres ;
- la gestion de la disponibilité ;
- l’achat à prix fixe ;
- un paiement sécurisé ;
- un espace membre ;
- un espace de gestion pour l’artiste ;
- une administration contrôlée ;
- le suivi des commandes ;
- la gestion de certificats d’authenticité.

Cette liste exprime une intention produit. Elle devra être affinée et contractualisée avant toute implémentation.

## Ambition de la V2

La V2 pourra introduire un moteur d’enchères inspiré des mécanismes utilisés par des plateformes comme eBay, notamment :

- offres manuelles ;
- enchère maximale automatisée ;
- incréments contrôlés ;
- historique des offres ;
- prolongation anti-snipe ;
- notifications ;
- règles de clôture ;
- délai de paiement.

Le fonctionnement exact des enchères devra être conçu, documenté et testé dans une phase indépendante.

## Principes d’expérience

AZUREUM doit être :

- élégant sans être démonstratif ;
- immersif sans nuire à la lisibilité ;
- rassurant lors des actions sensibles ;
- accessible sur ordinateur et mobile ;
- compréhensible sans connaissances techniques ;
- cohérent dans son vocabulaire et ses interactions ;
- respectueux de la valeur artistique des œuvres.

## Principes de construction

Le produit sera développé selon les règles suivantes :

- compréhension du besoin avant implémentation ;
- contrat fonctionnel avant code ;
- modèle métier avant base de données ;
- permissions avant règles de sécurité ;
- migrations versionnées pour toute évolution de données ;
- tests adaptés aux risques de chaque fonctionnalité ;
- un seul Sprint actif à la fois ;
- validation explicite avant le Sprint suivant ;
- aucune fonctionnalité ajoutée implicitement.

## Critère de réussite général

AZUREUM sera considéré comme réussi si la plateforme permet à l’artiste de présenter et vendre ses œuvres de manière professionnelle, tout en offrant aux visiteurs et acheteurs une expérience élégante, compréhensible et digne de confiance.

## Questions encore ouvertes

Les sujets suivants ne sont pas encore décidés :

- identité exacte de l’artiste dans la documentation publique ;
- niveau d’autonomie accordé au rôle artiste ;
- distinction définitive entre membre et acheteur ;
- processus exact de création et de remise des certificats ;
- gestion de la livraison ou du retrait des œuvres ;
- politique d’annulation et de remboursement ;
- gestion fiscale et juridique des ventes ;
- périmètre précis de l’administration ;
- identité visuelle et direction artistique ;
- technologies utilisées.

Ces sujets feront l’objet de Sprints dédiés.
