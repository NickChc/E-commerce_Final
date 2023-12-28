import { SHeader, SSearchButton } from "@src/components/Header";
import { Button } from "@src/components/Button";

import { HeaderIcon } from "@src/features/HeaderIcon";
import { SearchIcon } from "@src/assets/icons/SearchIcon";
import { NavIcon } from "@src/assets/icons/NavigationIcon";
import { CartIcon } from "@src/assets/icons/CartIcon";
import { ProfileIcon } from "@src/assets/icons/ProfileIcon";

export function Header() {
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
          NAVIGATION
        </Button>
      </div>
      <div>
        <SSearchButton>
          <SearchIcon />
        </SSearchButton>
        <input placeholder="Search" />
      </div>
      <div>
        <Button onClick={() => console.log("CART!")}>
          <div>
            <CartIcon />
          </div>
          CART
        </Button>
        <Button onClick={() => console.log("PROFILE!")}>
          <div>
            <ProfileIcon />
          </div>
          PROFILE
        </Button>
      </div>
    </SHeader>
  );
}
