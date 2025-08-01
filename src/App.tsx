import { signal } from "@preact/signals-react";
import { lazy, Suspense } from "react";
import { Card } from "primereact/card";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChartSkeleton from "./components/ui/ChartSkeleton";

// Lazy load the chart component
const SignalLineChart = lazy(
  () => import("./components/charts/definitions/SignalLineChart")
);

function App() {
  const countSignal = signal(0);

  return (
    <>
      <Card title="Technology Stack" className="">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Vite + React</h1>
      </Card>

      <Card title="Interactive Counter">
        <button onClick={() => (countSignal.value += 1)}>
          count is {countSignal}
        </button>
        <p style={{ marginTop: "1rem" }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
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

export default App;
