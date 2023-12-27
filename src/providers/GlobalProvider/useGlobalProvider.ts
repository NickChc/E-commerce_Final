import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export function useGlobalProvider() {
  const { ...data } = useContext(GlobalContext);

  return { ...data };
}
