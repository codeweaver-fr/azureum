import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";

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
        </Stack>
      </Container>
    </main>
  );
}
