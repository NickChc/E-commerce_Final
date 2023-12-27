import { PropsWithChildren } from "react";
import { LocaleContext } from "@src/providers/LocaleProvider";

export function LocaleProvider({ children }: PropsWithChildren) {
  return <LocaleContext.Provider value={{}}>{children}</LocaleContext.Provider>;
}
