import { createContext } from "react";
import { TProduct } from "@src/@types/requestTypes";

interface GlobalContextProps {
  fetchProducts: (arg: string) => Promise<void>;
  products: TProduct[];
  searchedProducts: TProduct[];
  setSearchedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  productsLoading: boolean;
  searching: boolean;
  productsError: string;
  product: TProduct | undefined;
  productLoading: boolean;
  fetchSingleProduct: (productId: string) => Promise<void>;
  searchKeyWord: string;
  setSearchKeyWord: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (arg: string) => Promise<void>;
  addingToCart: boolean;
};

export const GlobalContext = createContext<GlobalContextProps>({
  fetchProducts: async () => {},
  products: [],
  searchedProducts: [],
  setSearchedProducts: () => {},
  productsLoading: false,
  searching: false,
  productsError: "",
  product: undefined,
  productLoading: false,
  fetchSingleProduct: async () => {},
  searchKeyWord: "",
  setSearchKeyWord: () => {},
  addToCart: async () => {},
  addingToCart: false,
});