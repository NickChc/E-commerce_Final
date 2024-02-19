import { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/requestTypes";
import placeholderImg from "@src/assets/images/PlaceholderImg.jpg";
import { useNavigate } from "react-router-dom";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { calculateSale } from "@src/utils/calculateSale";

interface ProductCardProps {
  product: TProduct;
  disable?: boolean;
}

export function ProductCard({ product, disable }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(true);

  const Navigate = useNavigate();

  return (
    <SProductCard
      onClick={() => {
        if (disable) return;
        Navigate(`products/product/${product.id}`);
      }}
    >
      {imageLoaded ? (
        <img src={product.image} alt="" onError={() => setImageLoaded(false)} />
      ) : (
        <img src={placeholderImg} alt="" />
      )}
      <SCardInfo>
        <h3>{product.title}</h3>
        {product.salePrice ? (
          <>
            <p className="">
              <FormattedMessage id="sale" defaultMessage={"_SALE_"} />:{" "}
              {calculateSale(product.price, product.salePrice)}%
            </p>
            <h2>
              <FormattedMessage id="price" defaultMessage={"_PRICE_"} />:{" "}
              {product.salePrice} GEL
            </h2>
          </>
        ) : (
          <h2>Price: {product.price} GEL</h2>
        )}
      </SCardInfo>
      <SCardButtonWrapper>
        <SProductButton
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
        </SProductButton>
        <SProductButton
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FormattedMessage id="addToCart" defaultMessage={"_ADD TO CART_"} />
        </SProductButton>
      </SCardButtonWrapper>
    </SProductCard>
  );
}
