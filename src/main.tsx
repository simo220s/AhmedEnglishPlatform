import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@emran-alhaddad/saudi-riyal-font/index.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
