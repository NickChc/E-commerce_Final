import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, TAuthStage_Enum } from "@src/providers/AuthProvider";
import { TUserTokens } from "@src/@types/requestTypes";
import { TUserInfo } from "@src/@types/general";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/config/localStorageKeys";
import { REFRESH_TOKEN_BACKUP } from "@src/config/sessionStorageKeys";
import {
  USER_CARD_DATA,
  DELIVERY_ADDRESS,
} from "@src/config/sessionStorageKeys";
import {
  privateAxios,
  setPrivateAccessToken,
} from "@src/utils/privateAxios/privateAxios";
import { publicAxios } from "@src/utils/publicAxios";
import {
  CACHED_CART_ITEMS,
  CACHED_CATEGORIES,
  CACHED_COUNTRY_DATA,
  CACHED_ORDERS,
  CACHED_WISHLIST_ITEMS,
} from "@src/config/localStorageCache";
import { localStorageRemover } from "@src/utils/localStorageRemover";

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<TUserInfo>();
  const [refreshTokenState, setRefreshTokenState] = useState<string | null>(
    null
  );
  const [authStage, setAuthStage] = useState<TAuthStage_Enum>(
    TAuthStage_Enum.PENDING
  );

  // LOCALSTORAGE VALUES TO BE REMOVED AFTER LOG OUT
  const removeValues = [
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    CACHED_CART_ITEMS,
    CACHED_CATEGORIES,
    CACHED_COUNTRY_DATA,
    CACHED_ORDERS,
    CACHED_WISHLIST_ITEMS,
  ];

  function setAuthData(tokens: TUserTokens) {
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    // STORE IN SESSIONSTORAGE FOR BACKUP
    sessionStorage.setItem(REFRESH_TOKEN_BACKUP, tokens.refresh_token);

    setPrivateAccessToken(tokens.access_token);
    setAuthStage(TAuthStage_Enum.AUTHORIZED);
    getUser();
  }

  function logOut() {
    sessionStorage.removeItem(REFRESH_TOKEN_BACKUP);
    localStorageRemover(removeValues);
    setRefreshTokenState(null);
    setPrivateAccessToken("");
    setAuthStage(TAuthStage_Enum.UNAUTHORIZED);
    sessionStorage.removeItem(USER_CARD_DATA);
    sessionStorage.removeItem(DELIVERY_ADDRESS);
  }

  async function getUser() {
    try {
      const response = await privateAxios.get("/user/current-user");
      setUserData(response.data as TUserInfo);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function updateTokens(refreshToken: string) {
    try {
      const response = await publicAxios.post("/auth/update-tokens", {
        refresh_token: refreshToken,
      });
      setAuthData(response.data as TUserTokens);
    } catch (error: any) {
      localStorage.removeItem(REFRESH_TOKEN);
      setRefreshTokenState(null);
      console.log(error.message);
      setAuthStage(TAuthStage_Enum.UNAUTHORIZED);
    }
  }

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const refreshTokenBackup = sessionStorage.getItem(REFRESH_TOKEN_BACKUP);
    if (refreshToken || !refreshTokenBackup) return;
    updateTokens(refreshTokenBackup);
  }, [refreshTokenState]);

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    setRefreshTokenState(refreshToken);

    if (refreshToken) {
      updateTokens(refreshToken);
    } else {
      setAuthStage(TAuthStage_Enum.UNAUTHORIZED);
      setPrivateAccessToken("");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authStage,
        setAuthStage,
        setAuthData,
        userData,
        setUserData,
        logOut,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
