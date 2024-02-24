import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { SNavigateWrapper } from "@src/features/PrivatePage";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function PrivatePage({ children }: PropsWithChildren) {
  const { authStage } = useAuthProvider();

  if (authStage === TAuthStage_Enum.PENDING) {
    return (
      <div className="min-h-dvh w-full">
        <h1>LOADING...</h1>
      </div>
    );
  }

  if (authStage === TAuthStage_Enum.UNAUTHORIZED) {
    return (
      <SNavigateWrapper className="min-h-dvh w-full ">
        <h1>SIGNING OUT</h1>
        <SLoadingCircleAnim />
        <Navigate to={"/"} />
      </SNavigateWrapper>
    );
  } else {
    return children;
  }
}
