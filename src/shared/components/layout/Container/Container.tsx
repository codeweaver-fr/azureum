import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Container.module.css";

export type ContainerWidth = "main" | "reading" | "narrow";

export interface ContainerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  children: ReactNode;
  width: ContainerWidth;
}

export function Container({
  children,
  className,
  width,
  ...props
}: ContainerProps) {
  const classes = [styles.container, styles[width], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
