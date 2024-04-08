import { PropsWithChildren, useState, useEffect } from "react";
import { CartContext } from "@src/providers/CartProvider";
import { TAuthStage_Enum, useAuthProvider } from "@src/providers/AuthProvider";
import { privateAxios } from "@src/utils/privateAxios";
import { CACHED_CART_ITEMS } from "@src/config/localStorageCache";

import { useAddToCart } from "@src/hooks/useAddToCart";
import { useRemoveCartItem } from "@src/hooks/useRemoveCartItem";
import { TCartItem } from "@src/@types/general";

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [gettingCart, setGettingCart] = useState<boolean>(false);
  const { authStage } = useAuthProvider();

  const { addToCart, addingToCart } = useAddToCart();
  const { removeCartItem, removingCartItem } = useRemoveCartItem();

  // GET CART ITEMS
  async function getCart() {
    try {
      setGettingCart(true);
      const cachedCartItems = localStorage.getItem(CACHED_CART_ITEMS);
      if (cachedCartItems) {
        const storageCartItems = JSON.parse(cachedCartItems);
        setCartItems(storageCartItems as TCartItem[]);
      } else {
        const response = await privateAxios.get("/cart");

        // SORT CART ITEMS TO MAINTAIN ITEMS LIST ORDER
        const sortedCartItems = response?.data.sort(
          (a: TCartItem, b: TCartItem) => {
            const dateA = new Date(a["created_at"]).getTime();
            const dateB = new Date(b["created_at"]).getTime();

            return dateB - dateA;
          }
        );
        localStorage.setItem(
          CACHED_CART_ITEMS,
          JSON.stringify(sortedCartItems)
        );
        setCartItems(sortedCartItems);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setGettingCart(false);
    }
  }

  async function handleAddToCart(id: string) {
    await addToCart(id);
    localStorage.removeItem(CACHED_CART_ITEMS);
    getCart();
  }
  
  async function handleRemoveCart(item: TCartItem, removeAll: boolean) {
    await removeCartItem(item, removeAll);
    localStorage.removeItem(CACHED_CART_ITEMS);
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
