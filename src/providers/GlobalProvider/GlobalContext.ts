import { createContext } from "react";
import { TCategory, TPaymentStatus_Enum, TOrder } from "@src/@types/general";

interface GlobalContextProps {
  minMax: number[];
  setMinMax: React.Dispatch<React.SetStateAction<number[]>>;
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
