import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface CategoryNavProps {
  show: boolean;
}

export function CategoryNav({ show }: CategoryNavProps) {
  const { setCategoryNavOpen, categories } = useGlobalProvider();

  const Navigate = useNavigate();

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
      <h1>
        <FormattedMessage id="categories" defaultMessage={"_CATEGORIES_"} />
      </h1>
      <ul>
        {categories?.map((category) => {
          return (
            <li
              key={category.id}
              onClick={() => {
                Navigate(`/products/${category.name}/1`);
                setCategoryNavOpen(false);
              }}
            >
              <img src={category.image} alt="category icon" />
              <a>{category.name}</a>
            </li>
          );
        })}
      </ul>
    </SCategoryNav>
  );
}
