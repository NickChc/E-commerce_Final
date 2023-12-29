import { SHeader, SSearchButton } from "@src/components/Header";
import { Button } from "@src/components/Button";
import { FormattedMessage, useIntl } from "react-intl";
import { HeaderIcon } from "@src/features/HeaderIcon";
import { SearchIcon } from "@src/assets/icons/SearchIcon";
import { NavIcon } from "@src/assets/icons/NavigationIcon";
import { CartIcon } from "@src/assets/icons/CartIcon";
import { ProfileIcon } from "@src/assets/icons/ProfileIcon";

export function Header() {
  const { formatMessage } = useIntl();
  return (
    <SHeader>
      <div>
        <HeaderIcon />
        <h1>REACT SHOP</h1>
      </div>
      <div>
        <Button onClick={() => console.log("NAVIGATION!")}>
          <div>
            <NavIcon />
          </div>
          <FormattedMessage id="navigation" defaultMessage={"_NAVIGATION_"} />
        </Button>
      </div>
      <div>
        <SSearchButton>
          <SearchIcon />
        </SSearchButton>
        <input
          placeholder={formatMessage({
            id: "searchPlaceholder",
            defaultMessage: "_SEARCH_",
          })}
        />
      </div>
      <div>
        <Button onClick={() => console.log("CART!")}>
          <div>
            <CartIcon />
          </div>
          <FormattedMessage id="cart" defaultMessage={"_CART_"} />
        </Button>
        <Button onClick={() => console.log("PROFILE!")}>
          <div>
            <ProfileIcon />
          </div>
          <FormattedMessage id="profile" defaultMessage={"_PROFIE_"} />
        </Button>
      </div>
    </SHeader>
  );
}
