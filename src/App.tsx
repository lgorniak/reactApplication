import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Button } from "primereact/button";
import "./App.css";
import Home from "./components/pages/Home";

// Lazy load the React Flow component
const ReactFlowExample = lazy(
  () => import("./components/flow/ReactFlowExample")
);

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Header */}
        <nav
          style={{
            padding: "1rem",
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>React Application</h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link to="/">
              <Button label="Home" icon="pi pi-home" text />
            </Link>
            <Link to="/flow">
              <Button label="React Flow" icon="pi pi-sitemap" text />
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/flow"
            element={
              <Suspense fallback={<div>Loading React Flow...</div>}>
                <ReactFlowExample />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
