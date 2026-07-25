import styles from "./Icon.module.css";

export type IconName = "external-link" | "image-unavailable" | "loading";
export type IconSize = "small" | "medium" | "large";

interface IconBaseProps {
  className?: string;
  name: IconName;
  size?: IconSize;
  style?: never;
}

export interface DecorativeIconProps extends IconBaseProps {
  decorative?: true;
  label?: never;
}

export interface InformativeIconProps extends IconBaseProps {
  decorative: false;
  label: string;
}

export type IconProps = DecorativeIconProps | InformativeIconProps;

const sizeClasses: Record<IconSize, string> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

function IconPaths({ name }: Pick<IconProps, "name">) {
  switch (name) {
    case "external-link":
      return (
        <>
          <path d="M14 5h5v5" />
          <path d="m19 5-9 9" />
          <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
        </>
      );
    case "image-unavailable":
      return (
        <>
          <rect height="14" rx="1" width="18" x="3" y="5" />
          <path d="m3 16 5-5 4 4 2-2 7 6" />
          <path d="m4 4 16 16" />
        </>
      );
    case "loading":
      return (
        <>
          <path d="M12 3a9 9 0 0 1 9 9" />
          <path d="M12 21a9 9 0 0 1-9-9" />
        </>
      );
  }
}

export function Icon({
  className,
  decorative = true,
  label,
  name,
  size = "medium",
}: IconProps) {
  const accessibleLabel = decorative ? undefined : label;

  if (
    decorative === false &&
    process.env.NODE_ENV !== "production" &&
    accessibleLabel?.trim() === ""
  ) {
    throw new Error("An informative Icon requires a non-empty label.");
  }

  const classes = [styles.icon, sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      aria-hidden={decorative ? "true" : undefined}
      aria-label={accessibleLabel}
      className={classes}
      fill="none"
      focusable="false"
      role={decorative ? undefined : "img"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconPaths name={name} />
    </svg>
  );
}
