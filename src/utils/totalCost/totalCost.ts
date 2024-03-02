import { TCartItem } from "@src/@types/general";


export function totalCost(cartItems: TCartItem[]) {
  let total = 0;

  cartItems.forEach(
    (item) =>
      (total +=
        (item.cartProduct.salePrice || item.cartProduct.price) * item.count)
  );

  return total;
}
