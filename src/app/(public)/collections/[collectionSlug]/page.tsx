import { notFound } from "next/navigation";

import {
  getGalleryArtworksByCollectionSlug,
  getGalleryCollectionBySlug,
} from "@/modules/gallery/queries";
import type { GalleryMediaOrientation } from "@/modules/gallery/types";
import { Link } from "@/shared/components/interactions";
import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";
import type { GridItemProps } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

import styles from "./page.module.css";

interface CollectionPageProps {
  params: Promise<{
    collectionSlug: string;
  }>;
}

const artworkSpans: Record<
  GalleryMediaOrientation,
  NonNullable<GridItemProps["span"]>
> = {
  landscape: {
    compact: 4,
    tablet: 8,
    desktop: 8,
  },
  portrait: {
    compact: 4,
    tablet: 3,
    desktop: 4,
  },
  square: {
    compact: 4,
    tablet: 4,
    desktop: 5,
  },
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collectionSlug } = await params;

  const collection = getGalleryCollectionBySlug(collectionSlug);

  if (collection === undefined) {
    notFound();
  }

  const artworks = getGalleryArtworksByCollectionSlug(collection.slug);

  if (artworks === undefined) {
    notFound();
  }

  return (
    <Container width="main">
      <Stack direction="vertical" gap="3xl">
        <Stack className={styles.introduction} direction="vertical" gap="lg">
          <Heading as="h1" variant="display">
            {collection.title}
          </Heading>

          <Text as="p" variant="body-lg">
            {collection.intention}
          </Text>
        </Stack>

        <Grid className={styles.artworkField} gap="xl" role="list">
          {artworks.map((artwork, artworkIndex) => {
            if (artwork.media.dimensions === null) {
              throw new Error(
                `Gallery artwork "${artwork.slug}" is missing media dimensions.`,
              );
            }

            return (
              <GridItem
                className={styles.artwork}
                key={artwork.slug}
                role="listitem"
                span={artworkSpans[artwork.media.orientation]}
              >
                <Stack direction="vertical" gap="md">
                  <ArtworkImage
                    alt={artwork.media.alt}
                    className={styles.media}
                    height={artwork.media.dimensions.height}
                    preload={artworkIndex < 2}
                    src={artwork.media.src}
                    width={artwork.media.dimensions.width}
                  />

                  <Heading as="h2" variant="h2">
                    {artwork.title}
                  </Heading>

                  <Link
                    aria-label={`Voir ${artwork.title}`}
                    href={`/collections/${collection.slug}/oeuvres/${artwork.slug}`}
                  >
                    Découvrir l&apos;œuvre
                  </Link>
                </Stack>
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
