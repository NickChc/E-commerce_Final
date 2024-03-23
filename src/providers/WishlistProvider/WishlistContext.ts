import { TWishlistProduct } from "@src/@types/general";
import { createContext } from "react";

interface WishlistContextProps {
  wishlistItems: TWishlistProduct[];
  gettingWishlist: boolean;
  toggleWishlist: (arg: string) => Promise<void>;
    removingWishlist: boolean;
    addingWishlist: boolean;
}

export const WishlistContext = createContext<WishlistContextProps>({
  wishlistItems: [],
  gettingWishlist: false,
  toggleWishlist: async () => {},
  removingWishlist: false,
  addingWishlist: false,
});
