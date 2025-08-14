import type { CSSProperties } from "react";
import { Position } from "@xyflow/react";
import { getTargetArrowStyle } from "./arrowStyles";
import { type EdgeColorType } from "./edgeStyles";

export type HandleType = "source" | "target" | "bidirectional";

// Standard offset distance for handle positioning outside node boundaries
const HANDLE_OFFSET = "-3px";

/**
 * Automatically generates appropriate handle styles based on handle type and position
 * - Target handles get arrow styles pointing toward the node
 * - Source handles get invisible styles (opacity: 0)
 * - Automatically applies standard positioning adjustments (-3px offset from edge)
 *
 * @param type - Handle type ("source" or "target")
 * @param position - Handle position (Position.Left, Position.Right, etc.)
 * @param customStyles - Optional additional positioning styles (overrides auto-positioning)
 * @param colorType - Optional color type to apply to target handles
 * @returns CSS styles object for the handle
 */
export function getSmartHandleStyle(
  type: HandleType,
  position: Position,
  customStyles: CSSProperties = {},
  colorType?: EdgeColorType
): CSSProperties {
  // Get automatic positioning based on handle direction
  const autoPositioning = getAutoPositioning(position);

  // Source handles are invisible
  if (type === "source") {
    return {
      opacity: 0,
      ...autoPositioning,
      ...customStyles,
    };
  }

  // Target handles get arrows pointing toward the node
  return getTargetArrowStyle(
    position,
    { ...autoPositioning, ...customStyles },
    colorType
  );
}

/**
 * Returns standard positioning adjustments based on handle position
 * Positions handles using HANDLE_OFFSET outside the node boundary
 */
function getAutoPositioning(position: Position): CSSProperties {
  switch (position) {
    case Position.Left:
      return { left: HANDLE_OFFSET };
    case Position.Right:
      return { right: HANDLE_OFFSET };
    case Position.Top:
      return { top: HANDLE_OFFSET };
    case Position.Bottom:
      return { bottom: HANDLE_OFFSET };
    default:
      return {};
  }
}
