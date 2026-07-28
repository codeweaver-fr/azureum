import { Container, Stack } from "@/shared/components/layout";
import { Link } from "@/shared/components/interactions";
import { Heading, Text } from "@/shared/components/typography";

export default function Home() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          AZUREUM
        </Heading>

        <Text as="p" variant="body-lg">
          AZUREUM est l&apos;espace officiel consacré au travail artistique de
          David. Découvrez ses collections, sa démarche et l&apos;évolution de
          son univers.
        </Text>

        <Link href="/collections">Découvrir les collections</Link>
      </Stack>
    </Container>
  );
}
