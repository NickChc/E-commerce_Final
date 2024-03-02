import { TCartItem } from "@src/@types/general";

export function totalQuantity(cartItems: TCartItem[]) {
  let totalQuantity = 0;

  cartItems?.forEach((item) => {
    totalQuantity += item.count;
  });

  return totalQuantity;
}
