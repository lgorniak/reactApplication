import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import {
  getTargetHandleStyle,
  getSourceHandleStyle,
} from "../utils/smartHandleStyles";

// Custom node with bottom and left handles using Card
export function BottomLeft({ data }: NodeProps) {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={getTargetHandleStyle(Position.Left, { left: "-2px" })}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={getSourceHandleStyle({ bottom: "4px" })}
      />
      <Card
        style={{
          minWidth: "100px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {String(data?.label || "")}
      </Card>
    </div>
  );
}
