export type ArtisticContentType =
  "text" | "exhibition" | "installation" | "event" | "ensemble";

export type ArtisticContentArtworkReference = Readonly<{
  collectionSlug: string;
  artworkSlug: string;
}>;

export type ArtisticContentMediaReference = ArtisticContentArtworkReference;

export type ArtisticContent = Readonly<{
  slug: string;
  type: ArtisticContentType;
  title: string;
  summary: string;
  body: readonly [string, ...string[]];
  media: ArtisticContentMediaReference | null;
  period: string | null;
  location: string | null;
  associatedArtworks: readonly ArtisticContentArtworkReference[];
}>;
