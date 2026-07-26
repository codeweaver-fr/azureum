import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function CollectionPage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          Collection
        </Heading>
        <Text as="p" variant="body-lg">
          Page structurelle en attente de son contenu.
        </Text>
      </Stack>
    </Container>
  );
}
