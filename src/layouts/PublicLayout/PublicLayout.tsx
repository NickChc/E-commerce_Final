import { Outlet } from "react-router-dom";
import { SPublicLayout } from "@src/layouts/PublicLayout";

import { Header } from "@src/components/Header";

export function PublicLayout() {
  return (
    <SPublicLayout>
      <Header />
      <Outlet />
    </SPublicLayout>
  );
}
