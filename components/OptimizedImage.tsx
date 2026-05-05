import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "alt" | "loading" | "placeholder"> & {
  alt: string;
  eager?: boolean;
  placeholder?: ImageProps["placeholder"];
};

export function OptimizedImage({
  alt,
  eager = false,
  placeholder = "empty",
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...props
}: OptimizedImageProps) {
  const loadingMode = eager ? undefined : "lazy";

  return (
    <Image
      {...props}
      alt={alt}
      loading={loadingMode}
      placeholder={placeholder}
      priority={eager}
      sizes={sizes}
    />
  );
}
