import { useState } from "react";
import { TUpdateFormValues } from "@src/@types/requestTypes";

export function useValidateChange() {
    const [isValid, setIsValid] = useState<boolean>(false);
  const [formError, setFormError] = useState<TUpdateFormValues>({ error: "" });

  function validateChange(key: string, value: string) {
    const error = { ...formError };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (key === "email") {
        if (!emailRegex.test(value)) {

        }
    }

  }

  return {};
}
