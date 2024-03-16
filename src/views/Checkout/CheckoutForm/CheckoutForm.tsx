import { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  SCheckoutForm,
  SFormHideLink,
  SDoubleInput,
  SCheckoutFormWrapper,
} from "@src/views/Checkout/CheckoutForm";
import { paymentDefaultValues } from "@src/mocks/defaultValues";
import { useValidateCheckout } from "@src/views/Checkout/CheckoutForm/useValidateCheckout";
import { FormInput } from "@src/components/FormInput";
import { TPaymentValues } from "@src/@types/general";
import { formatInput } from "@src/utils/formatInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { CreditCard } from "@src/views/Checkout/CheckoutForm/CreditCard";
import { USER_CARD_DATA } from "@src/config/sessionStorageKeys";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface CheckoutFormProps {
  gotCard: boolean;
  setGotCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CheckoutForm({ gotCard, setGotCard }: CheckoutFormProps) {
  const [focusedValue, setFocusedValue] =
    useState<keyof TPaymentValues>("fullName");
  const [paymentFormValues, setPaymentFormValues] =
    useState<TPaymentValues>(paymentDefaultValues);

  const { validateCheckout, isValid, setIsValid, formErrors, setFormErrors } =
    useValidateCheckout();

  const { formatMessage } = useIntl();

  const { setPopUpText } = useGlobalProvider();

  // FORM INPUT CHANGE
  function inputChange(e: React.ChangeEvent<HTMLFormElement>) {
    setPaymentFormValues((prev) => {
      const { name, value } = e.target;

      const fullnameRegex = /^[a-z\s]*$/gi;
      const expiryRegex = /^\d{0,2}\/{0,1}\d{0,2}$/;
      const cvcRegex = /^\d{0,3}$/g;
      const postalRegex = /^[a-zA-Z_]*\d*$/;

      // FULLNAME
      if (name === "fullName" && fullnameRegex.test(value)) {
        return { ...prev, [name]: value };
        // NUMBER
      } else if (name === "number" && value.replace(/ /g, "").length <= 16) {
        return { ...prev, [name]: formatInput(value, " ", 4) };
        // EXPIRY
      } else if (name === "expiry" && expiryRegex.test(value)) {
        const withoutSlashPart_1 = value.replace(/\//g, "").slice(0, 2);
        const withoutSlashPart_2 = value.replace(/\//g, "").slice(2);
        if (value.length > 2) {
          return {
            ...prev,
            [name]: withoutSlashPart_1 + "/" + withoutSlashPart_2,
          };
        } else {
          return { ...prev, [name]: value };
        }
        // CVC
      } else if (name === "cvc" && cvcRegex.test(value)) {
        return { ...prev, [name]: value };
        // POSTAL
      } else if (name === "postal" && postalRegex.test(value)) {
        return { ...prev, [name]: value };
      } else {
        return { ...prev };
      }
    });

    setIsValid(true);
  }

  // FORM SUBMIT
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    setGotCard(true);
    setPopUpText(
      formatMessage({
        id: "cardSaveSuccess",
        defaultMessage: "_CARD_SUCCESSFULLY_SAVED_",
      })
    );
    sessionStorage.setItem(USER_CARD_DATA, JSON.stringify(paymentFormValues));
  }

  // CHECK IF SESSION STORAGE HAS USERS CARD DATA
  useEffect(() => {
    const userCardData = sessionStorage.getItem(USER_CARD_DATA);

    if (userCardData) {
      setPaymentFormValues(JSON.parse(userCardData));
      setGotCard(true);
    }
  }, []);

  return (
    <SCheckoutFormWrapper>
      <CreditCard
        number={paymentFormValues.number}
        expiry={paymentFormValues.expiry}
        cvc={paymentFormValues.cvc}
        name={paymentFormValues.fullName}
        focused={focusedValue}
      />
      <SCheckoutForm formOpen={!gotCard} onSubmit={onSubmit}>
        <FormInput
          autoComplete="off"
          error={formErrors.fullName}
          placeholder={formatMessage({
            id: "fullName",
            defaultMessage: "_FULL_NAME_",
          })}
          name="fullName"
          value={paymentFormValues.fullName}
          onChange={inputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              fullName: "",
            }))
          }
        />

        <FormInput
          autoComplete="off"
          error={formErrors.number}
          placeholder="Card Number"
          name="number"
          value={paymentFormValues.number}
          onChange={inputChange}
          onFocus={() => {
            setFocusedValue("number");
            setFormErrors((prev) => ({
              ...prev,
              number: "",
            }));
          }}
        />

        <SDoubleInput>
          <div>
            <FormInput
              autoComplete="off"
              error={formErrors.expiry}
              placeholder={formatMessage({
                id: "expiry",
                defaultMessage: "_EXPIRY_DATE_MM/YY_",
              })}
              name="expiry"
              value={paymentFormValues.expiry}
              onChange={inputChange}
              onFocus={() => {
                setFocusedValue("expiry");
                setFormErrors((prev) => ({
                  ...prev,
                  expiry: "",
                }));
              }}
            />
          </div>

          <div>
            <FormInput
              autoComplete="off"
              error={formErrors.cvc}
              placeholder="CVC"
              name="cvc"
              value={paymentFormValues.cvc}
              onChange={inputChange}
              onFocus={() => {
                setFocusedValue("cvc");
                setFormErrors((prev) => ({
                  ...prev,
                  cvc: "",
                }));
              }}
            />
          </div>
        </SDoubleInput>

        <FormInput
          autoComplete="off"
          error={formErrors.postal}
          placeholder={formatMessage({
            id: "postal",
            defaultMessage: "_POSTAL_CODE_",
          })}
          name="postal"
          value={paymentFormValues.postal}
          onChange={inputChange}
          onFocus={() => {
            setFocusedValue("fullName");
            setFormErrors((prev) => ({
              ...prev,
              postal: "",
            }));
          }}
        />

        <SProductButton
          type="submit"
          onClick={() => {
            const userCardData = sessionStorage.getItem(USER_CARD_DATA);

            if (
              userCardData &&
              userCardData === JSON.stringify(paymentFormValues)
            ) {
              setIsValid(true);
            } else {
              validateCheckout(paymentFormValues);
            }
          }}
        >
          <FormattedMessage id="addCard" defaultMessage={"_ADD_CARD_"} />
        </SProductButton>
      </SCheckoutForm>
      {gotCard && (
        <SFormHideLink onClick={() => setGotCard(false)}>
          <FormattedMessage id="editCard" defaultMessage={"_EDIT_CARD_"} />
        </SFormHideLink>
      )}
    </SCheckoutFormWrapper>
  );
}
