import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";

// Custom node with only a top handle using Card
export function Top({ data }: NodeProps) {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={getSmartHandleStyle("target", Position.Top, { top: "-3px" })}
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
