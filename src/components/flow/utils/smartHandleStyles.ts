import type { CSSProperties } from "react";
import { Position } from "@xyflow/react";
import { getTargetArrowStyle } from "./arrowStyles";

export type HandleType = "source" | "target";

/**
 * Automatically generates appropriate handle styles based on handle type and position
 * - Target handles get arrow styles pointing toward the node
 * - Source handles get invisible styles (opacity: 0)
 *
 * @param type - Handle type ("source" or "target")
 * @param position - Handle position (Position.Left, Position.Right, etc.)
 * @param customStyles - Optional additional positioning styles
 * @returns CSS styles object for the handle
 */
export function getSmartHandleStyle(
  type: HandleType,
  position: Position,
  customStyles: CSSProperties = {}
): CSSProperties {
  // Source handles are invisible
  if (type === "source") {
    return {
      opacity: 0,
      ...customStyles,
    };
  }

  // Target handles get arrows pointing toward the node
  return getTargetArrowStyle(position, customStyles);
}

/**
 * Convenience function for creating target handles with automatic arrow styling
 */
export function getTargetHandleStyle(
  position: Position,
  customStyles: CSSProperties = {}
): CSSProperties {
  return getSmartHandleStyle("target", position, customStyles);
}

/**
 * Convenience function for creating source handles with invisible styling
 */
export function getSourceHandleStyle(
  customStyles: CSSProperties = {}
): CSSProperties {
  return getSmartHandleStyle("source", Position.Left, customStyles);
}
