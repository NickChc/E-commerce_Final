import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { TCartItem } from "@src/@types/general";

export function useRemoveCartItem() {
  const [loading, setloading] = useState<boolean>(false);

  async function removeCartItem(cartItem: TCartItem, removeAll: boolean) {
    try {
      setloading(true);
      if (removeAll) {
        const { count, id } = cartItem;

        for (let i = 0; i < 20 || i < count; i++) {
          await privateAxios.delete(`/cart/${id}`);
        }
      } else {
        await privateAxios.delete(
          `/cart/${cartItem.id}?removeAll=${removeAll}`
        );
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  }

  return { removeCartItem, removingCartItem: loading };
}
