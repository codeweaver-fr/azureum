import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function ArtisticContentPage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          Contenu artistique
        </Heading>
        <Text as="p" variant="body-lg">
          Page structurelle en attente de son contenu éditorial.
        </Text>
      </Stack>
    </Container>
  );
}
