import { createContext } from "react";
import { TProduct, TWishlistProduct } from "@src/@types/requestTypes";

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
  registering: boolean;
  setRegistering: React.Dispatch<React.SetStateAction<boolean>>;
  authModal: boolean;
  setAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  popUpText: string;
  setPopUpText: React.Dispatch<React.SetStateAction<string>>;
  getWishlist: () => Promise<void>;
  gettingWishlist: boolean;
  wishlist: TWishlistProduct[];
  toggleWishlist: (arg: string) => Promise<void>;
  removeFromWishlist: (arg: string) => Promise<void>;
  removingWishlistItem: boolean;
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
  registering: false,
  setRegistering: () => {},
  authModal: false,
  setAuthModal: () => {},
  popUpText: "",
  setPopUpText: () => {},
  getWishlist: async () => {},
  gettingWishlist: false,
  wishlist: [],
  toggleWishlist: async () => {},
  removeFromWishlist: async () => {},
  removingWishlistItem: false,
});