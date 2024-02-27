import { useState } from "react";
import { useIntl } from "react-intl";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { userUpdateDefaultValues } from "@src/mocks/defaultValues";

export function useValidateUpdate() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TChangeableUserData>(
    userUpdateDefaultValues
  );

  const { formatMessage } = useIntl();

  function validateUpdate(values: TChangeableUserData, currentEdit: string) {
    const errors: TChangeableUserData = { ...formErrors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (currentEdit === "email") {
      if (values.email === "") {
        errors.email = formatMessage({
          id: "emailMissing",
          defaultMessage: "_EMAIL_MISSING",
        });
        setIsValid(false);
      } else if (!emailRegex.test(values.email)) {
        errors.email = formatMessage({
          id: "invalidEmail",
          defaultMessage: "_INVALID_EMAIL_",
        });
        setIsValid(false);
      } else {
        errors.email = "";
      }
    } else if (currentEdit === "first_name") {
      if (values.first_name === "") {
        errors.first_name = formatMessage({
          id: "nameMissing",
          defaultMessage: "_NAME_IS_MISSING_",
        });
        setIsValid(false);
      } else {
        errors.first_name = "";
      }
    } else {
      if (values.last_name === "") {
        errors.last_name = formatMessage({
          id: "surnameMissing",
          defaultMessage: "_SURNAME_IS_MISSING_",
        });
        setIsValid(false);
      } else {
        errors.last_name = "";
      }
    }

    setFormErrors(errors);
  }

  return { formErrors, setFormErrors, isValid, setIsValid, validateUpdate };
}
