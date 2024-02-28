import { privateAxios } from "@src/utils/privateAxios";
import { useState } from "react";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useGetWishlist } from "@src/hooks/useGetWishlist";

export function useToggleWishlist() {
  const [loading, setLoading] = useState(false);

  const { wishlist, getWishlist } = useGetWishlist();

  const { authStage } = useAuthProvider();

  // CHECK IF PRODUCT IS IN WISHLIST
  function checkLiked(productId: string | undefined) {
    if (!productId) return;

    return wishlist?.find((product) => product.product_id === productId);
  }

  async function toggleWishlist(productId: string) {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) return;

    try {
      setLoading(true);
      // IF PRODUCT IS IN WISHLIST, FUNCTION REMOVES, IF NOT FUNCTION ADDS
      const isLiked = checkLiked(productId);
      if (isLiked) {
        await privateAxios.delete(`/liked-products/${isLiked.id}`);
      } else {
        await privateAxios.post("liked-products", {
          product_id: productId,
        });
      }
      // GET WISHLIST AFTER CHANGE
      getWishlist();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { toggleWishlist, togglingWishlist: loading, checkLiked };
}
