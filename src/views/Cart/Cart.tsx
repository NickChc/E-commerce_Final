import {
  SCart,
  SCartInfoWrapperSm,
  SCartInfoWrapperLg,
  SSliderWrapper,
} from "@src/views/Cart";
import { CartList } from "@src/views/Cart/CartList";
import { CartInfo } from "@src/views/Cart/CartInfo";
import { WishlistSlider } from "@src/components/WishlistSlider";
import { CartWishlist } from "@src/views/Cart/CartWishlist";

export function Cart() {
  return (
    <>
      <SCart>
        {/* CART INFO ON SMALL SCREENS */}
        <SCartInfoWrapperSm>
          <CartInfo />
          <hr />
        </SCartInfoWrapperSm>
        <CartList />
        <hr />
        <CartWishlist />
        {/* CART INFO ON LARGE SCREENS */}
        <SCartInfoWrapperLg>
          <CartInfo />
        </SCartInfoWrapperLg>
      </SCart>
      <SSliderWrapper>
        <WishlistSlider />
      </SSliderWrapper>
    </>
  );
}
