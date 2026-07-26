import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  galleryArtworks,
  galleryCollections,
} from "@/modules/gallery/demo-data";
import {
  getGalleryArtworkBySlugs,
  getGalleryArtworksByCollectionSlug,
  getGalleryCollectionBySlug,
  getGalleryCollections,
} from "@/modules/gallery/queries";

describe("gallery local data contract", () => {
  it("contains exactly two collections and six artworks", () => {
    expect(galleryCollections).toHaveLength(2);
    expect(galleryArtworks).toHaveLength(6);
  });

  it("references exactly three coherent artworks per collection", () => {
    for (const collection of galleryCollections) {
      expect(collection.artworkSlugs).toHaveLength(3);

      const artworks = galleryArtworks.filter(
        (artwork) => artwork.collectionSlug === collection.slug,
      );

      expect(artworks).toHaveLength(3);

      for (const artworkSlug of collection.artworkSlugs) {
        expect(artworks.some((artwork) => artwork.slug === artworkSlug)).toBe(
          true,
        );
      }
    }
  });

  it("uses unique collection and artwork slugs", () => {
    const collectionSlugs = galleryCollections.map(
      (collection) => collection.slug,
    );
    const artworkSlugs = galleryArtworks.map((artwork) => artwork.slug);

    expect(new Set(collectionSlugs).size).toBe(collectionSlugs.length);
    expect(new Set(artworkSlugs).size).toBe(artworkSlugs.length);
  });

  it("contains no orphan artwork", () => {
    const collectionSlugs = new Set(
      galleryCollections.map((collection) => collection.slug),
    );

    for (const artwork of galleryArtworks) {
      expect(collectionSlugs.has(artwork.collectionSlug)).toBe(true);
    }
  });

  it("uses a preview artwork belonging to the correct collection", () => {
    for (const collection of galleryCollections) {
      expect(
        collection.artworkSlugs.includes(collection.previewArtworkSlug),
      ).toBe(true);

      expect(
        galleryArtworks.some(
          (artwork) =>
            artwork.slug === collection.previewArtworkSlug &&
            artwork.collectionSlug === collection.slug,
        ),
      ).toBe(true);
    }
  });

  it("matches the validated local media inventory", () => {
    expect(
      galleryArtworks.map(({ slug, media }) => ({
        slug,
        src: media.src,
        orientation: media.orientation,
        dimensions: media.dimensions,
      })),
    ).toEqual([
      {
        slug: "study-01",
        src: "/gallery/study-01.webp",
        orientation: "portrait",
        dimensions: {
          width: 1024,
          height: 1536,
        },
      },
      {
        slug: "study-02",
        src: "/gallery/study-02.webp",
        orientation: "landscape",
        dimensions: {
          width: 1536,
          height: 1024,
        },
      },
      {
        slug: "study-03",
        src: "/gallery/study-03.webp",
        orientation: "square",
        dimensions: {
          width: 1254,
          height: 1254,
        },
      },
      {
        slug: "composition-a",
        src: "/gallery/composition-a.webp",
        orientation: "landscape",
        dimensions: {
          width: 1536,
          height: 1024,
        },
      },
      {
        slug: "composition-b",
        src: "/gallery/composition-b.webp",
        orientation: "portrait",
        dimensions: {
          width: 1024,
          height: 1536,
        },
      },
      {
        slug: "composition-c",
        src: "/gallery/composition-c.webp",
        orientation: "square",
        dimensions: {
          width: 1254,
          height: 1254,
        },
      },
    ]);
  });

  it("provides local WebP paths and non-empty alternative text", () => {
    for (const artwork of galleryArtworks) {
      expect(artwork.media.src).toMatch(/^\/gallery\/[a-z0-9-]+\.webp$/);
      expect(artwork.media.src).not.toMatch(/^https?:\/\//);
      expect(artwork.media.alt.trim()).not.toBe("");
    }
  });

  it("references media files that physically exist under public", () => {
    for (const artwork of galleryArtworks) {
      const relativePath = artwork.media.src.replace(/^\//, "");
      const absolutePath = join(process.cwd(), "public", relativePath);

      expect(
        existsSync(absolutePath),
        `Missing gallery media: ${artwork.media.src}`,
      ).toBe(true);
    }
  });

  it("provides valid intrinsic dimensions for every artwork", () => {
    for (const artwork of galleryArtworks) {
      const dimensions = artwork.media.dimensions;

      expect(dimensions).not.toBeNull();

      if (dimensions === null) {
        continue;
      }

      expect(dimensions.width).toBeGreaterThan(0);
      expect(dimensions.height).toBeGreaterThan(0);
    }
  });

  it("keeps intrinsic dimensions consistent with media orientation", () => {
    for (const artwork of galleryArtworks) {
      const dimensions = artwork.media.dimensions;

      expect(dimensions).not.toBeNull();

      if (dimensions === null) {
        continue;
      }

      switch (artwork.media.orientation) {
        case "portrait":
          expect(dimensions.height).toBeGreaterThan(dimensions.width);
          break;

        case "landscape":
          expect(dimensions.width).toBeGreaterThan(dimensions.height);
          break;

        case "square":
          expect(dimensions.width).toBe(dimensions.height);
          break;
      }
    }
  });

  it("keeps all local data frozen", () => {
    expect(Object.isFrozen(galleryCollections)).toBe(true);
    expect(Object.isFrozen(galleryArtworks)).toBe(true);

    for (const collection of galleryCollections) {
      expect(Object.isFrozen(collection)).toBe(true);
      expect(Object.isFrozen(collection.artworkSlugs)).toBe(true);
    }

    for (const artwork of galleryArtworks) {
      expect(Object.isFrozen(artwork)).toBe(true);
      expect(Object.isFrozen(artwork.media)).toBe(true);
      expect(Object.isFrozen(artwork.media.dimensions)).toBe(true);
    }
  });
});

describe("gallery local queries", () => {
  it("returns the frozen collection source", () => {
    expect(getGalleryCollections()).toBe(galleryCollections);
  });

  it("finds a collection by slug", () => {
    expect(getGalleryCollectionBySlug("collection-alpha")).toEqual(
      expect.objectContaining({
        slug: "collection-alpha",
        title: "Collection Alpha",
      }),
    );
  });

  it("does not resolve an unknown collection", () => {
    expect(getGalleryCollectionBySlug("unknown-collection")).toBeUndefined();
  });

  it("returns the three artworks in their declared order", () => {
    const artworks = getGalleryArtworksByCollectionSlug("collection-alpha");

    expect(Object.isFrozen(artworks)).toBe(true);
    expect(artworks?.map((artwork) => artwork.slug)).toEqual([
      "study-01",
      "study-02",
      "study-03",
    ]);
  });

  it("does not resolve artworks for an unknown collection", () => {
    expect(
      getGalleryArtworksByCollectionSlug("unknown-collection"),
    ).toBeUndefined();
  });

  it("finds an artwork from a coherent collection and artwork pair", () => {
    expect(getGalleryArtworkBySlugs("collection-alpha", "study-01")).toEqual(
      expect.objectContaining({
        slug: "study-01",
        collectionSlug: "collection-alpha",
      }),
    );
  });

  it("does not resolve an unknown artwork or collection", () => {
    expect(
      getGalleryArtworkBySlugs("collection-alpha", "unknown-artwork"),
    ).toBeUndefined();

    expect(
      getGalleryArtworkBySlugs("unknown-collection", "study-01"),
    ).toBeUndefined();
  });

  it("does not resolve an artwork through the wrong collection", () => {
    expect(
      getGalleryArtworkBySlugs("collection-alpha", "composition-a"),
    ).toBeUndefined();

    expect(
      getGalleryArtworkBySlugs("collection-beta", "study-01"),
    ).toBeUndefined();
  });
});
