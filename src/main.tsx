// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// route
import AppRoutes from "@/routes";
// style
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={"/aim_trainer"}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
