import { useNavigate, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SHeader,
  SHeadlineWrapper,
  SBtnsWrapper,
  SNavWrapper,
  SHideButtonWrapper,
  SReactIcon,
  SLoadingWrapper,
} from "@src/components/Header";
import { Button } from "@src/components/Buttons/HeaderButton";
import { Modal } from "@src/components/Modal";
import { SearchBar } from "@src/features/SearchBar";
import { NavIcon, CartIcon, ProfileIcon, HomeIcon } from "@src/assets/icons";
import { LogInForm } from "@src/features/LogInForm";
import { RegisterForm } from "@src/features/RegisterForm";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { PopUpMessage } from "@src/components/PopUpMessage";

export function Header() {
  const {
    registering,
    authModal,
    setAuthModal,
    popUpText,
    categoryNavOpen,
    setCategoryNavOpen,
  } = useGlobalProvider();
  const { authStage } = useAuthProvider();

  const Navigate = useNavigate();
  const Location = useLocation();

  return (
    <SHeader>
      {/* SHOWS "GO TO HOME" ONLY IF NOT AT HOME */}
      <SHeadlineWrapper
        isHome={Location.pathname === "/"}
        onClick={() => Navigate("/")}
      >
        <SReactIcon />
        <h1>REACT SHOP</h1>
      </SHeadlineWrapper>
      {/* CATEGORY NAV BUTTON FOR LARGE SCREENS */}
      <SNavWrapper>
        <Button
          variation={categoryNavOpen ? "active" : undefined}
          onClick={(e) => {
            e.stopPropagation();
            setCategoryNavOpen(!categoryNavOpen);
          }}
        >
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
        {/* CART BUTTON */}
        <Button
          onClick={() => {
            if (authStage === TAuthStage_Enum.AUTHORIZED) {
              if (Location.pathname !== "/cart") {
                Navigate("/cart");
              } else {
                Navigate("/");
              }
            } else {
              setAuthModal(true);
            }
          }}
        >
          {Location.pathname === "/cart" ? (
            <>
              <div>
                <HomeIcon />
              </div>
              <p>
                <FormattedMessage id="home" defaultMessage={"_HOME_"} />
              </p>
            </>
          ) : (
            <>
              <div>
                <CartIcon />
              </div>
              <p>
                <FormattedMessage id="cart" defaultMessage={"_CART_"} />
              </p>
            </>
          )}
        </Button>
        {authStage === TAuthStage_Enum.PENDING ? (
          <SLoadingWrapper>
            <SLoadingCircleAnim />
          </SLoadingWrapper>
        ) : (
          <Button
            onClick={() => {
              if (authStage === TAuthStage_Enum.AUTHORIZED) {
                if (Location.pathname !== "/profile") {
                  Navigate("/profile");
                } else {
                  Navigate("/");
                }
              } else {
                setAuthModal(true);
              }
            }}
          >
            <div>
              {Location.pathname === "/profile" ? (
                <HomeIcon />
              ) : (
                <ProfileIcon />
              )}
            </div>
            <p className="whitespace-nowrap">
              {authStage === TAuthStage_Enum.AUTHORIZED ? (
                Location.pathname === "/profile" ? (
                  <FormattedMessage id="home" defaultMessage={"_HOME_"} />
                ) : (
                  <FormattedMessage id="profile" defaultMessage={"_PROFILE_"} />
                )
              ) : (
                <FormattedMessage id="login" defaultMessage={"_LOG_IN_"} />
              )}
            </p>
          </Button>
        )}

        {/* NAVIGATION BUTTON FOR SMALL SCREENS */}
        <SHideButtonWrapper>
          <Button
            variation={categoryNavOpen ? "active" : undefined}
            onClick={(e) => {
              e.stopPropagation();
              setCategoryNavOpen(!categoryNavOpen);
            }}
          >
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

      {/*AUTH IN MODAL HERE */}
      <Modal
        scrollBlock={true}
        open={authModal}
        setOpen={() => setAuthModal(!authModal)}
      >
        {registering ? <RegisterForm /> : <LogInForm />}
      </Modal>

      {/* FOR POP UP ALERTS */}
      <PopUpMessage showPopUpMessage={popUpText !== ""} />
    </SHeader>
  );
}
