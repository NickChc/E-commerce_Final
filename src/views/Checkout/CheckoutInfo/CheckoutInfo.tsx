import { FormattedMessage } from "react-intl";
import { SCheckoutInfo } from "@src/views/Checkout/CheckoutInfo";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGetCountry } from "@src/hooks/useGetCountry";

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
  const { usersCountryInfo } = useGetCountry();

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
        <FormattedMessage id="deliverTo" defaultMessage={"_DELIVER_TO_"} /> -{" "}
        <span>{usersCountryInfo?.country_name || "      "}</span>
      </h2>
      <SProductButton disabled={!gotCard}>
        <FormattedMessage id="buyNow" defaultMessage={"_BUY_NOW_"} />
      </SProductButton>
    </SCheckoutInfo>
  );
}
