import { SCartList } from "@src/views/Cart/CartList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CartItem } from "@src/views/Cart/CartList/CartItem";

export function CartList() {
  const { cartItems } = useGlobalProvider();

  return (
    <SCartList>
      {cartItems?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </SCartList>
  );
}
