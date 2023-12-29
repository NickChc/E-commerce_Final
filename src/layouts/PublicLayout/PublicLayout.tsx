import { Outlet } from "react-router-dom";
import { SPublicLayout } from "@src/layouts/PublicLayout";

import { Header } from "@src/components/Header";
import { Footer } from "@src/components/Footer";

export function PublicLayout() {
  return (
    <SPublicLayout>
      <Header />
      <Outlet />
      <Footer />
    </SPublicLayout>
  );
}
