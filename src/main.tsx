import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "primereact/resources/themes/lara-dark-purple/theme.css";

// Register ECharts modules before any chart rendering
import { registerEChartsModules } from "./lib/echarts";
registerEChartsModules();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
