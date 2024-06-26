import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCheckout, SRightSide, SLeftSide } from "@src/views/Checkout";
import { useCartProvider } from "@src/providers/CartProvider";
import { useProductProvider } from "@src/providers/ProductProvider";
import { TProduct } from "@src/@types/general";
import { totalCost } from "@src/utils/totalCost";
import { totalQuantity } from "@src/utils/totalQuantity";
import { CheckoutInfo } from "@src/views/Checkout/CheckoutInfo";
import { CheckoutProducts } from "@src/views/Checkout/CheckoutProducts";
import { Map } from "@src/features/Map";
import { CheckoutIcon } from "@src/assets/icons";
import { CACHED_CART_ITEMS } from "@src/config/localStorageCache";

export function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState<TProduct[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { fetchSingleProduct, product } = useProductProvider();
  const { cartItems, gettingCart } = useCartProvider();

  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setCheckoutItems([product]);
      setTotalPrice(product?.salePrice || product.price);
    }
  }, [product]);

  useEffect(() => {
    const pathArray = Location.pathname.split("/");
    const pathEnd = pathArray[pathArray.length - 1];

    // CHECKS IF CHECKOUT WAS ACCESED THROUGH CART OR SINGLE PRODUCT...
    if (pathEnd === "cartItems" && cartItems.length > 0) {
      const cartProducts = cartItems.map((item) => item.cartProduct);

      setCheckoutItems(cartProducts);
      setTotalCount(totalQuantity(cartItems));
      setTotalPrice(totalCost(cartItems));
      // MANUALLY ACCESSING CHECKOUT BLOCKED
    } else if (
      pathEnd === "cartItems" &&
      cartItems.length < 1 &&
      !gettingCart
    ) {
      const cachedCartItems = localStorage.getItem(CACHED_CART_ITEMS);
      const haveItems =
        cachedCartItems != null && JSON.parse(cachedCartItems).length > 0;
      if (haveItems) return;
      Navigate("/");
    } else {
      fetchSingleProduct(pathEnd);
      setTotalCount(1);
    }
  }, [cartItems]);

  return (
    <SCheckout>
      <SLeftSide>
        <h1>
          <FormattedMessage
            id="deliverWhereClick"
            defaultMessage={"_WE_DELIVER_WHERE_YOU_CLICK_"}
          />
        </h1>
        <Map />
      </SLeftSide>

      <SRightSide>
        <h1>
          <FormattedMessage
            id="checkoutPreview"
            defaultMessage={"_CHECKOUT_"}
          />
          <span>
            <CheckoutIcon />
          </span>
        </h1>
        <hr />
        <CheckoutInfo
          checkoutItems={checkoutItems}
          items={checkoutItems.length}
          total={totalCount}
          totalPrice={totalPrice}
        />
        <hr />
        {Location.pathname.includes("cartItems") ? (
          <CheckoutProducts cartItems={cartItems} />
        ) : (
          <CheckoutProducts item={product} />
        )}
      </SRightSide>
    </SCheckout>
  );
}
