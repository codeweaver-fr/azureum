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
        
        <Stack direction="vertical" gap="lg">
          <Heading as="h1" variant="display">
            {artwork.title}
          </Heading>

          <Text as="p" variant="body-lg">
            {artwork.artisticText}
          </Text>

          <Link href={`/collections/${collection.slug}`}>
            Revenir à la collection {collection.title}
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
