"use client";

import { useState } from "react";

import { Button } from "@/shared/components/interactions";
import { Stack } from "@/shared/components/layout";
import { ArtworkImage } from "@/shared/components/media";
import { Text } from "@/shared/components/typography";

const availableArtwork = "/design-system/technical-artwork.png";
const unavailableArtwork = "data:image/png;base64,invalid";

export function MediaValidation() {
  const [source, setSource] = useState(unavailableArtwork);
  const [errorObserved, setErrorObserved] = useState(false);

  return (
    <Stack direction="vertical" gap="md">
      <ArtworkImage
        alt="Composition abstraite technique AZUREUM"
        height={400}
        onError={() => setErrorObserved(true)}
        src={source}
        width={600}
      />
      <Text as="p" variant="sm">
        Le placeholder conserve l’espace de l’image intrinsèque.
      </Text>
      <output aria-live="polite">
        {errorObserved ? "Erreur observée" : "Chargement en cours"}
      </output>
      <Button onClick={() => setSource(availableArtwork)} variant="secondary">
        Afficher l’image disponible
      </Button>
    </Stack>
  );
}
