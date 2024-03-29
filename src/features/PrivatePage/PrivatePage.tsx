import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { SNavigateWrapper } from "@src/features/PrivatePage";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function PrivatePage({ children }: PropsWithChildren) {
  const { authStage } = useAuthProvider();

  if (authStage === TAuthStage_Enum.UNAUTHORIZED) {
    return (
      <SNavigateWrapper>
        <h1>SIGNING OUT</h1>
        <LoadingCircleAnim />
        <Navigate to={"/"} />
      </SNavigateWrapper>
    );
  } else {
    return children;
  }
}
