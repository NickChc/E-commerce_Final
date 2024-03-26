import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import { ThemeContext, ThemeModes_Enum } from "@src/providers/ThemeProvider";
import { THEME_MODE } from "@src/config/localStorageKeys";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalCss from "@src/assets/global.styles";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeModes_Enum>(
    ThemeModes_Enum.LIGHT
  );

  const toggleTheme = useCallback(() => {
    if (themeMode === ThemeModes_Enum.LIGHT) {
      setThemeMode(ThemeModes_Enum.DARK);
      localStorage.setItem(THEME_MODE, ThemeModes_Enum.DARK);
    } else if (themeMode === ThemeModes_Enum.DARK) {
      setThemeMode(ThemeModes_Enum.LIGHT);
      localStorage.setItem(THEME_MODE, ThemeModes_Enum.LIGHT);
    }
  }, [themeMode]);

  useEffect(() => {
    if (localStorage.getItem(THEME_MODE)) {
      setThemeMode(localStorage.getItem(THEME_MODE) as ThemeModes_Enum);
    }
  }, []);

  const colors = {
    [ThemeModes_Enum.LIGHT]: {
      primary: "#2b2b2b",
      secondary: "#dee2e6",
      secondary_background: "#1b1b1b",
      secondary_text: "#343a40",
      additional: "#339af0",
      saleClr: "red",
      myGreen: "#008000",
      myWhite: "#dee2d6",
    },
    [ThemeModes_Enum.DARK]: {
      primary: "#333333",
      secondary: "#91a7ff",
      secondary_background: "#1b1b1b",
      secondary_text: "#343a40",
      additional: "#339af0",
      saleClr: "red",
      myGreen: "#008000",
      myWhite: "#dee2d6",
    },
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      <StyledThemeProvider
        theme={{ colors: colors[themeMode], mode: themeMode }}
      >
        <GlobalCss />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
