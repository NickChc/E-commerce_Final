import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGetCategories } from "@src/hooks/useGetCategories";
import { TPaymentStatus_Enum } from "@src/@types/general";
import { useGetOrders } from "@src/hooks/useGetOrders";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";

export function GlobalProvider({ children }: PropsWithChildren) {
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
  const { getCategories, categories, gettingCategories } = useGetCategories();
  const { orders, gettingOrders, getOrders } = useGetOrders();

  const Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (!Location.pathname.includes("payment-success")) {
      localStorage.removeItem(ADD_ORDER_DATA);
    }
  }, [Location.pathname]);

  useEffect(() => {
    getCategories();
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
        minMax,
        setMinMax,
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
