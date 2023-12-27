import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@src/index.css";
import GlobalCss from "@src/assets/global.styles.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
);
