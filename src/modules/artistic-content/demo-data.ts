import type { ArtisticContent } from "./types";

export const artisticContents: readonly ArtisticContent[] = Object.freeze([
  Object.freeze({
    slug: "equilibres-silencieux",
    type: "text",
    title: "Texte fictif — Équilibres silencieux",
    summary:
      "Un texte de démonstration consacré aux rapports entre équilibre, matière et espace.",
    body: Object.freeze([
      "Ce contenu fictif observe la façon dont des formes distinctes peuvent partager un même espace sans perdre leur singularité.",
      "Il accompagne plusieurs études de démonstration et permet de vérifier les relations entre un texte artistique et des œuvres.",
    ]) as readonly [string, string],
    media: null,
    period: null,
    location: null,
    associatedArtworks: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-01",
      }),
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-02",
      }),
    ]),
  }),
  Object.freeze({
    slug: "formes-en-dialogue",
    type: "exhibition",
    title: "Exposition fictive — Formes en dialogue",
    summary:
      "Une exposition de démonstration réunissant des compositions aux rythmes contrastés.",
    body: Object.freeze([
      "Cette exposition fictive met en relation des œuvres de démonstration issues de collections différentes.",
      "Son parcours éditorial sert uniquement à valider la présentation d'une exposition, de son contexte et de ses œuvres associées.",
    ]) as readonly [string, string],
    media: Object.freeze({
      collectionSlug: "collection-beta",
      artworkSlug: "composition-a",
    }),
    period: "Printemps 2025 — période fictive",
    location: "Galerie de démonstration — lieu fictif",
    associatedArtworks: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-02",
      }),
      Object.freeze({
        collectionSlug: "collection-beta",
        artworkSlug: "composition-a",
      }),
    ]),
  }),
  Object.freeze({
    slug: "seuils-provisoires",
    type: "installation",
    title: "Installation fictive — Seuils provisoires",
    summary:
      "Une installation de démonstration organisée autour du passage et de la perception de l'espace.",
    body: Object.freeze([
      "Cette installation fictive associe plusieurs œuvres à un environnement temporaire sans créer de nouvelle chronologie.",
      "Elle permet d'exercer un contenu avec un lieu, une période et un média explicitement désigné.",
    ]) as readonly [string, string],
    media: Object.freeze({
      collectionSlug: "collection-alpha",
      artworkSlug: "study-03",
    }),
    period: "2025 — période fictive",
    location: "Espace d'étude — lieu fictif",
    associatedArtworks: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-03",
      }),
      Object.freeze({
        collectionSlug: "collection-beta",
        artworkSlug: "composition-b",
      }),
    ]),
  }),
]);
