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
import { PopUpMessage } from "@src/components/PopUpMessage";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { PaymentMessage } from "@src/components/PaymentMessage";
import { TPaymentStatus_Enum } from "@src/@types/general";

export function Header() {
  const {
    registering,
    authModal,
    setAuthModal,
    popUpText,
    categoryNavOpen,
    setCategoryNavOpen,
    setPaymentStatus,
    paymentStatus,
  } = useGlobalProvider();

  const { authStage } = useAuthProvider();

  const Navigate = useNavigate();
  const Location = useLocation();

  function handlePrivatePageNav(pageName: string) {
    if (authStage === TAuthStage_Enum.AUTHORIZED) {
      if (Location.pathname !== `/${pageName}`) {
        Navigate(`/${pageName}`);
      } else {
        Navigate("/");
      }
    } else {
      setAuthModal(true);
    }
  }

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
      {/* SEARCHBAR */}
      <SearchBar />
      <SBtnsWrapper>
        {/* CART BUTTON */}
        <Button onClick={() => handlePrivatePageNav("cart")}>
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
            <LoadingCircleAnim />
          </SLoadingWrapper>
        ) : (
          <Button onClick={() => handlePrivatePageNav("profile")}>
            <div>
              {Location.pathname === "/profile" ? (
                <HomeIcon />
              ) : (
                <ProfileIcon />
              )}
            </div>
            <p>
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

      {/* PAYMENT MODAL HERE */}
      <Modal
        small
        scrollBlock
        open={paymentStatus !== TPaymentStatus_Enum.EMPTY}
        setOpen={() => setPaymentStatus(TPaymentStatus_Enum.EMPTY)}
      >
        <PaymentMessage
          status={paymentStatus}
          closeModal={() => setPaymentStatus(TPaymentStatus_Enum.EMPTY)}
        />
      </Modal>

      {/* FOR POP UP ALERTS */}
      <PopUpMessage showPopUpMessage={popUpText !== ""} />
    </SHeader>
  );
}
