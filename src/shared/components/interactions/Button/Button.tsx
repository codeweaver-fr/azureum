import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "subtle" | "destructive";
export type ButtonSize = "compact" | "standard" | "comfortable";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-busy" | "disabled" | "style" | "type"
> {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  variant: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  subtle: styles.subtle,
  destructive: styles.destructive,
};

const sizeClasses: Record<ButtonSize, string> = {
  compact: styles.compact,
  standard: styles.standard,
  comfortable: styles.comfortable,
};

export function Button({
  children,
  className,
  disabled = false,
  loading = false,
  size = "standard",
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      className={classes}
      disabled={disabled || loading}
      type={type}
    >
      <span aria-hidden="true" className={styles.indicatorSlot}>
        {loading ? <span className={styles.spinner} /> : null}
      </span>
      <span className={styles.label}>{children}</span>
      <span aria-hidden="true" className={styles.indicatorSlot} />
    </button>
  );
}
