import { TCartItem } from "@src/@types/general";
import { createContext } from "react";

interface CartContextProps {
  cartItems: TCartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  getCart: () => Promise<void>;
  gettingCart: boolean;
  addingToCart: boolean;
  handleRemoveCart: (arg1: TCartItem, arg2: boolean) => Promise<void>;
  removingCartItem: boolean;
  handleAddToCart: (arg: string) => Promise<void>;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  setCartItems: () => {},
  getCart: async () => {},
  gettingCart: false,
  addingToCart: false,
  handleRemoveCart: async () => {},
  removingCartItem: false,
  handleAddToCart: async () => {},
});
