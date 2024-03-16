import { TCartItem, TProduct } from "@src/@types/general";
import { SCheckoutProducts } from "@src/views/Checkout/CheckoutProducts";
import { CheckoutProduct } from "@src/views/Checkout/CheckoutProducts/CheckoutProduct";

interface CheckoutProductsProps {
  cartItems?: TCartItem[];
  item?: TProduct;
}

export function CheckoutProducts({ cartItems, item }: CheckoutProductsProps) {
  return (
    <SCheckoutProducts>
      {cartItems ? (
        cartItems.map((item) => {
          return <CheckoutProduct key={item.id} item={item} />;
        })
      ) : (
        <CheckoutProduct product={item} />
      )}
    </SCheckoutProducts>
  );
}
