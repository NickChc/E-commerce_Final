import { PropsWithChildren, useState, useEffect, useCallback } from "react";
import { IntlProvider } from "react-intl";
import { LocaleContext, TLocale_Enum } from "@src/providers/LocaleProvider";
import { LANGUAGE } from "@src/config/localStorageKeys";
import { useGetCountry } from "@src/hooks/useGetCountry";

import en from "@src/providers/LocaleProvider/translations/en.json";
import ka from "@src/providers/LocaleProvider/translations/ka.json";

const languages = { en, ka };

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<TLocale_Enum>(TLocale_Enum.EN);

  const {  usersCountryInfo } = useGetCountry();

  const toggleLocale = useCallback(() => {
    if (locale === TLocale_Enum.EN) {
      setLocale(TLocale_Enum.KA);
      localStorage.setItem(LANGUAGE, TLocale_Enum.KA);
    } else if (locale === TLocale_Enum.KA) {
      setLocale(TLocale_Enum.EN);
      localStorage.setItem(LANGUAGE, TLocale_Enum.EN);
    }
  }, [locale]);

  useEffect(() => {
    if (localStorage.getItem(LANGUAGE)) {
      setLocale(localStorage.getItem(LANGUAGE) as TLocale_Enum);
    } else if (usersCountryInfo?.country === "GE") {
      // IF USER IS FROM GEORGIA, SET DEFAULT LANGUAGE TO GEORGIAN
      setLocale(TLocale_Enum.KA);
      localStorage.setItem(LANGUAGE, TLocale_Enum.KA);
    }
  }, [usersCountryInfo]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      <IntlProvider
        messages={languages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
