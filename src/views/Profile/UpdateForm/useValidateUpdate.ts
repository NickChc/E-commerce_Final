import { useState } from "react";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { userUpdateDefaultValues } from "@src/mocks/defaultValues";

export function useValidateUpdate() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TChangeableUserData>(
    userUpdateDefaultValues
  );

  function validateUpdate(values: TChangeableUserData, currentEdit: string) {
    const errors: TChangeableUserData = { ...formErrors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (currentEdit === "email") {
      if (!emailRegex.test(values.email)) {
        errors.email = "Invalid Email Address!";
        setIsValid(false);
      } else if (values.email === "") {
        errors.email = "Email Is Missing!";
        setIsValid(false);
      } else {
        errors.email = "";
      }
    } else if (currentEdit === "first_name") {
      if (values.first_name === "") {
        errors.first_name = "First Name Is Missing!";
        setIsValid(false);
      } else {
        errors.first_name = "";
      }
    } else {
      if (values.last_name === "") {
        errors.last_name = "First Name Is Missing!";
        setIsValid(false);
      } else {
        errors.last_name = "";
      }
    }

    setFormErrors(errors);
  }

  return { formErrors, setFormErrors, isValid, setIsValid, validateUpdate };
}
