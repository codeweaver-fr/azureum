import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./Link.module.css";

interface LinkBaseProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "download" | "href" | "rel" | "style" | "target"
> {
  children: ReactNode;
  className?: string;
  href: string;
}

export interface InternalLinkProps extends LinkBaseProps {
  download?: never;
  external?: false;
  rel?: never;
  target?: never;
}

interface ExternalLinkBaseProps extends LinkBaseProps {
  download?: boolean | string;
  external: true;
  rel?: string;
}

export interface ExternalSameWindowLinkProps extends ExternalLinkBaseProps {
  target?: "_self";
}

export interface ExternalNewWindowLinkProps extends ExternalLinkBaseProps {
  "aria-label": string;
  target: "_blank";
}

export type LinkProps =
  InternalLinkProps | ExternalSameWindowLinkProps | ExternalNewWindowLinkProps;

function secureRel(rel: string | undefined) {
  return Array.from(
    new Set([
      ...(rel?.split(/\s+/).filter(Boolean) ?? []),
      "noopener",
      "noreferrer",
    ]),
  ).join(" ");
}

export function Link({
  children,
  className,
  external = false,
  href,
  ...props
}: LinkProps) {
  const classes = [styles.link, className].filter(Boolean).join(" ");

  if (external) {
    const { rel, target, ...anchorProps } = props as
      ExternalSameWindowLinkProps | ExternalNewWindowLinkProps;

    return (
      <a
        {...anchorProps}
        className={classes}
        href={href}
        rel={target === "_blank" ? secureRel(rel) : rel}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink {...props} className={classes} href={href}>
      {children}
    </NextLink>
  );
}
