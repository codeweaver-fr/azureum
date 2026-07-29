import { describe, expect, it } from "vitest";

import { artisticContents } from "@/modules/artistic-content/demo-data";
import {
  getArtisticContentBySlug,
  getArtisticContents,
  getArtisticContentsByArtwork,
} from "@/modules/artistic-content/queries";
import { getGalleryArtworkBySlugs } from "@/modules/gallery/queries";

describe("artistic content local data contract", () => {
  it("contains exactly three fictitious contents of the selected types", () => {
    expect(artisticContents.map(({ type }) => type)).toEqual([
      "text",
      "exhibition",
      "installation",
    ]);
  });

  it("uses unique slugs and complete required editorial fields", () => {
    const slugs = artisticContents.map(({ slug }) => slug);

    expect(new Set(slugs).size).toBe(slugs.length);

    for (const content of artisticContents) {
      expect(content.slug).toMatch(/^[a-z0-9-]+$/);
      expect(content.title.trim()).not.toBe("");
      expect(content.summary.trim()).not.toBe("");
      expect(content.body.length).toBeGreaterThan(0);

      for (const paragraph of content.body) {
        expect(paragraph.trim()).not.toBe("");
      }
    }
  });

  it("keeps optional metadata either absent or non-empty", () => {
    for (const content of artisticContents) {
      if (content.period !== null) {
        expect(content.period.trim()).not.toBe("");
      }

      if (content.location !== null) {
        expect(content.location.trim()).not.toBe("");
      }
    }
  });

  it("associates every demo content with at least one existing artwork", () => {
    for (const content of artisticContents) {
      expect(content.associatedArtworks.length).toBeGreaterThan(0);

      for (const reference of content.associatedArtworks) {
        expect(
          getGalleryArtworkBySlugs(
            reference.collectionSlug,
            reference.artworkSlug,
          ),
        ).toBeDefined();
      }
    }
  });

  it("declares media explicitly through an existing artwork reference", () => {
    for (const content of artisticContents) {
      if (content.media === null) {
        continue;
      }

      expect(
        getGalleryArtworkBySlugs(
          content.media.collectionSlug,
          content.media.artworkSlug,
        ),
      ).toBeDefined();
    }
  });

  it("exercises a many-to-many relation without deriving it", () => {
    const study02Contents = getArtisticContentsByArtwork(
      "collection-alpha",
      "study-02",
    );

    expect(study02Contents?.map(({ slug }) => slug)).toEqual([
      "equilibres-silencieux",
      "formes-en-dialogue",
    ]);
    expect(
      artisticContents.some((content) => content.associatedArtworks.length > 1),
    ).toBe(true);
  });

  it("keeps an existing artwork without associated content", () => {
    expect(
      getArtisticContentsByArtwork("collection-beta", "composition-c"),
    ).toEqual([]);
  });

  it("keeps all source data and nested values frozen", () => {
    expect(Object.isFrozen(artisticContents)).toBe(true);

    for (const content of artisticContents) {
      expect(Object.isFrozen(content)).toBe(true);
      expect(Object.isFrozen(content.body)).toBe(true);
      expect(Object.isFrozen(content.associatedArtworks)).toBe(true);

      if (content.media !== null) {
        expect(Object.isFrozen(content.media)).toBe(true);
      }

      for (const reference of content.associatedArtworks) {
        expect(Object.isFrozen(reference)).toBe(true);
      }
    }
  });
});

describe("artistic content local queries", () => {
  it("returns the stable source collection", () => {
    expect(getArtisticContents()).toBe(artisticContents);
  });

  it("finds a content by slug", () => {
    expect(getArtisticContentBySlug("formes-en-dialogue")).toEqual(
      expect.objectContaining({
        type: "exhibition",
        title: "Exposition fictive — Formes en dialogue",
      }),
    );
  });

  it("does not resolve an unknown content", () => {
    expect(getArtisticContentBySlug("unknown-content")).toBeUndefined();
  });

  it("returns frozen derived results for a valid artwork", () => {
    const contents = getArtisticContentsByArtwork(
      "collection-alpha",
      "study-01",
    );

    expect(Object.isFrozen(contents)).toBe(true);
    expect(contents?.map(({ slug }) => slug)).toEqual([
      "equilibres-silencieux",
    ]);
  });

  it("does not resolve contents through an unknown or incoherent artwork pair", () => {
    expect(
      getArtisticContentsByArtwork("collection-alpha", "unknown-artwork"),
    ).toBeUndefined();
    expect(
      getArtisticContentsByArtwork("collection-beta", "study-01"),
    ).toBeUndefined();
  });
});
