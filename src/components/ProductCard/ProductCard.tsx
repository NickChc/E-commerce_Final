import { useState } from "react";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/requestTypes";
import placeholderImg from "@src/assets/images/placeholderImg.jpg";

interface ProductCardProps {
  product: TProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(true);

  function imageError() {
    setImageLoaded(false);
  }

  return (
    <SProductCard>
      {imageLoaded ? (
        <img src={product.image} alt="" onError={imageError} />
      ) : (
        <img src={placeholderImg} alt="" />
      )}
      <SCardInfo>
        <h3>{product.title}</h3>
        <h2>Price: {product.price} GEL</h2>
      </SCardInfo>
      <SCardButtonWrapper>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          BUY NOW
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          ADD TO CART
        </button>
      </SCardButtonWrapper>
    </SProductCard>
  );
}
