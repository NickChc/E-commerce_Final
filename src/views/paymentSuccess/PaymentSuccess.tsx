import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { privateAxios } from "@src/utils/privateAxios";
import { SPaymentSuccess } from "@src/views/paymentSuccess";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { ADD_ORDER_DATA } from "@src/config/localStorageKeys";
import { CACHED_ORDERS } from "@src/config/localStorageCache";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import PaymentSuccessImg from "@src/assets/images/PaymentSuccessImg.jpg";

interface TAddOrderData {
  totalPrice: number;
  totalItems: number;
}

export function PaymentSuccess() {
  const Navigate = useNavigate();
  const { locale } = useLocaleProvider();

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
