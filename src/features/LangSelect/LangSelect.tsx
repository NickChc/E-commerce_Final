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
import { TLocale_Enum } from "@src/providers/LocaleProvider";
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
              disabled={locale === TLocale_Enum.EN}
              onClick={() => {
                setLocale(TLocale_Enum.EN);
                localStorage.setItem("language", TLocale_Enum.EN);
                setShowLangPopup(false);
              }}
            >
              EN
            </SLangPopupBtn>
            <SLangPopupBtn
              disabled={locale === TLocale_Enum.KA}
              onClick={() => {
                setLocale(TLocale_Enum.KA);
                localStorage.setItem("language", TLocale_Enum.KA);
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
          <img src={locale === TLocale_Enum.EN ? USFlag : GeoFlag} alt="Flag images" />
        </SLangButton>
      </SLangSelect>
    </SLangWrapper>
  );
}
