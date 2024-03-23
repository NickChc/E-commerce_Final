import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "@src/providers/GlobalProvider";
import { ThemeProvider } from "@src/providers/ThemeProvider";
import { LocaleProvider } from "@src/providers/LocaleProvider";
import { AuthProvider } from "@src/providers/AuthProvider";
import { CartProvider } from "@src/providers/CartProvider";
import { WishlistProvider } from "@src/providers/WishlistProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <CartProvider>
            <WishlistProvider>
              <ThemeProvider>
                <LocaleProvider>{children}</LocaleProvider>
              </ThemeProvider>
            </WishlistProvider>
          </CartProvider>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
