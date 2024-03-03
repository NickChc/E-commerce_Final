import { useEffect } from "react";
import { SCategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface CategoryNavProps {
  show: boolean;
}

export function CategoryNav({ show }: CategoryNavProps) {
  const { setCategoryNavOpen } = useGlobalProvider();

  // CLOSE CATEGORY NAVIGATION SIDEBAR ON OUTSIDE CLICK
  function closeNavSidebar() {
    setCategoryNavOpen(false);
    document.removeEventListener("click", closeNavSidebar);
  }

  // CLEANUP FUNCTION THAT REMOVES EVENTLISTENER FROM DOCUMENT
  useEffect(() => {
    if (!show) return;

    document.addEventListener("click", closeNavSidebar);
  }, [show]);

  return (
    <SCategoryNav show={show} onClick={(e) => e.stopPropagation()}>
      <h1>PRODUCT CATEGORIES</h1>
    </SCategoryNav>
  );
}
