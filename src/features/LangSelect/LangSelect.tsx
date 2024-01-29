import { useState, useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import GeoFlag from "@src/assets/images/GeoFlag.png";
import USFlag from "@src/assets/images/USFlag.png";
import {
  SLangWrapper,
  SLangSelect,
  SLangButton,
  SLangPopup,
  SLangPopupBtn,
} from "@src/features/LangSelect";
import { Locale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";

export function LangSelect() {
  const { setLocale, locale } = useLocaleProvider();
  const [showLangPopup, setShowLangPopup] = useState<boolean>(false);

  const langSelectRef = useRef<HTMLDivElement>(null);


  // CLOSE LANGSELECT POPUP ON OUTSIDE CLICK

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        langSelectRef.current &&
        !langSelectRef.current.contains(e.target as Node)
      ) {
        setShowLangPopup(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [langSelectRef]);

  

  return (
    <SLangWrapper>
      <p>
        <FormattedMessage id="language" defaultMessage={"_LANGUAGE_"} />:
      </p>
      <SLangSelect ref={langSelectRef}>
        {showLangPopup && (
          <SLangPopup>
            <SLangPopupBtn
              disabled={locale === Locale_Enum.EN}
              onClick={() => {
                setLocale(Locale_Enum.EN);
                localStorage.setItem("language", Locale_Enum.EN);
                setShowLangPopup(false);
              }}
            >
              EN
            </SLangPopupBtn>
            <SLangPopupBtn
              disabled={locale === Locale_Enum.KA}
              onClick={() => {
                setLocale(Locale_Enum.KA);
                localStorage.setItem("language", Locale_Enum.KA);
                setShowLangPopup(false);
              }}
            >
              GE
            </SLangPopupBtn>
          </SLangPopup>
        )}
        <SLangButton onClick={() => setShowLangPopup(!showLangPopup)}>
          <img src={locale === Locale_Enum.EN ? USFlag : GeoFlag} />
        </SLangButton>
      </SLangSelect>
    </SLangWrapper>
  );
}
