import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("@src/views/Home"));

function App() {

  return <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  </Suspense>;
}

export default App;
