import type { CSSProperties } from "react";
import { Position } from "@xyflow/react";
import { EDGE_COLORS, type EdgeColorType } from "./edgeStyles";

// CSS parameter values for arrow handles
const TRANSPARENT_BORDER = "4px solid transparent";
const DEFAULT_COLOR = "#555";

/**
 * Creates colored border string for arrow handles
 * @param colorType - Optional color type, defaults to standard gray
 * @returns CSS border string with appropriate color
 */
function getColoredBorder(colorType?: EdgeColorType): string {
  const color = colorType ? EDGE_COLORS[colorType] : DEFAULT_COLOR;
  return `6px solid ${color}`;
}

/**
 * Generates CSS styles for target handle arrows based on handle position
 * Creates arrows that point toward the node from the handle position
 * @param handlePosition - The position of the handle (Position.Left, Position.Right, etc.)
 * @param customStyles - Optional positioning styles (e.g., { top: "30%", left: "-2px" })
 * @param colorType - Optional color type for the arrow
 * @returns CSS styles object for the target arrow handle
 */
export function getTargetArrowStyle(
  handlePosition: Position,
  customStyles: CSSProperties = {},
  colorType?: EdgeColorType
): CSSProperties {
  const baseStyle: CSSProperties = {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    width: 0,
    height: 0,
    ...customStyles,
  };

  const coloredBorder = getColoredBorder(colorType);

  switch (handlePosition) {
    case Position.Left: // Handle on left → Arrow points right into node
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderLeft: coloredBorder,
      };
    case Position.Right: // Handle on right → Arrow points left into node
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderRight: coloredBorder,
      };
    case Position.Top: // Handle on top → Arrow points down into node
      return {
        ...baseStyle,
        borderLeft: TRANSPARENT_BORDER,
        borderRight: TRANSPARENT_BORDER,
        borderTop: coloredBorder,
      };
    case Position.Bottom: // Handle on bottom → Arrow points up into node
      return {
        ...baseStyle,
        borderLeft: TRANSPARENT_BORDER,
        borderRight: TRANSPARENT_BORDER,
        borderBottom: coloredBorder,
      };
    default:
      return baseStyle;
  }
}
