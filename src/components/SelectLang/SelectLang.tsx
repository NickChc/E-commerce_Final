import { SSelectLang, SSelectWrapper } from "@src/components/SelectLang";
import { Locale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import geoImg from "@src/assets/images/geoImg.jpg";
import usaImg from "@src/assets/images/usaImg.jpg";

export function SelectLang() {
  const { setLocale, locale } = useLocaleProvider();
  return (
    <>
      <SSelectWrapper>
        <img src={locale === Locale_Enum.EN ? usaImg : geoImg} alt="#" />
        <SSelectLang
          value={locale}
          onChange={(e) => {
            setLocale(e.target.value as Locale_Enum);
            localStorage.setItem("language", e.target.value);
          }}
        >
          <option value={Locale_Enum.EN}>EN</option>
          <option value={Locale_Enum.KA}>KA</option>
        </SSelectLang>
        <h4>Choose Language:</h4>
      </SSelectWrapper>
    </>
  );
}
