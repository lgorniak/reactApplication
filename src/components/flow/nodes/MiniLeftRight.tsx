import { Handle, Position } from "@xyflow/react";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";

// Mini node with left and right handles - 3px x 3px
export function MiniLeftRight() {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        style={{ opacity: 0, left: "1px" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        style={getSmartHandleStyle("source", Position.Right, { right: "3px" })}
      />
      <div
        style={{
          width: "1px",
          height: "1px",
        }}
      />
    </div>
  );
}
