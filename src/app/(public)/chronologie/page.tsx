import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function TimelinePage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          Évolution dans le temps
        </Heading>
        <Text as="p" variant="body-lg">
          Page structurelle en attente de sa chronologie.
        </Text>
      </Stack>
    </Container>
  );
}
