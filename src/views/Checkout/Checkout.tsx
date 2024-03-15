import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SCheckout } from "@src/views/Checkout";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TProduct } from "@src/@types/general";
import { CheckoutInfo } from "./CheckoutInfo";
import { totalCost } from "@src/utils/totalCost";
import { totalQuantity } from "@src/utils/totalQuantity";

export function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState<TProduct[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { cartItems, fetchSingleProduct, product } = useGlobalProvider();

  const Location = useLocation();

  useEffect(() => {
    if (product) {
      setCheckoutItems([product]);
      setTotalPrice(product?.salePrice || product.price);
    }
  }, [product]);

  useEffect(() => {
    const pathArray = Location.pathname.split("/");
    const pathEnd = pathArray[pathArray.length - 1];

    if (pathEnd === "cartItems") {
      const cartProducts = cartItems.map((item) => item.cartProduct);
      console.log(cartItems.length);

      setCheckoutItems(cartProducts);
      setTotalCount(totalQuantity(cartItems));
      setTotalPrice(totalCost(cartItems));
    } else {
      fetchSingleProduct(pathEnd);
      setTotalCount(1);
    }
  }, [cartItems]);

  return (
    <SCheckout>
      <h1>CHECKOUT!</h1>
      <CheckoutInfo
        items={checkoutItems.length}
        total={totalCount}
        totalPrice={totalPrice}
      />
    </SCheckout>
  );
}
