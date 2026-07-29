import { getTimelineMarkers } from "@/modules/timeline/queries";
import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

import type { TimelineMarker } from "@/modules/timeline/types";

type TimelinePresentationProps = Readonly<{
  markers: readonly TimelineMarker[];
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
                <Stack direction="vertical" gap="sm">
                  <Text as="p" variant="body">
                    {marker.year}
                  </Text>

                  {marker.period.length > 0 ? (
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
              </li>
            ))}
          </ol>
        )}
      </Stack>
    </Container>
  );
}

export default function TimelinePage() {
  const markers = getTimelineMarkers();

  return <TimelinePresentation markers={markers} />;
}
