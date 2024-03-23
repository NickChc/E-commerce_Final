import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCartInfo } from "@src/views/Cart/CartInfo";
import { totalCost } from "@src/utils/totalCost";
import { moneySaved } from "@src/utils/moneySaved";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { totalQuantity } from "@src/utils/totalQuantity";
import { CartIcon2, CartPlusIcon } from "@src/assets/icons";
import { CART_LAST_REMOVED } from "@src/config/localStorageKeys";
import { useCartProvider } from "@src/providers/CartProvider";

export function CartInfo() {
  const { cartItems, handleAddToCart } = useCartProvider();

  const Navigate = useNavigate();

  return (
    <SCartInfo>
      <div>
        <div>
          <h1>
            <FormattedMessage id="yourCart" defaultMessage={"_YOUR_CART_"} />{" "}
            <CartIcon2 />
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
            <FormattedMessage
              id="moneySaved"
              defaultMessage={"_MONEY_SAVED_"}
            />
            :{"  "}
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

        {localStorage.getItem(CART_LAST_REMOVED) && (
          <p
            onClick={() => {
              const removedItem = localStorage.getItem(CART_LAST_REMOVED);
              if (removedItem) {
                handleAddToCart(removedItem);
                localStorage.removeItem(CART_LAST_REMOVED);
              }
            }}
          >
            <FormattedMessage
              id="restoreCartItem"
              defaultMessage={"_RESTORE_LAST_REMOVED_ITEM_"}
            />{" "}
            <span>
              <CartPlusIcon />
            </span>
          </p>
        )}
      </div>
      <SProductButton
        disabled={cartItems.length < 1}
        onClick={() => Navigate("/checkout/cartItems")}
      >
        <FormattedMessage id="checkout" defaultMessage={"_CHECKOUT_"} />
      </SProductButton>
    </SCartInfo>
  );
}
