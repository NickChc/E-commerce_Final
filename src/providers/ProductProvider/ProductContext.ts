import { createContext } from "react";
import { TProduct } from "@src/@types/general";

interface ProductContextProps {
  products: TProduct[];
  searchedProducts: TProduct[];
  setSearchedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  productsLoading: boolean;
  searching: boolean;
  searchKeyWord: string;
  setSearchKeyWord: React.Dispatch<React.SetStateAction<string>>;
  productsError: string;
  totalProducts: number;
  categoryProducts: TProduct[];
  fetchProducts: (
    keyWord: string,
    categoryName?: string,
    action?: "search" | "filter"
  ) => Promise<void>;
  getFilteredProducts: (
    categoryName: string,
    onlySale: boolean,
    priceRange: number[] | undefined,
    page: number
  ) => Promise<void>;
  filteredProducts: TProduct[];
  gettingFiltered: boolean;
  totalFiltered: number;
  fetchSingleProduct: (productId: string) => Promise<void>;
  product: TProduct | undefined;
  productLoading: boolean;
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  searchedProducts: [],
  setSearchedProducts: () => {},
  productsLoading: false,
  searching: false,
  searchKeyWord: "",
  setSearchKeyWord: () => {},
  productsError: "",
  totalProducts: 100,
  categoryProducts: [],
  fetchProducts: async () => {},
  getFilteredProducts: async () => {},
  filteredProducts: [],
  gettingFiltered: false,
  totalFiltered: 0,
  fetchSingleProduct: async () => {},
  product: undefined,
  productLoading: false,
});
