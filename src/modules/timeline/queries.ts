import { getArtisticContentBySlug } from "@/modules/artistic-content/queries";
import { getGalleryArtworkBySlugs } from "@/modules/gallery/queries";

import { timelineMarkers } from "./demo-data";

import type { ResolvedTimelineMarker, TimelineMarker } from "./types";

export function getTimelineMarkers(): readonly TimelineMarker[] {
  return Object.freeze(
    [...timelineMarkers].sort((left, right) => left.year - right.year),
  );
}

export function resolveTimelineMarker(
  marker: TimelineMarker,
): ResolvedTimelineMarker {
  const artworks = marker.artworkReferences.map((reference) => {
    const artwork = getGalleryArtworkBySlugs(
      reference.collectionSlug,
      reference.artworkSlug,
    );

    if (artwork === undefined) {
      throw new Error(
        `Invalid timeline data: artwork "${reference.collectionSlug}/${reference.artworkSlug}" referenced by marker "${marker.id}" does not exist.`,
      );
    }

    return artwork;
  });

  const contents = marker.contentReferences.map((reference) => {
    const content = getArtisticContentBySlug(reference.contentSlug);

    if (content === undefined) {
      throw new Error(
        `Invalid timeline data: artistic content "${reference.contentSlug}" referenced by marker "${marker.id}" does not exist.`,
      );
    }

    return content;
  });

  return Object.freeze({
    id: marker.id,
    year: marker.year,
    period: marker.period,
    title: marker.title,
    summary: marker.summary,
    artworks: Object.freeze(artworks),
    contents: Object.freeze(contents),
  });
}

export function getResolvedTimelineMarkers(): readonly ResolvedTimelineMarker[] {
  return Object.freeze(getTimelineMarkers().map(resolveTimelineMarker));
}
