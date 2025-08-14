import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { LeftRight } from "./nodes/LeftRight";
import { BottomRight } from "./nodes/BottomRight";
import { BottomLeft } from "./nodes/BottomLeft";
import { Top } from "./nodes/Top";
import { GroupBottom } from "./nodes/GroupBottom";
import { MiniLeftRight } from "./nodes/MiniLeftRight";
import { AlternatingDirection } from "./edges/AlternatingDirection";
import { BasicScenario } from "./scenarios/BasicScenario";
import { Fieldset } from "primereact/fieldset";

const nodeTypes = {
  bottomLeft: BottomLeft,
  bottomRight: BottomRight,
  groupBottom: GroupBottom,
  leftRight: LeftRight,
  miniLeftRight: MiniLeftRight,
  top: Top,
};

const edgeTypes = {
  alternating: AlternatingDirection,
};

export default function ReactFlowExample() {
  const [nodes] = useNodesState(BasicScenario.nodes);
  const [edges] = useEdgesState(BasicScenario.edges);

  return (
    <div style={{ height: "100vh", width: "1000px" }}>
      <Fieldset legend={"testing"}></Fieldset>
      <div style={{ height: "500px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
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
