import { useState } from "react";
import {
  SCheckoutForm,
  SFormHideLink,
  SDoubleInput,
} from "@src/views/Checkout/CheckoutForm";
import { paymentDefaultValues } from "@src/mocks/defaultValues";
import { useValidateCheckout } from "@src/views/Checkout/CheckoutForm/useValidateCheckout";
import { FormInput } from "@src/components/FormInput";
import { TPaymentValues } from "@src/@types/general";
import { formatInput } from "@src/utils/formatInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";

interface CheckoutFormProps {
  gotCard: boolean;
  setGotCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CheckoutForm({ gotCard, setGotCard }: CheckoutFormProps) {
  const [paymentFormValues, setPaymentFormValues] =
    useState<TPaymentValues>(paymentDefaultValues);

  const { validateCheckout, isValid, setIsValid, formErrors, setFormErrors } =
    useValidateCheckout();

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
        const withoutSlash = value.replace(/\//g, "");
        if (value.length > 2) {
          return {
            ...prev,
            [name]: withoutSlash.slice(0, 2) + "/" + withoutSlash.slice(2),
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

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    setGotCard(true);
  }

  return (
    <div>
      <SCheckoutForm formOpen={!gotCard} onSubmit={onSubmit}>
        <FormInput
          autoComplete="off"
          error={formErrors.fullName}
          placeholder="Full Name"
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
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              number: "",
            }))
          }
        />

        <SDoubleInput>
          <div>
            <FormInput
              autoComplete="off"
              error={formErrors.expiry}
              placeholder="Expiry MM/YY"
              name="expiry"
              value={paymentFormValues.expiry}
              onChange={inputChange}
              onFocus={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  expiry: "",
                }))
              }
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
              onFocus={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  cvc: "",
                }))
              }
            />
          </div>
        </SDoubleInput>

        <FormInput
          autoComplete="off"
          error={formErrors.postal}
          placeholder="Postal Code"
          name="postal"
          value={paymentFormValues.postal}
          onChange={inputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              postal: "",
            }))
          }
        />

        <SProductButton
          type="submit"
          onClick={() => validateCheckout(paymentFormValues)}
        >
          ADD CARD
        </SProductButton>
      </SCheckoutForm>
      {gotCard && (
        <SFormHideLink onClick={() => setGotCard(false)}>
          Edit Card
        </SFormHideLink>
      )}
    </div>
  );
}
