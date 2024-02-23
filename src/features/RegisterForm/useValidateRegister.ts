import { useState } from "react";
import { registerDefaultValues } from "@src/mocks/defaultValues";
import { TUserData } from "@src/@types/requestTypes";

export function useValidateRegister() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<TUserData>(
    registerDefaultValues
  );

  function validateRegister(registerValues: TUserData) {
    const errors: TUserData = { ...formErrors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(registerValues.email)) {
      errors.email = "Invalid Email Address!";
      setIsValid(false);
    } else if (registerValues.email === "") {
      errors.email = "Email Is Missing!";
      setIsValid(false);
    } else {
      errors.email = "";
    }

    if (registerValues.first_name === "") {
      errors.first_name = "First Name Is Missing!";
      setIsValid(false);
    } else {
      errors.first_name = "";
    }

    if (registerValues.last_name === "") {
      errors.last_name = "Last Name Is Missing!";
      setIsValid(false);
    } else {
      errors.last_name = "";
    }

    if (registerValues.phone_number === "") {
      errors.phone_number = "Phone Number Is Missing!";
      setIsValid(false);
    } else if (errors.phone_number.replace(/ /g, "")) {
      errors.phone_number = "Phone Number Must be 9 Numbers long!";
      setIsValid(false);
    } else {
      errors.phone_number = "";
    }

    if (registerValues.password === "") {
      errors.password = "Password Is Missing!";
      setIsValid(false);
    } else if (registerValues.password.length < 8) {
      errors.password = "Password Must 8 Characters Or Longer!";
      setIsValid(false);
    } else {
      errors.password = "";
    }

    if (registerValues["repeat-password"] === "") {
      errors["repeat-password"] = "Repeat Password Is Missing!";
      setIsValid(false);
    } else if (registerValues.password !== registerValues["repeat-password"]) {
      errors["repeat-password"] = "Password And Repeat Password Don't Match!";
      setIsValid(false);
    } else {
      errors["repeat-password"] = "";
    }

    setFormErrors(errors);
  }

  return { validateRegister, isValid, setIsValid, formErrors };
}
