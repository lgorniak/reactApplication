import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Card } from "primereact/card";
import { LeftRight } from "./nodes/LeftRight";
import { BottomRight } from "./nodes/BottomRight";
import { BottomLeft } from "./nodes/BottomLeft";
import { BasicScenario } from "./scenarios/BasicScenario";

const nodeTypes = {
  horizontal: LeftRight,
  bottomRight: BottomRight,
  bottomLeft: BottomLeft,
};

export default function ReactFlowExample() {
  const [nodes] = useNodesState(BasicScenario.nodes);
  const [edges] = useEdgesState(BasicScenario.edges);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Card
        title={BasicScenario.name}
        style={{ margin: "1rem", width: "1000px" }}
      >
        <p>{BasicScenario.description}</p>
      </Card>

      <div style={{ height: "500px", margin: "1rem" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Controls
            showZoom={false}
            showFitView={true}
            showInteractive={false}
          />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
