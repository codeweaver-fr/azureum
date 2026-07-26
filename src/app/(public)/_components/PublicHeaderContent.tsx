"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/shared/components/interactions";
import { Text } from "@/shared/components/typography";

import styles from "./PublicHeaderContent.module.css";

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

export function PublicHeaderContent() {
  const pathname = usePathname();

  return (
    <div className={styles.content}>
      <Link aria-current={pathname === "/" ? "page" : undefined} href="/">
        <Text as="span" variant="body">
          AZUREUM
        </Text>
      </Link>

      <nav aria-label="Navigation principale">
        <ul className={styles.navigation}>
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                aria-current={pathname === href ? "page" : undefined}
                href={href}
              >
                <Text as="span" variant="sm">
                  {label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
