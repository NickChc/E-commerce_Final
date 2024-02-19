import { useState, useEffect } from "react";
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


  // CLOSE LANGSELECT POPUP ON OUTSIDE CLICK

  function closeLangPopup() {
    setShowLangPopup(false);
    document.removeEventListener("click", closeLangPopup);
  }

  // CLEANUP FUNCTION THAT REMOVES EVENTLISTENER FROM DOCUMENT

  useEffect(() => {
    if (!showLangPopup) return;

    document.addEventListener("click", closeLangPopup);
  }, [showLangPopup]);

  return (
    <SLangWrapper>
      <p>
        <FormattedMessage id="language" defaultMessage={"_LANGUAGE_"} />:
      </p>
      <SLangSelect>
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
        <SLangButton
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setShowLangPopup(!showLangPopup);
          }}
        >
          <img src={locale === Locale_Enum.EN ? USFlag : GeoFlag} />
        </SLangButton>
      </SLangSelect>
    </SLangWrapper>
  );
}
