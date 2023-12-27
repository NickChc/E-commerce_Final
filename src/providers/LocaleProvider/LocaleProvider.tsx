import { PropsWithChildren, useState, useEffect, useCallback } from "react";
import { LocaleContext, Locale_Enum } from "@src/providers/LocaleProvider";
import { IntlProvider } from "react-intl";

import en from "@src/providers/LocaleProvider/translations/en.json";
import ka from "@src/providers/LocaleProvider/translations/ka.json";

const languages = { en, ka };

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale_Enum>(Locale_Enum.EN);

  const toggleLocale = useCallback(() => {
    if (locale === Locale_Enum.EN) {
      setLocale(Locale_Enum.KA);
      localStorage.setItem("language", Locale_Enum.KA);
    } else if (locale === Locale_Enum.KA) {
      setLocale(Locale_Enum.EN);
      localStorage.setItem("language", Locale_Enum.EN);
    }
  }, [locale]);

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLocale(localStorage.getItem("language") as Locale_Enum);
    }
  }, []);

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
