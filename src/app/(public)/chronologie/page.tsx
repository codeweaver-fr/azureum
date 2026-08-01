import { getResolvedTimelineMarkers } from "@/modules/timeline/queries";
import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

import type { ResolvedTimelineMarker } from "@/modules/timeline/types";

type TimelinePresentationProps = Readonly<{
  markers: readonly ResolvedTimelineMarker[];
}>;

export function TimelinePresentation({ markers }: TimelinePresentationProps) {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="3xl">
        <Stack direction="vertical" gap="lg">
          <Heading as="h1" variant="display">
            Évolution dans le temps
          </Heading>

          <Text as="p" variant="body-lg">
            Cette chronologie temporaire présente des repères fictifs créés
            uniquement pour démontrer le fonctionnement de la galerie.
          </Text>
        </Stack>

        {markers.length === 0 ? (
          <Text as="p" variant="body">
            Aucun repère chronologique n’est disponible pour le moment.
          </Text>
        ) : (
          <ol>
            {markers.map((marker) => (
              <li key={marker.id}>
                <Stack direction="vertical" gap="lg">
                  <Stack direction="vertical" gap="sm">
                    <Text as="p" variant="body">
                      {marker.year}
                    </Text>

                    {marker.period !== null ? (
                      <Text as="p" variant="body">
                        {marker.period}
                      </Text>
                    ) : null}

                    <Heading as="h2" variant="h2">
                      {marker.title}
                    </Heading>

                    <Text as="p" variant="body">
                      {marker.summary}
                    </Text>
                  </Stack>

                  {marker.artworks.length > 0 ? (
                    <section aria-labelledby={`${marker.id}-artworks-heading`}>
                      <Stack direction="vertical" gap="sm">
                        <Heading
                          as="h3"
                          id={`${marker.id}-artworks-heading`}
                          variant="h2"
                        >
                          Œuvres associées
                        </Heading>

                        <ul>
                          {marker.artworks.map((artwork) => (
                            <li
                              key={`${artwork.collectionSlug}/${artwork.slug}`}
                            >
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

                  {marker.contents.length > 0 ? (
                    <section aria-labelledby={`${marker.id}-contents-heading`}>
                      <Stack direction="vertical" gap="sm">
                        <Heading
                          as="h3"
                          id={`${marker.id}-contents-heading`}
                          variant="h2"
                        >
                          Contenus associés
                        </Heading>

                        <ul>
                          {marker.contents.map((content) => (
                            <li key={content.slug}>
                              <Link href={`/contenus/${content.slug}`}>
                                {content.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Stack>
                    </section>
                  ) : null}
                </Stack>
              </li>
            ))}
          </ol>
        )}
      </Stack>
    </Container>
  );
}

export default function TimelinePage() {
  const markers = getResolvedTimelineMarkers();

  return <TimelinePresentation markers={markers} />;
}
