import { SCartWishlist } from "@src/views/Cart/CartWishlist";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CartWishlistItem } from "@src/views/Cart/CartWishlist/CartWishlistItem";
import { PresentIcon } from "@src/assets/icons";

export function CartWishlist() {
  const { wishlist } = useGlobalProvider();

  if (wishlist.length < 1) return;

  return (
    <SCartWishlist>
      <h2>
        WISHLIST{" "}
        <span>
          <PresentIcon />
        </span>
      </h2>
      {wishlist?.map((item) => {
        return <CartWishlistItem key={item.id} item={item} />;
      })}
    </SCartWishlist>
  );
}
