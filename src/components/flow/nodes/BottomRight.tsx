import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";

// Custom node with bottom and right handles using Card
export function BottomRight({ data }: NodeProps) {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={getSmartHandleStyle("source", Position.Bottom, {
          bottom: "4px",
        })}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={getSmartHandleStyle("source", Position.Right, { right: "4px" })}
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
