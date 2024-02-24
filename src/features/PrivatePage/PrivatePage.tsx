import { PropsWithChildren } from "react";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { Navigate } from "react-router-dom";

export function PrivatePage({ children }: PropsWithChildren) {
  const { authStage } = useAuthProvider();

  if (authStage === TAuthStage_Enum.UNAUTHORIZED) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
}
