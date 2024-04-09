import { FormattedMessage } from "react-intl";
import { SCartWishlist, SEmptyWishlist } from "@src/views/Cart/CartWishlist";
import { useWishlistProvider } from "@src/providers/WishlistProvider";
import { CartWishlistItem } from "@src/views/Cart/CartWishlist/CartWishlistItem";
import { PresentIcon } from "@src/assets/icons";

export function CartWishlist() {
  const { wishlistItems } = useWishlistProvider();

  if (wishlistItems.length < 1) {
    return (
      <SEmptyWishlist>
        <FormattedMessage
          id="emptyWishlist"
          defaultMessage={"_WISHLIST_IS_EMPTY_"}
        />
      </SEmptyWishlist>
    );
  }

  return (
    <SCartWishlist>
      <h2>
        <FormattedMessage id="wishlist" defaultMessage={"_WISHLIST_"} />{" "}
        <span>
          <PresentIcon />
        </span>
      </h2>
      {wishlistItems?.map((item) => {
        return <CartWishlistItem key={item.id} item={item} />;
      })}
    </SCartWishlist>
  );
}
