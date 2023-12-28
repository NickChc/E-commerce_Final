import { SHeader } from "@src/components/Header";
import { HeaderIcon } from "@src/features/HeaderIcon";

export function Header() {
  return (
    <SHeader>
      <div>
        <HeaderIcon />
        <h1>REACT SHOP</h1>
      </div>
    </SHeader>
  );
}
