"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import { useState } from "react";

import { Icon } from "../Icon";
import styles from "./ArtworkImage.module.css";

type ImageDimension = NonNullable<ImageProps["width"]>;

interface ArtworkImageBaseProps {
  children?: never;
  className?: string;
  onError?: () => void;
  preload?: boolean;
  src: ImageProps["src"];
  style?: never;
}

interface InformativeArtworkImageProps {
  alt: string;
  decorative?: false;
}

interface DecorativeArtworkImageProps {
  alt?: never;
  decorative: true;
}

interface IntrinsicArtworkImageProps {
  fill?: false;
  height: ImageDimension;
  sizes?: never;
  width: ImageDimension;
}

interface FillArtworkImageProps {
  fill: true;
  height?: never;
  sizes: NonNullable<ImageProps["sizes"]>;
  width?: never;
}

export type ArtworkImageProps = ArtworkImageBaseProps &
  (InformativeArtworkImageProps | DecorativeArtworkImageProps) &
  (IntrinsicArtworkImageProps | FillArtworkImageProps);

function getSourceValue(src: ImageProps["src"]) {
  if (typeof src === "string") {
    return src;
  }

  return "default" in src ? src.default.src : src.src;
}

function isExplicitSvgSource(src: ImageProps["src"]) {
  const source = getSourceValue(src);

  return (
    /^data:image\/svg\+xml(?:;|,)/i.test(source) ||
    /\.svg(?:$|[?#])/i.test(source)
  );
}

export function ArtworkImage(props: ArtworkImageProps) {
  const {
    className,
    decorative = false,
    onError,
    preload = false,
    src,
  } = props;
  const sourceValue = getSourceValue(src);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const hasError = failedSource === sourceValue;
  const alt = props.decorative ? "" : props.alt;

  if (
    !decorative &&
    process.env.NODE_ENV !== "production" &&
    alt.trim() === ""
  ) {
    throw new Error(
      "An informative ArtworkImage requires a non-empty alt text.",
    );
  }

  if (isExplicitSvgSource(src)) {
    throw new Error("ArtworkImage does not accept SVG artwork sources.");
  }

  const classes = [
    styles.frame,
    props.fill ? styles.fill : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const imageClasses = [styles.image, hasError ? styles.unavailable : undefined]
    .filter(Boolean)
    .join(" ");

  const handleError = () => {
    setFailedSource(sourceValue);
    onError?.();
  };

  return (
    <span className={classes}>
      {props.fill ? (
        <Image
          alt={alt}
          className={imageClasses}
          fill
          onError={handleError}
          preload={preload}
          sizes={props.sizes}
          src={src}
        />
      ) : (
        <Image
          alt={alt}
          className={imageClasses}
          height={props.height}
          onError={handleError}
          preload={preload}
          src={src}
          width={props.width}
        />
      )}

      {hasError ? (
        <span
          aria-hidden={decorative ? "true" : undefined}
          aria-label={decorative ? undefined : "Image indisponible"}
          className={styles.placeholder}
          role={decorative ? undefined : "img"}
        >
          <Icon name="image-unavailable" size="large" />
          <span>Image indisponible</span>
        </span>
      ) : null}
    </span>
  );
}
