import { useState } from "react";
import { useIntl } from "react-intl";
import { registerDefaultValues } from "@src/mocks/defaultValues";
import { TRegisterUser } from "@src/@types/requestTypes";

export function useValidateRegister() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TRegisterUser>(
    registerDefaultValues
  );

  const { formatMessage } = useIntl();

  function validateRegister(registerValues: TRegisterUser) {
    const errors: TRegisterUser = { ...formErrors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (registerValues.email === "") {
      errors.email = formatMessage({
        id: "emailMissing",
        defaultMessage: "_EMAIL_IS_MISSING_",
      });
      setIsValid(false);
    } else if (!emailRegex.test(registerValues.email)) {
      errors.email = formatMessage({
        id: "invalidEmail",
        defaultMessage: "_INVALID_EMAIL_ADDRESS_",
      });
      setIsValid(false);
    } else {
      errors.email = "";
    }

    if (registerValues.first_name === "") {
      errors.first_name = formatMessage({
        id: "nameMissing",
        defaultMessage: "_NAME_IS_MISSING_",
      });
      setIsValid(false);
    } else {
      errors.first_name = "";
    }

    if (registerValues.last_name === "") {
      errors.last_name = formatMessage({
        id: "surnameMissing",
        defaultMessage: "_SURNAME_IS_MISSING_",
      });
      setIsValid(false);
    } else {
      errors.last_name = "";
    }

    if (registerValues.phone_number === "") {
      errors.phone_number = formatMessage({
        id: "phoneNumberMissing",
        defaultMessage: "_PHONE_NUMBER_IS_MISSING_",
      });
      setIsValid(false);
    } else if (registerValues.phone_number.replace(/ /gi, "").length < 9) {
      console.log(registerValues.phone_number);
      errors.phone_number = formatMessage({
        id: "phoneLength",
        defaultMessage: "_PHONE_NUMBER_MUST_BE_9_DIGITS_LONG_",
      });
      setIsValid(false);
    } else {
      errors.phone_number = "";
    }

    if (registerValues.password === "") {
      errors.password = formatMessage({
        id: "passwordMissing",
        defaultMessage: "_PASSWORD_IS_MISSING_",
      });
      setIsValid(false);
    } else if (registerValues.password.length < 8) {
      errors.password = formatMessage({
        id: "passwordLength",
        defaultMessage: "_PASSWORD_MUST_INCLUDE_AT_LEAST_8_CHARACTERS_",
      });
      setIsValid(false);
    } else {
      errors.password = "";
    }

    if (registerValues["repeat-password"] === "") {
      errors["repeat-password"] = formatMessage({
        id: "repeatPasswordMissing",
        defaultMessage: "_REPEAT_PASSWORD_IS_MISSING_",
      });
      setIsValid(false);
    } else if (registerValues.password !== registerValues["repeat-password"]) {
      errors["repeat-password"] = formatMessage({
        id: "passwordMismatch",
        defaultMessage: "_PASSWORD_AND_REPEAT_PASSWORD_DON'T_MATCH_",
      });
      setIsValid(false);
    } else {
      errors["repeat-password"] = "";
    }

    setFormErrors(errors);
  }

  return { validateRegister, isValid, setIsValid, setFormErrors, formErrors };
}
