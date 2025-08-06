import { signal } from "@preact/signals-react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../App.css";
import ChartSkeleton from "../ui/ChartSkeleton";

// Lazy load the chart component
const SignalLineChart = lazy(
  () => import("../charts/definitions/SignalLineChart")
);

export default function Home() {
  const countSignal = signal(0);

  return (
    <>
      <Card title="Technology Stack">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Vite + React</h1>
      </Card>

      <Card title="Interactive Counter">
        <Button onClick={() => (countSignal.value += 1)}>
          count is {countSignal}
        </Button>
        <p style={{ marginTop: "1rem" }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>

      <Card title="Navigation">
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/flow">
            <Button
              label="React Flow Demo"
              icon="pi pi-sitemap"
              severity="info"
            />
          </Link>
        </div>
      </Card>

      <Card title="Apache ECharts Demo">
        <Suspense fallback={<ChartSkeleton />}>
          <SignalLineChart />
        </Suspense>
      </Card>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
