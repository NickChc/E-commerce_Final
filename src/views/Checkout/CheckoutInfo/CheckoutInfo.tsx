import { FormattedMessage } from "react-intl";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { SCheckoutInfo } from "@src/views/Checkout/CheckoutInfo";
import { useGetCountry } from "@src/hooks/useGetCountry";

interface CheckoutInfoProps {
  items: number;
  total: number;
  totalPrice: number;
}

export function CheckoutInfo({ items, total, totalPrice }: CheckoutInfoProps) {
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
        Items - <span>{items}</span>
      </h2>
      <h2>
        Total Quantity - <span>{total}</span>
      </h2>
      <h2>
        Shipping - <span>{shipping}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />{" "}
      </h2>
      <h2>
        TotalPrice - <span>{totalPrice + shipping}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h2>
      <h2>
        Delivery Country - <span>{usersCountryInfo?.country_name}</span>
      </h2>
      <SProductButton>BUY NOW</SProductButton>
    </SCheckoutInfo>
  );
}
