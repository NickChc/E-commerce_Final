import { createContext } from "react";
import { TProduct } from "@src/@types/requestTypes";

interface GlobalContextProps {
    products: TProduct[];
    productsLoading: boolean;
};

export const GlobalContext = createContext<GlobalContextProps>({
    products: [],
    productsLoading: false,
});