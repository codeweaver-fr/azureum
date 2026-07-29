import { describe, expect, it } from "vitest";

import { timelineMarkers } from "@/modules/timeline/demo-data";
import {
  getResolvedTimelineMarkers,
  getTimelineMarkers,
  resolveTimelineMarker,
} from "@/modules/timeline/queries";

import type { TimelineMarker } from "@/modules/timeline/types";

describe("timeline demo data", () => {
  it("contains exactly three markers", () => {
    expect(timelineMarkers).toHaveLength(3);
  });

  it("contains the expected chronological years", () => {
    expect(timelineMarkers.map((marker) => marker.year)).toEqual([
      2023, 2024, 2025,
    ]);
  });

  it("contains unique marker ids", () => {
    const ids = timelineMarkers.map((marker) => marker.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it("contains at least one linked resource for every marker", () => {
    for (const marker of timelineMarkers) {
      expect(
        marker.artworkReferences.length + marker.contentReferences.length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains only existing gallery artwork references", () => {
    expect(() => getResolvedTimelineMarkers()).not.toThrow();

    const resolvedMarkers = getResolvedTimelineMarkers();

    expect(resolvedMarkers.flatMap((marker) => marker.artworks)).toHaveLength(
      6,
    );
  });

  it("contains only existing artistic content references", () => {
    const resolvedMarkers = getResolvedTimelineMarkers();

    expect(resolvedMarkers.flatMap((marker) => marker.contents)).toHaveLength(
      3,
    );
  });

  it("returns markers in chronological order", () => {
    expect(getTimelineMarkers().map((marker) => marker.year)).toEqual([
      2023, 2024, 2025,
    ]);
  });

  it("resolves a marker without linked resources", () => {
    const emptyMarker: TimelineMarker = Object.freeze({
      id: "empty-marker",
      year: 2026,
      period: "Période fictive",
      title: "Repère fictif vide",
      summary: "Repère utilisé pour vérifier la résolution sans ressource.",
      artworkReferences: Object.freeze([]),
      contentReferences: Object.freeze([]),
    });

    expect(resolveTimelineMarker(emptyMarker)).toEqual({
      id: "empty-marker",
      year: 2026,
      period: "Période fictive",
      title: "Repère fictif vide",
      summary: "Repère utilisé pour vérifier la résolution sans ressource.",
      artworks: [],
      contents: [],
    });
  });

  it("throws when an artwork reference does not exist", () => {
    const invalidMarker: TimelineMarker = Object.freeze({
      id: "invalid-artwork",
      year: 2026,
      period: "Période fictive",
      title: "Repère fictif invalide",
      summary: "Repère utilisé pour vérifier une référence invalide.",
      artworkReferences: Object.freeze([
        Object.freeze({
          collectionSlug: "collection-alpha",
          artworkSlug: "unknown-artwork",
        }),
      ]),
      contentReferences: Object.freeze([]),
    });

    expect(() => resolveTimelineMarker(invalidMarker)).toThrow(
      'Invalid timeline data: artwork "collection-alpha/unknown-artwork" referenced by marker "invalid-artwork" does not exist.',
    );
  });

  it("throws when an artistic content reference does not exist", () => {
    const invalidMarker: TimelineMarker = Object.freeze({
      id: "invalid-content",
      year: 2026,
      period: "Période fictive",
      title: "Repère fictif invalide",
      summary: "Repère utilisé pour vérifier une référence invalide.",
      artworkReferences: Object.freeze([]),
      contentReferences: Object.freeze([
        Object.freeze({
          contentSlug: "unknown-content",
        }),
      ]),
    });

    expect(() => resolveTimelineMarker(invalidMarker)).toThrow(
      'Invalid timeline data: artistic content "unknown-content" referenced by marker "invalid-content" does not exist.',
    );
  });

  it("exposes immutable timeline collections", () => {
    expect(Object.isFrozen(timelineMarkers)).toBe(true);
    expect(Object.isFrozen(getTimelineMarkers())).toBe(true);
    expect(Object.isFrozen(getResolvedTimelineMarkers())).toBe(true);

    for (const marker of timelineMarkers) {
      expect(Object.isFrozen(marker)).toBe(true);
      expect(Object.isFrozen(marker.artworkReferences)).toBe(true);
      expect(Object.isFrozen(marker.contentReferences)).toBe(true);
    }
  });
});
