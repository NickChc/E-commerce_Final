import { useState } from "react";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/requestTypes";
import placeholderImg from "@src/assets/images/PlaceholderImg.jpg";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: TProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(true);

  const Navigate = useNavigate();

  return (
    <SProductCard onClick={() => Navigate(`products/product/${product.id}`)}>
      {imageLoaded ? (
        <img src={product.image} alt="" onError={() => setImageLoaded(false)} />
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
