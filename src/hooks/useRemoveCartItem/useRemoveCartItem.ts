import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { TCartItem } from "@src/@types/general";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useRemoveCartItem() {
  const [loading, setloading] = useState<boolean>(false);

  const { getCart } = useGlobalProvider();

  async function removeCartItem(cartItem: TCartItem, removeAll: boolean) {
    try {
      setloading(true);
      await privateAxios.delete(`/cart/${cartItem.id}?removeAll=${removeAll}`);
      getCart();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  }

  return { removeCartItem, removingCartItem: loading };
}
