import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App.tsx";
import "@src/assets/index.css";
import { Providers } from "@src/providers/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
