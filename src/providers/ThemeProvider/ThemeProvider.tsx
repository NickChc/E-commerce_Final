import { PropsWithChildren } from "react";
import { ThemeContext, ThemeModes_Enum } from "@src/providers/ThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";


export function ThemeProvider({ children }: PropsWithChildren) {
    return (
      <ThemeContext.Provider value={{}}>
        <StyledThemeProvider theme={{}}>{children}</StyledThemeProvider>
      </ThemeContext.Provider>
    );
}