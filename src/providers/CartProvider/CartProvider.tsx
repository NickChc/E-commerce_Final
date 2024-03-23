import { PropsWithChildren, useState, useEffect } from "react";
import { CartContext } from "@src/providers/CartProvider";
import { TAuthStage_Enum, useAuthProvider } from "@src/providers/AuthProvider";
import { privateAxios } from "@src/utils/privateAxios";

import { useAddToCart } from "@src/hooks/useAddToCart";
import { useRemoveCartItem } from "@src/hooks/useRemoveCartItem";
import { TCartItem } from "@src/@types/general";

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [gettingCart, setGettingCart] = useState<boolean>(false);
  const { authStage } = useAuthProvider();

  const { addToCart, addingToCart } = useAddToCart();
  const { removeCartItem, removingCartItem } = useRemoveCartItem();

  async function getCart() {
    try {
      setGettingCart(true);
      const response = await privateAxios.get("/cart");

      // SORT CART ITEMS TO MAINTAIN ITEMS LIST ORDER
      const sortedCartItems = response?.data.sort(
        (a: TCartItem, b: TCartItem) => {
          const dateA = new Date(a["created_at"]).getTime();
          const dateB = new Date(b["created_at"]).getTime();

          return dateA - dateB;
        }
      );
      setCartItems(sortedCartItems);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setGettingCart(false);
    }
  }

  async function handleAddToCart(id: string) {
    await addToCart(id);
    getCart();
  }

  async function handleRemoveCart(item: TCartItem, removeAll: boolean) {
    await removeCartItem(item, removeAll);
    getCart();
  }

  useEffect(() => {
    if (authStage === TAuthStage_Enum.AUTHORIZED) {
      getCart();
    }
  }, [authStage]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getCart,
        gettingCart,
        addingToCart,
        handleRemoveCart,
        removingCartItem,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
