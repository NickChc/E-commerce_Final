import { createContext } from "react";
import {
  TCartItem,
  TCategory,
  TProduct,
  TWishlistProduct,
  TPaymentStatus_Enum,
  TOrder,
} from "@src/@types/general";

interface GlobalContextProps {
  filteredProducts: TProduct[];
  getFilteredProducts: (
    categoryName: string,
    saleOnly: boolean,
    priceRange: number[] | undefined,
    page: number
  ) => Promise<void>;
  gettingFiltered: boolean;
  totalFiltered: number;
  fetchProducts: (productName: string, categoryName?: string) => Promise<void>;
  products: TProduct[];
  searchedProducts: TProduct[];
  setSearchedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  productsLoading: boolean;
  searching: boolean;
  productsError: string;
  product: TProduct | undefined;
  productLoading: boolean;
  fetchSingleProduct: (productId: string) => Promise<void>;
  totalProducts: number;
  searchKeyWord: string;
  minMax: number[];
  setMinMax: React.Dispatch<React.SetStateAction<number[]>>;
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
  addingToWishlist: boolean;
  getCart: () => Promise<void>;
  gettingCart: boolean;
  cartItems: TCartItem[];
  removeCartItem: (arg1: TCartItem, arg2: boolean) => Promise<void>;
  removingCartItem: boolean;
  categoryNavOpen: boolean;
  setCategoryNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getCategories: () => Promise<void>;
  gettingCategories: boolean;
  categories: TCategory[];
  deliveryAddress: string;
  setDeliveryAddress: React.Dispatch<React.SetStateAction<string>>;
  paymentStatus: TPaymentStatus_Enum;
  setPaymentStatus: React.Dispatch<React.SetStateAction<TPaymentStatus_Enum>>;
  orders: TOrder[];
  getOrders: () => Promise<void>;
  gettingOrders: boolean;
  currOrder: string | undefined;
  setCurrOrder: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  filteredProducts: [],
  getFilteredProducts: async () => {},
  gettingFiltered: false,
  totalFiltered: 0,
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
  totalProducts: 100,
  searchKeyWord: "",
  setSearchKeyWord: () => {},
  minMax: [],
  setMinMax: () => {},
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
  addingToWishlist: false,
  getCart: async () => {},
  gettingCart: false,
  cartItems: [],
  removeCartItem: async () => {},
  removingCartItem: false,
  categoryNavOpen: false,
  setCategoryNavOpen: () => {},
  getCategories: async () => {},
  gettingCategories: false,
  categories: [],
  deliveryAddress: "",
  setDeliveryAddress: () => {},
  paymentStatus: TPaymentStatus_Enum.EMPTY,
  setPaymentStatus: () => {},
  orders: [],
  getOrders: async () => {},
  gettingOrders: false,
  currOrder: undefined,
  setCurrOrder: () => {},
});
