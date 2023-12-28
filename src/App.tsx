import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const PublicLayout = lazy(() => import("@src/layouts/PublicLayout"));
const Home = lazy(() => import("@src/views/Home"));
const NotFound = lazy(() => import("@src/views/NotFound"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
