import { SFooter } from "@src/components/Footer";
import { ReactLogo } from "@src/assets/logos/ReactLogo";
import { PhoneLogo } from "@src/assets/logos/PhoneLogo";
import { BranchLogos } from "@src/assets/logos/BranchLogos";
import { FacebookLogos } from "@src/assets/logos/FacebookLogo";
import { InstagramLogo } from "@src/assets/logos/InstagramLogo";
import { YoutubeLogo } from "@src/assets/logos/YoutubeLogo";
import { TiktokLogo } from "@src/assets/logos/TiktokLogo";

import { FormattedMessage } from "react-intl";
import { SelectLang } from "@src/features/SelectLang";

export function Footer() {
  return (
    <SFooter>
      <div>
        <h2>
          <FormattedMessage id="contactUs" defaultMessage={"_CONTACT US_"} />
        </h2>
        <hr />
        <ul>
          <a href="#">
            <ReactLogo />
            reactshop@gmail.com
          </a>
          <a href="#">
            <PhoneLogo />
            +995 (32) 2 22 22 22
          </a>
          <a href="#">
            <BranchLogos />
            Branches
          </a>
        </ul>
      </div>
      <div>
        <h2>
          <FormattedMessage id="followUs" defaultMessage={"FOLLOW US_"} />
        </h2>
        <hr />
        <ul>
          <a href="#">
            <FacebookLogos />
            Facebook
          </a>
          <a href="#">
            <InstagramLogo />
            Instagram
          </a>
          <a href="#">
            <YoutubeLogo />
            Youtube
          </a>
          <a href="#">
            <TiktokLogo />
            Tik Tok
          </a>
        </ul>
      </div>
      <SelectLang />
      
    </SFooter>
  );
}
