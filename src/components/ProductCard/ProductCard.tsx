import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SProductCard,
  SCardButtonWrapper,
  SCardInfo,
} from "@src/components/ProductCard";
import { TProduct } from "@src/@types/general";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { calculateSale } from "@src/utils/calculateSale";
import { formatCurrency } from "@src/utils/formatCurrency";
import { ProductImg } from "@src/components/ProductImg";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider, TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useCartProvider } from "@src/providers/CartProvider";
import { useWishlistProvider } from "@src/providers/WishlistProvider";

interface ProductCardProps {
  product: TProduct;
  disable?: boolean;
}

export function ProductCard({ product, disable }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);

  const [inCart, setInCart] = useState<boolean>(false);

  const { cartItems, handleAddToCart } = useCartProvider();
  const { toggleWishlist, wishlistItems } = useWishlistProvider();

  const { setAuthModal } = useGlobalProvider();
  const { authStage } = useAuthProvider();

  const Navigate = useNavigate();
  const Location = useLocation();

  // HANDLES CART ADDING BUTTON
  async function handleCartAdding() {
    // IF NOT AUTHORIZED, OPEN LOG IN MODAL
    if (authStage !== TAuthStage_Enum.AUTHORIZED) {
      setAuthModal(true);
      return;
    }
    // IF ITEM IS IN CART, NAVIGATE TO CART. ELSE ADD ITEM TO CART
    if (inCart) {
      Navigate("/cart");
    } else {
      setAddingToCart(true);
      // IF IN CART PAGE AND USER ADDS WISHLIST ITEM TO CART, REMOVE ITEM FROM WISHLIST
      const inWishlist = wishlistItems.some(
        (item) => item.product_id === product.id
      );
      if (Location.pathname === "/cart" && inWishlist) {
        await toggleWishlist(product.id);
      }
      await handleAddToCart(product.id);
      setAddingToCart(false);
      setInCart(true);
    }
  }

  // OPEN AUTHORIZATION MODAL IF NOT AUTHORIZED
  function handleBuying() {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) {
      setAuthModal(true);
    } else {
      Navigate(`/checkout/${product.id}`);
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
        alt="product image"
        loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />

      <SCardInfo>
        <h3>{product.title}</h3>
        {product.salePrice && (
          <p>
            <FormattedMessage id="sale" defaultMessage={"_SALE_"} />:{" "}
            {calculateSale(product.price, product.salePrice)}%
          </p>
        )}
        <h2>
          <FormattedMessage id="price" defaultMessage={"_PRICE_"} />:{" "}
          {formatCurrency(product?.salePrice || product.price)}{" "}
          <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
        </h2>
      </SCardInfo>
      <SCardButtonWrapper>
        {/* BUY BUTTON */}
        <SProductButton
          variation="primary"
          onClick={(e) => {
            e.stopPropagation();
            handleBuying();
          }}
        >
          <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
        </SProductButton>
        <SProductButton
          disabled={addingToCart}
          variation="primary"
          onClick={(e) => {
            e.stopPropagation();
            handleCartAdding();
          }}
        >
          {addingToCart ? (
            <>
              <FormattedMessage id="adding" defaultMessage={"_ADDING_"} />
              <LoadingCircleAnim isSpan />
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
