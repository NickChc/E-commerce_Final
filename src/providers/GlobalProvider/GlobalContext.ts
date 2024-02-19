import { createContext } from "react";
import { TProduct } from "@src/@types/requestTypes";

interface GlobalContextProps {
  products: TProduct[];
  productsLoading: boolean;
  product: TProduct | undefined;
  productLoading: boolean;
  fetchSingleProduct: (productId: string) => Promise<void>;
};

export const GlobalContext = createContext<GlobalContextProps>({
  products: [],
  productsLoading: false,
  product: undefined,
  productLoading: false,
  fetchSingleProduct: async () => {},
});