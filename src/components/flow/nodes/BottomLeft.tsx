import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";

export function BottomLeft({ data }: NodeProps) {
  return (
    <div style={{ position: "relative" }}>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={getSmartHandleStyle("target", Position.Left)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-left"
        style={getSmartHandleStyle("source", Position.Bottom, {
          left: "30%",
        })}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-right"
        style={getSmartHandleStyle("target", Position.Bottom, {
          right: "30%",
        })}
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
