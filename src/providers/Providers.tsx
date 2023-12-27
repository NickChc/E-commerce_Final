import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "@src/providers/GlobalProvider";
import { ThemeProvider } from "@src/providers/ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
