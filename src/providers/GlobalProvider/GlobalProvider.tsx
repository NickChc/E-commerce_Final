import { PropsWithChildren, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";

export function GlobalProvider({ children }: PropsWithChildren) {



  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
