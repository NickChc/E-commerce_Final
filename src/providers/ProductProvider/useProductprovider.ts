import { useContext } from "react";
import { ProductContext } from "@src/providers/ProductProvider";

export function useProductProvider() {
  const { ...data } = useContext(ProductContext);

  return { ...data };
}
