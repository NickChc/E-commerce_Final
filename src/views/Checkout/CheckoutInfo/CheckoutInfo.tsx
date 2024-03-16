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
        Items - <span>{items || "  "}</span>
      </h2>
      <h2>
        Total Quantity - <span>{total || "  "}</span>
      </h2>
      <h2>
        Shipping - <span>{shipping || "  "}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />{" "}
      </h2>
      <h2>
        Total Price - <span>{totalPrice + shipping || "  "}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h2>
      <h2>
        Deliver To - <span>{usersCountryInfo?.country_name || "      "}</span>
      </h2>
      <SProductButton disabled={!gotCard}>BUY NOW</SProductButton>
    </SCheckoutInfo>
  );
}
