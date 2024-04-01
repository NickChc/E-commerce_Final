import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import {
  SNavLangSelect,
  SLanguages,
  SLangOption,
} from "@src/features/CategoryNav/NavLangSelect";
import { RightArrow } from "@src/assets/icons";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import GeoFlagImg from "@src/assets/images/GeoFlag.png";
import USFlagImg from "@src/assets/images/USFlag.png";

export function NavLangSelect() {
  const [open, setOpen] = useState<boolean>(false);

  const { locale, setLocale } = useLocaleProvider();

  // CLOSE LANGSELECT POPUP ON OUTSIDE CLICK

  function closeLangPopup() {
    setOpen(false);
  }

  // CLEANUP FUNCTION THAT REMOVES EVENTLISTENER FROM DOCUMENT

  useEffect(() => {
    if (open) {
      document.addEventListener("click", closeLangPopup);

      return () => {
        document.removeEventListener("click", closeLangPopup);
      };
    }
  }, [open]);

  return (
    <SNavLangSelect show={open} onClick={() => setOpen(!open)}>
      <h4>
        <FormattedMessage id="languageToUpper" defaultMessage={"_LANGUAGE_"} />
        <img
          src={locale === TLocale_Enum.EN ? USFlagImg : GeoFlagImg}
          alt="flag image"
        />
      </h4>
      <span>
        <RightArrow />
      </span>
      {open && (
        <SLanguages>
          <SLangOption
            disabled={locale === TLocale_Enum.EN}
            onClick={() => setLocale(TLocale_Enum.EN)}
          >
            English
          </SLangOption>
          <SLangOption
            disabled={locale === TLocale_Enum.KA}
            onClick={() => setLocale(TLocale_Enum.KA)}
          >
            Georgian
          </SLangOption>
        </SLanguages>
      )}
    </SNavLangSelect>
  );
}
