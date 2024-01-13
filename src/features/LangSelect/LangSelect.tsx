import { useState } from "react";
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

  return (
    <SLangWrapper>
      <p>Language:</p>
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
        <SLangButton onClick={() => setShowLangPopup(!showLangPopup)}>
          <img src={locale === Locale_Enum.EN ? USFlag : GeoFlag} />
          {/* {locale.toUpperCase()} */}
        </SLangButton>
      </SLangSelect>
    </SLangWrapper>
  );
}
