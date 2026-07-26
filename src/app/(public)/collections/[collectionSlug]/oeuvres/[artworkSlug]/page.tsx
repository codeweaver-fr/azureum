import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

interface ArtworkPageProps {
  params: Promise<{
    artworkSlug: string;
    collectionSlug: string;
  }>;
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { collectionSlug } = await params;

  return (
    <Container width="reading">
      <Stack direction="vertical" gap="lg">
        <Heading as="h1" variant="display">
          Œuvre
        </Heading>
        <Text as="p" variant="body-lg">
          Page structurelle en attente de son contenu.
        </Text>
        <Link href={`/collections/${collectionSlug}`}>
          Revenir à la collection
        </Link>
      </Stack>
    </Container>
  );
}
