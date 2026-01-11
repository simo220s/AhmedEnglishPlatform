import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "@emran-alhaddad/saudi-riyal-font/dist/css/saudi-riyal-font.css"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
