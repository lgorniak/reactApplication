import type { CSSProperties } from "react";
import { Position } from "@xyflow/react";

// CSS parameter values for arrow handles
const TRANSPARENT_BORDER = "4px solid transparent";
const COLORED_BORDER = "6px solid #555";

/**
 * Generates CSS styles for target handle arrows based on handle position
 * Creates arrows that point toward the node from the handle position
 * @param handlePosition - The position of the handle (Position.Left, Position.Right, etc.)
 * @param customStyles - Optional positioning styles (e.g., { top: "30%", left: "-2px" })
 * @returns CSS styles object for the target arrow handle
 */
export function getTargetArrowStyle(
  handlePosition: Position,
  customStyles: CSSProperties = {}
): CSSProperties {
  const baseStyle: CSSProperties = {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    width: 0,
    height: 0,
    ...customStyles,
  };

  switch (handlePosition) {
    case Position.Left: // Handle on left → Arrow points right into node
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderLeft: COLORED_BORDER,
      };
    case Position.Right: // Handle on right → Arrow points left into node
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderRight: COLORED_BORDER,
      };
    case Position.Top: // Handle on top → Arrow points down into node
      return {
        ...baseStyle,
        borderLeft: TRANSPARENT_BORDER,
        borderRight: TRANSPARENT_BORDER,
        borderTop: COLORED_BORDER,
      };
    case Position.Bottom: // Handle on bottom → Arrow points up into node
      return {
        ...baseStyle,
        borderLeft: TRANSPARENT_BORDER,
        borderRight: TRANSPARENT_BORDER,
        borderBottom: COLORED_BORDER,
      };
    default:
      return baseStyle;
  }
}
