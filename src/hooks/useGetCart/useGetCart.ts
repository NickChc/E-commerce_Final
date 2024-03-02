import { useState, useEffect } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { TCartItem } from "@src/@types/general";

export function useGetCart() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const { authStage } = useAuthProvider();

  async function getCart() {
    if (authStage !== TAuthStage_Enum.AUTHORIZED) return;

    try {
      setLoading(true);
      const response = await privateAxios.get("/cart");

      // SORT CART ITEMS TO MAINTAIN ITEMS LIST ORDER
      const sortedCartItems = response?.data.sort(
        (a: TCartItem, b: TCartItem) => {
          const dateA = new Date(a.cartProduct["created_at"]).getTime();
          const dateB = new Date(b.cartProduct["created_at"]).getTime();

          return dateA - dateB;
        }
      );
      setCartItems(sortedCartItems);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(true);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return { getCart, gettingCart: loading, cartItems };
}
