import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SCategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ThemeSelect } from "@src/features/ThemeSelect";
import { useThemeProvider } from "@src/providers/ThemeProvider";
import { ThemeModes_Enum } from "@src/providers/ThemeProvider";
import { NavLangSelect } from "@src/features/CategoryNav/NavLangSelect";

interface CategoryNavProps {
  show: boolean;
}

export function CategoryNav({ show }: CategoryNavProps) {
  const { setCategoryNavOpen, categories } = useGlobalProvider();
  const { toggleTheme, themeMode } = useThemeProvider();

  const Navigate = useNavigate();

  // CLOSE CATEGORY NAVIGATION SIDEBAR ON OUTSIDE CLICK
  function closeNavSidebar() {
    setCategoryNavOpen(false);
  }

  // CLEANUP FUNCTION THAT REMOVES EVENTLISTENER FROM DOCUMENT
  useEffect(() => {
    if (show) {
      document.addEventListener("click", closeNavSidebar);
      if (screen.width < 640) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("click", closeNavSidebar);
        if (screen.width < 640) {
          document.body.style.overflow = "auto";
        }
      };
    }
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
        <hr />
        <li onClick={toggleTheme}>
          <ThemeSelect />
          <h4>
            {themeMode === ThemeModes_Enum.LIGHT ? (
              <FormattedMessage
                id="eyeRestMode"
                defaultMessage={"_EYE_REST_MODE_"}
              />
            ) : (
              <FormattedMessage id="dayMode" defaultMessage={"_LIGHT_THEME_"} />
            )}
          </h4>
        </li>
        <NavLangSelect />
      </ul>
    </SCategoryNav>
  );
}
