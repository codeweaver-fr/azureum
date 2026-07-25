import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Text.module.css";

export type TextElement = "p" | "span" | "small" | "strong" | "em";
export type TextVariant = "xs" | "sm" | "body" | "body-lg";

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  as: TextElement;
  children: ReactNode;
  variant: TextVariant;
}

const variantClasses: Record<TextVariant, string> = {
  xs: styles.xs,
  sm: styles.sm,
  body: styles.body,
  "body-lg": styles.bodyLg,
};

export function Text({
  as: Component,
  children,
  className,
  variant,
  ...props
}: TextProps) {
  const classes = [styles.text, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
