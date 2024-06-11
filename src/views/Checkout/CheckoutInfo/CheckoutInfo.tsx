import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { STRIPE_ENDPOINT } from "@src/config/general";
import {
  SCheckoutInfo,
  SConfirmationText,
  SCardData,
} from "@src/views/Checkout/CheckoutInfo";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGetCountry } from "@src/hooks/useGetCountry";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TProduct } from "@src/@types/general";
import { useCartProvider } from "@src/providers/CartProvider";
import { copyToClipboard } from "@src/utils/copyToClipboard";
import { formatCurrency } from "@src/utils/formatCurrency";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";
import { ADD_ORDER_DATA_BACKUP } from "@src/config/sessionStorageKeys";
import { CopyIcon } from "@src/assets/icons";
import { TLocale_Enum, useLocaleProvider } from "@src/providers/LocaleProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

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
  const [redConfirm, setRedConfirm] = useState<boolean>(false);
  const [stripeItems, setStripeItems] = useState<TStripeItem[]>([]);
  const [stripeLoading, setStripeLoading] = useState<boolean>(false);

  const { usersCountryInfo } = useGetCountry();
  const { deliveryAddress, setPopUpText } = useGlobalProvider();
  const { cartItems } = useCartProvider();
  const { locale } = useLocaleProvider();

  const Location = useLocation();

  function copyCardData() {
    copyToClipboard("4242 4242 4242 4242");
    if (locale === TLocale_Enum.KA) {
      setPopUpText("4242 4242 4242 4242 დაკოპირებულია!");
    } else {
      setPopUpText("4242 4242 4242 4242 copied to clipboard!");
    }
  }

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
      setStripeLoading(true);
      const response = await axios.post(
        `${STRIPE_ENDPOINT}/create-checkout-session`,
        {
          items: stripeItems,
        }
      );
      window.location = response.data.url;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setStripeLoading(false);
    }
  }

  // SEND ITEMS TO STRIPE SERVER
  function handleStripeItems() {
    localStorage.setItem(
      ADD_ORDER_DATA,
      JSON.stringify({ totalPrice: totalPrice + shipping, totalItems: total })
    );
    sessionStorage.setItem(
      ADD_ORDER_DATA_BACKUP,
      JSON.stringify({ totalPrice: totalPrice + shipping, totalItems: total })
    );
    if (Location.pathname.includes("cartItems")) {
      setStripeItems(
        cartItems.map((item) => {
          return { id: item.cartProduct.id, quantity: item.count };
        })
      );
    } else {
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
        <span>{formatCurrency(totalPrice + shipping) || "  "}</span>{" "}
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
      <SCardData>
        <FormattedMessage id="forPayment" defaultMessage={"_FOR_PAYMENT_"} />:
        4242 4242 4242 4242
        <span>
          <CopyIcon onClick={copyCardData} />
        </span>
      </SCardData>
      {/* BUYING BUTTON */}
      <SProductButton
        disabled={stripeLoading}
        onClick={() => {
          if (addressConfirmed) {
            copyCardData();
            buyItems();
          } else {
            setRedConfirm(true);
          }
        }}
      >
        {stripeLoading ? (
          <>
            <FormattedMessage
              id="redirecting"
              defaultMessage={"_REDIRECTING_"}
            />
            ...
            <LoadingCircleAnim isSpan />
          </>
        ) : (
          <FormattedMessage id="buyNow" defaultMessage={"_BUY_NOW_"} />
        )}
      </SProductButton>
    </SCheckoutInfo>
  );
}
