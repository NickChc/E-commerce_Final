import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SHeader,
  SHeadlineWrapper,
  SBtnsWrapper,
  SNavWrapper,
  SThemeSelectLg,
  SThemeSelectSm,
  SHideButtonWrapper,
  SReactIcon,
} from "@src/components/Header";
import { Button } from "@src/components/Buttons/HeaderButton";
import { Modal } from "@src/components/Modal";
import { ThemeSelect } from "@src/features/ThemeSelect";
import { SearchBar } from "@src/features/SearchBar";
import { NavIcon, CartIcon, ProfileIcon } from "@src/assets/icons";

export function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const Navigate = useNavigate();
  const Location = useLocation();

  return (
    <SHeader>
      <SHeadlineWrapper
        isHome={Location.pathname === "/"}
        onClick={() => Navigate("/")}
      >
        <SReactIcon />
        <h1>REACT SHOP</h1>
      </SHeadlineWrapper>

      {/* SELECTS THEME ON SMALL SCREENS */}
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
      <SearchBar />
      <SBtnsWrapper>
        <Button onClick={() => Navigate("/cart")}>
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

        {/*LOG IN MODAL HERE */}
        <Modal
          scrollBlock={true}
          open={showModal}
          setOpen={() => setShowModal(!showModal)}
        />

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


      {/* SELECTS THEME ON LARGE SCREENS */}
      <SThemeSelectLg>
        <ThemeSelect />
      </SThemeSelectLg>
    </SHeader>
  );
}
