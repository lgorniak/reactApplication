import type { CSSProperties } from "react";
import { Position } from "@xyflow/react";

// CSS parameter values for arrow handles
const TRANSPARENT_BORDER = "4px solid transparent";
const COLORED_BORDER = "6px solid #555";

/**
 * Generates CSS styles for triangular arrow handles pointing in the specified direction
 * @param direction - The direction the arrow should point ("left", "right", "up", "down")
 * @param position - Optional positioning styles (e.g., { top: "30%", left: "-2px" })
 * @returns CSS styles object for the arrow handle
 */
export function getArrowHandleStyle(
  direction: Position, // Use Position instead of ArrowDirection
  position: CSSProperties = {}
): CSSProperties {
  const baseStyle: CSSProperties = {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    width: 0,
    height: 0,
    ...position,
  };

  switch (direction) {
    case Position.Right: // instead of "right"
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderLeft: COLORED_BORDER,
      };
    case Position.Left: // instead of "left"
      return {
        ...baseStyle,
        borderTop: TRANSPARENT_BORDER,
        borderBottom: TRANSPARENT_BORDER,
        borderRight: COLORED_BORDER,
      };
    case Position.Bottom: // instead of "down"
      return {
        ...baseStyle,
        borderLeft: TRANSPARENT_BORDER,
        borderRight: TRANSPARENT_BORDER,
        borderTop: COLORED_BORDER,
      };
    case Position.Top: // instead of "up"
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
