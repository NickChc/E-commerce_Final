import { SImgHolder, SPlaceholderImgWrapper } from "@src/components/ProductImg";
import PlaceholderImg from "/@src/assets/images/PlaceholderImg.jpg";

interface ProductImgProps {
  src: string | undefined;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
}

export function ProductImg({ src, alt, loaded, onLoad }: ProductImgProps) {
  return (
    <>
      <SImgHolder loaded={loaded}>
        <img src={src} alt={alt} onLoad={onLoad} loading="lazy" />
      </SImgHolder>
      <SPlaceholderImgWrapper loaded={loaded}>
        <img src={PlaceholderImg} alt={alt} loading="lazy" />
      </SPlaceholderImgWrapper>
    </>
  );
}
