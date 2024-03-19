import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SPaymentMessage } from "@src/components/PaymentMessage";
import { TPaymentStatus_Enum } from "@src/@types/general";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { TLocale_Enum } from "@src/providers/LocaleProvider";

interface PaymentMessageProps {
  status: TPaymentStatus_Enum;
  closeModal: () => void;
}

export function PaymentMessage({ status, closeModal }: PaymentMessageProps) {
  const Navigate = useNavigate();

  const { locale } = useLocaleProvider();

  return (
    <SPaymentMessage>
      {status === TPaymentStatus_Enum.GOOD ? (
        <>
          <h2>THANKS FOR USING OUR SERVICE!</h2>
          <p>
            {locale === TLocale_Enum.EN
              ? "Your order will be on it's way soon. You can track it from profile page."
              : locale === TLocale_Enum.KA
              ? "შეკვეთა მალე დაიძრება თქვენი მიმართულებით. შეკვეთის დეტალები იხილეთ პროფილის გვერდზე"
              : ""}
          </p>
          <div>
            <SProductButton variation="primary" onClick={closeModal}>
              <FormattedMessage id="gotIt" defaultMessage={"_GOT_IT_"} />
            </SProductButton>
            <SProductButton
              onClick={() => {
                Navigate("/profile");
                closeModal();
              }}
            >
              <FormattedMessage id="profile" defaultMessage={"_PROFILE_"} />
            </SProductButton>
          </div>
        </>
      ) : status === TPaymentStatus_Enum.BAD ? (
        <>
          <h2>OOPS, SOMETHING WENT WRONG</h2>
          <p>ERROR MESSSAGE HERE</p>
        </>
      ) : null}
    </SPaymentMessage>
  );
}
