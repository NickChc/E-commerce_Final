import { FormattedMessage } from "react-intl";
import { CartIcon } from "@src/assets/icons";
import { SCartList, SEmptyView } from "@src/views/Cart/CartList";
import { CartItem } from "@src/views/Cart/CartList/CartItem";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { useCartProvider } from "@src/providers/CartProvider";

export function CartList() {
  const { cartItems, gettingCart } = useCartProvider();

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
