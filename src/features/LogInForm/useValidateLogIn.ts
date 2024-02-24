import { useState } from "react";
import { logInDefaultValues } from "@src/mocks/defaultValues";
import { TLogInUser } from "@src/@types/requestTypes";

export function useValidateLogIn() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TLogInUser>(logInDefaultValues);

  function validateLogIn(logInUser: TLogInUser) {
    const errors: TLogInUser = { ...formErrors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(logInUser.email)) {
      errors.email = "Invalid Email Address!";
      setIsValid(false);
    } else if (logInUser.email === "") {
      errors.email = "Email Is Missing!";
      setIsValid(false);
    } else {
      errors.email = "";
    }

    if (logInUser.password === "") {
      errors.password = "Password Is Missing!";
      setIsValid(false);
    } else {
      errors.password = "";
    }

    setFormErrors(errors);
  }

  return { isValid, setIsValid, validateLogIn, setFormErrors, formErrors };
}
