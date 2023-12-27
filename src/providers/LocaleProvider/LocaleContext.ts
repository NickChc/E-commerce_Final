import { createContext } from "react";


export enum Locale_Enum {
    EN = "en",
    KA = "ka",
}

interface LocaleContextProps {
  locale: Locale_Enum;
  setLocale: React.Dispatch<React.SetStateAction<Locale_Enum>>;
  toggleLocale: () => void;
};

export const LocaleContext = createContext<LocaleContextProps>({
    locale: Locale_Enum.EN,
    setLocale: () => {},
    toggleLocale: () => {},
});