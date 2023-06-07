import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MainLayout from "./mainLayout/MainLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
