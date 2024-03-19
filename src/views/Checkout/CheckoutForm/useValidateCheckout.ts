import { useState } from "react";
import { useIntl } from "react-intl";
import { paymentDefaultValues } from "@src/mocks/defaultValues";
import { TPaymentValues } from "@src/@types/general";

export function useValidateCheckout() {
  const { formatMessage } = useIntl();

  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] =
    useState<TPaymentValues>(paymentDefaultValues);

  function validateCheckout(paymentValues: TPaymentValues) {
    const errors: TPaymentValues = { ...formErrors };

    // FULL NAME
    if (paymentValues.fullName === "") {
      errors.fullName = formatMessage({
        id: "fullNameMissing",
        defaultMessage: "_FULL_NAME_IS_MISSING!_",
      });
      setIsValid(false);
      // NAME IS TOO SHORT
    } else if (paymentValues.fullName.trim().length < 5) {
      errors.fullName = formatMessage({
        id: "fullNameLength",
        defaultMessage: "_FULL_NAME_TOO_SHORT_",
      });
      setIsValid(false);
    }

    // CARD NUMBER
    if (paymentValues.number === "") {
      errors.number = formatMessage({
        id: "cardNumberMissing",
        defaultMessage: "_CARD_NUMBER_MISSING!_",
      });
      setIsValid(false);
      // CARD NUMBER TOO SHORT
    } else if (paymentValues.number.replace(/ /g, "").length < 16) {
      errors.number = formatMessage({
        id: "cardNumberLength",
        defaultMessage: "_CARD_NUMBER_MUST_BE_16_DIGITS_LONG_",
      });
      setIsValid(false);
    }

    // CVC
    if (paymentValues.cvc === "") {
      errors.cvc = `CVC ${formatMessage({
        id: "emptyField",
        defaultMessage: "_IS_MISSING!_",
      })}`;
      setIsValid(false);
      // CVC TOO SHORT
    } else if (paymentValues.cvc.length < 3) {
      errors.cvc = formatMessage({
        id: "cvcLength",
        defaultMessage: "_CVC_TOO_SHORT_",
      });
      setIsValid(false);
    }

    // EXPIRY
    const expiryArray = paymentValues.expiry.split("/");
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();
    const inputMonth =
      expiryArray[0][0] == "0" ? expiryArray[0][1] : expiryArray[0];


    if (paymentValues.expiry === "") {
      errors.expiry = formatMessage({
        id: "expiryMissing",
        defaultMessage: "_EXPIRY_DATE_IS_MISSING_",
      });
      setIsValid(false);
      // MONTH IS MORE THAN 12
    } else if (Number(expiryArray[0]) > 12) {
      errors.expiry = formatMessage({
        id: "expiryFirstTwo",
        defaultMessage: "_FIRST_TWO_DIGITS_ARE_MONTHS_",
      });
      setIsValid(false);
      // EXPIRES MORE THAN 10 YEARS FROM NOW
    } else if (
      Number(expiryArray[1]) - 10 >
      Number(currYear.toString().slice(2))
    ) {
      errors.expiry = formatMessage({
        id: "expirySecondTwo",
        defaultMessage: "_EXPIRY_SECOND_TWO_",
      });
      setIsValid(false);
      // EXPIRED BY MONTH OR YEAR
    } else if (
      (expiryArray[1] === currYear.toString().slice(2) &&
        Number(inputMonth) < currMonth + 1) ||
      Number(expiryArray[1]) < Number(currYear.toString().slice(2))
    ) {
      errors.expiry = formatMessage({
        id: "expired",
        defaultMessage: "_EXPIRED_CARD!_",
      });
      setIsValid(false);
      // NOT COMPLETE EXPIRY FORMAT
    } else if (paymentValues.expiry.replace(/\//g, "").length < 4) {
      errors.expiry = formatMessage({
        id: "expiryLength",
        defaultMessage: "_DATE_NOT_COMPLETE!_",
      });
      setIsValid(false);
    }

    // POSTAL CODE
    if (paymentValues.postal === "") {
      errors.postal = formatMessage({
        id: "postalMissing",
        defaultMessage: "_POSTAL_CODE_IS_MISSING!_",
      });
      setIsValid(false);
    }

    setFormErrors(errors);
  }

  return { validateCheckout, formErrors, setFormErrors, isValid, setIsValid };
}
