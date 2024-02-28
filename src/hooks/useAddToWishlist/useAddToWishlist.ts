import { privateAxios } from "@src/utils/privateAxios";
import { useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useAddToWishlist() {
  const [loading, setLoading] = useState<boolean>(false);

  const { getWishlist } = useGlobalProvider();

  async function addToWishlist(productId: string) {
    try {
      setLoading(true);
      await privateAxios.post(`/liked-products`, {
        product_id: productId,
      });

    //   GET WISHLIST AFTER ADDING TO IT
      getWishlist();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { addToWishlist, addingToWishlist: loading };
}
