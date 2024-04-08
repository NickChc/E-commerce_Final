import { SImgHolder, SPlaceholderImgWrapper } from "@src/components/ProductImg";
import PlaceHolderImg from "@src/assets/images/PlaceHolderImage.jpg";

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
        <img src={PlaceHolderImg} alt={alt} loading="lazy" />
      </SPlaceholderImgWrapper>
    </>
  );
}
