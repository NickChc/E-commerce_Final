import { SHeader, SSearchButton } from "@src/components/Header";

import { HeaderIcon } from "@src/features/HeaderIcon";
import { SearchIcon } from "@src/assets/icons/SearchIcon";

export function Header() {
  return (
    <SHeader>
      <div>
        <HeaderIcon />
        <h1>REACT SHOP</h1>
      </div>
      <div>
        <SSearchButton>
          <SearchIcon />
        </SSearchButton>
        <input placeholder="Search" />
      </div>
      <div>
        <button>NAVIGATION</button>
        <button>CART</button>
        <button>PROFILE</button>
      </div>
    </SHeader>
  );
}
