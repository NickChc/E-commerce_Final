import { SCart, SCartInfoWrapperSm, SCartInfoWrapperLg } from "@src/views/Cart";
import { CartList } from "@src/views/Cart/CartList";
import { CartInfo } from "@src/views/Cart/CartInfo";

export function Cart() {
  return (
    <SCart>

      {/* CART INFO ON SMALL SCREENS */}
      <SCartInfoWrapperSm>
        <CartInfo />
        <hr />
      </SCartInfoWrapperSm>
      
      <CartList />

      {/* CART INFO ON LARGE SCREENS */}
      <SCartInfoWrapperLg>
        <CartInfo />
      </SCartInfoWrapperLg>
    </SCart>
  );
}
