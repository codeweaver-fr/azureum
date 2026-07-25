# Médias

Ce dossier contient les primitives contrôlées du Design System consacrées aux œuvres et
aux pictogrammes.

- `ArtworkImage` affiche exclusivement une œuvre AZUREUM. Son parent contrôle le ratio,
  le cadrage, la mise en page, la légende et les interactions.
- `Icon` expose un catalogue fermé de SVG internes utilisant `currentColor`.

Les deux composants autorisent `className` et interdisent `style`. Aucun contenu SVG
fourni par un appelant n'est accepté.
