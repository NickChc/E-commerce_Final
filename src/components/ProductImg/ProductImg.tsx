import { SProductImg } from "@src/components/ProductImg";

interface ProductImgProps {
  src: string | undefined;
  fallbackSrc?: string;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
  styles?: boolean;
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
      <span>
        <SProductImg
          loaded={loaded}
          src={src}
          alt={alt}
          onLoad={onLoad}
          loading="lazy"
        />
      </span>
      <SProductImg
        loaded={!loaded}
        src={fallbackSrc}
        alt={alt}
        loading="lazy"
      />
    </>
  );
}
