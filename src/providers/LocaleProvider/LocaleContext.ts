import { createContext } from "react";


export enum Locale_Enum {
    EN = "en",
    KA = "ka",
}

interface LocaleContextProps {};

export const LocaleContext = createContext<LocaleContextProps>({});