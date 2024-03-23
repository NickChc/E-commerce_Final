import { useContext } from "react";
import { WishlistContext } from "@src/providers/WishlistProvider";

export function useWishlistProvider() {
  const { ...data } = useContext(WishlistContext);

  return { ...data };
}
