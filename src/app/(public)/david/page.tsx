import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function DavidPage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="2xl">
        <Heading as="h1" variant="display">
          David Prieur-Gelis
        </Heading>

        <Stack direction="vertical" gap="md">
          <Text as="p" variant="sm">
            Contenu éditorial provisoire — en attente de validation par David et
            le Product Owner.
          </Text>
          <Heading as="h2" variant="h1">
            Présentation
          </Heading>
          <Text as="p" variant="body-lg">
            Cette section accueillera la présentation officielle de David dans
            le contexte d’AZUREUM.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Repères biographiques
          </Heading>
          <Text as="p" variant="body">
            Cette section accueillera uniquement les éléments biographiques
            utiles à la compréhension de son travail.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Démarche artistique
          </Heading>
          <Text as="p" variant="body">
            Cette section accueillera la présentation validée de sa démarche
            artistique.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Repères artistiques
          </Heading>
          <Text as="p" variant="body">
            Cette section accueillera les repères validés permettant de situer
            les expressions et l’évolution de son travail.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
