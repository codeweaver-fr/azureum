import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";
import { Button, Link } from "@/shared/components/interactions";
import { ArtworkImage, Icon } from "@/shared/components/media";
import { Heading, Text } from "@/shared/components/typography";

import { MediaPlayground } from "./MediaPlayground";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Container width="main">
        <Stack direction="vertical" gap="xl">
          <h1>AZUREUM — Design System Playground</h1>

          <p>
            Cette page permet de vérifier visuellement les primitives de mise en
            page.
          </p>

          <section>
            <h2>Container principal</h2>
            <div className={styles.surface}>
              Ce bloc est contenu dans un Container « main ».
            </div>
          </section>

          <section>
            <h2>Stack vertical</h2>
            <Stack direction="vertical" gap="md">
              <div className={styles.brandExample}>Élément 1</div>
              <div className={styles.successExample}>Élément 2</div>
              <div className={styles.warningExample}>Élément 3</div>
            </Stack>
          </section>

          <section>
            <h2>Grid responsive</h2>
            <Grid gap="lg">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <GridItem
                  key={item}
                  span={{ compact: 4, tablet: 4, desktop: 4 }}
                >
                  <div className={styles.gridExample}>Carte {item}</div>
                </GridItem>
              ))}
            </Grid>
          </section>

          <section>
            <h2>Largeurs de Container</h2>
            <Container width="reading">
              <div className={styles.readingExample}>Container « reading »</div>
            </Container>

            <Container width="narrow">
              <div className={styles.narrowExample}>Container « narrow »</div>
            </Container>
          </section>

          <section>
            <Stack direction="vertical" gap="lg">
              <Heading as="h2" variant="h2">
                Interactions
              </Heading>

              <Grid gap="md">
                {(
                  ["primary", "secondary", "subtle", "destructive"] as const
                ).map((variant) => (
                  <GridItem
                    key={variant}
                    span={{ compact: 4, tablet: 4, desktop: 3 }}
                  >
                    <Stack direction="vertical" gap="sm">
                      <Text as="p" variant="sm">
                        {variant}
                      </Text>
                      <Button variant={variant}>Action</Button>
                      <Button disabled variant={variant}>
                        Désactivé
                      </Button>
                      <Button loading variant={variant}>
                        Chargement
                      </Button>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>

              <Stack direction="horizontal" gap="lg">
                <Link href="/">Lien interne</Link>
                <Link
                  aria-label="Documentation externe, nouvelle fenêtre"
                  external
                  href="https://example.com"
                  target="_blank"
                >
                  Lien externe
                </Link>
              </Stack>
            </Stack>
          </section>

          <section>
            <Stack direction="vertical" gap="lg">
              <Heading as="h2" variant="h2">
                Médias
              </Heading>

              <Grid gap="lg">
                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <Stack direction="vertical" gap="md">
                    <Text as="p" variant="sm">
                      Image intrinsèque et état indisponible
                    </Text>
                    <MediaPlayground />
                  </Stack>
                </GridItem>

                <GridItem span={{ compact: 4, tablet: 4, desktop: 6 }}>
                  <Stack direction="vertical" gap="md">
                    <Text as="p" variant="sm">
                      Image responsive décorative
                    </Text>
                    <div className={styles.artworkFrame}>
                      <ArtworkImage
                        decorative
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        src="data:image/png;base64,invalid"
                      />
                    </div>
                  </Stack>
                </GridItem>
              </Grid>

              <Stack direction="horizontal" gap="lg">
                <Icon name="image-unavailable" size="small" />
                <Icon name="loading" size="medium" />
                <Icon
                  decorative={false}
                  label="Lien externe"
                  name="external-link"
                  size="large"
                />
              </Stack>
            </Stack>
          </section>
        </Stack>
      </Container>
    </main>
  );
}
