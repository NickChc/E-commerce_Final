import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { PrivatePage } from "@src/features/PrivatePage";

const Home = lazy(() => import("@src/views/Home"));
const Product = lazy(() => import("@src/views/Product"));
const Cart = lazy(() => import("@src/views/Cart"));
const Profile = lazy(() => import("@src/views/Profile"));
const Products = lazy(() => import("@src/views/Products"));
const Checkout = lazy(() => import("@src/views/Checkout"));
const NotFound = lazy(() => import("@src/views/NotFound"));

function App() {
  return (
    <Suspense fallback={<div className="min-h-dvh w-full">LOADING...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryName/:page" element={<Products />} />
          <Route path="/products/product/:productId" element={<Product />} />
          <Route
            path="/checkout"
            element={
              <PrivatePage>
                <Checkout />
              </PrivatePage>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivatePage>
                <Cart />
              </PrivatePage>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivatePage>
                <Profile />
              </PrivatePage>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
