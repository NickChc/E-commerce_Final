import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface CategoryNavProps {
  show: boolean;
}

export function CategoryNav({ show }: CategoryNavProps) {
  const { setCategoryNavOpen, categories } = useGlobalProvider();

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
            <li key={category.id}>
              <Link
                to={`/products/${category.name}/${1}`}
                onClick={() => setCategoryNavOpen(false)}
              >
                {category.name}
              </Link>
              {/* <img
                src={category?.image || ""}
                alt=""
                loading="lazy"
              /> */}
            </li>
          );
        })}
      </ul>
    </SCategoryNav>
  );
}
