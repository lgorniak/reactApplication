import type { CSSProperties } from "react";

// Color types for different edge categories
export type EdgeColorType = "energy" | "data" | "heat" | "gas";

// Color mapping for edge types
export const EDGE_COLORS: Record<EdgeColorType, string> = {
  energy: "#91F286",
  data: "#08E4DE",
  heat: "#D96411",
  gas: "#F00ED2",
} as const;

// Base edge style properties (common across all edges)
const BASE_EDGE_STYLE: CSSProperties = {
  strokeWidth: 2,
  strokeDasharray: "5,5",
} as const;

/**
 * Creates standardized edge styles with consistent base properties and color-typed stroke
 * @param colorType - The type of edge determining the stroke color
 * @param customStyles - Optional additional styles to override or extend base styles
 * @returns Complete CSS styles object for the edge
 */
export function createEdgeStyle(
  colorType: EdgeColorType,
  customStyles: CSSProperties = {}
): CSSProperties {
  return {
    ...BASE_EDGE_STYLE,
    stroke: EDGE_COLORS[colorType],
    ...customStyles,
  };
}

/**
 * Gets just the stroke color for a given edge type
 * @param colorType - The type of edge
 * @returns The hex color string
 */
export function getEdgeColor(colorType: EdgeColorType): string {
  return EDGE_COLORS[colorType];
}
