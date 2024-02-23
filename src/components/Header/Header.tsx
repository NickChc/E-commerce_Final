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
  SLoadingWrapper,
} from "@src/components/Header";
import { Button } from "@src/components/Buttons/HeaderButton";
import { Modal } from "@src/components/Modal";
import { ThemeSelect } from "@src/features/ThemeSelect";
import { SearchBar } from "@src/features/SearchBar";
import { NavIcon, CartIcon, ProfileIcon } from "@src/assets/icons";
import { LogInForm } from "@src/features/LogInForm";
import { RegisterForm } from "@src/features/RegisterForm";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function Header() {
  const { registering, authModal, setAuthModal } = useGlobalProvider();
  const { authStage } = useAuthProvider();

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
        {authStage === TAuthStage_Enum.PENDING ? (
          <SLoadingWrapper>
            <SLoadingCircleAnim />
          </SLoadingWrapper>
        ) : (
          <Button
            onClick={() => {
              if (authStage === TAuthStage_Enum.AUTHORIZED) {
                console.log("PROFILE!");
              } else {
                setAuthModal(true);
              }
            }}
          >
            <div>
              <ProfileIcon />
            </div>
            <p className="whitespace-nowrap">
              {authStage === TAuthStage_Enum.AUTHORIZED ? (
                "PROFILE"
              ) : (
                <FormattedMessage id="login" defaultMessage={"_LOG_IN_"} />
              )}
            </p>
          </Button>
        )}

        {/*AUTH IN MODAL HERE */}
        <Modal
          scrollBlock={true}
          open={authModal}
          setOpen={() => setAuthModal(!authModal)}
        >
          {registering ? <RegisterForm /> : <LogInForm />}
        </Modal>

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
