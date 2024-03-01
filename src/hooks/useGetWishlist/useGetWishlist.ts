import { privateAxios } from "@src/utils/privateAxios";
import { useState } from "react";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { TWishlistProduct } from "@src/@types/general";

export function useGetWishlist() {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState<TWishlistProduct[]>([]);

  const { authStage } = useAuthProvider();

  async function getWishlist() {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) return;

    try {
      setLoading(true);
      const response = await privateAxios.get("/liked-products");
      setWishlist(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { getWishlist, gettingWishlist: loading, wishlist };
}
