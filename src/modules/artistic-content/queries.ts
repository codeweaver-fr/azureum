import { getGalleryArtworkBySlugs } from "@/modules/gallery/queries";

import { artisticContents } from "./demo-data";

import type { ArtisticContent } from "./types";

export function getArtisticContents(): readonly ArtisticContent[] {
  return artisticContents;
}

export function getArtisticContentBySlug(
  contentSlug: string,
): ArtisticContent | undefined {
  return artisticContents.find((content) => content.slug === contentSlug);
}

export function getArtisticContentsByArtwork(
  collectionSlug: string,
  artworkSlug: string,
): readonly ArtisticContent[] | undefined {
  const artwork = getGalleryArtworkBySlugs(collectionSlug, artworkSlug);

  if (artwork === undefined) {
    return undefined;
  }

  return Object.freeze(
    artisticContents.filter((content) =>
      content.associatedArtworks.some(
        (reference) =>
          reference.collectionSlug === collectionSlug &&
          reference.artworkSlug === artworkSlug,
      ),
    ),
  );
}
