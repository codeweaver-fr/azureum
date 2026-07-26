"use client";

import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useState } from "react";

import { Button, Link } from "@/shared/components/interactions";
import { Text } from "@/shared/components/typography";

import styles from "./PublicHeaderContent.module.css";

const mobileNavigationId = "public-mobile-navigation";

const navigationItems = [
  {
    href: "/collections",
    label: "Collections",
  },
  {
    href: "/david",
    label: "David",
  },
  {
    href: "/chronologie",
    label: "Évolution dans le temps",
  },
] as const;

interface NavigationLinksProps {
  onNavigate?: () => void;
}

function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={styles.navigation}>
      {navigationItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            aria-current={pathname === href ? "page" : undefined}
            href={href}
            onClick={onNavigate}
          >
            <Text as="span" variant="sm">
              {label}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PublicHeaderContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function closeNavigation() {
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !isOpen) {
      return;
    }

    closeNavigation();
    document.getElementById("public-navigation-toggle")?.focus();
  }

  return (
    <div className={styles.content} onKeyDown={handleKeyDown}>
      <Link
        aria-current={pathname === "/" ? "page" : undefined}
        href="/"
        onClick={closeNavigation}
      >
        <Text as="span" variant="body">
          AZUREUM
        </Text>
      </Link>

      <div className={styles.mobileToggle}>
        <Button
          aria-controls={mobileNavigationId}
          aria-expanded={isOpen}
          id="public-navigation-toggle"
          onClick={() => setIsOpen((current) => !current)}
          size="compact"
          type="button"
          variant="subtle"
        >
          {isOpen ? "Fermer" : "Menu"}
        </Button>
      </div>

      <nav
        aria-label="Navigation principale"
        className={styles.mobileNavigation}
        hidden={!isOpen}
        id={mobileNavigationId}
      >
        <NavigationLinks onNavigate={closeNavigation} />
      </nav>

      <nav
        aria-label="Navigation principale"
        className={styles.desktopNavigation}
      >
        <NavigationLinks />
      </nav>
    </div>
  );
}
