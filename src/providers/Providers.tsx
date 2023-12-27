import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalCss from "@src/assets/global.styles";

export function Providers({ children }: PropsWithChildren) {
  return <BrowserRouter>
  <GlobalCss />
  {children}
  </BrowserRouter>;
}
