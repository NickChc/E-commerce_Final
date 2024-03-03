import { Outlet } from "react-router-dom";
import { SPublicLayout } from "@src/layouts/PublicLayout";

import { Header } from "@src/components/Header";
import { Footer } from "@src/components/Footer";
import { CategoryNav } from "@src/features/CategoryNav";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function PublicLayout() {
  const { categoryNavOpen } = useGlobalProvider();

  return (
    <SPublicLayout>
      <Header />
      <div className="w-full flex flex-col items-center relative ">
        <Outlet />
        {/* CATEGORY NAVIGATION SIDEBAR */}
        <CategoryNav show={categoryNavOpen} />
      </div>
      <Footer />
    </SPublicLayout>
  );
}
