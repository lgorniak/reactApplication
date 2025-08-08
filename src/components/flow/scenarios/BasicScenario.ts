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
      id: "group-1",
      position: { x: 50, y: 50 },
      data: { label: "Hello & World Group" },
      type: "group",
      style: {
        width: "500px",
        height: 150,
        border: "none",
        zIndex: -1,
        padding: 0,
        opacity: 1,
        backgroundColor: "transparent",
      },
    },
    {
      id: "1",
      position: { x: 10, y: 40 },
      data: { label: "Hello" },
      type: "bottomRight",
      parentId: "group-1",
      extent: "parent",
    },
    {
      id: "2",
      position: { x: 240, y: 40 },
      data: { label: "World" },
      type: "bottomLeft",
      parentId: "group-1",
      extent: "parent",
    },
    {
      id: "3",
      position: { x: 50, y: 250 },
      data: { label: "horizontal" },
      type: "horizontal",
    },
    {
      id: "4",
      position: { x: 200, y: 250 },
      data: { label: "top" },
      type: "top",
    },
    {
      id: "5",
      position: { x: 200, y: 225 },
      data: { label: "miniLeftRight" },
      type: "miniLeftRight",
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
    {
      id: "e2-5",
      source: "2",
      sourceHandle: "bottom",
      target: "5",
      targetHandle: "right",
      type: "smoothstep",
      style: { stroke: "#45b7d1" },
    },
    {
      id: "e5-3",
      source: "5",
      sourceHandle: "left",
      target: "3",
      targetHandle: "right-top",
      type: "smoothstep",
      style: { stroke: "#45b7d1" },
    },
  ],
};
