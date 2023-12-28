import { Outlet } from "react-router-dom";
import { SPublicLayout } from "@src/layouts/PublicLayout";

export function PublicLayout() {
  return (
    <SPublicLayout>
      <h1>LAYOUT</h1>
      <Outlet />
    </SPublicLayout>
  );
}
