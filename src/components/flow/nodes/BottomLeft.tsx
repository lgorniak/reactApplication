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
        style={getSmartHandleStyle("target", Position.Left, { left: "-3px" })}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-left"
        style={getSmartHandleStyle("source", Position.Bottom, {
          bottom: "-3px",
          left: "30%",
        })}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-right"
        style={getSmartHandleStyle("target", Position.Bottom, {
          bottom: "-3px",
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
