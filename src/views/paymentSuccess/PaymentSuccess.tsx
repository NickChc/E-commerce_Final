import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { privateAxios } from "@src/utils/privateAxios";
import { SPaymentSuccess } from "@src/views/paymentSuccess";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";
import { CACHED_ORDERS } from "@src/config/localStorageCache";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { useAuthProvider, TAuthStage_Enum } from "@src/providers/AuthProvider";
import PaymentSuccessImg from "@src/assets/images/PaymentSuccessImg.jpg";
import { ADD_ORDER_DATA_BACKUP } from "@src/config/sessionStorageKeys";

interface TAddOrderData {
  totalPrice: number;
  totalItems: number;
}

export function PaymentSuccess() {
  const [addOrderDataString, setAddOrderDataString] = useState<string | null>(
    null
  );

  const Navigate = useNavigate();
  const { locale } = useLocaleProvider();
  const { authStage } = useAuthProvider();

  async function addOrders(addOrderData: TAddOrderData) {
    try {
      if (!addOrderDataString || authStage !== TAuthStage_Enum.AUTHORIZED) {
        console.log("NOT WORKING");
        return;
      }
      await privateAxios.post("/purchases", {
        totalPrice: addOrderData.totalPrice,
        totalItems: addOrderData.totalItems,
      });
      setAddOrderDataString(null);
      localStorage.removeItem(CACHED_ORDERS);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      localStorage.removeItem(ADD_ORDER_DATA);
    }
  }

  useEffect(() => {
    const addOrderData = localStorage.getItem(ADD_ORDER_DATA);
    const addOrderDataBackup = sessionStorage.getItem(ADD_ORDER_DATA_BACKUP);
    setAddOrderDataString(addOrderData || addOrderDataBackup);
    if (addOrderDataString) {
      const addOrderDataParsed: TAddOrderData = JSON.parse(addOrderDataString);
      addOrders(addOrderDataParsed);
    }
  }, [authStage]);

  return (
    <SPaymentSuccess>
      <img src={PaymentSuccessImg} alt="successful payment image" />
      {(locale === TLocale_Enum.EN && (
        <div>
          <h1>CONGRATULATIONS!</h1>
          <h3>
            Your order will be on it's way soon. <br /> You can track it from{" "}
            <Link replace to={"/profile"}>
              PROFILE
            </Link>{" "}
            page.
          </h3>
          <SProductButton onClick={() => Navigate("/", { replace: true })}>
            HOME
          </SProductButton>
        </div>
      )) ||
        (locale === TLocale_Enum.KA && (
          <div>
            <h1>გილოცავთ!</h1>
            <h3>
              თქვენი შეკვეთა მალე გზაში იქნება. <br /> შეკვეთას შეგიძლიათ თვალი
              ადევნოთ{" "}
              <Link replace to={"/profile"}>
                პროფილი
              </Link>{" "}
              -ს გვერდიდან.
            </h3>
            <SProductButton onClick={() => Navigate("/", { replace: true })}>
              მთავარი
            </SProductButton>
          </div>
        ))}
    </SPaymentSuccess>
  );
}
