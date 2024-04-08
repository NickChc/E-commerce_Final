import { PropsWithChildren, useEffect, useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { TWishlistProduct } from "@src/@types/general";
import { WishlistContext } from "@src/providers/WishlistProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useAddToWishlist } from "@src/hooks/useAddToWishlist";
import { useRemoveFromWishlist } from "@src/hooks/useRemoveFromWishlist";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { CACHED_WISHLIST_ITEMS } from "@src/config/localStorageCache";

export function WishlistProvider({ children }: PropsWithChildren) {
  const [gettingWishlist, setGettingWishlist] = useState<boolean>(false);
  const [wishlistItems, setWishlistItems] = useState<TWishlistProduct[]>([]);
  const [addingWishlist, setAddingWishlist] = useState<boolean>(false);
  const [removingWishlist, setRemovingWishlist] = useState<boolean>(false);

  const { addToWishlist } = useAddToWishlist();
  const { removeFromWishlist } = useRemoveFromWishlist();

  const { authStage } = useAuthProvider();

  async function getWishlist() {
    try {
      setGettingWishlist(true);
      const cachedWishlistItems = localStorage.getItem(CACHED_WISHLIST_ITEMS);
      if (cachedWishlistItems) {
        const localWishlistItems = JSON.parse(cachedWishlistItems);
        setWishlistItems(localWishlistItems as TWishlistProduct[]);
      } else {
        const response = await privateAxios.get("/liked-products");
        setWishlistItems(response.data);
        localStorage.setItem(
          CACHED_WISHLIST_ITEMS,
          JSON.stringify(response.data)
        );
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setGettingWishlist(false);
    }
  }

  async function toggleWishlist(productId: string) {
    try {
      localStorage.removeItem(CACHED_WISHLIST_ITEMS);
      const inWishlist = wishlistItems?.find(
        (item) => item.product_id === productId
      );

      if (inWishlist) {
        setRemovingWishlist(true);
        await removeFromWishlist(inWishlist.id);
      } else {
        setAddingWishlist(true);
        await addToWishlist(productId);
      }
      getWishlist();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setRemovingWishlist(false);
      setAddingWishlist(false);
    }
  }

  useEffect(() => {
    if (authStage === TAuthStage_Enum.AUTHORIZED) {
      getWishlist();
    }
  }, [authStage]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        gettingWishlist,
        toggleWishlist,
        removingWishlist,
        addingWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
