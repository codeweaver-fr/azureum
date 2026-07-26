import type { GalleryArtwork, GalleryCollection } from "./types";

export const galleryCollections: readonly GalleryCollection[] = Object.freeze([
  Object.freeze({
    slug: "collection-alpha",
    title: "Collection Alpha",
    intention:
      "Une collection fictive consacrée aux formes calmes, aux équilibres fragiles et aux espaces silencieux.",
    previewArtworkSlug: "study-01",
    artworkSlugs: Object.freeze([
      "study-01",
      "study-02",
      "study-03",
    ]) as readonly ["study-01", "study-02", "study-03"],
  }),
  Object.freeze({
    slug: "collection-beta",
    title: "Collection Bêta",
    intention:
      "Une collection fictive explorant le mouvement, les tensions graphiques et les rythmes abstraits.",
    previewArtworkSlug: "composition-a",
    artworkSlugs: Object.freeze([
      "composition-a",
      "composition-b",
      "composition-c",
    ]) as readonly ["composition-a", "composition-b", "composition-c"],
  }),
]);

export const galleryArtworks: readonly GalleryArtwork[] = Object.freeze([
  Object.freeze({
    slug: "study-01",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 01",
    artisticText:
      "Des formes suspendues semblent chercher un équilibre provisoire dans un espace volontairement silencieux.",
    media: Object.freeze({
      src: "/gallery/demo/study-01-vertical.png",
      alt: "Composition abstraite fictive verticale faite de formes superposées.",
      orientation: "portrait",
      dimensions: null,
    }),
  }),
  Object.freeze({
    slug: "study-02",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 02",
    artisticText:
      "Une ligne discrète traverse la composition et relie des volumes éloignés sans interrompre leur calme.",
    media: Object.freeze({
      src: "/gallery/demo/study-02-horizontal.png",
      alt: "Composition abstraite fictive horizontale traversée par une ligne centrale.",
      orientation: "landscape",
      dimensions: null,
    }),
  }),
  Object.freeze({
    slug: "study-03",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 03",
    artisticText:
      "Les volumes se rapprochent sans se toucher, laissant apparaître un vide central comme point de respiration.",
    media: Object.freeze({
      src: "/gallery/demo/study-03-square.png",
      alt: "Composition abstraite fictive carrée organisée autour d’un espace vide central.",
      orientation: "square",
      dimensions: null,
    }),
  }),
  Object.freeze({
    slug: "composition-a",
    collectionSlug: "collection-beta",
    title: "Composition fictive A",
    artisticText:
      "Des lignes ascendantes découpent l’espace et donnent à la composition un mouvement contenu.",
    media: Object.freeze({
      src: "/gallery/demo/composition-a-horizontal.png",
      alt: "Composition abstraite fictive horizontale structurée par des lignes ascendantes.",
      orientation: "landscape",
      dimensions: null,
    }),
  }),
  Object.freeze({
    slug: "composition-b",
    collectionSlug: "collection-beta",
    title: "Composition fictive B",
    artisticText:
      "Les masses graphiques s’écartent puis se répondent dans un rythme vertical volontairement irrégulier.",
    media: Object.freeze({
      src: "/gallery/demo/composition-b-vertical.png",
      alt: "Composition abstraite fictive verticale formée de masses graphiques espacées.",
      orientation: "portrait",
      dimensions: null,
    }),
  }),
  Object.freeze({
    slug: "composition-c",
    collectionSlug: "collection-beta",
    title: "Composition fictive C",
    artisticText:
      "Un ensemble de fragments géométriques converge vers le centre sans former de figure identifiable.",
    media: Object.freeze({
      src: "/gallery/demo/composition-c-square.png",
      alt: "Composition abstraite fictive carrée faite de fragments géométriques convergents.",
      orientation: "square",
      dimensions: null,
    }),
  }),
]);
