import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { TProduct } from "@src/@types/general";
import {
  SProductMain,
  SButtonsWrapper,
  SDoubleBtn,
} from "@src/views/Product/FunctionalSide";
import { ProductImg } from "@src/components/ProductImg";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { useCartProvider } from "@src/providers/CartProvider";
import { useWishlistProvider } from "@src/providers/WishlistProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { PlusIcon, CheckIcon } from "@src/assets/icons";

interface FunctionalSideProps {
  product: TProduct | undefined;
}

export function FunctionalSide({ product }: FunctionalSideProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [inCart, setInCart] = useState<boolean>(false);

  const { handleAddToCart, cartItems, addingToCart } = useCartProvider();
  const { wishlistItems, toggleWishlist, addingWishlist, removingWishlist } = useWishlistProvider()
  const { setAuthModal } = useGlobalProvider();
  const { authStage } = useAuthProvider();
  const { locale } = useLocaleProvider();

  const Navigate = useNavigate();

  function handleCartAdding() {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) {
      setAuthModal(true);
      return;
    }
    // IF ITEM IS IN CART, NAVIGATE TO CART. ELSE ADD ITEM TO CART
    if (inCart) {
      Navigate("/cart");
    } else if (product?.id) {
      handleAddToCart(product.id);
      setInCart(true);
    }
  }

  useEffect(() => {
    const liked = wishlistItems?.some(
      (wishlistProduct) => wishlistProduct.product_id === product?.id
    );
    setIsLiked(liked);

    const isInCart = cartItems?.some((item) => item.product_id === product?.id);
    setInCart(isInCart);
  }, [wishlistItems, cartItems]);

  return (
    <SProductMain>
      <ProductImg
        src={product?.image}
        alt="product image"
        loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />

      {/* BUTTONS FOR MANAGING CARD AND WISHLIST */}
      <SButtonsWrapper>
        <SProductButton
          variation="primary"
          onClick={() => {
            Navigate(`/checkout/${product?.id}`);
          }}
        >
          <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
        </SProductButton>
        <SDoubleBtn>
          <SProductButton
            side="left"
            onClick={() => {
              if (authStage !== TAuthStage_Enum.AUTHORIZED) {
                setAuthModal(true);
                return;
              }
              product?.id && toggleWishlist(product.id);
              // OPTIMISTIC UPDATE
              if (isLiked) {
                setIsLiked(false);
              } else {
                setIsLiked(true);
              }
            }}
          >
            {removingWishlist ? (
              <>
                <FormattedMessage id="removing" defaultMessage={"_REMOVING_"} />{" "}
                <LoadingCircleAnim isSpan />
              </>
            ) : addingWishlist ? (
              <>
                <FormattedMessage id="adding" defaultMessage={"_ADDING_"} />{" "}
                <LoadingCircleAnim isSpan />
              </>
            ) : isLiked && authStage === TAuthStage_Enum.AUTHORIZED ? (
              <FormattedMessage
                id="wishlistRemove"
                defaultMessage={"_REMOVE_"}
              />
            ) : (
              <>
                <FormattedMessage
                  id="addToWishList"
                  defaultMessage={"_TO WISHLIST_"}
                />
                {locale === TLocale_Enum.KA && <PlusIcon />}
              </>
            )}
          </SProductButton>
          <SProductButton side="right" onClick={handleCartAdding}>
            {addingToCart ? (
              <>
                <FormattedMessage id="adding" defaultMessage={"_ADDING_"} />
                <LoadingCircleAnim isSpan />
              </>
            ) : inCart ? (
              <FormattedMessage
                id="viewInCart"
                defaultMessage={"_VIEW_IN_CART_"}
              />
            ) : (
              <FormattedMessage id="addToCart" defaultMessage={"_TO_CART_"} />
            )}
          </SProductButton>
        </SDoubleBtn>
        <h5>
          {" "}
          {isLiked &&
            !addingWishlist &&
            (locale === TLocale_Enum.EN ? (
              <>
                ADDED TO <Link to={"/profile"}>WISHLIST</Link>{" "}
                <span>
                  <CheckIcon />
                </span>
              </>
            ) : (
              <>
                დამატებულია <a href="/profile">სასურველებში</a>{" "}
                <span>
                  <CheckIcon />
                </span>
              </>
            ))}
        </h5>
      </SButtonsWrapper>
    </SProductMain>
  );
}
