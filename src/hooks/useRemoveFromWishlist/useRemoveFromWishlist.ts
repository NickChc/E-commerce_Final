import { privateAxios } from "@src/utils/privateAxios";
import { useState } from "react";

export function useRemoveFromWishlist() {
  const [loading, setLoading] = useState(false);

  async function removeFromWishlist(productId: string) {
    try {
      setLoading(true);
      await privateAxios.delete(`/liked-products/${productId}`);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(true);
    }
  }

  return { removeFromWishlist, removingWishlistItem: loading };
}
