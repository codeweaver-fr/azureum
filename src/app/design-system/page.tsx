import { Button, Link } from "@/shared/components/interactions";
import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";
import { ArtworkImage, Icon } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

import { MediaValidation } from "./MediaValidation";
import styles from "./page.module.css";

const colors = [
  ["Bleu AZUREUM", styles.brandBlue],
  ["Or fumé", styles.brandGold],
  ["Terre cuite", styles.brandTerracotta],
  ["Blanc galerie", styles.neutralWhite],
  ["Gris pierre", styles.neutralStone],
  ["Noir minéral", styles.neutralBlack],
] as const;

const buttonVariants = [
  "primary",
  "secondary",
  "subtle",
  "destructive",
] as const;
const buttonSizes = ["compact", "standard", "comfortable"] as const;

function SectionTitle({
  children,
  identifier,
}: {
  children: string;
  identifier: string;
}) {
  return (
    <Stack direction="vertical" gap="xs">
      <span className={styles.eyebrow}>{identifier}</span>
      <Heading as="h2" variant="h1">
        {children}
      </Heading>
    </Stack>
  );
}

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <Container width="main">
        <Stack direction="vertical" gap="2xl">
          <header className={styles.header} id="introduction">
            <Stack direction="vertical" gap="lg">
              <span className={styles.eyebrow}>Sprint 009</span>
              <Heading as="h1" variant="display">
                Référence technique du Design System AZUREUM
              </Heading>
              <Text as="p" variant="body-lg">
                Cette page ne constitue pas une interface produit.
              </Text>
              <Text as="p" variant="body">
                Elle rassemble les fondations et primitives officiellement
                implémentées afin de permettre leur validation visuelle,
                responsive et accessible.
              </Text>
              <Link href="#fondations">Commencer la validation</Link>
            </Stack>
          </header>

          <section className={styles.section} id="fondations">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="DT-01 à DT-10">
                Introduction et fondations
              </SectionTitle>
              <Grid className={styles.examples} gap="lg">
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Typographies officielles
                      </Heading>
                      <Text as="p" variant="body">
                        Inter porte les contenus fonctionnels et la lecture
                        courante.
                      </Text>
                      <p className={styles.editorialContext}>
                        Cormorant Garamond porte l’expression éditoriale.
                      </p>
                    </Stack>
                  </div>
                </GridItem>
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Espacements principaux
                      </Heading>
                      {[
                        ["8", styles.space8],
                        ["16", styles.space16],
                        ["24", styles.space24],
                        ["32", styles.space32],
                      ].map(([label, className]) => (
                        <Stack direction="horizontal" gap="md" key={label}>
                          <Text as="span" variant="sm">
                            {label}
                          </Text>
                          <span
                            aria-label={`Espacement ${label}`}
                            className={`${styles.spacingSample} ${className}`}
                            role="img"
                          />
                        </Stack>
                      ))}
                    </Stack>
                  </div>
                </GridItem>
              </Grid>
            </Stack>
          </section>

          <section className={styles.section} id="couleurs">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="DT-01, DT-04, DT-06, DT-07">
                Couleurs et tokens essentiels
              </SectionTitle>

              <Grid className={styles.examples} gap="md">
                {colors.map(([name, className]) => (
                  <GridItem
                    key={name}
                    span={{ compact: 2, tablet: 2, desktop: 2 }}
                  >
                    <Stack direction="vertical" gap="xs">
                      <span
                        aria-label={`Couleur ${name}`}
                        className={`${styles.swatch} ${className}`}
                        role="img"
                      />
                      <Text as="span" variant="sm">
                        {name}
                      </Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>

              <Grid className={styles.examples} gap="lg">
                <GridItem span={{ compact: 4, tablet: 4, desktop: 4 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Tailles d’icônes
                      </Heading>
                      <Stack direction="horizontal" gap="lg">
                        <Icon name="loading" size="small" />
                        <Icon name="loading" size="medium" />
                        <Icon name="loading" size="large" />
                      </Stack>
                    </Stack>
                  </div>
                </GridItem>
                <GridItem span={{ compact: 4, tablet: 4, desktop: 4 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Rayons
                      </Heading>
                      <div
                        className={`${styles.radiusSample} ${styles.radiusNone}`}
                      />
                      <div
                        className={`${styles.radiusSample} ${styles.radiusSubtle}`}
                      />
                      <div
                        className={`${styles.radiusSample} ${styles.radiusStandard}`}
                      />
                    </Stack>
                  </div>
                </GridItem>
                <GridItem span={{ compact: 4, tablet: 4, desktop: 4 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Ombres
                      </Heading>
                      <div
                        className={`${styles.shadowSample} ${styles.shadowLight}`}
                      />
                      <div
                        className={`${styles.shadowSample} ${styles.shadowMedium}`}
                      />
                      <div
                        className={`${styles.shadowSample} ${styles.shadowStrong}`}
                      />
                    </Stack>
                  </div>
                </GridItem>
              </Grid>
            </Stack>
          </section>

          <section className={styles.section} id="typographie">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="CMP-04, DT-02">
                Typographie
              </SectionTitle>
              <Container width="reading">
                <Stack direction="vertical" gap="lg">
                  <Text as="p" variant="xs">
                    Texte très petit — xs, graisse Regular
                  </Text>
                  <Text as="p" variant="sm">
                    Texte petit — sm, graisse Regular
                  </Text>
                  <Text as="p" variant="body">
                    Corps de texte — body, graisse Regular
                  </Text>
                  <Text as="p" variant="body-lg">
                    Corps large — body-lg, graisse Regular
                  </Text>
                  <Heading as="h3" variant="display">
                    Apparence display portée par un h3
                  </Heading>
                  <Heading as="h3" variant="h1">
                    Apparence h1 portée par un h3
                  </Heading>
                  <Heading as="h3" variant="h2">
                    Apparence h2 portée par un h3
                  </Heading>
                </Stack>
              </Container>
            </Stack>
          </section>

          <section className={styles.section} id="layout">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="CMP-01 à CMP-03">Layout</SectionTitle>
              <Container width="reading">
                <div className={styles.technicalZone}>Container de lecture</div>
              </Container>
              <Stack direction="vertical" gap="md">
                <div className={styles.technicalZone}>Stack — zone 1</div>
                <div className={styles.technicalZone}>Stack — zone 2</div>
              </Stack>
              <Grid gap="md">
                {[1, 2, 3, 4].map((item) => (
                  <GridItem
                    key={item}
                    span={{ compact: 4, tablet: 4, desktop: 3 }}
                  >
                    <div className={styles.technicalZone}>GridItem {item}</div>
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </section>

          <section className={styles.section} id="interactions">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="CMP-05, CMP-06">
                Interactions
              </SectionTitle>

              <Grid className={styles.examples} gap="lg">
                {buttonVariants.map((variant) => (
                  <GridItem
                    key={variant}
                    span={{ compact: 4, tablet: 4, desktop: 3 }}
                  >
                    <div className={styles.example}>
                      <Stack direction="vertical" gap="md">
                        <Heading as="h3" variant="h2">
                          {variant}
                        </Heading>
                        {buttonSizes.map((size) => (
                          <Button key={size} size={size} variant={variant}>
                            {`${variant} ${size}`}
                          </Button>
                        ))}
                        <Button disabled variant={variant}>
                          Désactivé
                        </Button>
                        <Button loading variant={variant}>
                          Chargement
                        </Button>
                      </Stack>
                    </div>
                  </GridItem>
                ))}
              </Grid>

              <Grid className={styles.examples} gap="lg">
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div
                    className={`${styles.example} ${styles.editorialContext}`}
                  >
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Contexte éditorial
                      </Heading>
                      <Link href="#introduction">
                        Lien interne vers l’introduction
                      </Link>
                    </Stack>
                  </div>
                </GridItem>
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div
                    className={`${styles.example} ${styles.functionalContext}`}
                  >
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Contexte fonctionnel
                      </Heading>
                      <Link external href="https://example.com">
                        Lien externe
                      </Link>
                      <Link
                        aria-label="Lien externe, nouvelle fenêtre"
                        external
                        href="https://example.com"
                        target="_blank"
                      >
                        Lien externe dans une nouvelle fenêtre
                      </Link>
                    </Stack>
                  </div>
                </GridItem>
              </Grid>
              <Text as="p" variant="sm">
                Tester au clavier les états hover, active et focus-visible.
              </Text>
            </Stack>
          </section>

          <section className={styles.section} id="medias">
            <Stack direction="vertical" gap="xl">
              <SectionTitle identifier="CMP-07, CMP-08">Médias</SectionTitle>

              <Grid className={styles.examples} gap="lg">
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Image intrinsèque et erreur
                      </Heading>
                      <MediaValidation />
                    </Stack>
                  </div>
                </GridItem>
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <div className={styles.example}>
                    <Stack direction="vertical" gap="md">
                      <Heading as="h3" variant="h2">
                        Image responsive décorative
                      </Heading>
                      <div className={styles.artworkFrame}>
                        <ArtworkImage
                          decorative
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          src="/design-system/technical-artwork.png"
                        />
                      </div>
                    </Stack>
                  </div>
                </GridItem>
              </Grid>

              <div className={styles.example}>
                <Stack direction="vertical" gap="md">
                  <Heading as="h3" variant="h2">
                    Catalogue d’icônes
                  </Heading>
                  <Stack direction="horizontal" gap="lg">
                    <Icon name="image-unavailable" />
                    <Icon name="loading" />
                    <Icon name="external-link" />
                    <span className={styles.brandColor}>
                      <Icon
                        decorative={false}
                        label="Lien externe informatif"
                        name="external-link"
                      />
                    </span>
                  </Stack>
                  <Text as="p" variant="sm">
                    Les trois premières icônes sont décoratives. La dernière est
                    informative et utilise une couleur officielle via
                    currentColor.
                  </Text>
                </Stack>
              </div>
            </Stack>
          </section>

          <section className={styles.section} id="validation">
            <Stack direction="vertical" gap="lg">
              <SectionTitle identifier="Sprint 009">
                Consignes de validation
              </SectionTitle>
              <Text as="p" variant="body">
                Vérifier la page en mobile, tablette et bureau, puis à 200 % de
                zoom.
              </Text>
              <Text as="p" variant="body">
                Parcourir toutes les interactions au clavier et confirmer que le
                focus reste visible.
              </Text>
              <Text as="p" variant="body">
                Confirmer qu’aucun contenu ne dépend uniquement de la couleur et
                qu’aucun débordement horizontal n’apparaît.
              </Text>
            </Stack>
          </section>
        </Stack>
      </Container>
    </main>
  );
}
