import type { ArtisticContent } from "@/modules/artistic-content/types";
import type { GalleryArtwork } from "@/modules/gallery/types";

export type TimelineArtworkReference = Readonly<{
  collectionSlug: string;
  artworkSlug: string;
}>;

export type TimelineContentReference = Readonly<{
  contentSlug: string;
}>;

export type TimelineMarker = Readonly<{
  id: string;
  year: number;
  period: string;
  title: string;
  summary: string;
  artworkReferences: readonly TimelineArtworkReference[];
  contentReferences: readonly TimelineContentReference[];
}>;

export type ResolvedTimelineMarker = Readonly<{
  id: string;
  year: number;
  period: string;
  title: string;
  summary: string;
  artworks: readonly GalleryArtwork[];
  contents: readonly ArtisticContent[];
}>;
