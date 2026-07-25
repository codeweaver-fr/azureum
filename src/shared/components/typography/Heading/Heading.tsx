import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Heading.module.css";

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingVariant = "display" | "h1" | "h2";

export interface HeadingProps extends Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "style"
> {
  as: HeadingElement;
  children: ReactNode;
  variant: HeadingVariant;
}

const variantClasses: Record<HeadingVariant, string> = {
  display: styles.display,
  h1: styles.h1,
  h2: styles.h2,
};

export function Heading({
  as: Component,
  children,
  className,
  variant,
  ...props
}: HeadingProps) {
  const classes = [styles.heading, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
