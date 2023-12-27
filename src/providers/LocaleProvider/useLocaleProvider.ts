import { useContext } from "react";
import { LocaleContext } from "@src/providers/LocaleProvider";

export function useLocaleProvider() {
  const { ...data } = useContext(LocaleContext);

  return { ...data };
}
