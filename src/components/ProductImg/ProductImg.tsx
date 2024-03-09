import { SProductImg, SImgHolder } from "@src/components/ProductImg";

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
        <SProductImg
          loaded={loaded}
          src={src}
          alt={alt}
          onLoad={onLoad}
          loading="lazy"
        />
      </SImgHolder>
      <SProductImg
        loaded={!loaded}
        src={fallbackSrc}
        alt={alt}
        loading="lazy"
      />
    </>
  );
}
