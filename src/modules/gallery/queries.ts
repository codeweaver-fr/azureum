import { galleryArtworks, galleryCollections } from "./demo-data";

import type { GalleryArtwork, GalleryCollection } from "./types";

export function getGalleryCollections(): readonly GalleryCollection[] {
  return galleryCollections;
}

export function getGalleryCollectionBySlug(
  collectionSlug: string,
): GalleryCollection | undefined {
  return galleryCollections.find(
    (collection) => collection.slug === collectionSlug,
  );
}

export function getGalleryArtworksByCollectionSlug(
  collectionSlug: string,
): readonly GalleryArtwork[] | undefined {
  const collection = getGalleryCollectionBySlug(collectionSlug);

  if (collection === undefined) {
    return undefined;
  }

  return Object.freeze(
    collection.artworkSlugs.map((artworkSlug) => {
      const artwork = galleryArtworks.find(
        (candidate) =>
          candidate.slug === artworkSlug &&
          candidate.collectionSlug === collection.slug,
      );

      if (artwork === undefined) {
        throw new Error(
          `Invalid gallery data: artwork "${artworkSlug}" is missing from collection "${collection.slug}".`,
        );
      }

      return artwork;
    }),
  );
}

export function getGalleryArtworkBySlugs(
  collectionSlug: string,
  artworkSlug: string,
): GalleryArtwork | undefined {
  const collection = getGalleryCollectionBySlug(collectionSlug);

  if (
    collection === undefined ||
    !collection.artworkSlugs.includes(artworkSlug)
  ) {
    return undefined;
  }

  return galleryArtworks.find(
    (artwork) =>
      artwork.slug === artworkSlug &&
      artwork.collectionSlug === collection.slug,
  );
}
