import type { Node, Edge } from "@xyflow/react";

export interface Scenario {
  name: string;
  description: string;
  nodes: Node[];
  edges: Edge[];
}

export const BasicScenario: Scenario = {
  name: "Basic Flow Example",
  description:
    "A simple flow with three nodes demonstrating different connection types",
  nodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Hello" },
      type: "bottomRight",
    },
    {
      id: "2",
      position: { x: 200, y: 0 },
      data: { label: "World" },
      type: "bottomLeft",
    },
    {
      id: "3",
      position: { x: 0, y: 150 },
      data: { label: "horizontal" },
      type: "horizontal",
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      sourceHandle: "right",
      target: "2",
      targetHandle: "left",
      type: "smoothstep",
      style: { stroke: "#ff6b6b" },
    },
    {
      id: "e1-3",
      source: "1",
      sourceHandle: "bottom",
      target: "3",
      targetHandle: "left",
      type: "smoothstep",
      style: { stroke: "#4ecdc4" },
    },
    {
      id: "e2-3",
      source: "2",
      sourceHandle: "bottom",
      target: "3",
      targetHandle: "right-top",
      type: "smoothstep",
      style: { stroke: "#45b7d1" },
    },
  ],
};
