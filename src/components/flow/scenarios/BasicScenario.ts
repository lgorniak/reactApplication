import type { Node, Edge } from "@xyflow/react";
import { createEdgeStyle } from "../utils/edgeStyles";

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
      data: { label: "Maschinen" },
      type: "groupBottom",
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
      type: "leftRight",
    },
    {
      id: "4",
      position: { x: 400, y: 250 },
      data: { label: "top" },
      type: "top",
    },
    {
      id: "5",
      position: { x: 200, y: 225 },
      data: {},
      type: "miniLeftRight",
    },
    {
      id: "6",
      position: { x: 100, y: 350 },
      data: { label: "Left Node" },
      type: "leftRight",
    },
    {
      id: "7",
      position: { x: 350, y: 350 },
      data: { label: "Right Node" },
      type: "leftRight",
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
      animated: true,
      style: createEdgeStyle("energy"),
    },
    {
      id: "e1-3",
      source: "1",
      sourceHandle: "bottom",
      target: "3",
      targetHandle: "left",
      type: "smoothstep",
      animated: true,
      style: createEdgeStyle("data"),
    },
    {
      id: "e2-5",
      source: "2",
      sourceHandle: "bottom-left",
      target: "5",
      targetHandle: "right",
      type: "smoothstep",
      animated: true,
      style: createEdgeStyle("data"),
    },
    {
      id: "e5-3",
      source: "5",
      sourceHandle: "left",
      target: "3",
      targetHandle: "right-top",
      type: "smoothstep",
      animated: true,
      style: createEdgeStyle("data"),
    },
    {
      id: "e3-2",
      source: "3",
      sourceHandle: "right-bottom",
      target: "2",
      targetHandle: "bottom-right",
      type: "smoothstep",
      animated: true,
      style: createEdgeStyle("heat"),
    },
    {
      id: "egroup-4",
      source: "group-1",
      sourceHandle: "bottom",
      target: "4",
      targetHandle: "top",
      type: "smoothstep",
      animated: true,
      style: createEdgeStyle("gas"),
    },
    {
      id: "e6-7",
      source: "6",
      sourceHandle: "right-bottom",
      target: "7",
      targetHandle: "left",
      type: "alternating",
      animated: true,
      style: createEdgeStyle("heat"),
    },
  ],
};
