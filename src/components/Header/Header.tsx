import { SHeader, SSearchButton } from "@src/components/Header";
import { Button } from "@src/components/Button";

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
        <Button onClick={() => console.log("NAVIGATION!")}>NAVIGATION</Button>
        <Button onClick={() => console.log("CART!")}>CART</Button>
        <Button onClick={() => console.log("PROFILE!")}>PROFILE</Button>
      </div>
    </SHeader>
  );
}
