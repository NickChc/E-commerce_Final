import { SImgHolder, SPlaceholderImgWrapper } from "@src/components/ProductImg";

interface ProductImgProps {
  src: string | undefined;
  fallbackSrc?: string;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
}

export function ProductImg({
  src,
  fallbackSrc,
  alt,
  loaded,
  onLoad,
}: ProductImgProps) {
  return (
    <>
      <SImgHolder loaded={loaded}>
        <img
          src={src}
          alt={alt}
          onLoad={onLoad}
          loading="lazy"
        />
      </SImgHolder>
      <SPlaceholderImgWrapper loaded={loaded}>
        <img
          src={fallbackSrc}
          alt={alt}
          loading="lazy"
        />
      </SPlaceholderImgWrapper>
    </>
  );
}
