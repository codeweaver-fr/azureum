export type GalleryMediaOrientation = "portrait" | "landscape" | "square";

export type GalleryMediaDimensions = Readonly<{
  width: number;
  height: number;
}>;

export type GalleryMedia = Readonly<{
  src: string;
  alt: string;
  orientation: GalleryMediaOrientation;
  dimensions: GalleryMediaDimensions | null;
}>;

export type GalleryArtworkDimensions = Readonly<{
  widthCm: number;
  heightCm: number;
  depthCm: number | null;
}>;

export type GalleryArtwork = Readonly<{
  slug: string;
  collectionSlug: string;
  title: string;
  year: number;
  technique: string;
  support: string;
  dimensions: GalleryArtworkDimensions;
  shortDescription: string;
  artisticText: string;
  media: GalleryMedia;
}>;

export type GalleryCollection = Readonly<{
  slug: string;
  title: string;
  intention: string;
  previewArtworkSlug: string;
  artworkSlugs: readonly [string, string, string];
}>;
