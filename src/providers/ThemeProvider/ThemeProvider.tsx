import { PropsWithChildren, useState, useEffect } from "react";
import { ThemeContext, ThemeModes_Enum } from "@src/providers/ThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeModes_Enum>(
    ThemeModes_Enum.LIGHT
  );
  
  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledThemeProvider theme={{}}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
