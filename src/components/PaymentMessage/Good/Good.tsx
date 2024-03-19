import { FormattedMessage } from "react-intl";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useNavigate } from "react-router-dom";
import { SProductButton } from "@src/components/Buttons/ProductButton";

interface GoodProps {
  closeModal: () => void;
}

export function Good({ closeModal }: GoodProps) {
  const { locale } = useLocaleProvider();

  const Navigate = useNavigate();

  return (
    <>
      <h2>
        <FormattedMessage
          id="paymentThanks"
          defaultMessage={"_THANKS_FOR_USING_OUR_SERVICE_"}
        />
      </h2>
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
  );
}
