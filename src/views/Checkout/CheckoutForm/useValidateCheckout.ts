import { useState } from "react";
import { paymentDefaultValues } from "@src/mocks/defaultValues";
import { TPaymentValues } from "@src/@types/general";

export function useValidateCheckout() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] =
    useState<TPaymentValues>(paymentDefaultValues);

  function validateCheckout(paymentValues: TPaymentValues) {
    const errors: TPaymentValues = { ...formErrors };

    // FULL NAME
    if (paymentValues.fullName === "") {
      errors.fullName = "Full Name Is Missing!";
      setIsValid(false);
    } else if (paymentValues.fullName.trim().length < 5) {
      errors.fullName = "Full Name Must Include 5 Characters At Least!";
      setIsValid(false);
    }

    // CARD NUMBER
    if (paymentValues.number === "") {
      errors.number = "Card Number Is Missing!";
      setIsValid(false);
    } else if (paymentValues.number.replace(/ /g, "").length < 16) {
      errors.number = "Card Number Must Be 16 Digits Long";
      setIsValid(false);
    }

    // CVC
    if (paymentValues.cvc === "") {
      errors.cvc = "CVC Is Missing!";
      setIsValid(false);
    }

    // EXPIRY
    const expiryArray = paymentValues.expiry.split("/");
    const currYear = new Date().getFullYear();

    if (paymentValues.expiry === "") {
      errors.expiry = "Expiry Date Is Missing!";
      setIsValid(false);
    } else if (Number(expiryArray[0]) > 12) {
      errors.expiry = "First Two Digits Represent Month";
      setIsValid(false);
    } else if (
      Number(expiryArray[1]) - 10 >
      Number(currYear.toString().slice(2))
    ) {
      errors.expiry = "Year Is Too Far In Future";
      setIsValid(false);
    }

    // POSTAL CODE
    if (paymentValues.postal === "") {
      errors.postal = "Postal Code Is Missing!";
      setIsValid(false);
    }

    setFormErrors(errors);
  }

  return { validateCheckout, formErrors, setFormErrors, isValid, setIsValid };
}
