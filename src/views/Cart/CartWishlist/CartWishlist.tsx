import { SCartWishlist } from "@src/views/Cart/CartWishlist";
import { useWishlistProvider } from "@src/providers/WishlistProvider";
import { CartWishlistItem } from "@src/views/Cart/CartWishlist/CartWishlistItem";
import { PresentIcon } from "@src/assets/icons";

export function CartWishlist() {
  const { wishlistItems } = useWishlistProvider();

  if (wishlistItems.length < 1) return;

  return (
    <SCartWishlist>
      <h2>
        WISHLIST{" "}
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
