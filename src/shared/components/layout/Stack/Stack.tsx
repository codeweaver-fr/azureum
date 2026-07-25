import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Stack.module.css";

export type StackDirection = "horizontal" | "vertical";
export type StackSpace =
  | "none"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export interface StackProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  children: ReactNode;
  direction: StackDirection;
  gap: StackSpace;
}

const gapClasses: Record<StackSpace, string> = {
  none: styles.gapNone,
  "2xs": styles.gap2xs,
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
  "2xl": styles.gap2xl,
  "3xl": styles.gap3xl,
  "4xl": styles.gap4xl,
  "5xl": styles.gap5xl,
};

export function Stack({
  children,
  className,
  direction,
  gap,
  ...props
}: StackProps) {
  const classes = [styles.stack, styles[direction], gapClasses[gap], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
