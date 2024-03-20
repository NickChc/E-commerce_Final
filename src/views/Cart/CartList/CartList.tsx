import { SCartList, SEmptyView } from "@src/views/Cart/CartList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CartItem } from "@src/views/Cart/CartList/CartItem";
import { CartIcon } from "@src/assets/icons";
import { FormattedMessage } from "react-intl";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function CartList() {
  const { cartItems, gettingCart } = useGlobalProvider();

  return (
    <SCartList>
      {cartItems.length < 1 ? (
        <SEmptyView>
          {gettingCart ? (
            <h1>
              <LoadingCircleAnim />
            </h1>
          ) : (
            <>
              <h1>
                <FormattedMessage
                  id="emptyCart"
                  defaultMessage={"_THE_CART_IS_EMPTY_"}
                />
              </h1>
              <span>
                <CartIcon /> <span>0</span>
              </span>
            </>
          )}
        </SEmptyView>
      ) : (
        <h1>
          <FormattedMessage id="cartItems" defaultMessage={"_CART_ITEMS_"} />
        </h1>
      )}
      {cartItems?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </SCartList>
  );
}
