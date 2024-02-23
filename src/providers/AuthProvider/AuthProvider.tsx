import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, TAuthStage_Enum } from "@src/providers/AuthProvider";
import { TUserData } from "@src/@types/requestTypes";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/config/localStorageKeys";
import { TUserTokens } from "@src/@types/requestTypes";
import { setPrivateAccessToken } from "@src/utils/privateAxios/privateAxios";
import { publicAxios } from "@src/utils/publicAxios";

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<TUserData>();
  const [authStage, setAuthStage] = useState<TAuthStage_Enum>(
    TAuthStage_Enum.PENDING
  );

  function setAuthData(tokens: TUserTokens) {
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStage(TAuthStage_Enum.AUTHORIZED);
  }

  async function updateTokens(refreshToken: string) {
    try {
      const response = await publicAxios.post("/auth/update-tokens", {
        refresh_token: refreshToken,
      });
      setAuthData(response.data as TUserTokens);
    } catch (error: any) {
      console.log(error.message);
      setAuthStage(TAuthStage_Enum.UNAUTHORIZED);
    }
  }

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (refreshToken) updateTokens(refreshToken);
    else setAuthStage(TAuthStage_Enum.UNAUTHORIZED);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authStage,
        setAuthStage,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
