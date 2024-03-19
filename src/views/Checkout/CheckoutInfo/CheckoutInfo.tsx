import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCheckoutInfo } from "@src/views/Checkout/CheckoutInfo";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGetCountry } from "@src/hooks/useGetCountry";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { privateAxios } from "@src/utils/privateAxios";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { TPaymentStatus_Enum } from "@src/@types/general";

interface CheckoutInfoProps {
  items: number;
  total: number;
  totalPrice: number;
  gotCard: boolean;
}

export function CheckoutInfo({
  items,
  total,
  totalPrice,
  gotCard,
}: CheckoutInfoProps) {
  const [addressConfirmed, setAddressConfirmed] = useState<boolean>(false);
  const [buying, setBuying] = useState<boolean>(false);

  const { usersCountryInfo } = useGetCountry();
  const { deliveryAddress, setPaymentStatus } = useGlobalProvider();

  const Navigate = useNavigate();

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

  async function buyItems() {
    try {
      setBuying(true);
      const response = await privateAxios.post("/purchases", {
        totalPrice: totalPrice,
        totalItems: items,
      });
      // INFORM USER ON PAYMENT
      if (response.status < 299 && response.status > 200) {
        Navigate("/");
        setPaymentStatus(TPaymentStatus_Enum.GOOD);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setBuying(false);
    }
  }

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
        <span>{shipping || "  "}</span>{" "}
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

      <p>
        <FormattedMessage
          id="confirmAddress"
          defaultMessage={"_CONFIRM_YOUR_ADDRESS_"}
        />
        <input
          type="checkbox"
          checked={addressConfirmed}
          onChange={() => setAddressConfirmed((prev) => !prev)}
        />
      </p>
      {/* BUYING BUTTON */}
      <SProductButton
        disabled={!gotCard || !addressConfirmed}
        onClick={buyItems}
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
