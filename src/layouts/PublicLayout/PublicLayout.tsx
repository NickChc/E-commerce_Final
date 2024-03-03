import { Outlet } from "react-router-dom";
import { SPublicLayout, SOutletWrapper } from "@src/layouts/PublicLayout";

import { Header } from "@src/components/Header";
import { Footer } from "@src/components/Footer";
import { CategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function PublicLayout() {
  const { categoryNavOpen } = useGlobalProvider();

  return (
    <SPublicLayout>
      <Header />
      <SOutletWrapper>
        <Outlet />
        {/* CATEGORY NAVIGATION SIDEBAR */}
        <CategoryNav show={categoryNavOpen} />
      </SOutletWrapper>
      <Footer />
    </SPublicLayout>
  );
}
