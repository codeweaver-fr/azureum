import { notFound } from "next/navigation";

import {
  getGalleryArtworkBySlugs,
  getGalleryCollectionBySlug,
} from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

import styles from "./page.module.css";

interface ArtworkPageProps {
  params: Promise<{
    artworkSlug: string;
    collectionSlug: string;
  }>;
}

interface ArtworkDimensions {
  widthCm: number;
  heightCm: number;
  depthCm: number | null;
}

function formatArtworkDimensions({
  widthCm,
  heightCm,
  depthCm,
}: ArtworkDimensions) {
  const dimensions = [widthCm, heightCm];

  if (depthCm !== null) {
    dimensions.push(depthCm);
  }

  return `${dimensions.join(" × ")} cm`;
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { artworkSlug, collectionSlug } = await params;

  const collection = getGalleryCollectionBySlug(collectionSlug);
  const artwork = getGalleryArtworkBySlugs(collectionSlug, artworkSlug);

  if (collection === undefined || artwork === undefined) {
    notFound();
  }

  if (artwork.media.dimensions === null) {
    throw new Error(
      `Gallery artwork "${artwork.slug}" is missing media dimensions.`,
    );
  }

  const formattedDimensions = formatArtworkDimensions(artwork.dimensions);

  return (
    <Container width="reading">
      <article className={styles.artwork}>
        <div className={styles.media}>
          <ArtworkImage
            alt={artwork.media.alt}
            height={artwork.media.dimensions.height}
            preload
            src={artwork.media.src}
            width={artwork.media.dimensions.width}
          />
        </div>

        <div className={styles.content}>
          <header className={styles.header}>
            <Stack direction="vertical" gap="lg">
              <div className={styles.collection}>
                <Text as="p" variant="body-lg">
                  {collection.title}
                </Text>
              </div>

              <Heading as="h1" variant="display">
                {artwork.title}
              </Heading>

              <div className={styles.shortDescription}>
                <Text as="p" variant="body-lg">
                  {artwork.shortDescription}
                </Text>
              </div>
            </Stack>
          </header>

          <section
            aria-labelledby="artwork-characteristics-heading"
            className={styles.characteristics}
          >
            <Stack direction="vertical" gap="lg">
              <Heading
                as="h2"
                id="artwork-characteristics-heading"
                variant="h2"
              >
                Caractéristiques
              </Heading>

              <dl className={styles.characteristicsList}>
                <div className={styles.characteristic}>
                  <dt>Année</dt>
                  <dd>{artwork.year}</dd>
                </div>

                <div className={styles.characteristic}>
                  <dt>Technique</dt>
                  <dd>{artwork.technique}</dd>
                </div>

                <div className={styles.characteristic}>
                  <dt>Support</dt>
                  <dd>{artwork.support}</dd>
                </div>

                <div className={styles.characteristic}>
                  <dt>Dimensions</dt>
                  <dd>{formattedDimensions}</dd>
                </div>
              </dl>
            </Stack>
          </section>

          <section
            aria-labelledby="artwork-text-heading"
            className={styles.artisticText}
          >
            <Stack direction="vertical" gap="lg">
              <Heading as="h2" id="artwork-text-heading" variant="h2">
                À propos de l’œuvre
              </Heading>

              <Text as="p" variant="body-lg">
                {artwork.artisticText}
              </Text>
            </Stack>
          </section>

          <footer className={styles.footer}>
            <Link href={`/collections/${collection.slug}`}>
              Revenir à la collection {collection.title}
            </Link>
          </footer>
        </div>
      </article>
    </Container>
  );
}
