import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGetCategories } from "@src/hooks/useGetCategories";
import { useGetFilteredProducts } from "@src/hooks/useGetFilteredProducts";
import { TPaymentStatus_Enum } from "@src/@types/general";
import { useGetOrders } from "@src/hooks/useGetOrders";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [minMax, setMinMax] = useState<number[]>([]);
  const [registering, setRegistering] = useState(false);
  const [authModal, setAuthModal] = useState<boolean>(false);
  const [popUpText, setPopUpText] = useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<TPaymentStatus_Enum>(
    TPaymentStatus_Enum.EMPTY
  );
  const [currOrder, setCurrOrder] = useState<string | undefined>();
  const [categoryNavOpen, setCategoryNavOpen] = useState<boolean>(false);

  const { authStage } = useAuthProvider();

  const {
    products,
    productsLoading,
    fetchProducts,
    productsError,
    searchedProducts,
    setSearchedProducts,
    searching,
    totalProducts,
  } = useGetProducts();

  const {
    filteredProducts,
    gettingFiltered,
    getFilteredProducts,
    totalFiltered,
  } = useGetFilteredProducts();
  const { product, productLoading, fetchSingleProduct } = useGetSingleProduct();
  const { getCategories, categories, gettingCategories } = useGetCategories();
  const { orders, gettingOrders, getOrders } = useGetOrders();

  const Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [Location.pathname]);

  useEffect(() => {
    getCategories();
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
        filteredProducts,
        getFilteredProducts,
        gettingFiltered,
        totalFiltered,
        fetchProducts,
        products,
        searchedProducts,
        setSearchedProducts,
        productsLoading,
        productsError,
        product,
        productLoading,
        fetchSingleProduct,
        totalProducts,
        searchKeyWord,
        minMax,
        setMinMax,
        setSearchKeyWord,
        searching,
        registering,
        setRegistering,
        authModal,
        setAuthModal,
        popUpText,
        setPopUpText,
        categoryNavOpen,
        setCategoryNavOpen,
        getCategories,
        gettingCategories,
        categories,
        deliveryAddress,
        setDeliveryAddress,
        paymentStatus,
        setPaymentStatus,
        orders,
        getOrders,
        gettingOrders,
        currOrder,
        setCurrOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
