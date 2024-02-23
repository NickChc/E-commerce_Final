import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
  SCardImg,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/requestTypes";
import GamingPcImg from "@src/assets/images/GamingPcPlaceholderImg.jpg";
// import PlaceholderImg from "@src/assets/images/PlaceholderImg.jpg";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { calculateSale } from "@src/utils/calculateSale";

interface ProductCardProps {
  product: TProduct;
  disable?: boolean;
}

export function ProductCard({ product, disable }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const Navigate = useNavigate();

  return (
    <SProductCard
      onClick={() => {
        if (disable) return;
        Navigate(`products/product/${product.id}`);
      }}
    >
      <SCardImg
        show={imageLoaded}
        src={product.image}
        alt="product image"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      <SCardImg
        show={!imageLoaded}
        src={GamingPcImg}
        alt="placeholder image"
        loading="lazy"
      />

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
          <h2>Price: {product?.salePrice || product.price} GEL</h2>
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
