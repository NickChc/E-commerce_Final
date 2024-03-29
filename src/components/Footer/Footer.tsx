import {
  SFooter,
  SFooterInfo,
  SLine,
  SInfobar,
  SBottomText,
} from "@src/components/Footer";
import { ReactLogo } from "@src/assets/logos/ReactLogo";
import { PhoneLogo } from "@src/assets/logos/PhoneLogo";
import { BranchLogos } from "@src/assets/logos/BranchLogos";
import { FacebookLogos } from "@src/assets/logos/FacebookLogo";
import { InstagramLogo } from "@src/assets/logos/InstagramLogo";
import { YoutubeLogo } from "@src/assets/logos/YoutubeLogo";
import { TiktokLogo } from "@src/assets/logos/TiktokLogo";

import { FormattedMessage } from "react-intl";
import { LangSelect } from "@src/features/LangSelect";

export function Footer() {
  return (
    <SFooter>
      <SFooterInfo>
        <SInfobar>
          <h2>
            <FormattedMessage id="contactUs" defaultMessage={"_CONTACT US_"} />
          </h2>
          <hr />
          <ul>
            <a href="https://gmail.com" target="_blank">
              <ReactLogo />
              reactshop@gmail.com
            </a>
            <a href="#">
              <PhoneLogo />
              +995 (32) 2 22 22 22
            </a>
            <a href="#">
              <BranchLogos />
              <FormattedMessage id="branches" defaultMessage={"_BRANCHES_"} />
            </a>
          </ul>
        </SInfobar>
        <SInfobar>
          <h2>
            <FormattedMessage id="followUs" defaultMessage={"_FOLLOW US_"} />
          </h2>
          <hr />
          <ul>
            <a href="https://facebook.com" target="_blank">
              <FacebookLogos />
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank">
              <InstagramLogo />
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank">
              <YoutubeLogo />
              Youtube
            </a>
            <a href="https://tiktok.com" target="_blank">
              <TiktokLogo />
              Tik Tok
            </a>
          </ul>
        </SInfobar>
      </SFooterInfo>
      <SLine />
      <SBottomText>
        <p>Copyright © 2024 Reactshop.ge. All rights reserved.</p>
      </SBottomText>

      {/* SELECTS LANGUAGE */}
      <LangSelect />
    </SFooter>
  );
}
