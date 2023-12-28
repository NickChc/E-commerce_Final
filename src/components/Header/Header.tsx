import { SHeader } from "@src/components/Header";
import { ReactIcon } from "@src/assets/ReactIcon";

export function Header() {
  return (
    <SHeader>
      <div>
        <ReactIcon />
        <h1>REACT SHOP</h1>
      </div>
    </SHeader>
  );
}
