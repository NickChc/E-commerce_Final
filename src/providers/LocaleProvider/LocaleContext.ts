import { createContext } from "react";


export enum TLocale_Enum {
    EN = "en",
    KA = "ka",
}

interface LocaleContextProps {
  locale: TLocale_Enum;
  setLocale: React.Dispatch<React.SetStateAction<TLocale_Enum>>;
  toggleLocale: () => void;
};

export const LocaleContext = createContext<LocaleContextProps>({
    locale: TLocale_Enum.EN,
    setLocale: () => {},
    toggleLocale: () => {},
});