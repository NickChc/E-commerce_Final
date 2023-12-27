import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "@src/providers/GlobalProvider";
import { ThemeProvider } from "@src/providers/ThemeProvider";
import { LocaleProvider } from "@src/providers/LocaleProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
