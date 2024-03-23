import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";

export function useAddToCart() {
  const [loading, setLoading] = useState<boolean>(false);

  const { authStage } = useAuthProvider();

  async function addToCart(id: string) {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) return;

    try {
      setLoading(true);
      await privateAxios.post(`/cart`, { product_id: id });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { addToCart, addingToCart: loading };
}
