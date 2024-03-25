import { createContext } from "react";
import {
  TCategory,
  TProduct,
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
  fetchProducts: (productName: string, categoryName?: string, search?: boolean) => Promise<void>;
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
  registering: boolean;
  setRegistering: React.Dispatch<React.SetStateAction<boolean>>;
  authModal: boolean;
  setAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  popUpText: string;
  setPopUpText: React.Dispatch<React.SetStateAction<string>>;
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
  registering: false,
  setRegistering: () => {},
  authModal: false,
  setAuthModal: () => {},
  popUpText: "",
  setPopUpText: () => {},
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
