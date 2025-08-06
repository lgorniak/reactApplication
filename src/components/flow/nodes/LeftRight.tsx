import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import {
  getSourceHandleStyle,
  getTargetHandleStyle,
} from "../utils/smartHandleStyles";

// Custom node with left and right handles using Card
export function LeftRight({ data }: NodeProps) {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={getTargetHandleStyle(Position.Left, { left: "-2px" })}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-top"
        style={getTargetHandleStyle(Position.Right, {
          top: "30%",
          right: "-2px",
        })}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-bottom"
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
