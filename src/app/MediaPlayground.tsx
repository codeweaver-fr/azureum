"use client";

import { useState } from "react";

import { Button } from "@/shared/components/interactions";
import { ArtworkImage } from "@/shared/components/media";

const availableArtwork =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR42mNkYPj/n4GBgYGJAQoAHgQCAf9nJTQAAAAASUVORK5CYII=";
const unavailableArtwork = "data:image/png;base64,invalid";

export function MediaPlayground() {
  const [source, setSource] = useState(unavailableArtwork);
  const [errorObserved, setErrorObserved] = useState(false);

  return (
    <>
      <ArtworkImage
        alt="Démonstration d’une œuvre AZUREUM"
        height={200}
        onError={() => setErrorObserved(true)}
        src={source}
        width={200}
      />
      <output aria-live="polite">
        {errorObserved ? "Erreur observée" : "Chargement en cours"}
      </output>
      <Button onClick={() => setSource(availableArtwork)} variant="secondary">
        Afficher l’œuvre disponible
      </Button>
    </>
  );
}
