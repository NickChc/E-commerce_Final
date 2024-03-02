import { TCartItem } from "@src/@types/general";

export function moneySaved(cartItems: TCartItem[]) {
  let savedMoney = 0;

  cartItems?.forEach((item) => {
    if (item.cartProduct.salePrice !== null) {
      savedMoney += item.cartProduct.price - item.cartProduct.salePrice;
    }
  });

  return savedMoney;
}