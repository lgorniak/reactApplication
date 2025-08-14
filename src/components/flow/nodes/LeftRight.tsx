import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";

// Custom node with left and right handles using Card
export function LeftRight({ data }: NodeProps) {
  return (
    <div>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={getSmartHandleStyle("target", Position.Left)}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-top"
        style={getSmartHandleStyle("target", Position.Right, {
          top: "30%",
        })}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-bottom"
        style={getSmartHandleStyle("bidirectional", Position.Right, {
          top: "60%",
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
