import { useContext } from "react";
import { CartContext } from "@src/providers/CartProvider";

export function useCartProvider() {
  const { ...data } = useContext(CartContext);

  return { ...data };
}
