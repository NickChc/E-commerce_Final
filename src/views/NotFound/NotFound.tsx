import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SNotFound } from "@src/views/NotFound";
import { getRandInt } from "@src/utils/getRandInt";
import NotFoundImg1 from "@src/assets/images/NotFoundImg1.jpg";
import NotFoundImg2 from "@src/assets/images/NotFoundImg2.jpg";
import NotFoundImg3 from "@src/assets/images/NotFoundImg3.jpg";
import NotFoundImg4 from "@src/assets/images/NotFoundImg4.jpg";
import NotFoundImg5 from "@src/assets/images/NotFoundImg5.jpg";
import NotFoundImg6 from "@src/assets/images/NotFoundImg6.jpg";

import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { Locale_Enum } from "@src/providers/LocaleProvider";

export function NotFound() {
  const imgArray = [
    NotFoundImg1,
    NotFoundImg2,
    NotFoundImg3,
    NotFoundImg4,
    NotFoundImg5,
    NotFoundImg6,
  ];

  const { locale } = useLocaleProvider();

  const Navigate = useNavigate();
  const randomthItem = getRandInt(0, imgArray.length - 1);

  return (
    <SNotFound>
      <img src={imgArray[randomthItem]} alt="#" />
      <button onClick={() => Navigate("/")}>
        <FormattedMessage id="takeMeHome" defaultMessage={"_TAKE_ME_HOME_"} />
      </button>
      <h1>
        ERROR 404.
        <br />
        {locale === Locale_Enum.EN ? "Page Not Found!" : "გვერდი ვერ მოიძებნა!"}
      </h1>
    </SNotFound>
  );
}
