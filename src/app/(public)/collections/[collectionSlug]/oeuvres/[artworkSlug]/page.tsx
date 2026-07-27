import { notFound } from "next/navigation";

import {
  getGalleryArtworkBySlugs,
  getGalleryCollectionBySlug,
} from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

interface ArtworkPageProps {
  params: Promise<{
    artworkSlug: string;
    collectionSlug: string;
  }>;
}

function formatArtworkDimensions({
  widthCm,
  heightCm,
  depthCm,
}: {
  widthCm: number;
  heightCm: number;
  depthCm: number | null;
}) {
  const values = [widthCm, heightCm];

  if (depthCm !== null) {
    values.push(depthCm);
  }

  return `${values.join(" × ")} cm`;
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
      <Stack direction="vertical" gap="xl">
        <ArtworkImage
          alt={artwork.media.alt}
          height={artwork.media.dimensions.height}
          preload
          src={artwork.media.src}
          width={artwork.media.dimensions.width}
        />

        <Stack direction="vertical" gap="xl">
          <Stack direction="vertical" gap="lg">
            <Heading as="h1" variant="display">
              {artwork.title}
            </Heading>

            <Text as="p" variant="body-lg">
              {collection.title}
            </Text>
          </Stack>

          <dl>
            <Stack direction="vertical" gap="lg">
              <div>
                <dt>Année</dt>
                <dd>{artwork.year}</dd>
              </div>

              <div>
                <dt>Technique</dt>
                <dd>{artwork.technique}</dd>
              </div>

              <div>
                <dt>Support</dt>
                <dd>{artwork.support}</dd>
              </div>

              <div>
                <dt>Dimensions</dt>
                <dd>{formattedDimensions}</dd>
              </div>
            </Stack>
          </dl>

          <Stack direction="vertical" gap="lg">
            <Text as="p" variant="body-lg">
              {artwork.shortDescription}
            </Text>

            <Text as="p" variant="body-lg">
              {artwork.artisticText}
            </Text>
          </Stack>

          <Link href={`/collections/${collection.slug}`}>
            Revenir à la collection {collection.title}
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
