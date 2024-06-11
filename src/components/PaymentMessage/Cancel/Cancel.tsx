import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useCancelOrder } from "@src/hooks/useCancelOrder";
import { FormattedMessage } from "react-intl";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

interface CancelProps {
  closeModal: () => void;
}

export function Cancel({ closeModal }: CancelProps) {
  const { currOrder, setCurrOrder } = useGlobalProvider();

  const { locale } = useLocaleProvider();

  const { cancelOrder, cancellingOrder } = useCancelOrder();

  function removeOrder() {
    if (currOrder) {
      cancelOrder(currOrder, closeModal);
    }
  }

  return (
    <>
      <h2>
        <FormattedMessage
          id="orderCancelAssure"
          defaultMessage={"_ARE_YOU_SURE_YOU_WANT_TO_CANCEL_ORDER?_"}
        />
      </h2>
      <p>
        {locale === TLocale_Enum.EN
          ? "After cancellation the money will be refunded back to you. If the order is already transporting you will have to pay cost of shipping."
          : locale === TLocale_Enum.KA
          ? "გაუქმების შემდეგ თქვენ დაგიბრუნდებათ თანხა. თუ შეკვეთილი ნივთი უკვე ტრანსპორტირდება, თქვენ მოგიწევთ დაფაროთ გადატანის საფასური"
          : "After cancellation the money will be refunded back to you. If the order is already transporting you will have to pay cost of shipping."}
      </p>

      <div>
        <SProductButton
          disabled={cancellingOrder}
          variation="warning"
          onClick={removeOrder}
        >
          {cancellingOrder ? (
            <>
              <FormattedMessage
                id="removingOrder"
                defaultMessage={"_REMOVING_"}
              />
              <LoadingCircleAnim isSpan />
            </>
          ) : (
            <FormattedMessage
              id="removeOrder"
              defaultMessage={"_REMOVE_ORDER_"}
            />
          )}
        </SProductButton>
        <SProductButton
          variation="primary"
          onClick={() => {
            setCurrOrder(undefined);
            closeModal();
          }}
        >
          <FormattedMessage id="back" defaultMessage={"_BACK_"} />
        </SProductButton>
      </div>
    </>
  );
}
