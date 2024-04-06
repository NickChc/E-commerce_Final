import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { STRIPE_ENDPOINT } from "@src/config/general";
import {
  SCheckoutInfo,
  SConfirmationText,
} from "@src/views/Checkout/CheckoutInfo";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGetCountry } from "@src/hooks/useGetCountry";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { TProduct } from "@src/@types/general";
import { useCartProvider } from "@src/providers/CartProvider";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";

interface CheckoutInfoProps {
  items: number;
  total: number;
  totalPrice: number;
  checkoutItems: TProduct[];
}

interface TStripeItem {
  id: string;
  quantity: number;
}

export function CheckoutInfo({
  items,
  total,
  totalPrice,
  checkoutItems,
}: CheckoutInfoProps) {
  const [addressConfirmed, setAddressConfirmed] = useState<boolean>(false);
  const [buying, setBuying] = useState<boolean>(false);
  const [redConfirm, setRedConfirm] = useState<boolean>(false);
  const [stripeItems, setStripeItems] = useState<TStripeItem[]>([]);

  const { usersCountryInfo } = useGetCountry();
  const { deliveryAddress } = useGlobalProvider();
  const { cartItems } = useCartProvider();

  const Location = useLocation();

  // IMITATES DIFFERENT SHIPPING COSTS
  function shippingPrice() {
    if (totalPrice % 2 === 0) {
      return 10;
    } else if (totalPrice % 3 === 0) {
      return 20;
    } else {
      return 0;
    }
  }

  const shipping = shippingPrice();

  // TRIGGERED AFTER USER CLICKS BUY BUTTON
  async function buyItems() {
    try {
      const response = await axios.post(
        `${STRIPE_ENDPOINT}/create-checkout-session`,
        {
          items: stripeItems,
        }
      );
      window.location = response.data.url;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  function handleStripeItems() {
    if (Location.pathname.includes("cartItems")) {
      const totalPrice = cartItems.reduce((acc, item) => {
        if (item.cartProduct.salePrice) {
          acc += item.cartProduct.salePrice * item.count;
        } else {
          acc += item.cartProduct.price * item.count;
        }
        return acc + shipping;
      }, 0);
      const totalQuantity = cartItems.reduce((acc, item) => {
        return (acc += item.count);
      }, 0);
      localStorage.setItem(
        ADD_ORDER_DATA,
        JSON.stringify({ totalPrice, totalItems: totalQuantity })
      );
      setStripeItems(
        cartItems.map((item) => {
          return { id: item.cartProduct.id, quantity: item.count };
        })
      );
    } else {
      // const totalPrice = checkoutItems.reduce((acc, item) => {
      //   if (item.salePrice) {
      //     acc += item.salePrice;
      //   } else {
      //     acc += item.price;
      //   }
      //   return acc + shipping;
      // }, 0);
      localStorage.setItem(
        ADD_ORDER_DATA,
        JSON.stringify({ totalPrice: totalPrice + shipping, totalItems: total })
      );
      setStripeItems(
        checkoutItems.map((item) => {
          return { id: item.id, quantity: 1 };
        })
      );
    }
  }

  useEffect(() => {
    setAddressConfirmed(false);
  }, [deliveryAddress]);

  useEffect(() => {
    handleStripeItems();
  }, [checkoutItems]);

  return (
    <SCheckoutInfo>
      <h2>
        <FormattedMessage id="items" defaultMessage={"_ITEMS_"} /> -{" "}
        <span>{items || "  "}</span>
      </h2>
      <h2>
        <FormattedMessage
          id="totalQuantity"
          defaultMessage={"_TOTAL_QUANTITY_"}
        />{" "}
        - <span>{total || "  "}</span>
      </h2>
      <h2>
        <FormattedMessage id="shipping" defaultMessage={"_SHIPPING_"} /> -{" "}
        <span>{shipping || 0}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />{" "}
      </h2>
      <h2>
        <FormattedMessage id="totalPrice" defaultMessage={"_TOTAL_PRICE_"} /> -{" "}
        <span>{totalPrice + shipping || "  "}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h2>
      <h2>
        <FormattedMessage id="address" defaultMessage={"_ADDRESS_"} /> -{" "}
        <span>
          {deliveryAddress !== ""
            ? deliveryAddress
            : usersCountryInfo?.country_name || "Unknown"}
        </span>
      </h2>

      <SConfirmationText isRed={redConfirm}>
        <FormattedMessage
          id="confirmAddress"
          defaultMessage={"_CONFIRM_YOUR_ADDRESS_"}
        />
        <input
          type="checkbox"
          checked={addressConfirmed}
          onChange={() => {
            setAddressConfirmed((prev) => !prev);
            setRedConfirm(false);
          }}
        />
      </SConfirmationText>
      {/* BUYING BUTTON */}
      <SProductButton
        onClick={() => {
          if (addressConfirmed) {
            buyItems();
          } else {
            setRedConfirm(true);
          }
        }}
      >
        {buying ? (
          <>
            <FormattedMessage id="buying" defaultMessage={"_BUYING_"} />
            <LoadingCircleAnim isSpan />
          </>
        ) : (
          <FormattedMessage id="buyNow" defaultMessage={"_BUY_NOW_"} />
        )}
      </SProductButton>
    </SCheckoutInfo>
  );
}
