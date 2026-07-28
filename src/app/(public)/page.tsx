import {
  getGalleryArtworkBySlugs,
  getGalleryCollections,
} from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

export default function Home() {
  const collections = getGalleryCollections();

  const alphaCollection = collections.find(
    (collection) => collection.slug === "collection-alpha",
  );
  const betaCollection = collections.find(
    (collection) => collection.slug === "collection-beta",
  );

  if (
    collections.length !== 2 ||
    alphaCollection === undefined ||
    betaCollection === undefined
  ) {
    throw new Error(
      "The public homepage requires exactly collection-alpha and collection-beta.",
    );
  }

  const homepageCollections = [alphaCollection, betaCollection];

  return (
    <Container width="main">
      <Stack direction="vertical" gap="3xl">
        <Stack direction="vertical" gap="lg">
          <Heading as="h1" variant="display">
            AZUREUM
          </Heading>

          <Text as="p" variant="body-lg">
            AZUREUM est l&apos;espace officiel consacré au travail artistique de
            David. Découvrez ses collections, sa démarche et l&apos;évolution de
            son univers.
          </Text>

          <Link href="/collections">Découvrir les collections</Link>
        </Stack>

        <Stack direction="vertical" gap="xl">
          <Heading as="h2" variant="h2">
            Collections
          </Heading>

          <Grid gap="xl" role="list">
            {homepageCollections.map((collection, collectionIndex) => {
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

              if (
                collection.slug === "collection-alpha" &&
                previewArtwork.slug !== "study-01"
              ) {
                throw new Error(
                  'The public homepage requires "study-01" from "collection-alpha" as its main media.',
                );
              }

              return (
                <GridItem
                  key={collection.slug}
                  role="listitem"
                  span={{
                    compact: 4,
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

                    <Heading as="h3" variant="h2">
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
      </Stack>
    </Container>
  );
}
