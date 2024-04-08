import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { privateAxios } from "@src/utils/privateAxios";
import { SPaymentSuccess } from "@src/views/paymentSuccess";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";
import { CACHED_ORDERS } from "@src/config/localStorageCache";

interface TAddOrderData {
  totalPrice: number;
  totalItems: number;
}

export function PaymentSuccess() {
  const Navigate = useNavigate();

  async function addOrders(addOrderData: TAddOrderData) {
    try {
      await privateAxios.post("/purchases", {
        totalPrice: addOrderData.totalPrice,
        totalItems: addOrderData.totalItems,
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      localStorage.removeItem(ADD_ORDER_DATA);
      localStorage.removeItem(CACHED_ORDERS);
    }
  }

  useEffect(() => {
    return () => {
      const addOrderDataString = localStorage.getItem(ADD_ORDER_DATA);
      if (addOrderDataString) {
        const addOrderData: TAddOrderData = JSON.parse(addOrderDataString);
        addOrders(addOrderData);
      }
    };
  }, []);

  return (
    <SPaymentSuccess>
      <h1>CONGRATULATIONS!</h1>
      <h3>
        Your order will be on it's way soon. <br /> you can track it from{" "}
        <Link replace to={"/profile"}>
          PROFILE
        </Link>{" "}
        page
      </h3>
      <SProductButton onClick={() => Navigate("/", { replace: true })}>
        HOME
      </SProductButton>
    </SPaymentSuccess>
  );
}
