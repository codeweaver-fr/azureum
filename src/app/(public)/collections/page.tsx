import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function CollectionsPage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          Collections
        </Heading>
        <Text as="p" variant="body-lg">
          Page structurelle en attente de ses collections.
        </Text>
      </Stack>
    </Container>
  );
}
