import { SCartList, SEmptyView } from "@src/views/Cart/CartList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CartItem } from "@src/views/Cart/CartList/CartItem";
import { CartIcon } from "@src/assets/icons";
import { FormattedMessage } from "react-intl";

export function CartList() {
  const { cartItems } = useGlobalProvider();

  return (
    <SCartList>
      {cartItems.length < 1 && (
        <SEmptyView>
          <h1>
            <FormattedMessage
              id="emptyCart"
              defaultMessage={"_THE_CART_IS_EMPTY_"}
            />
          </h1>
          <span>
            <CartIcon /> <span>0</span>
          </span>
        </SEmptyView>
      )}
      {cartItems?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </SCartList>
  );
}
