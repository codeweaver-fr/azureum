import { notFound } from "next/navigation";

import { getArtisticContentBySlug } from "@/modules/artistic-content/queries";
import type { ArtisticContentType } from "@/modules/artistic-content/types";
import { getGalleryArtworkBySlugs } from "@/modules/gallery/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

interface ArtisticContentPageProps {
  params: Promise<{
    contentSlug: string;
  }>;
}

const contentTypeLabels: Record<ArtisticContentType, string> = {
  text: "Texte",
  exhibition: "Exposition",
  installation: "Installation",
  event: "Événement",
  ensemble: "Ensemble",
};

export default async function ArtisticContentPage({
  params,
}: ArtisticContentPageProps) {
  const { contentSlug } = await params;
  const content = getArtisticContentBySlug(contentSlug);

  if (content === undefined) {
    notFound();
  }

  const mediaArtwork =
    content.media === null
      ? undefined
      : getGalleryArtworkBySlugs(
          content.media.collectionSlug,
          content.media.artworkSlug,
        );

  if (content.media !== null && mediaArtwork === undefined) {
    throw new Error(
      `Artistic content "${content.slug}" references an unknown media artwork.`,
    );
  }

  if (mediaArtwork?.media.dimensions === null) {
    throw new Error(
      `Gallery artwork "${mediaArtwork.slug}" is missing media dimensions.`,
    );
  }

  const associatedArtworks = content.associatedArtworks.map((reference) => {
    const artwork = getGalleryArtworkBySlugs(
      reference.collectionSlug,
      reference.artworkSlug,
    );

    if (artwork === undefined) {
      throw new Error(
        `Artistic content "${content.slug}" references unknown artwork "${reference.collectionSlug}/${reference.artworkSlug}".`,
      );
    }

    return artwork;
  });

  const hasContext = content.period !== null || content.location !== null;

  return (
    <Container width="reading">
      <article>
        <Stack direction="vertical" gap="3xl">
          <header>
            <Stack direction="vertical" gap="lg">
              <Text as="p" variant="sm">
                {contentTypeLabels[content.type]}
              </Text>

              <Heading as="h1" variant="display">
                {content.title}
              </Heading>

              <Text as="p" variant="body-lg">
                {content.summary}
              </Text>
            </Stack>
          </header>

          {mediaArtwork?.media.dimensions ? (
            <ArtworkImage
              alt={mediaArtwork.media.alt}
              height={mediaArtwork.media.dimensions.height}
              preload
              src={mediaArtwork.media.src}
              width={mediaArtwork.media.dimensions.width}
            />
          ) : null}

          {hasContext ? (
            <section aria-labelledby="artistic-content-context-heading">
              <Stack direction="vertical" gap="lg">
                <Heading
                  as="h2"
                  id="artistic-content-context-heading"
                  variant="h2"
                >
                  Informations
                </Heading>

                <dl>
                  {content.period !== null ? (
                    <div>
                      <dt>Période</dt>
                      <dd>{content.period}</dd>
                    </div>
                  ) : null}

                  {content.location !== null ? (
                    <div>
                      <dt>Lieu</dt>
                      <dd>{content.location}</dd>
                    </div>
                  ) : null}
                </dl>
              </Stack>
            </section>
          ) : null}

          <section aria-labelledby="artistic-content-body-heading">
            <Stack direction="vertical" gap="lg">
              <Heading as="h2" id="artistic-content-body-heading" variant="h2">
                Présentation
              </Heading>

              {content.body.map((paragraph) => (
                <Text as="p" key={paragraph} variant="body">
                  {paragraph}
                </Text>
              ))}
            </Stack>
          </section>

          {associatedArtworks.length > 0 ? (
            <section aria-labelledby="associated-artworks-heading">
              <Stack direction="vertical" gap="lg">
                <Heading as="h2" id="associated-artworks-heading" variant="h2">
                  Œuvres associées
                </Heading>

                <ul>
                  {associatedArtworks.map((artwork) => (
                    <li key={`${artwork.collectionSlug}/${artwork.slug}`}>
                      <Link
                        href={`/collections/${artwork.collectionSlug}/oeuvres/${artwork.slug}`}
                      >
                        {artwork.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Stack>
            </section>
          ) : null}
        </Stack>
      </article>
    </Container>
  );
}
