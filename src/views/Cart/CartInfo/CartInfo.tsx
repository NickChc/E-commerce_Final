import { SCartInfo } from "@src/views/Cart/CartInfo";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { totalCost } from "@src/utils/totalCost";
import { moneySaved } from "@src/utils/moneySaved";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { totalQuantity } from "@src/utils/totalQuantity";
import { BsCart4 as CartIcon2 } from "react-icons/bs";

export function CartInfo() {
  const { cartItems } = useGlobalProvider();

  return (
    <SCartInfo>
      <div>
        <h1>
          YOUR CART <CartIcon2 />
        </h1>
        <h2>
          <FormattedMessage id="totalCost" defaultMessage={"_TOTAL_COST_"} />:
          {"  "}
          <span>
            {totalCost(cartItems)}
            {"  "}
            <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
          </span>
        </h2>
        <h2>
          <FormattedMessage id="moneySaved" defaultMessage={"_MONEY_SAVED_"} />:
          {"  "}
          <span>
            {moneySaved(cartItems)}
            {"  "}
            <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
          </span>
        </h2>
        <h2>
          <FormattedMessage id="items" defaultMessage={"_ITEMS_"} />:{"  "}
          <span>{cartItems.length}</span>
        </h2>
        <h2>
          <FormattedMessage
            id="totalQuantity"
            defaultMessage={"_TOTAL_QUANTITY_"}
          />
          :{"  "}
          <span>{totalQuantity(cartItems)}</span>
        </h2>
      </div>
      <SProductButton
        disabled={cartItems.length < 1}
        onClick={() => console.log("CHECKOUT!")}
      >
        <FormattedMessage id="checkout" defaultMessage={"_CHECKOUT_"} />
      </SProductButton>
    </SCartInfo>
  );
}
