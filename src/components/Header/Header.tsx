import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import {
  SHeader,
  SSearchButton,
  SHeadlineWrapper,
  SInputHolder,
  SBtnsWrapper,
  SNavWrapper,
  SThemeSelectLg,
  SThemeSelectSm,
  SHideButtonWrapper,
} from "@src/components/Header";
import { Button } from "@src/components/Button";
import { Modal } from "@src/components/Modal";
import { HeaderIcon } from "@src/features/HeaderIcon";
import { ThemeSelect } from "@src/features/ThemeSelect";
import { SearchIcon } from "@src/assets/icons/SearchIcon";
import { NavIcon } from "@src/assets/icons/NavigationIcon";
import { CartIcon } from "@src/assets/icons/CartIcon";
import { ProfileIcon } from "@src/assets/icons/ProfileIcon";

export function Header() {
  const { formatMessage } = useIntl();
  const [showModal, setShowModal] = useState<boolean>(false);

  const Navigate = useNavigate();
  const Location = useLocation();


  return (
    <SHeader>
      <SHeadlineWrapper
        isHome={Location.pathname === "/"}
        onClick={() => Navigate("/")}
      >
        <HeaderIcon />
        <h1>REACT SHOP</h1>
      </SHeadlineWrapper>
      <SThemeSelectSm>
        <ThemeSelect />
      </SThemeSelectSm>
      <SNavWrapper>
        <Button onClick={() => console.log("NAVIGATION!")}>
          <div>
            <NavIcon />
          </div>
          <p>
            <FormattedMessage id="navigation" defaultMessage={"_NAVIGATION_"} />
          </p>
        </Button>
      </SNavWrapper>

      <SInputHolder>
        <SSearchButton>
          <SearchIcon />
        </SSearchButton>
        <input
          placeholder={formatMessage({
            id: "searchPlaceholder",
            defaultMessage: "_SEARCH_",
          })}
        />
      </SInputHolder>

      <SBtnsWrapper>
        <Button onClick={() => console.log("CART!")}>
          <div>
            <CartIcon />
          </div>
          <p>
            <FormattedMessage id="cart" defaultMessage={"_CART_"} />
          </p>
        </Button>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div>
            <ProfileIcon />
          </div>
          <p className="whitespace-nowrap">
            <FormattedMessage id="login" defaultMessage={"_LOG_IN_"} />
          </p>
        </Button>

        {/* MODAL HERE */}
        <Modal
          scrollBlock={true}
          open={showModal}
          setOpen={() => setShowModal(!showModal)}
        />
        {/* MODAL HERE */}

        <SHideButtonWrapper>
          <Button onClick={() => console.log("NAVIGATION!")}>
            <div>
              <NavIcon />
            </div>
            <p>
              <FormattedMessage
                id="navigation"
                defaultMessage={"_NAVIGATION_"}
              />
            </p>
          </Button>
        </SHideButtonWrapper>
      </SBtnsWrapper>
      <SThemeSelectLg>
        <ThemeSelect />
      </SThemeSelectLg>
    </SHeader>
  );
}
