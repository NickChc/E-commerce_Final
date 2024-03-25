import { SCart, SRightSide, SLeftSide } from "@src/views/Cart";
import { CartList } from "@src/views/Cart/CartList";
import { CartInfo } from "@src/views/Cart/CartInfo";
import { WishlistSlider } from "@src/components/WishlistSlider";
import { CartWishlist } from "@src/views/Cart/CartWishlist";

export function Cart() {
  return (
    <>
      <SCart>
        <SLeftSide>
          <CartWishlist />
          <CartList />
          <WishlistSlider />
        </SLeftSide>

        <SRightSide>
          <CartInfo />
        </SRightSide>
      </SCart>
    </>
  );
}
