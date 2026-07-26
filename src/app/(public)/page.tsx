import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function Home() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          AZUREUM
        </Heading>
        <Text as="p" variant="body-lg">
          Page d&apos;entrée publique en cours de construction.
        </Text>
      </Stack>
    </Container>
  );
}
