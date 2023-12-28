import { Outlet } from "react-router-dom";
import { SPublicLayout } from "@src/layouts/PublicLayout";

import { Header } from "@src/components/Header";
import { Footer } from "@src/features/Footer";

export function PublicLayout() {
  return (
    <SPublicLayout>
      <Header />
      <Outlet />
      <Footer />
    </SPublicLayout>
  );
}
