import { useState } from "react";
import { logInDefaultValues } from "@src/mocks/defaultValues";
import { TLogInUser } from "@src/@types/requestTypes";
import { useIntl } from "react-intl";

export function useValidateLogIn() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TLogInUser>(logInDefaultValues);

  const { formatMessage } = useIntl();

  function validateLogIn(logInUser: TLogInUser) {
    const errors: TLogInUser = { ...formErrors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (logInUser.email === "") {
      errors.email = formatMessage({
        id: "emailMissing",
        defaultMessage: "_EMAIL_IS_MISSING_",
      });
      setIsValid(false);
    } else if (!emailRegex.test(logInUser.email)) {
      errors.email = formatMessage({
        id: "invalidEmail",
        defaultMessage: "_INVALID_EMAIL_",
      });
      setIsValid(false);
    } else {
      errors.email = "";
    }

    if (logInUser.password === "") {
      errors.password = formatMessage({
        id: "passwordMissing",
        defaultMessage: "_PASSWORD_IS_MISSING_",
      });
      setIsValid(false);
    } else {
      errors.password = "";
    }

    setFormErrors(errors);
  }

  return { isValid, setIsValid, validateLogIn, setFormErrors, formErrors };
}
