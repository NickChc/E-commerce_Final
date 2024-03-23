import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";

export function useAddToWishlist() {
  const [loading, setLoading] = useState<boolean>(false);


  async function addToWishlist(productId: string) {
    try {
      setLoading(true);
      await privateAxios.post(`/liked-products`, {
        product_id: productId,
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { addToWishlist, addingToWishlist: loading };
}
