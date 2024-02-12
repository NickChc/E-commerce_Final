import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";

const Home = lazy(() => import("@src/views/Home"));
const Product = lazy(() => import("@src/views/Product"));
const NotFound = lazy(() => import("@src/views/NotFound"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
