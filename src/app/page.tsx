import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function Home() {
  return (
    <main>
      <Container width="reading">
        <Stack direction="vertical" gap="lg">
          <Heading as="h1" variant="display">
            AZUREUM
          </Heading>
          <Text as="p" variant="body-lg">
            Les fondations techniques de la galerie sont en cours de
            construction.
          </Text>
          <Link href="/design-system">Consulter la référence technique</Link>
        </Stack>
      </Container>
    </main>
  );
}
