import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";
import { Providers } from "@src/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
