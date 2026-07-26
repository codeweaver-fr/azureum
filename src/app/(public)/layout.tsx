import type { ReactNode } from "react";

import { Link } from "@/shared/components/interactions";
import { Container } from "@/shared/components/layout";
import { Text } from "@/shared/components/typography";

import styles from "./layout.module.css";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className={styles.shell}>
      <Link className={styles.skipLink} href="#main-content">
        Aller au contenu principal
      </Link>

      <header className={styles.header}>
        <Container width="main">
          <Text as="span" variant="body">
            AZUREUM
          </Text>
        </Container>
      </header>

      <main className={styles.main} id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className={styles.footer}>
        <Container width="main">
          <Text as="small" variant="sm">
            AZUREUM
          </Text>
        </Container>
      </footer>
    </div>
  );
}
