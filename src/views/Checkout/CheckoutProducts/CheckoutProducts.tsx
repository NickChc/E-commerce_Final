import { TCartItem, TProduct } from "@src/@types/general";
import { SCheckoutProducts } from "@src/views/Checkout/CheckoutProducts";
import { CheckoutProduct } from "@src/views/Checkout/CheckoutProducts/CheckoutProduct";
import Product from "@src/views/Product";

interface CheckoutProductsProps {
  cartItems?: TCartItem[];
  item?: TProduct;
}

export function CheckoutProducts({ cartItems, item }: CheckoutProductsProps) {
  return (
    <SCheckoutProducts>
      {cartItems ? (
        cartItems.map((item) => {
          return (
            <CheckoutProduct key={item.id} item={item} />
            // <div key={item.id}>
            //   <img src={item.cartProduct.image} />
            //   <h3>
            //     Title - <span>{item.cartProduct.title}</span>
            //   </h3>
            //   <h3>
            //     Quantity - <span>{item.count}</span>
            //   </h3>
            // </div>
          );
        })
      ) : (
        <CheckoutProduct product={item} />
        // <div>
        //   <img src={item?.image} />
        //   <h3>
        //     Title - <span>{item?.title}</span>
        //   </h3>
        //   <h3>
        //     Quantity - <span>1</span>
        //   </h3>
        // </div>
      )}
    </SCheckoutProducts>
  );
}
