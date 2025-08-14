import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";
import { type EdgeColorType } from "../utils/edgeStyles";

// Custom node with bottom and right handles using Card
export function BottomRight({ data }: NodeProps) {
  const handleColors =
    (data?.handleColors as Record<string, EdgeColorType>) || {};

  return (
    <div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={getSmartHandleStyle("source", Position.Bottom)}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={getSmartHandleStyle("source", Position.Right)}
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
