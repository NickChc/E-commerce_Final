import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/general";
import GamingPcImg from "@src/assets/images/GamingPcPlaceholderImg.jpg";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { calculateSale } from "@src/utils/calculateSale";
import { ProductImg } from "@src/components/ProductImg";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";

interface ProductCardProps {
  product: TProduct;
  disable?: boolean;
}

export function ProductCard({ product, disable }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);


  const [inCart, setInCart] = useState<boolean>(false);

  const { addToCart, addingToCart } = useAddToCart();

  const { cartItems, setAuthModal } = useGlobalProvider();

  const { authStage } = useAuthProvider();

  const Navigate = useNavigate();

  // HANDLES CART ADDING BUTTON
  function handleCartAdding() {
    // IF NOT AUTHORIZED, OPEN LOG IN MODAL
    if (authStage !== TAuthStage_Enum.AUTHORIZED) {
      setAuthModal(true);
      return;
    }
    // IF ITEM IS IN CART, NAVIGATE TO CART. ELSE ADD ITEM TO CART
    if (inCart) {
      Navigate("/cart");
    } else {
      addToCart(product.id);
      setInCart(true);
    }
  }

  // IF ITEM IS IN CART, CHANGE TEXT AND ONCLICK BEHAVIOUR
  useEffect(() => {
    const isInCart = cartItems?.some((item) => item.product_id === product.id);
    setInCart(isInCart);
  }, [cartItems]);

  return (
    <SProductCard
      onClick={() => {
        if (disable) return;
        Navigate(`/products/product/${product.id}`);
      }}
    >
      <ProductImg
        src={product.image}
        fallbackSrc={GamingPcImg}
        alt="product image"
        loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
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
            console.log("CHECKOUT!");
          }}
        >
          <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
        </SProductButton>
        <SProductButton
          onClick={(e) => {
            e.stopPropagation();
            handleCartAdding();
          }}
        >
          {addingToCart ? (
            <>
              <FormattedMessage id="adding" defaultMessage={"_ADDING_"} />
              <SLoadingCircleAnim />
            </>
          ) : authStage === TAuthStage_Enum.AUTHORIZED ? (
            inCart ? (
              <FormattedMessage
                id="viewInCart"
                defaultMessage={"_VIEW_IN_CART_"}
              />
            ) : (
              <FormattedMessage
                id="addToCart"
                defaultMessage={"_ADD_TO_CART_"}
              />
            )
          ) : (
            <FormattedMessage id="addToCart" defaultMessage={"_ADD_TO_CART_"} />
          )}
        </SProductButton>
      </SCardButtonWrapper>
    </SProductCard>
  );
}
