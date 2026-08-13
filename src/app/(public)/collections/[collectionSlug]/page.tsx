import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import {
  getGalleryArtworksByCollectionSlug,
  getGalleryCollectionBySlug,
} from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

import styles from "./page.module.css";

interface CollectionPageProps {
  params: Promise<{
    collectionSlug: string;
  }>;
}

interface ArtworkStyle extends CSSProperties {
  "--artwork-ratio": number;
}

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

        <div className={styles.artworkField} role="list">
          {artworks.map((artwork, artworkIndex) => {
            if (artwork.media.dimensions === null) {
              throw new Error(
                `Gallery artwork "${artwork.slug}" is missing media dimensions.`,
              );
            }

            return (
              <div
                className={styles.artwork}
                key={artwork.slug}
                role="listitem"
                style={
                  {
                    "--artwork-ratio":
                      artwork.media.dimensions.width /
                      artwork.media.dimensions.height,
                  } as ArtworkStyle
                }
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

                  <Stack
                    className={styles.artworkIdentity}
                    direction="vertical"
                    gap="xs"
                  >
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
                </Stack>
              </div>
            );
          })}
        </div>
      </Stack>
    </Container>
  );
}
