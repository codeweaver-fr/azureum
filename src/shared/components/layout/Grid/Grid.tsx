import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import styles from "./Grid.module.css";

type CompactSpan = 1 | 2 | 3 | 4;
type TabletSpan = CompactSpan | 5 | 6 | 7 | 8;
type DesktopSpan = TabletSpan | 9 | 10 | 11 | 12;

export type GridGap = "md" | "lg" | "xl";

export interface GridProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  children: ReactNode;
  gap: GridGap;
}

export interface GridItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  children: ReactNode;
  span?: {
    compact?: CompactSpan;
    desktop?: DesktopSpan;
    tablet?: TabletSpan;
  };
}

const gapClasses: Record<GridGap, string> = {
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};

interface GridItemStyle extends CSSProperties {
  "--grid-span-compact"?: CompactSpan;
  "--grid-span-desktop"?: DesktopSpan;
  "--grid-span-tablet"?: TabletSpan;
}

export function Grid({ children, className, gap, ...props }: GridProps) {
  const classes = [styles.grid, gapClasses[gap], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function GridItem({
  children,
  className,
  span,
  ...props
}: GridItemProps) {
  const gridStyle: GridItemStyle = {
    "--grid-span-compact": span?.compact,
    "--grid-span-tablet": span?.tablet,
    "--grid-span-desktop": span?.desktop,
  };

  return (
    <div
      className={[styles.item, className].filter(Boolean).join(" ")}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
}
