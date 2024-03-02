import { SCart } from "@src/views/Cart";
import { CartList } from "@src/views/Cart/CartList";
import { CartInfo } from "@src/views/Cart/CartInfo";

export function Cart() {
  return (
    <SCart>
      {/* <h1>CART</h1> */}
      <CartList />
      <CartInfo />
    </SCart>
  );
}
