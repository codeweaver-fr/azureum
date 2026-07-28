import {
  getGalleryArtworkBySlugs,
  getGalleryCollections,
} from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

export default function CollectionsPage() {
  const collections = getGalleryCollections();

  return (
    <Container width="main">
      <Stack direction="vertical" gap="3xl">
        <Heading as="h1" variant="display">
          Collections
        </Heading>

        <Grid gap="xl" role="list">
          {collections.map((collection, collectionIndex) => {
            const previewArtwork = getGalleryArtworkBySlugs(
              collection.slug,
              collection.previewArtworkSlug,
            );

            if (
              previewArtwork === undefined ||
              previewArtwork.media.dimensions === null
            ) {
              throw new Error(
                `Gallery collection "${collection.slug}" has an invalid preview artwork.`,
              );
            }

            return (
              <GridItem
                key={collection.slug}
                role="listitem"
                span={{
                  compact: 4,
                  tablet: 6,
                  desktop: 6,
                }}
              >
                <Stack direction="vertical" gap="md">
                  <ArtworkImage
                    alt={previewArtwork.media.alt}
                    height={previewArtwork.media.dimensions.height}
                    preload={collectionIndex === 0}
                    src={previewArtwork.media.src}
                    width={previewArtwork.media.dimensions.width}
                  />

                  <Heading as="h2" variant="h2">
                    {collection.title}
                  </Heading>

                  <Text as="p" variant="body">
                    {collection.intention}
                  </Text>

                  <Link
                    aria-label={`Découvrir ${collection.title}`}
                    href={`/collections/${collection.slug}`}
                  >
                    Découvrir la collection
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
