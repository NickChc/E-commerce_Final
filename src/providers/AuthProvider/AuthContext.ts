import { createContext } from "react";
import { TUserTokens } from "@src/@types/requestTypes";

export enum TAuthStage_Enum {
  PENDING = "pending",
  AUTHORIZED = "authorized",
  UNAUTHORIZED = "unauthorized",
}

interface AuthContextProps {
  authStage: TAuthStage_Enum;
  setAuthStage: React.Dispatch<React.SetStateAction<TAuthStage_Enum>>;
  setAuthData: (arg: TUserTokens) => void;
}


export const AuthContext = createContext<AuthContextProps>({
    authStage: TAuthStage_Enum.PENDING,
    setAuthStage: () => {},
    setAuthData: () => {},
});