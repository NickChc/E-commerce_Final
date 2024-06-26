import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { PrivatePage } from "@src/features/PrivatePage";
import { LoadingScreen } from "@src/components/LoadingScreen";

const Home = lazy(() => import("@src/views/Home"));
const Product = lazy(() => import("@src/views/Product"));
const Cart = lazy(() => import("@src/views/Cart"));
const Profile = lazy(() => import("@src/views/Profile"));
const Products = lazy(() => import("@src/views/Products"));
const Checkout = lazy(() => import("@src/views/Checkout"));
const PaymentSuccess = lazy(() => import("@src/views/paymentSuccess"));
const NotFound = lazy(() => import("@src/views/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryName/:page" element={<Products />} />
          <Route path="/products/product/:productId" element={<Product />} />
          <Route
            path="/checkout/:checkoutItems"
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
          <Route
            path="payment-success"
            element={
              <PrivatePage>
                <PaymentSuccess />
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
