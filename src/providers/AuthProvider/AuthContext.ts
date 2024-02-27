import { createContext } from "react";
import { TUserInfo, TUserTokens } from "@src/@types/requestTypes";

export enum TAuthStage_Enum {
  PENDING = "pending",
  AUTHORIZED = "authorized",
  UNAUTHORIZED = "unauthorized",
}

interface AuthContextProps {
  authStage: TAuthStage_Enum;
  setAuthStage: React.Dispatch<React.SetStateAction<TAuthStage_Enum>>;
  setAuthData: (arg: TUserTokens) => void;
  userData: TUserInfo | undefined;
  setUserData: React.Dispatch<React.SetStateAction<TUserInfo | undefined>>;
  logOut: () => void;
  getUser: () => Promise<void>;
}


export const AuthContext = createContext<AuthContextProps>({
  authStage: TAuthStage_Enum.PENDING,
  setAuthStage: () => {},
  setAuthData: () => {},
  userData: undefined,
  setUserData: () => {},
  logOut: () => {},
  getUser: async () => {},
});